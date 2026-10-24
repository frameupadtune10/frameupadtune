import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  service: z.string().trim().max(100),
  message: z.string().trim().max(5000),
});

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export const sendContactEnquiry = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => schema.parse(d))
  .handler(async ({ data }) => {
    const RESEND_API_KEY = process.env["RESEND_API_KEY"];
    if (!RESEND_API_KEY) {
      console.error("Email service not configured");
      return { ok: false as const, error: "Email service is not configured yet." };
    }
    const html = `<h2>New enquiry from the website</h2>
<p><strong>Name:</strong> ${esc(data.name)}</p>
<p><strong>Email:</strong> ${esc(data.email)}</p>
<p><strong>Service:</strong> ${esc(data.service || "-")}</p>
<p><strong>Message:</strong><br/>${esc(data.message || "-").replace(/\n/g, "<br/>")}</p>`;
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "FrameupAdtune Website <onboarding@resend.dev>",
        to: ["frameupadtune10dec@gmail.com"],
        reply_to: data.email,
        subject: `New enquiry from ${data.name}`,
        html,
      }),
    });
    if (!res.ok) {
      console.error(`Resend failed [${res.status}]: ${await res.text()}`);
      return { ok: false as const, error: "We couldn't send your message. Please try again." };
    }
    return { ok: true as const };
  });
