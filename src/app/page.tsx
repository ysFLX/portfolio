"use client";

import Image from "next/image";
import { useState } from "react";

const navButtons = ["Benimle İletişime Geç", "Projeni Başlat"];

const roleBubbles = ["Geliştirici", "Mühendis"];

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

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <a
      href="#top"
      aria-label="ysflx"
      className="inline-flex min-w-[168px] items-center justify-center gap-3 rounded-[14px] border border-[rgba(133,153,210,.35)] bg-[linear-gradient(180deg,rgba(25,36,66,.62),rgba(13,22,43,.58))] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_8px_22px_rgba(7,12,24,.35)] backdrop-blur"
    >
      <span className={`inline-flex h-8 w-8 items-center justify-center rounded-[10px] border ${footer ? "border-[rgba(202,214,255,.35)] bg-[rgba(255,255,255,.06)]" : "border-[rgba(123,142,255,.34)] bg-[rgba(98,108,240,.1)]"}`}>
        <svg viewBox="0 0 36 36" role="img" className={`h-6 w-6 ${footer ? "fill-[#dce4ff]" : "fill-[#7881ff]"}`}>
          <path d="M9 7h6l6 6-3.2 3.2L13.4 12H9z" />
          <path d="M27 7h-6l-6 6 3.2 3.2L22.6 12H27z" />
          <path d="M9 29h6l6-6-3.2-3.2-4.4 4.4H9z" />
          <path d="M27 29h-6l-6-6 3.2-3.2 4.4 4.4H27z" />
        </svg>
      </span>
      <span className={`font-[var(--font-plus-jakarta)] text-[clamp(20px,1.2vw,24px)] font-bold lowercase tracking-[.01em] ${footer ? "text-[#f4f7fe]" : "text-[#7a83ff]"}`}>
        ysflx
      </span>
    </a>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div id="top" className="min-h-full bg-[radial-gradient(900px_280px_at_20%_10%,rgba(120,130,255,.2),transparent_66%),radial-gradient(760px_260px_at_80%_36%,rgba(110,101,216,.17),transparent_70%),#050c1a]">
      <main className="w-full px-4 sm:px-6 lg:px-10 2xl:px-14">
        <section className="relative overflow-hidden pt-7 min-h-[88vh] animate-[riseIn_540ms_cubic-bezier(0.23,1,0.32,1)_both]">
          <div className="pointer-events-none absolute inset-0 animate-[ribbonDrift_12s_ease-in-out_infinite] bg-[linear-gradient(26deg,transparent_32%,rgba(141,149,234,.4)_52%,transparent_72%)] opacity-60 blur-[34px]" />

          <header className="relative z-10 flex items-center justify-between gap-4">
            <BrandLogo />
            <div className="flex flex-wrap gap-3">
              {navButtons.map((btn, idx) => (
                <a
                  key={btn}
                  href="#contact"
                  className={`inline-flex h-[52px] min-w-[190px] items-center justify-center rounded-[14px] border px-4 text-base font-semibold transition hover:-translate-y-0.5 ${
                    idx === 1
                      ? "animate-[ctaGlow_2.7s_ease-in-out_infinite] border-transparent bg-[linear-gradient(180deg,#636bf1_0%,#555ddb_100%)] shadow-[0_0_22px_rgba(98,108,240,.45)]"
                      : "border-[rgba(113,136,189,.28)] bg-[rgba(8,17,34,.86)]"
                  }`}
                >
                  {btn}
                </a>
              ))}
            </div>
          </header>

          <div className="relative z-10 mx-auto mt-28 max-w-[1120px] pb-20 text-center">
            <p className="inline-flex items-center gap-2 rounded-[14px] border border-[rgba(113,136,189,.28)] bg-white/5 px-3.5 py-2 text-[15px] text-[#e9edf8]">
              <span className="text-[14px]">⚡</span>
              Daha İyi Yazılımı Birlikte İnşa Edelim
            </p>
            <h1 className="mt-4 font-[var(--font-plus-jakarta)] text-[clamp(46px,5.2vw,78px)] font-semibold leading-[1.08] tracking-[-.025em] text-[#f5f7ff] [text-shadow:0_0_34px_rgba(120,126,245,.26)] animate-[headingBreath_10s_ease-in-out_infinite]">
              Temiz kod. Ölçeklenebilir uygulamalar. Güvenilir teslimat.
            </h1>
            <p className="mx-auto mt-3 max-w-[760px] text-[clamp(16px,1.05vw,19px)] leading-[1.7] text-[#b4bfd6]">
              Karmaşık fikirleri performanslı ve kullanıcı dostu web uygulamalarına dönüştüren bir yazılım mühendisiyim.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <a href="#" className="inline-flex h-[52px] min-w-[190px] items-center justify-center rounded-[14px] border border-[rgba(113,136,189,.28)] bg-[rgba(8,17,34,.86)] px-4 text-base font-semibold transition hover:-translate-y-0.5">CV İndir</a>
              <a href="#work" className="inline-flex h-[52px] min-w-[190px] items-center justify-center rounded-[14px] border border-transparent bg-[linear-gradient(180deg,#636bf1_0%,#555ddb_100%)] px-4 text-base font-semibold shadow-[0_0_22px_rgba(98,108,240,.45)] transition hover:-translate-y-0.5">Projelerimi Gör</a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-[58px] animate-[riseIn_540ms_cubic-bezier(0.23,1,0.32,1)_both] [animation-delay:70ms]">
          <div className="rounded-2xl border border-[rgba(118,139,196,.18)] bg-[linear-gradient(135deg,rgba(20,31,58,.78),rgba(6,15,32,.72))] p-6">
            <p className="inline-flex items-center gap-2 rounded-xl border border-[rgba(113,136,189,.28)] bg-white/5 px-3.5 py-2 text-[15px] text-[#e9edf8]">
              <span className="text-[14px]">⚡</span>
              Hakkımda
            </p>
            <div className="mt-4 grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
              <div>
                <h2 className="max-w-[17ch] font-[var(--font-plus-jakarta)] text-[clamp(30px,2.25vw,46px)] font-semibold leading-[1.18] tracking-[-.02em]">Hızlı, faydalı ve sürdürülebilir ürünler geliştiriyorum.</h2>
                <p className="mt-3 max-w-[64ch] text-[clamp(16px,1vw,18px)] leading-[1.8] text-[#e7ecf9]">Verimli, ölçeklenebilir ve kullanıcı dostu web uygulamaları geliştirmeye odaklanan bir yazılım mühendisiyim. Yolculuğum, ürünlerin perde arkasında nasıl çalıştığına duyduğum merakla başladı ve zamanla gerçek iş etkisi üreten bir kariyere dönüştü.</p>
                <p className="mt-3 max-w-[64ch] text-[clamp(16px,1vw,18px)] leading-[1.8] text-[#b7c2d9]">Son yıllarda ürün web siteleri, dashboard sistemleri ve iç platformlarda çalıştım. Temiz mimari, akıcı kullanıcı deneyimi ve ölçülebilir performans iyileştirmeleri benim için öncelik.</p>
              </div>
              <div className="flex justify-end">
                <div className="sticky top-6 flex flex-col items-start gap-3">
                  {roleBubbles.map((role, i) => (
                    <span key={role} className={`rounded-full border border-[rgba(168,180,206,.15)] bg-[rgba(35,43,60,.84)] px-5 py-2 text-[15px] text-[#d6dcee] animate-[bubbleFloat_6s_ease-in-out_infinite] ${i === 0 ? "mr-10" : ""}`}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="py-[72px] text-center animate-[riseIn_540ms_cubic-bezier(0.23,1,0.32,1)_both] [animation-delay:120ms]">
          <h2 className="mx-auto max-w-[22ch] font-[var(--font-plus-jakarta)] text-[clamp(34px,3.4vw,58px)] font-semibold leading-[1.15] tracking-[-.022em]">Ürettiğim, liderlik ettiğim ve büyüdüğüm yolculuk.</h2>
          <p className="mx-auto mt-3 max-w-[800px] text-[clamp(16px,1.05vw,19px)] leading-[1.7] text-[#b4bfd6]">Geliştirmek, yayına almak ve ölçeklemek için kullandığım araçlar.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {experienceCards.map((card) => (
              <article key={card.title} className={`rounded-2xl border bg-[#0c1528] p-6 text-left transition hover:-translate-y-0.5 ${card.featured ? "border-[rgba(104,126,228,.8)]" : "border-[rgba(113,136,189,.28)]"}`}>
                <h3 className="font-[var(--font-plus-jakarta)] text-[clamp(22px,1.45vw,30px)] font-semibold leading-[1.24]">{card.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.72] text-[#dbe2f4]">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-[72px] text-center">
          <h2 className="mx-auto max-w-[22ch] font-[var(--font-plus-jakarta)] text-[clamp(34px,3.4vw,58px)] font-semibold leading-[1.15] tracking-[-.022em]">Profesyonel Yolculuğum</h2>
          <p className="mx-auto mt-3 max-w-[800px] text-[clamp(16px,1.05vw,19px)] leading-[1.7] text-[#b4bfd6]">Geliştirme rolleri, freelance projeler ve staj deneyimlerimi içeren kariyer zaman çizelgem.</p>
          <div className="mt-8 flex justify-center gap-3">
            <span className="rounded-full border border-[rgba(168,180,206,.15)] bg-[rgba(35,43,60,.84)] px-5 py-2 text-[15px] text-[#d6dcee]">Mühendis</span>
            <span className="rounded-full border border-[rgba(168,180,206,.15)] bg-[rgba(35,43,60,.84)] px-5 py-2 text-[15px] text-[#d6dcee]">Geliştirici</span>
          </div>
        </section>

        <section className="relative py-[72px] text-center">
          <h2 className="mx-auto max-w-[22ch] font-[var(--font-plus-jakarta)] text-[clamp(34px,3.4vw,58px)] font-semibold leading-[1.15] tracking-[-.022em]">Yetenekler &amp; Teknolojiler</h2>
          <p className="mx-auto mt-3 max-w-[800px] text-[clamp(16px,1.05vw,19px)] leading-[1.7] text-[#b4bfd6]">Geliştirmek, yayına almak ve ölçeklemek için kullandığım araçlar.</p>
          <div className="mt-11 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {skillLogos.map((logo) => (
              <div key={logo} className="flex min-h-[86px] items-center justify-center rounded-xl text-[clamp(20px,1.6vw,30px)] text-[#44b8df]">
                {logo}
              </div>
            ))}
          </div>
        </section>

        <section className="py-[72px] text-center">
          <h2 className="mx-auto max-w-[22ch] font-[var(--font-plus-jakarta)] text-[clamp(34px,3.4vw,58px)] font-semibold leading-[1.15] tracking-[-.022em]">Blogdan Son Yazılar</h2>
          <p className="mx-auto mt-3 max-w-[800px] text-[clamp(16px,1.05vw,19px)] leading-[1.7] text-[#b4bfd6]">Fikirler, teknik içgörüler ve kod notları.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[0, 1, 2].map((n) => (
              <article key={n} className={`min-h-[146px] rounded-[14px] bg-[#071022] p-[18px] text-left transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(6,12,26,.45)] ${n === 2 ? "border-t-2 border-[#ff2f65]" : "border-t-2 border-[#e4e9fa]"}`}>
                <h3 className="font-[var(--font-plus-jakarta)] text-[clamp(20px,1.5vw,28px)] font-semibold leading-[1.35]">Sıfırdan Ölçeklenebilir Bir React Uygulaması Geliştirmek</h3>
                <a href="#" className="mt-3 inline-block text-sm text-[#d4ddf0] underline">KIT-ADMIN</a>
              </article>
            ))}
          </div>

          <div className="mt-5 grid md:grid-cols-[1.03fr_.97fr]">
            <article className="group min-h-[500px] bg-[rgba(6,11,22,.72)] p-6 text-left">
              <div className="mb-5 h-[230px] overflow-hidden rounded-[10px] border border-[rgba(118,139,196,.25)]">
                <Image
                  src="/images/feature-code.jpg"
                  alt="Kod editörü ve geliştirme ortamı"
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-[var(--font-plus-jakarta)] text-[clamp(24px,1.7vw,34px)] font-semibold leading-[1.24]">Sıfırdan Ölçeklenebilir Bir React Uygulaması Geliştirmek</h3>
              <p className="mt-3 text-[15px] leading-[1.74] text-[#dee5f7]">Modern bir React uygulamasını nasıl yapılandırdığımı, optimize ettiğimi ve yayına aldığımı adım adım anlatıyorum.</p>
            </article>
            <article className="group min-h-[500px] bg-[rgba(9,16,30,.9)] p-6 text-left">
              <div className="mb-5 h-[230px] overflow-hidden rounded-[10px] border border-[rgba(118,139,196,.25)]">
                <Image
                  src="/images/feature-team.jpg"
                  alt="Ürün ekibi ve iş birliği sahnesi"
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-[var(--font-plus-jakarta)] text-[clamp(24px,1.7vw,34px)] font-semibold leading-[1.24]">Sıfırdan Ölçeklenebilir Bir React Uygulaması Geliştirmek</h3>
              <p className="mt-3 text-[15px] leading-[1.74] text-[#dee5f7]">Vite, Redux Toolkit ve bileşen tabanlı mimari kullanarak modern bir React uygulamasını nasıl kurup optimize ettiğimi detaylıca paylaşıyorum.</p>
            </article>
          </div>
        </section>

        <section className="py-[26px]">
          <div className="grid gap-4 md:grid-cols-2">
            <article className="min-h-[210px] rounded-2xl border border-[rgba(113,136,189,.28)] bg-[#0c1528] p-6 text-left">
              <p className="inline-flex items-center gap-2 rounded-xl border border-[rgba(113,136,189,.28)] bg-white/5 px-3.5 py-2 text-[15px] text-[#e9edf8]">
                <span className="text-[14px]">⚡</span>
                Eğitim
              </p>
              <p className="mt-10 text-[15px] leading-[1.72] text-[#d6ddef]">Universitas Teknologi Digital - 2019 - 2023 GPA: 3.85 / 4.00, İlgili Dersler: Veri Yapıları, Web Geliştirme, Yazılım Mühendisliği, Bulut Bilişim Aktiviteler: Kodlama Kulübü Üyesi, Bitirme Projesinde Lider Geliştirici</p>
            </article>
            <article className="min-h-[210px] rounded-2xl border border-[rgba(113,136,189,.28)] bg-[#0c1528] p-6 text-left">
              <p className="inline-flex items-center gap-2 rounded-xl border border-[rgba(113,136,189,.28)] bg-white/5 px-3.5 py-2 text-[15px] text-[#e9edf8]">
                <span className="text-[14px]">⚡</span>
                Eğitim
              </p>
            </article>
          </div>
        </section>

        <section className="py-[72px] text-center">
          <h2 className="mx-auto max-w-[22ch] font-[var(--font-plus-jakarta)] text-[clamp(34px,3.4vw,58px)] font-semibold leading-[1.15] tracking-[-.022em]">Teknoloji Topluluğuna Katkı</h2>
          <p className="mx-auto mt-3 max-w-[800px] text-[clamp(16px,1.05vw,19px)] leading-[1.7] text-[#b4bfd6]">Proje geliştirmek dışında açık kaynak araçlara katkı sağlıyor, bilgi paylaşıyor ve geliştirici topluluğunu destekliyorum.</p>
          <article className="group relative mx-auto mt-7 min-h-[240px] max-w-[1320px] overflow-hidden rounded-[20px] border border-[rgba(143,156,188,.35)]">
            <Image
              src="/images/community.jpg"
              alt="Topluluk etkinliği ve networking"
              width={1600}
              height={900}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(72,11,24,.72),rgba(17,29,56,.76))]" />
            <div className="absolute left-5 top-4 text-left">
              <h3 className="font-[var(--font-plus-jakarta)] text-xl font-semibold">David Tan</h3>
              <p className="text-sm text-[#f0f2fb]">Müşteri</p>
            </div>
            <div className="absolute left-6 right-6 top-[78px] flex min-h-[84px] items-center justify-center rounded-[14px] border border-[rgba(143,156,188,.62)] bg-white/10 text-[clamp(22px,1.7vw,32px)] font-semibold">Pazar Geliri +1500%</div>
          </article>
        </section>

        <section className="relative mx-auto max-w-[1380px] py-[72px] text-center">
          <p className="mx-auto mt-3 max-w-[800px] text-[clamp(16px,1.05vw,19px)] leading-[1.7] text-[#b4bfd6]">Çalışma biçimimle ilgili sık sorulan sorular</p>
          <h2 className="mx-auto mt-2 max-w-[640px] font-[var(--font-plus-jakarta)] text-[clamp(34px,3.4vw,58px)] font-semibold leading-[1.15] tracking-[-.022em]">Sıkça Sorulan Sorular</h2>
          <div className="mt-8 text-left">
            {faqItems.map((item, idx) => (
              <article key={item.q} className="border-t border-[rgba(113,136,189,.46)] py-5">
                <button type="button" onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)} className="flex w-full items-center justify-between text-left text-[clamp(20px,1.5vw,28px)] font-medium">
                  <span>{item.q}</span>
                  <span>{openFaq === idx ? "-" : "+"}</span>
                </button>
                {openFaq === idx && <p className="mt-2 max-w-[1160px] text-[15px] leading-[1.72] text-[#ced8ec]">{item.a}</p>}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-4">
          <div className="relative mt-5 flex min-h-[340px] flex-col items-center justify-center rounded-[30px] border border-[rgba(113,136,189,.28)] bg-[radial-gradient(circle_at_center,rgba(255,255,255,.09)_2px,transparent_2px)_0_0/64px_64px,#111c34] text-center">
            <h2 className="mx-auto max-w-[22ch] font-[var(--font-plus-jakarta)] text-[clamp(34px,3.4vw,58px)] font-semibold leading-[1.15] tracking-[-.022em]">Birlikte harika bir şey inşa edelim.</h2>
            <p className="mt-2 max-w-[680px] text-base leading-[1.75] text-[#d2dbef]">İster iş birliği yapmak, ister birlikte çalışmak, ister sadece selam vermek iste. Bana her zaman ulaşabilirsin.</p>
            <a className="mt-5 inline-flex h-[52px] min-w-[190px] items-center justify-center rounded-[14px] border border-transparent bg-[linear-gradient(180deg,#636bf1_0%,#555ddb_100%)] px-4 text-base font-semibold shadow-[0_0_22px_rgba(98,108,240,.45)] transition hover:-translate-y-0.5" href="mailto:hello@yusufcan.dev">Mesaj Gönder</a>
          </div>
        </section>

        <footer className="relative py-12">
          <div className="flex items-center justify-between gap-4">
            <BrandLogo footer />
            <div className="flex gap-3.5">
              <a href="#" className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#dce4f8] text-[#dce4f8]">X</a>
              <a href="#" className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#dce4f8] text-[#dce4f8]">f</a>
              <a href="#" className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#dce4f8] text-[#dce4f8]">ig</a>
            </div>
          </div>

          <div className="pointer-events-none absolute left-0 right-0 top-[145px] text-center text-[clamp(120px,14vw,260px)] font-bold tracking-[.08em] text-[rgba(147,164,196,.12)]">YSFLX</div>

          <div className="relative z-10 mt-8 grid gap-6 md:grid-cols-5">
            {footerColumns.map((col) => (
              <div key={col.title + col.links[0]}>
                <h4 className="mb-2.5 font-[var(--font-plus-jakarta)] text-lg font-semibold">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-[#d4ddf0]">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-8 flex flex-col gap-3 border-t border-[rgba(113,136,189,.46)] pt-4 md:flex-row md:items-center md:justify-between">
            <p className="text-[13px] text-[#d4ddf0]">Telif Hakkı © 2026 ysflx - Yazılım Mühendisi Portfolyosu</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-[13px] text-[#d4ddf0]">Hizmet Şartları</a>
              <a href="#" className="text-[13px] text-[#d4ddf0]">API</a>
              <a href="#" className="text-[13px] text-[#d4ddf0]">Veri İşleme Sözleşmesi</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
