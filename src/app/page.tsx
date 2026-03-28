"use client";

import { useState } from "react";

const navButtons = ["Benimle İletişime Geç", "Projeni Başlat"];

const roleBubbles = [
  { label: "Geliştirici", className: "bubble b1" },
  { label: "Mühendis", className: "bubble b2" },
];

const experienceCards = [
  {
    title: "TechNova Labs Oca 2023 - Günümüz",
    text: "Katkılar: SaaS panelleri için React ve TypeScript ile dinamik kullanıcı arayüzleri geliştirdim. Kod bölme ve performans optimizasyonu ile sayfa yükleme sürelerini %40 iyileştirdim. GraphQL API entegrasyonları için backend ekibiyle birlikte çalıştım.",
    featured: true,
  },
  {
    title: "CodeCrate Studio Tem 2022 - Ara 2022",
    text: "Katkılar: SaaS panelleri için React ve TypeScript ile dinamik kullanıcı arayüzleri geliştirdim. Kod bölme ve performans optimizasyonu ile sayfa yükleme sürelerini %40 iyileştirdim. GraphQL API entegrasyonları için backend ekibiyle birlikte çalıştım.",
    featured: false,
  },
  {
    title: "Freelance Web Geliştirici 2021 - 2022",
    text: "Katkılar: SaaS panelleri için React ve TypeScript ile dinamik kullanıcı arayüzleri geliştirdim. Kod bölme ve performans optimizasyonu ile sayfa yükleme sürelerini %40 iyileştirdim. GraphQL API entegrasyonları için backend ekibiyle birlikte çalıştım.",
    featured: false,
  },
];

const skillLogos = ["React", "TS", "NEXT", "HTML5", "Docker", "Tailwind"];

const faqItems = [
  {
    q: "Ne tür projeler üzerinde çalışıyorsun?",
    a: "Modern frontend teknolojileriyle ürün web siteleri, SaaS panelleri, iç araçlar ve dönüşüm odaklı landing deneyimleri geliştiriyorum.",
  },
  {
    q: "Freelance veya sözleşmeli çalışmaya uygun musun?",
    a: "Evet. Genelde kapsamı net projeler, milestone bazlı iş modelleri ve uzun dönem ürün iş birlikleriyle çalışıyorum.",
  },
  {
    q: "Tipik çalışma sürecin nasıl ilerliyor?",
    a: "Keşif ve kapsam belirleme, tasarım hizalaması, geliştirme, QA-performans geçişi ve dokümantasyonla teslim adımlarını izliyorum.",
  },
  {
    q: "Bir projenin tamamlanması ne kadar sürer?",
    a: "Landing projeleri çoğunlukla 2-4 hafta sürer. Ürün modülleri kapsamına göre genelde geri bildirimlerle birlikte 3-8 hafta arasında tamamlanır.",
  },
];

