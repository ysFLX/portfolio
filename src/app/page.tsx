"use client";

import { useState } from "react";

const navButtons = ["Contact Me", "Start your project"];

const roleBubbles = [
  { label: "Developer", className: "bubble b1" },
  { label: "Engineer", className: "bubble b2" },
];

const experienceCards = [
  {
    title: "TechNova Labs Jan 2023 - Present",
    text: "Key Contributions: Developed dynamic user interfaces using React and TypeScript for SaaS dashboards. Improved page load times by 40% through code-splitting and performance optimization. Collaborated with backend engineers to integrate GraphQL APIs.",
    featured: true,
  },
  {
    title: "CodeCrate Studio Jul 2022 - Dec 2022",
    text: "Key Contributions: Developed dynamic user interfaces using React and TypeScript for SaaS dashboards. Improved page load times by 40% through code-splitting and performance optimization. Collaborated with backend engineers to integrate GraphQL APIs.",
    featured: false,
  },
  {
    title: "Freelance Web Developer Self-Employed - 2021 - 2022",
    text: "Key Contributions: Developed dynamic user interfaces using React and TypeScript for SaaS dashboards. Improved page load times by 40% through code-splitting and performance optimization. Collaborated with backend engineers to integrate GraphQL APIs.",
    featured: false,
  },
];

const skillLogos = ["React", "TS", "NEXT", "HTML5", "Docker", "Tailwind"];

const faqItems = [
  {
    q: "What kind of projects do you work on?",
    a: "I build product websites, SaaS dashboards, internal tools, and conversion-focused landing experiences with modern frontend stacks.",
  },
  {
    q: "Are you available for freelance or contract work?",
    a: "Yes. I usually work on fixed-scope engagements, milestone-based retainers, and long-term product collaborations.",
  },
  {
    q: "What\'s your typical workflow or process?",
    a: "Discovery and scoping, wireframe/design alignment, implementation, QA/performance pass, and launch handoff with documentation.",
  },
  {
    q: "How long does it take to complete a project?",
    a: "Most landing sites take 2-4 weeks. Product modules vary by scope, usually 3-8 weeks including feedback rounds.",
  },
];

