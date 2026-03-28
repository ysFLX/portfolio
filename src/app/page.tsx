"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navButtons = ["Benimle İletişime Geç", "Projeni Başlat"];

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

const skillShowcase = [
  { name: "TypeScript", src: "/logos/typescript.svg" },
  { name: "Next.js", src: "/logos/nextjs.svg" },
  { name: "HTML5", src: "/logos/html5.svg" },
  { name: "Docker", src: "/logos/docker.svg" },
  { name: "Tailwind", src: "/logos/tailwind.svg" },
  { name: "React", src: "/logos/react.svg" },
];

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
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [contactForm, setContactForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (!isContactOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsContactOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isContactOpen]);

  useEffect(() => {
    if (!isContactOpen || formMessage?.type !== "success") return;

    const timer = window.setTimeout(() => {
      setIsContactOpen(false);
      setFormMessage(null);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [isContactOpen, formMessage]);

  const handleContactChange = (field: "fullName" | "phone" | "email" | "subject" | "message", value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormMessage(null);
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });

      let data: { error?: string } = {};
      const contentType = response.headers.get("content-type") ?? "";
      if (contentType.includes("application/json")) {
        data = (await response.json()) as { error?: string };
      } else {
        const rawText = await response.text();
        if (!response.ok && rawText) {
          data.error = rawText;
        }
      }

      if (!response.ok) {
        throw new Error(data.error ?? "Mesaj gönderilemedi.");
      }

      setFormMessage({
        type: "success",
        text: "Mesajın başarıyla iletildi. En kısa sürede dönüş sağlayacağım.",
      });
      setContactForm({ fullName: "", phone: "", email: "", subject: "", message: "" });
    } catch (error) {
      setFormMessage({
        type: "error",
        text: error instanceof Error ? error.message : "Beklenmeyen bir hata oluştu.",
      });
    } finally {
      setIsSending(false);
    }
  };

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

        <section className="relative overflow-hidden py-12 animate-[riseIn_540ms_cubic-bezier(0.23,1,0.32,1)_both] [animation-delay:70ms]">
          <div className="rounded-2xl border border-[rgba(118,139,196,.18)] bg-[linear-gradient(135deg,rgba(20,31,58,.78),rgba(6,15,32,.72))] p-5 sm:p-6 md:p-7">
            <p className="inline-flex items-center gap-2 rounded-xl border border-[rgba(113,136,189,.28)] bg-white/5 px-3.5 py-2 text-[15px] text-[#e9edf8]">
              <span className="text-[14px]">⚡</span>
              Hakkımda
            </p>
            <div className="mt-4 grid items-start gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
              <div>
                <h2 className="max-w-[14ch] font-[var(--font-plus-jakarta)] text-[clamp(30px,2.25vw,46px)] font-semibold leading-[1.18] tracking-[-.02em]">
                  Hızlı, faydalı ve sürdürülebilir ürünler geliştiriyorum.
                </h2>
              </div>
              <div>
                <p className="max-w-[70ch] text-[clamp(16px,1vw,18px)] leading-[1.8] text-[#e7ecf9]">
                  Verimli, ölçeklenebilir ve kullanıcı dostu web uygulamaları geliştirmeye odaklanan bir yazılım mühendisiyim.
                  Yolculuğum, ürünlerin perde arkasında nasıl çalıştığına duyduğum merakla başladı ve zamanla gerçek iş etkisi
                  üreten bir kariyere dönüştü.
                </p>
                <p className="mt-3 max-w-[70ch] text-[clamp(16px,1vw,18px)] leading-[1.8] text-[#b7c2d9]">
                  Son yıllarda ürün web siteleri, dashboard sistemleri ve iç platformlarda çalıştım. Temiz mimari, akıcı kullanıcı
                  deneyimi ve ölçülebilir performans iyileştirmeleri benim için öncelik.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="py-14 text-center animate-[riseIn_540ms_cubic-bezier(0.23,1,0.32,1)_both] [animation-delay:120ms]">
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
        </section>

        <section className="relative overflow-hidden py-16 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(18deg,transparent_36%,rgba(128,136,230,.28)_52%,transparent_69%)] blur-[26px]" />
          <div className="pointer-events-none absolute left-6 top-10 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white/80">Mühendis</div>
          <div className="pointer-events-none absolute right-6 top-10 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white/80">Geliştirici</div>
          <h2 className="mx-auto max-w-[22ch] font-[var(--font-plus-jakarta)] text-[clamp(34px,3.4vw,58px)] font-semibold leading-[1.15] tracking-[-.022em]">Yetenekler &amp; Teknolojiler</h2>
          <p className="mx-auto mt-3 max-w-[800px] text-[clamp(16px,1.05vw,19px)] leading-[1.7] text-[#b4bfd6]">Geliştirmek, yayına almak ve ölçeklemek için kullandığım araçlar.</p>
          <div className="relative z-10 mt-12 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-14">
            {skillShowcase.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[rgba(113,136,189,.22)] bg-[rgba(8,16,32,.6)] p-3 transition duration-300 hover:-translate-y-1 hover:border-[rgba(140,162,231,.55)]">
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={52}
                    height={52}
                    className="h-[52px] w-[52px] object-contain"
                  />
                </div>
                <p className="text-sm font-semibold tracking-[.01em] text-[#d2dcf5]">{skill.name}</p>
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
                Staj
              </p>
              <p className="mt-10 text-[15px] leading-[1.72] text-[#d6ddef]">Yazılım Geliştirme Stajyeri - 2022 Yaz Dönemi, ABC Teknoloji. Dashboard bileşenleri geliştirdim, API entegrasyonlarında görev aldım ve performans iyileştirmeleri için frontend optimizasyonlarına katkı sundum.</p>
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
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="mt-5 inline-flex h-[52px] min-w-[190px] items-center justify-center rounded-[14px] border border-transparent bg-[linear-gradient(180deg,#636bf1_0%,#555ddb_100%)] px-4 text-base font-semibold shadow-[0_0_22px_rgba(98,108,240,.45)] transition hover:-translate-y-0.5"
            >
              Mesaj Gönder
            </button>
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

      {isContactOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(3,8,18,.52)] backdrop-blur-md p-4"
          onClick={() => setIsContactOpen(false)}
        >
          <div
            className="w-full max-w-[1040px] overflow-hidden rounded-2xl border border-[rgba(131,154,223,.35)] bg-[linear-gradient(160deg,rgba(18,30,55,.98),rgba(10,18,36,.98))] shadow-[0_20px_60px_rgba(0,0,0,.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid md:grid-cols-[0.92fr_1.08fr]">
              <div className="relative hidden min-h-[620px] md:block">
                <Image
                  src="/images/feature-team.jpg"
                  alt="Proje iş birliği görseli"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(170deg,rgba(7,12,24,.26),rgba(8,15,30,.85))]" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
                    Hızlı Geri Dönüş
                  </p>
                  <h4 className="mt-3 max-w-[16ch] font-[var(--font-plus-jakarta)] text-[32px] font-semibold leading-[1.2] text-white">
                    Projeni birlikte profesyonelce planlayalım.
                  </h4>
                  <p className="mt-2 max-w-[34ch] text-sm leading-[1.7] text-[#dbe6ff]">
                    Formu ilettikten sonra sana en kısa sürede dönüş yapıp kapsam, süre ve teknik yol haritasını netleştiriyorum.
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-[var(--font-plus-jakarta)] text-2xl font-semibold">Mesaj Gönder</h3>
                  <button
                    type="button"
                    onClick={() => setIsContactOpen(false)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(131,154,223,.35)] text-lg text-[#dbe6ff] transition hover:bg-white/10"
                    aria-label="Formu kapat"
                  >
                    ×
                  </button>
                </div>

                <form className="space-y-4" onSubmit={handleContactSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-1.5 text-sm text-[#c9d7f5]">
                      Ad Soyad
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Ad Soyad"
                        value={contactForm.fullName}
                        onChange={(event) => handleContactChange("fullName", event.target.value)}
                        required
                        className="w-full rounded-xl border border-[rgba(131,154,223,.3)] bg-[rgba(10,20,39,.8)] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[rgba(141,158,255,.8)]"
                      />
                    </label>
                    <label className="space-y-1.5 text-sm text-[#c9d7f5]">
                      Telefon
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+90 5xx xxx xx xx"
                        value={contactForm.phone}
                        onChange={(event) => handleContactChange("phone", event.target.value)}
                        required
                        className="w-full rounded-xl border border-[rgba(131,154,223,.3)] bg-[rgba(10,20,39,.8)] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[rgba(141,158,255,.8)]"
                      />
                    </label>
                    <label className="space-y-1.5 text-sm text-[#c9d7f5] sm:col-span-2">
                      E-posta
                      <input
                        type="email"
                        name="email"
                        placeholder="mail@ornek.com"
                        value={contactForm.email}
                        onChange={(event) => handleContactChange("email", event.target.value)}
                        required
                        className="w-full rounded-xl border border-[rgba(131,154,223,.3)] bg-[rgba(10,20,39,.8)] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[rgba(141,158,255,.8)]"
                      />
                    </label>
                  </div>

                  <label className="space-y-1.5 text-sm text-[#c9d7f5]">
                    Konu
                    <input
                      type="text"
                      name="subject"
                      placeholder="Proje konusu"
                      value={contactForm.subject}
                      onChange={(event) => handleContactChange("subject", event.target.value)}
                      required
                      className="w-full rounded-xl border border-[rgba(131,154,223,.3)] bg-[rgba(10,20,39,.8)] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[rgba(141,158,255,.8)]"
                    />
                  </label>

                  <label className="space-y-1.5 text-sm text-[#c9d7f5]">
                    Mesaj
                    <textarea
                      rows={5}
                      name="message"
                      placeholder="Mesajınızı yazın..."
                      value={contactForm.message}
                      onChange={(event) => handleContactChange("message", event.target.value)}
                      required
                      className="w-full rounded-xl border border-[rgba(131,154,223,.3)] bg-[rgba(10,20,39,.8)] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[rgba(141,158,255,.8)]"
                    />
                  </label>

                  {formMessage && (
                    <p
                      className={`rounded-lg border px-3 py-2 text-sm ${
                        formMessage.type === "success"
                          ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
                          : "border-rose-400/30 bg-rose-500/10 text-rose-200"
                      }`}
                    >
                      {formMessage.text}
                    </p>
                  )}

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="inline-flex h-11 min-w-[150px] items-center justify-center rounded-xl border border-transparent bg-[linear-gradient(180deg,#636bf1_0%,#555ddb_100%)] px-4 text-sm font-semibold text-white shadow-[0_0_18px_rgba(98,108,240,.45)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSending ? "Gönderiliyor..." : "Gönder"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
