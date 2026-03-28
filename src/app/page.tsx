"use client";

import { useMemo, useState } from "react";

type Project = {
  title: string;
  category: string;
  summary: string;
  stack: string[];
  stats: string;
  link: string;
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const toolbelt = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind",
  "Framer Motion",
  "Figma",
  "GitHub Actions",
  "Docker",
  "Vercel",
];

const projects: Project[] = [
  {
    title: "Guohong Laser Commerce",
    category: "E-Commerce Platform",
    summary:
      "B2B teklif akisini ve kurumsal urun vitrini tek bir performans odakli deneyimde birlestiren cok dilli platform.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    stats: "Lighthouse 96+, 42% daha hizli katalog akis",
    link: "#",
  },
  {
    title: "Ops Control Dashboard",
    category: "Internal Product",
    summary:
      "Satis, stok ve operasyon birimlerini ayni panelde bulusturan rol tabanli dashboard ve otomasyon ekranlari.",
    stack: ["React", "Charts", "REST API", "RBAC"],
    stats: "Gunluk raporlama suresi 2.7 saatten 35 dakikaya indi",
    link: "#",
  },
  {
    title: "Portfolio Engine v2",
    category: "Brand Experience",
    summary:
      "Marka anlatisini teknik guvenle birlestiren, animasyon agirlikli ve conversion odakli kisisel vitrin deneyimi.",
    stack: ["Next.js", "Animation", "SEO", "Design System"],
    stats: "Session suresi 2.1x, bounce oraninda belirgin dusus",
    link: "#",
  },
];

const services = [
  {
    title: "Frontend Engineering",
    text: "Olceklenebilir, bakimi kolay ve yuksek performansli arayuz mimarileri.",
  },
  {
    title: "Design to Code",
    text: "Figma konseptlerini pixel-perfect ve responsive uretim kalitesine tasima.",
  },
  {
    title: "Product Optimization",
    text: "Hiz, SEO ve kullanici akislarinda olculebilir iyilestirmeler.",
  },
];

const timeline = [
  {
    period: "2025 - Present",
    role: "Senior Frontend Developer",
    company: "Guohong Laser",
    detail: "Kurumsal e-commerce ve operasyon urunlerinde mimari sorumluluk ve gelistirme liderligi.",
  },
  {
    period: "2023 - 2025",
    role: "Frontend Developer",
    company: "Product Studio",
    detail: "SaaS panelleri, dashboard sistemleri ve bilesen kutuphaneleri gelistirme.",
  },
  {
    period: "2021 - 2023",
    role: "UI Developer",
    company: "Freelance",
    detail: "Startup odakli landing page, kurumsal vitrin ve donusum odakli web uygulamalari.",
  },
];

const testimonials = [
  {
    quote:
      "Yusuf, sadece ekran cikarmiyor; urunun hedefini teknik kararlarla destekleyip hizi her sprintte yukariya cekiyor.",
    name: "Mert K.",
    title: "Product Manager",
  },
  {
    quote:
      "Kod kalitesi ve iletisim dengesi cok iyi. Teslim sureclerinde riskleri erkenden gorup cozum uretiyor.",
    name: "Elif T.",
    title: "Design Lead",
  },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);

  const active = useMemo(() => projects[activeProject], [activeProject]);

  return (
    <div className="site-shell" id="home">
      <div className="bg-grid" aria-hidden />
      <div className="bg-glow bg-glow-a" aria-hidden />
      <div className="bg-glow bg-glow-b" aria-hidden />

      <header className="main-header container">
        <a href="#home" className="brand">
          <span className="brand-dot" />
          Yusuf Can
        </a>

        <nav className="main-nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-ghost">
          Let&apos;s Talk
        </a>
      </header>

      <main>
        <section className="hero container reveal-up">
          <div>
            <p className="eyebrow">Software Engineer Portfolio</p>
            <h1>
              Building bold digital products
              <br />
              with performance at the core.
            </h1>
            <p className="hero-copy">
              I design and ship modern web experiences where business goals, visual direction, and engineering quality
              move together.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="#projects">
                View Projects
              </a>
              <a className="btn btn-ghost" href="#contact">
                Hire Me
              </a>
            </div>
          </div>

          <aside className="hero-card float-card">
            <p className="eyebrow">Current Focus</p>
            <h3>Frontend + Product Systems</h3>
            <ul className="stack-list">
              <li>Enterprise-grade Next.js apps</li>
              <li>Design system and component architecture</li>
              <li>SEO and conversion optimization</li>
            </ul>
            <div className="hero-stats">
              <div>
                <strong>5+</strong>
                <span>Years</span>
              </div>
              <div>
                <strong>40+</strong>
                <span>Launches</span>
              </div>
              <div>
                <strong>96+</strong>
                <span>Perf Score</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="tool-strip">
          <div className="marquee-track">
            {[...toolbelt, ...toolbelt].map((tool, index) => (
              <span key={`${tool}-${index}`}>{tool}</span>
            ))}
          </div>
        </section>

        <section className="about container reveal-up" id="about">
          <div className="section-title-wrap">
            <p className="eyebrow">About Me</p>
            <h2>Crafting interfaces that look premium and work under real pressure.</h2>
          </div>
          <p>
            Good UI is not enough on its own. I focus on the full product loop: information architecture, responsive
            interaction design, maintainable code structure, and measurable outcomes after launch.
          </p>
        </section>

        <section className="services container reveal-up">
          {services.map((service) => (
            <article key={service.title} className="info-card">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </section>

        <section className="projects container reveal-up" id="projects">
          <div className="section-title-wrap">
            <p className="eyebrow">Featured Projects</p>
            <h2>Selected work with clear product impact.</h2>
          </div>

          <div className="project-layout">
            <div className="project-tabs">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setActiveProject(index)}
                  className={index === activeProject ? "is-active" : ""}
                >
                  <span>{project.category}</span>
                  <strong>{project.title}</strong>
                </button>
              ))}
            </div>

            <article className="project-panel">
              <p className="eyebrow">{active.category}</p>
              <h3>{active.title}</h3>
              <p>{active.summary}</p>
              <div className="chips">
                {active.stack.map((item) => (
                  <span key={`${active.title}-${item}`}>{item}</span>
                ))}
              </div>
              <p className="project-stat">{active.stats}</p>
              <a href={active.link} className="btn btn-solid">
                Case Study
              </a>
            </article>
          </div>
        </section>

        <section className="experience container reveal-up" id="experience">
          <div className="section-title-wrap">
            <p className="eyebrow">Experience</p>
            <h2>Timeline</h2>
          </div>

          <div className="timeline">
            {timeline.map((item) => (
              <article key={item.period + item.company} className="timeline-item">
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials container reveal-up">
          {testimonials.map((item) => (
            <article key={item.name} className="quote-card">
              <p className="quote">&quot;{item.quote}&quot;</p>
              <p className="quote-author">{item.name}</p>
              <p className="quote-role">{item.title}</p>
            </article>
          ))}
        </section>

        <section className="contact container reveal-up" id="contact">
          <p className="eyebrow">Contact</p>
          <h2>Have a product idea? Let&apos;s ship it.</h2>
          <p>Available for freelance and long-term product collaborations.</p>
          <div className="hero-actions">
            <a href="mailto:hello@yusufcan.dev" className="btn btn-solid">
              hello@yusufcan.dev
            </a>
            <a href="#" className="btn btn-ghost">
              LinkedIn
            </a>
            <a href="#" className="btn btn-ghost">
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="main-footer container">
        <p>2026 Yusuf Can Gordebil. Crafted with Next.js.</p>
      </footer>
    </div>
  );
}
