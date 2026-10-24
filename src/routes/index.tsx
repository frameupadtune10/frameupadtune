import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-studio.jpg";
import logoImg from "@/assets/frameup-adtune-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FrameupAdtune — Digital Marketing Studio" },
      {
        name: "description",
        content:
          "FrameupAdtune is a boutique digital marketing studio crafting websites, brands, social media, graphic design and paid ad campaigns that feel calm and convert.",
      },
      { property: "og:title", content: "FrameupAdtune — Digital Marketing Studio" },
      {
        property: "og:description",
        content:
          "A boutique digital marketing studio helping startups and small teams grow with strategy, design, and honest marketing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    num: "01",
    title: "Website development",
    desc: "Fast, accessible sites that load like a breath.",
  },
  {
    num: "02",
    title: "Branding",
    desc: "Identity systems that stay coherent at scale.",
  },
  {
    num: "03",
    title: "Social media",
    desc: "Content that feels human, not scheduled.",
  },
  {
    num: "04",
    title: "Graphic design",
    desc: "Print and digital, from posters to decks.",
  },
  {
    num: "05",
    title: "Paid Ads",
    desc: "Campaigns measured in outcomes, not impressions.",
  },
];

const process = [
  {
    step: "Step 01",
    title: "Discover",
    desc: "We learn your goals and audience.",
  },
  {
    step: "Step 02",
    title: "Plan",
    desc: "A clear roadmap, scoped and priced.",
  },
  {
    step: "Step 03",
    title: "Build",
    desc: "Design and development in sprints.",
  },
  {
    step: "Step 04",
    title: "Grow",
    desc: "Launch, measure, and iterate.",
  },
];

const testimonials = [
  {
    quote:
      "They rebuilt our site and our inbox finally made sense. Calm, clear, and on time.",
    author: "Priya N. — Founder, Loom & Leaf",
  },
  {
    quote:
      "The branding work felt like an exhale. Our whole team finally speaks the same language.",
    author: "Daniel R. — CEO, Northwind Co.",
  },
  {
    quote:
      "Paid ads that actually convert. The reports are the best I've seen from any agency.",
    author: "Sofia M. — Marketing Lead, Hartley",
  },
];

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#why" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground font-body antialiased">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" aria-label="Frame Up AdTune home" className="shrink-0">
            <img
              src={logoImg}
              alt="Frame Up AdTune"
              width={869}
              height={642}
              className="h-12 w-auto object-contain sm:h-14"
            />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-block bg-ink text-paper text-sm px-4 py-2 rounded-full hover:bg-primary transition-colors"
            >
              Start a project
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center size-9 rounded-full border border-ink/15"
            >
              <span className="text-sm font-display">{menuOpen ? "✕" : "≡"}</span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-ink/10 bg-background/95 backdrop-blur-sm">
            <div className="px-6 py-4 flex flex-col gap-4 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex w-fit items-center bg-ink text-paper px-4 py-2 rounded-full"
              >
                Start a project
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-primary text-sm font-medium tracking-wide uppercase mb-6 animate-rise">
              Digital marketing, done calmly
            </p>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance animate-rise [animation-delay:0.12s]">
              We build brands that feel like a quiet morning.
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-[46ch] text-pretty animate-rise [animation-delay:0.24s]">
              FrameupAdtune is a boutique digital studio helping startups and small teams grow
              with strategy, design, and honest marketing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-rise [animation-delay:0.3s]">
              <a
                href="#contact"
                className="bg-primary text-paper px-6 py-3 rounded-full font-medium hover:bg-ink transition-colors"
              >
                Book a call
              </a>
              <a
                href="#services"
                className="border border-ink/20 px-6 py-3 rounded-full font-medium hover:bg-ink hover:text-paper transition-colors"
              >
                See services
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-full opacity-60"></div>
              <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-primary/20 rounded-full"></div>
              <img
                src={heroImg}
                alt="Creative team collaborating in a sunlit studio"
                width={1024}
                height={1280}
                className="relative w-full aspect-[4/5] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-balance">
            What we do
          </h2>
          <span className="text-sm text-foreground/50">05 services</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.num}
              className="bg-card/60 rounded-2xl p-7 ring-1 ring-ink/5 hover:-translate-y-1 hover:ring-primary/40 transition-all duration-300"
            >
              <span className="text-primary font-display font-semibold text-sm">
                {service.num}
              </span>
              <h3 className="font-display font-semibold text-xl mt-3">{service.title}</h3>
              <p className="text-foreground/60 text-sm mt-2 text-pretty">{service.desc}</p>
            </div>
          ))}
          <div className="bg-ink text-paper rounded-2xl p-7 flex flex-col justify-between">
            <p className="font-display font-semibold text-lg leading-snug">
              Not sure where to start?
            </p>
            <a
              href="#contact"
              className="text-primary text-sm font-medium hover:underline"
            >
              Let's talk →
            </a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">
              Why us
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-balance">
              A studio that listens before it designs.
            </h2>
            <p className="mt-6 text-paper/70 max-w-[44ch] text-pretty">
              We keep teams small and decisions slow. Every project starts with a conversation,
              not a template.
            </p>
          </div>
          <ul className="space-y-4">
            <li className="flex gap-4 items-start">
              <span className="text-primary font-display font-semibold">01</span>
              <span className="text-paper/80">Dedicated strategist on every account</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-primary font-display font-semibold">02</span>
              <span className="text-paper/80">Transparent pricing, no surprise invoices</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-primary font-display font-semibold">03</span>
              <span className="text-paper/80">Weekly reports you can actually read</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-primary font-display font-semibold">04</span>
              <span className="text-paper/80">Built for startups, priced for founders</span>
            </li>
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-balance mb-12">
          How we work
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {process.map((item) => (
            <div key={item.step} className="border-t-2 border-primary pt-5">
              <span className="text-primary font-display font-semibold text-sm">{item.step}</span>
              <h3 className="font-display font-semibold text-lg mt-2">{item.title}</h3>
              <p className="text-foreground/60 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-balance mb-12">
          Kind words
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <figure key={item.author} className="bg-card/60 rounded-2xl p-7 ring-1 ring-ink/5">
              <p className="text-foreground/80 text-pretty">“{item.quote}”</p>
              <figcaption className="mt-5 text-sm text-foreground/50">{item.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="bg-primary rounded-3xl px-8 py-14 text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-paper text-balance">
            Ready to grow, gently?
          </h2>
          <a
            href="#contact"
            className="inline-block mt-8 bg-ink text-paper px-7 py-3 rounded-full font-medium hover:bg-paper hover:text-ink transition-colors"
          >
            Start a project
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-balance">
            Let's talk
          </h2>
          <p className="mt-4 mx-auto text-foreground/70 max-w-[40ch] text-pretty">
            Tell us a little about your project and we'll reply within one business day.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <p className="text-foreground/70">frameupadtune10dec@gmail.com</p>
            <p className="text-foreground/70">+91 861 012 7762</p>
            <p className="text-foreground/70">Tamil Nadu, India</p>
          </div>
        </div>
      </section>
      <footer className="border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/50">
          <span className="font-display font-semibold text-foreground">FrameupAdtune</span>
          <span>© 2026 FrameupAdtune.</span>
        </div>
      </footer>
    </div>
  );
}