const footerColumns = [
  { title: "Ürün", links: ["Özellikler", "Entegrasyonlar", "Fiyatlandırma", "Yenilikler", "Dokümantasyon", "İndir"] },
  { title: "Şirket", links: ["Hakkımızda", "Blog", "Kariyer", "Müşteriler", "Marka Varlıkları"] },
  { title: "Kaynaklar", links: ["Topluluk", "İletişim", "Sistem Durumu", "Hizmet Şartları"] },
  { title: "Geliştiriciler", links: ["API", "Sistem Durumu", "GitHub"] },
  { title: "Şirket", links: ["Hakkımızda", "Blog", "Kariyer", "Müşteriler", "Marka Varlıkları"] },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="codence-page">
      <main className="main-wrap">
        <section className="hero section section-glow-wide">
          <header className="site-header">
            <a href="#top" className="brand-logo brand-shell" aria-label="ysflx">
              <span className="brand-mark" aria-hidden>
                <svg viewBox="0 0 36 36" role="img">
                  <path d="M9 7h6l6 6-3.2 3.2L13.4 12H9z" />
                  <path d="M27 7h-6l-6 6 3.2 3.2L22.6 12H27z" />
                  <path d="M9 29h6l6-6-3.2-3.2-4.4 4.4H9z" />
                  <path d="M27 29h-6l-6-6 3.2-3.2 4.4 4.4H27z" />
                </svg>
              </span>
              <span className="brand-word">ysflx</span>
            </a>
            <div className="header-actions">
              {navButtons.map((btn, idx) => (
                <a key={btn} href="#contact" className={idx === 1 ? "btn primary" : "btn ghost"}>
                  {btn}
                </a>
              ))}
            </div>
          </header>

          <div className="hero-center">
            <p className="pill">Daha İyi Yazılımı Birlikte İnşa Edelim</p>
            <h1>Temiz kod. Ölçeklenebilir uygulamalar. Güvenilir teslimat.</h1>
            <p className="subtitle">Karmaşık fikirleri performanslı ve kullanıcı dostu web uygulamalarına dönüştüren bir yazılım mühendisiyim.</p>
            <div className="hero-cta">
              <a href="#" className="btn ghost">CV İndir</a>
              <a href="#work" className="btn primary">Projelerimi Gör</a>
            </div>
          </div>
        </section>

        <section className="section section-glow-soft about-block">
          <div className="about-panel">
            <p className="pill left">Hakkımda</p>

            <div className="about-layout">
              <div>
                <h2 className="about-title">Hızlı, faydalı ve sürdürülebilir ürünler geliştiriyorum.</h2>
                <p className="about-copy">
                  Verimli, ölçeklenebilir ve kullanıcı dostu web uygulamaları geliştirmeye odaklanan bir yazılım
                  mühendisiyim. Yolculuğum, ürünlerin perde arkasında nasıl çalıştığına duyduğum merakla başladı ve
                  zamanla gerçek iş etkisi üreten bir kariyere dönüştü.
                </p>
                <p className="about-copy about-copy-muted">
                  Son yıllarda ürün web siteleri, dashboard sistemleri ve iç platformlarda çalıştım. Temiz mimari,
                  akıcı kullanıcı deneyimi ve ölçülebilir performans iyileştirmeleri benim için öncelik.
                </p>
              </div>

              <div className="about-side">
                <div className="bubble-stack right">
                  {roleBubbles.map((b) => (
                    <span key={b.label} className={b.className}>
                      {b.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-glow-soft work-block" id="work">
          <h2>Ürettiğim, liderlik ettiğim ve büyüdüğüm yolculuk.</h2>
          <p className="subtitle">Geliştirmek, yayına almak ve ölçeklemek için kullandığım araçlar.</p>

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
            Profesyonel <span className="pill inline">Yolculuğum</span>
          </h2>
          <p className="subtitle">Geliştirme rolleri, freelance projeler ve staj deneyimlerimi içeren kariyer zaman çizelgem.</p>
          <div className="bubble-stack mid">
            <span className="bubble">Mühendis</span>
            <span className="bubble">Geliştirici</span>
          </div>
        </section>

        <section className="section section-glow-soft skills-block">
          <h2>Yetenekler &amp; Teknolojiler</h2>
          <p className="subtitle">Geliştirmek, yayına almak ve ölçeklemek için kullandığım araçlar.</p>
          <div className="bubble-stack sides">
            <span className="bubble">Mühendis</span>
            <span className="bubble">Geliştirici</span>
          </div>
          <div className="skills-row">
            {skillLogos.map((logo) => (
              <div key={logo} className="skill-item">{logo}</div>
            ))}
          </div>
        </section>

        <section className="section section-glow-soft blog-block">
          <h2>Blogdan Son Yazılar</h2>
          <p className="subtitle">Fikirler, teknik içgörüler ve kod notları.</p>

          <div className="mini-posts">
            {[0, 1, 2].map((n) => (
              <article key={n} className={`mini-post ${n === 2 ? "hot" : ""}`}>
                <h3>Sıfırdan Ölçeklenebilir Bir React Uygulaması Geliştirmek</h3>
                <a href="#">KIT-ADMIN</a>
              </article>
            ))}
          </div>

          <div className="featured-posts">
            <article className="featured-post dark">
              <div className="image-block" />
              <h3>Sıfırdan Ölçeklenebilir Bir React Uygulaması Geliştirmek</h3>
              <p>Modern bir React uygulamasını nasıl yapılandırdığımı, optimize ettiğimi ve yayına aldığımı adım adım anlatıyorum.</p>
            </article>
            <article className="featured-post light">
              <h3>Sıfırdan Ölçeklenebilir Bir React Uygulaması Geliştirmek</h3>
              <p>Vite, Redux Toolkit ve bileşen tabanlı mimari kullanarak modern bir React uygulamasını nasıl kurup optimize ettiğimi detaylıca paylaşıyorum.</p>
            </article>
          </div>
        </section>

        <section className="section education-block">
          <div className="edu-grid">
            <article className="edu-card">
              <p className="pill left">Eğitim</p>
              <p>Universitas Teknologi Digital - 2019 - 2023 GPA: 3.85 / 4.00, İlgili Dersler: Veri Yapıları, Web Geliştirme, Yazılım Mühendisliği, Bulut Bilişim Aktiviteler: Kodlama Kulübü Üyesi, Bitirme Projesinde Lider Geliştirici</p>
            </article>
            <article className="edu-card">
              <p className="pill left">Eğitim</p>
            </article>
          </div>
        </section>

        <section className="section section-glow-soft community-block">
          <h2>Teknoloji Topluluğuna Katkı</h2>
          <p className="subtitle">Proje geliştirmek dışında açık kaynak araçlara katkı sağlıyor, bilgi paylaşıyor ve geliştirici topluluğunu destekliyorum.</p>
          <article className="community-card">
            <div className="community-overlay">
              <h3>David Tan</h3>
              <p>Müşteri</p>
            </div>
            <div className="community-stat">Pazar Geliri +1500%</div>
          </article>
        </section>

        <section className="section faq-block">
          <p className="subtitle">Çalışma biçimimle ilgili sık sorulan sorular</p>
          <h2>Sıkça Sorulan Sorular</h2>
          <div className="bubble-stack left-side">
            <span className="bubble">Mühendis</span>
            <span className="bubble">Geliştirici</span>
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
              <span className="bubble">Yönetici</span>
              <span className="bubble">Geliştirici</span>
            </div>
            <h2>Birlikte harika bir şey inşa edelim.</h2>
            <p>İster iş birliği yapmak, ister birlikte çalışmak, ister sadece selam vermek iste. Bana her zaman ulaşabilirsin.</p>
            <a className="btn primary" href="mailto:hello@yusufcan.dev">Mesaj Gönder</a>
          </div>
        </section>

        <footer className="footer section">
          <div className="footer-head">
            <a href="#top" className="brand-logo footer-brand" aria-label="ysflx">
              <span className="brand-mark" aria-hidden>
                <svg viewBox="0 0 36 36" role="img">
                  <path d="M9 7h6l6 6-3.2 3.2L13.4 12H9z" />
                  <path d="M27 7h-6l-6 6 3.2 3.2L22.6 12H27z" />
                  <path d="M9 29h6l6-6-3.2-3.2-4.4 4.4H9z" />
                  <path d="M27 29h-6l-6-6 3.2-3.2 4.4 4.4H27z" />
                </svg>
              </span>
              <span className="brand-word">ysflx</span>
            </a>
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
            <p>Telif Hakkı © 2026 ysflx - Yazılım Mühendisi Portfolyosu</p>
            <div>
              <a href="#">Hizmet Şartları</a>
              <a href="#">API</a>
              <a href="#">Veri İşleme Sözleşmesi</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
