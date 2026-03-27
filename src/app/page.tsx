"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Guohong Laser Market",
    subtitle: "Kurumsal E-Ticaret Platformu",
    summary:
      "Teklif akışı, ürün vitrini ve operasyon panelini aynı yapıda birleştiren Next.js tabanlı kurumsal platform.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    year: "2026",
  },
  {
    title: "Admin Operasyon Paneli",
    subtitle: "Dashboard & Süreç Yönetimi",
    summary:
      "Sipariş, stok ve kullanıcı süreçleri için performans odaklı, sade ve ölçülebilir bir yönetim ekranı seti.",
    stack: ["React", "REST API", "UI Systems", "Charts"],
    year: "2025 - 2026",
  },
  {
    title: "Personal Portfolio",
    subtitle: "Marka ve Teknik Vitrin",
    summary:
      "Kişisel marka dilini, projeleri ve teknik yaklaşımı modern animasyonlarla anlatan web deneyimi.",
    stack: ["Next.js", "SEO", "Motion", "Responsive UI"],
    year: "2026",
  },
];

const cases = [
  "Kurumsal satış ve teklif süreçleri",
  "Yönetim paneli ve operasyon ekranları",
  "Performans ve SEO odaklı web uygulamaları",
  "Tasarım sistemi ve bileşen mimarisi",
];

export default function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="portfolio-bg min-h-screen text-[var(--foreground)]">
      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-14 pt-6 md:px-10">
        <header className="mb-10 flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 px-5 py-4 backdrop-blur">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Portfolio</p>
            <p className="mt-1 text-sm font-semibold">Yusuf Can Gördebil</p>
          </div>
          <nav className="flex items-center gap-5 text-sm text-[var(--text-muted)]">
            <a href="#work" className="transition hover:text-[var(--foreground)]">
              Work
            </a>
            <a href="#skills" className="transition hover:text-[var(--foreground)]">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-[var(--foreground)]">
              Contact
            </a>
          </nav>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 md:p-10">
            <div className="portfolio-glow absolute -left-24 -top-28 h-72 w-72 rounded-full bg-[var(--accent)]/25 blur-[100px]" />
            <div className="portfolio-float absolute -bottom-16 right-8 h-48 w-48 rounded-full bg-cyan-400/20 blur-[90px]" />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Frontend Developer</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Animasyonlu, güçlü ve gerçek ürün odaklı web deneyimleri geliştiriyorum.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-muted)]">
              Ben Yusuf Can Gördebil. Odaklandığım alan, modern arayüz tasarımını iş hedefleriyle birleştiren yüksek
              etkileşimli web uygulamaları üretmek.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Projeleri İncele
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold transition hover:border-[var(--accent)]/45"
              >
                İletişime Geç
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Focus</p>
            <div className="mt-4 grid gap-3">
              {cases.map((item) => (
                <div key={item} className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 md:p-7">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold">Project Slider</h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActive((prev) => (prev - 1 + slides.length) % slides.length)}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-sm transition hover:border-[var(--accent)]/45"
                aria-label="Önceki proje"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => setActive((prev) => (prev + 1) % slides.length)}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-sm transition hover:border-[var(--accent)]/45"
                aria-label="Sonraki proje"
              >
                Next
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)]">
            <div className="relative min-h-[340px] p-6 md:p-8">
              {slides.map((slide, index) => (
                <article
                  key={slide.title}
                  className={`absolute inset-0 p-6 transition-all duration-500 md:p-8 ${
                    index === active
                      ? "translate-x-0 opacity-100"
                      : index < active
                        ? "-translate-x-12 opacity-0"
                        : "translate-x-12 opacity-0"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{slide.subtitle}</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight">{slide.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-muted)]">{slide.summary}</p>
                  <p className="mt-3 text-sm font-medium text-[var(--foreground)]">Yıl: {slide.year}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {slide.stack.map((item) => (
                      <span
                        key={`${slide.title}-${item}`}
                        className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-[var(--accent)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${index === active ? "w-10 bg-[var(--accent)]" : "w-4 bg-[var(--border)]"}`}
                aria-label={`${slide.title} slaytına git`}
              />
            ))}
          </div>
        </section>

        <section id="skills" className="mt-10 grid gap-4 md:grid-cols-4">
          {["React", "Next.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Tailwind", "GitHub"].map((skill) => (
            <div
              key={skill}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4 text-center text-sm font-semibold transition hover:-translate-y-0.5 hover:border-[var(--accent)]/40"
            >
              <span className="transition group-hover:text-[var(--accent)]">{skill}</span>
            </div>
          ))}
        </section>

        <section id="contact" className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--foreground)] p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">Let&apos;s build something strong.</h2>
          <p className="mt-3 text-sm leading-7 text-white/80">
            Yeni proje, freelance iş ya da ekip fırsatları için benimle iletişime geçebilirsin.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <a href="mailto:email@example.com" className="rounded-full bg-white px-4 py-2 text-[var(--foreground)]">
              email@example.com
            </a>
            <a href="#" className="rounded-full border border-white/35 px-4 py-2 text-white">
              LinkedIn
            </a>
            <a href="#" className="rounded-full border border-white/35 px-4 py-2 text-white">
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
