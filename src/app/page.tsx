export default function Home() {
  const projectPlaceholders = [
    { title: "Proje 01", summary: "Bu alana proje özeti, kullandığın teknoloji ve katkın gelecek." },
    { title: "Proje 02", summary: "Canlı demo, GitHub linki ve teknik detaylar için hazır kart." },
    { title: "Proje 03", summary: "Kurumsal iş, freelance iş veya kişisel proje burada sergilenecek." },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-8 md:px-10 md:py-12">
        <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--accent)]/14 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[var(--foreground)]/8 blur-3xl" />
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Portfolio</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-6xl">
            Yusuf Can Gördebil
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-muted)] md:text-lg">
            Web geliştirme odaklı projelerimi, teknik yaklaşımımı ve üretim sürecimi sergilediğim kişisel portfolyo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Projeleri Gör
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]/40"
            >
              İletişime Geç
            </a>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Hakkımda</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              Bu alana kısa özgeçmişini, uzmanlık alanlarını ve hangi problemlere çözüm ürettiğini ekleyeceğiz.
            </p>
          </article>
          <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Yetenekler</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              React, Next.js, TypeScript, Node.js, Prisma, PostgreSQL gibi teknolojileri burada kategori bazlı
              göstereceğiz.
            </p>
          </article>
        </section>

        <section id="projects" className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Projeler</h2>
            <span className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
              Yakında detaylar eklenecek
            </span>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {projectPlaceholders.map((project) => (
              <article key={project.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <h3 className="text-base font-semibold text-[var(--foreground)]">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{project.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-3xl border border-[var(--border)] bg-[var(--foreground)] p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">İletişim</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/80">
            Mail, LinkedIn ve GitHub bağlantılarını ekleyip doğrudan sana ulaşılabilir bir alan oluşturacağız.
          </p>
          <div className="mt-5 text-sm font-medium text-[var(--accent)]">email@example.com</div>
        </section>
      </main>
    </div>
  );
}