const footerColumns = [
  { title: "Product", links: ["Features", "Integrations", "Pricing", "Changelog", "Documentation", "Download"] },
  { title: "Company", links: ["About Us", "Blog", "Careers", "Customers", "Brand Assets"] },
  { title: "Resources", links: ["Community", "Contact", "System Status", "Terms of Service"] },
  { title: "Developers", links: ["API", "System Status", "GitHub"] },
  { title: "Company", links: ["About Us", "Blog", "Careers", "Customers", "Brand Assets"] },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="codence-page">
      <main className="main-wrap">
        <section className="hero section section-glow-wide">
          <header className="site-header">
            <div className="logo">ysflx</div>
            <div className="header-actions">
              {navButtons.map((btn, idx) => (
                <a key={btn} href="#contact" className={idx === 1 ? "btn primary" : "btn ghost"}>
                  {btn}
                </a>
              ))}
            </div>
          </header>

          <div className="hero-center">
            <p className="pill">Build Better Software, Seamlessly Together</p>
            <h1>Clean code. Scalable apps. Reliable delivery.</h1>
            <p className="subtitle">I’m a software engineer who turns complex ideas into performant, user-friendly web applications.</p>
            <div className="hero-cta">
              <a href="#" className="btn ghost">Download Resume</a>
              <a href="#work" className="btn primary">View My Work</a>
            </div>
          </div>
        </section>

        <section className="section section-glow-soft about-block">
          <p className="pill left">About Me</p>
          <p className="about-copy">
            I&apos;m a software engineer with a passion for building efficient, scalable, and user-friendly web applications.
            My journey started with a fascination for how things work behind the screen, and quickly evolved into a career
            focused on creating impactful digital solutions. Over the past few years, I&apos;ve worked on diverse projects.
          </p>
          <div className="bubble-stack right">
            {roleBubbles.map((b) => (
              <span key={b.label} className={b.className}>{b.label}</span>
            ))}
          </div>
        </section>

        <section className="section section-glow-soft work-block" id="work">
          <h2>Where I&apos;ve built, led, and grown.</h2>
          <p className="subtitle">Tools I use to build, ship, and scale.</p>

          <div className="exp-grid">
            {experienceCards.map((card) => (
              <article key={card.title} className={`exp-card ${card.featured ? "featured" : ""}`}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-glow-soft journey-block">
          <h2>
            My Professional <span className="pill inline">Journey</span>
          </h2>
          <p className="subtitle">Here’s a timeline of my journey through development roles, freelance work, and internships.</p>
          <div className="bubble-stack mid">
            <span className="bubble">Engineer</span>
            <span className="bubble">Developer</span>
          </div>
        </section>

        <section className="section section-glow-soft skills-block">
          <h2>Skills &amp; Technologies</h2>
          <p className="subtitle">Tools I use to build, ship, and scale.</p>
          <div className="bubble-stack sides">
            <span className="bubble">Engineer</span>
            <span className="bubble">Developer</span>
          </div>
          <div className="skills-row">
            {skillLogos.map((logo) => (
              <div key={logo} className="skill-item">{logo}</div>
            ))}
          </div>
        </section>

        <section className="section section-glow-soft blog-block">
          <h2>Latest from the Blog</h2>
          <p className="subtitle">Ideas, insights, and code reflections.</p>

          <div className="mini-posts">
            {[0, 1, 2].map((n) => (
              <article key={n} className={`mini-post ${n === 2 ? "hot" : ""}`}>
                <h3>Building A Scalable React App From Scratch</h3>
                <a href="#">KIT-ADMIN</a>
              </article>
            ))}
          </div>

          <div className="featured-posts">
            <article className="featured-post dark">
              <div className="image-block" />
              <h3>Building A Scalable React App From Scratch</h3>
              <p>A step-by-step breakdown of how I structured, optimized, and deployed a modern React application.</p>
            </article>
            <article className="featured-post light">
              <h3>Building A Scalable React App From Scratch</h3>
              <p>A step-by-step breakdown of how I structured, optimized, and deployed a modern React application using Vite, Redux Toolkit, and component-based architecture.</p>
            </article>
          </div>
        </section>

        <section className="section education-block">
          <div className="edu-grid">
            <article className="edu-card">
              <p className="pill left">Education</p>
              <p>Universitas Teknologi Digital - 2019 - 2023 GPA: 3.85 / 4.00, Relevant Coursework: Data Structures, Web Development, Software Engineering, Cloud Computing Activities: Member of Coding Club, Lead Developer in Capstone Project</p>
            </article>
            <article className="edu-card">
              <p className="pill left">Education</p>
            </article>
          </div>
        </section>

        <section className="section section-glow-soft community-block">
          <h2>Giving Back to the Tech Community</h2>
          <p className="subtitle">Beyond building projects, I contribute to open-source tools, share knowledge, and support fellow developers around the globe.</p>
          <article className="community-card">
            <div className="community-overlay">
              <h3>David Tan</h3>
              <p>Client</p>
            </div>
            <div className="community-stat">Market Revenue +1500%</div>
          </article>
        </section>

        <section className="section faq-block">
          <p className="subtitle">Answers to common questions about how I work</p>
          <h2>Frequently Asked Questions</h2>
          <div className="bubble-stack left-side">
            <span className="bubble">Engineer</span>
            <span className="bubble">Developer</span>
          </div>

          <div className="faq-list">
            {faqItems.map((item, idx) => (
              <article key={item.q} className="faq-item">
                <button type="button" onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}>
                  <span>{item.q}</span>
                  <span>{openFaq === idx ? "-" : "+"}</span>
                </button>
                {openFaq === idx && <p>{item.a}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="cta-card">
            <div className="bubble-stack card-bubbles">
              <span className="bubble active">DevOps</span>
              <span className="bubble">UI/UX</span>
              <span className="bubble">Manager</span>
              <span className="bubble">Developer</span>
            </div>
            <h2>Let&apos;s build something great together.</h2>
            <p>Whether you&apos;re looking to collaborate, hire, or just say hello - feel free to reach out.</p>
            <a className="btn primary" href="mailto:hello@yusufcan.dev">Send Message</a>
          </div>
        </section>

        <footer className="footer section">
          <div className="footer-head">
            <div className="logo">ysflx</div>
            <div className="socials">
              <a href="#">X</a>
              <a href="#">f</a>
              <a href="#">ig</a>
            </div>
          </div>

          <div className="footer-bg-word">YSFLX</div>

          <div className="footer-grid">
            {footerColumns.map((col) => (
              <div key={col.title + col.links[0]}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((item) => (
                    <li key={item}><a href="#">{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <p>Copyright © 2026 ysflx - Developer Software engineer Portfolio</p>
            <div>
              <a href="#">Terms of Service</a>
              <a href="#">API</a>
              <a href="#">Data Processing Agreement</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
