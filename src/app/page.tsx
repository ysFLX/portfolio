export default function Home() {
  const featuredProjects = [
    {
      title: "Guohong Laser Market",
      category: "E-Ticaret / Kurumsal",
      summary: "Next.js tabanlı ürün vitrini, teklif akışı ve yönetim paneli içeren kurumsal satış platformu.",
      stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    },
    {
      title: "Admin Operasyon Paneli",
      category: "Dashboard",
      summary: "Sipariş, stok ve kullanıcı süreçlerini tek panelde yönetmeye odaklanan operasyon arayüzü.",
      stack: ["React", "Tailwind", "API Routes", "Auth"],
    },
    {
      title: "Portfolio v1",
      category: "Kişisel Marka",
      summary: "Projeleri, teknik yaklaşımı ve iletişim kanallarını öne çıkaran kişisel vitrin sitesi.",
      stack: ["Next.js", "SEO", "Responsive UI", "Performance"],
    },
  ];

  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "API Design", "Prisma ORM", "PostgreSQL", "Authentication"],
    },
    {
      title: "Ürün & Süreç",
      skills: ["Clean UI", "Performance", "SEO Basics", "Deployment", "Debugging"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "İhtiyaç Analizi",
      text: "Hedef, kullanıcı kitlesi ve iş akışını netleştirip doğru ürün kapsamını çıkarırım.",
    },
    {
      step: "02",
      title: "Uygulama Geliştirme",
      text: "Temiz mimari ile hızlı, bakım yapılabilir ve ölçeklenebilir bir yapı kurarım.",
    },
    {
      step: "03",
      title: "Yayın & İyileştirme",
      text: "Projeyi canlıya alır, ölçümleme yapar ve geri bildirimle sürekli geliştiririm.",
    },
  ];

  const quickStats = [
    { label: "Canlı Proje", value: "10+" },
    { label: "Odak Alanı", value: "Web Apps" },
    { label: "Öncelik", value: "Kalite + Hız" },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="mx-auto w-full max-w-6xl px-6 py-8 md:px-10 md:py-12">
        <header className="sticky top-4 z-40 mb-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 px-4 py-3 shadow-sm backdrop-blur md:px-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Portfolio</p>
              <p className="text-sm font-semibold text-[var(--foreground)]">Yusuf Can Gördebil</p>
            </div>
            <nav className="hidden items-center gap-5 text-sm font-medium text-[var(--text-muted)] md:flex">
              <a href="#projects" className="transition hover:text-[var(--foreground)]">
                Projeler
              </a>
              <a href="#skills" className="transition hover:text-[var(--foreground)]">
                Yetenekler
              </a>
              <a href="#contact" className="transition hover:text-[var(--foreground)]">
                İletişim
              </a>
            </nav>
          </div>
        </header>

        <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12">
          <div className="absolute -right-28 -top-24 h-64 w-64 rounded-full bg-[var(--accent)]/20 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[var(--foreground)]/8 blur-3xl" />
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Frontend Developer</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Ürün odaklı, temiz ve performanslı web deneyimleri geliştiriyorum.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-muted)] md:text-lg">
            Merhaba, ben Yusuf Can Gördebil. Modern web teknolojileriyle hem kullanıcı dostu hem de iş hedeflerine
            hizmet eden uygulamalar geliştiriyorum.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Projelerimi İncele
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold transition hover:border-[var(--accent)]/50"
            >
              Birlikte Çalışalım
            </a>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {quickStats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4">
                <p className="text-xl font-bold text-[var(--foreground)]">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Öne Çıkan Projeler</h2>
            <a href="#" className="text-sm font-semibold text-[var(--accent)] transition hover:opacity-80">
              Tümünü Gör
            </a>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">{project.category}</p>
                <h3 className="text-base font-semibold text-[var(--foreground)]">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={`${project.title}-${item}`}
                      className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--accent)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a href="#" className="mt-5 inline-flex text-sm font-semibold text-[var(--foreground)] transition group-hover:text-[var(--accent)]">
                  Detaylara Git →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-10 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={`${group.title}-${skill}`}
                    className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">Çalışma Sürecim</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {processSteps.map((item) => (
              <article key={item.step} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{item.step}</p>
                <h3 className="mt-2 text-base font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--foreground)] p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">İletişim</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/80">
            Yeni bir proje fikrin varsa veya mevcut ürününü geliştirmek istiyorsan benimle iletişime geçebilirsin.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <a href="mailto:email@example.com" className="rounded-full bg-white px-4 py-2 text-[var(--foreground)]">
              email@example.com
            </a>
            <a href="#" className="rounded-full border border-white/30 px-4 py-2 text-white">
              LinkedIn
            </a>
            <a href="#" className="rounded-full border border-white/30 px-4 py-2 text-white">
              GitHub
            </a>
          </div>
        </section>

        <footer className="mt-8 border-t border-[var(--border)] py-6 text-center text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} Yusuf Can Gördebil. Tüm hakları saklıdır.
        </footer>
      </main>
    </div>
  );
}
