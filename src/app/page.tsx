"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navButtons = ["Benimle İletişime Geç", "Projeni Başlat"];

const experienceCards = [
  {
    title: "Guohong Lazer 2025 - Günümüz",
    text: "Katkılar: E-ticaret için React ve TypeScript ile dinamik kullanıcı arayüzleri geliştirdim. Kod bölme ve performans optimizasyonu ile sayfa yükleme sürelerini %40 iyileştirdim.",
    referenceUrl: "https://guohongshop.com.tr",
    featured: true,
  },
];

const serviceCards = [
  {
    title: "Modern Web Tasarım",
    text: "Web siten tüm cihazlarda sorunsuz çalışır. Telefon, tablet ve bilgisayar uyumluluğunu eksiksiz şekilde sağlıyorum.",
  },
  {
    title: "Responsive (Mobil Uyumlu) Geliştirme",
    text: "Web siten tüm cihazlarda sorunsuz çalışır. Telefon, tablet ve bilgisayar uyumluluğunu eksiksiz şekilde sağlıyorum.",
  },
  {
    title: "Özel Proje Geliştirme",
    text: "İhtiyacına özel çözümler üretiyorum. Hazır kalıplar yerine tamamen sana uygun, özgün projeler geliştiriyorum.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Keşif ve Kapsam",
    text: "Hedef, kullanıcı ve teknik gereksinimleri netleştirip doğru kapsamı belirliyorum.",
  },
  {
    step: "02",
    title: "Mimari ve Tasarım",
    text: "Bileşen yapısı, veri akışı ve ekran kurgusunu sürdürülebilir bir temel üzerine kuruyorum.",
  },
  {
    step: "03",
    title: "Geliştirme ve Test",
    text: "Yüksek kalite kod, performans optimizasyonları ve kritik senaryolarda test yaklaşımıyla ilerliyorum.",
  },
  {
    step: "04",
    title: "Yayın ve İyileştirme",
    text: "Yayına alma, ölçümleme ve kullanıcı geri bildirimlerine göre sürekli iyileştirme döngüsü kuruyorum.",
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
  { title: "Ürün", links: ["Özellikler", "Entegrasyonlar", "Fiyatlandırma"] },
  { title: "Şirket", links: ["Hakkımızda", "Blog", "Kariyer", "Müşteriler"] },
  { title: "Kaynaklar", links: ["Topluluk", "İletişim"] },
  { title: "Geliştiriciler", links: ["API","GitHub"] },
];

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <a
      href="#top"
      aria-label="ysflx"
      className="inline-flex min-w-[196px] items-center justify-center gap-3 rounded-[14px] border border-[rgba(133,153,210,.35)] bg-[linear-gradient(180deg,rgba(25,36,66,.42),rgba(13,22,43,.35))] px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_8px_22px_rgba(7,12,24,.35)] backdrop-blur"
    >
      <span
        className={`inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-[12px] border ${
          footer
            ? "border-[rgba(202,214,255,.25)] bg-transparent"
            : "border-[rgba(123,142,255,.28)] bg-transparent"
        }`}
      >
        <Image
          src="/logos/asd.png"
          alt="ysflx logo"
          width={36}
          height={36}
          className="h-[36px] w-[36px] object-contain opacity-75"
        />
      </span>
      <span className={`font-[var(--font-plus-jakarta)] text-[clamp(28px,1.8vw,34px)] font-bold lowercase tracking-[.01em] ${footer ? "text-[#f4f7fe]" : "text-[#7a83ff]"}`}>
        ysflx
      </span>
    </a>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isDataProcessingOpen, setIsDataProcessingOpen] = useState(false);
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
    if (!isContactOpen && !isTermsOpen && !isPrivacyOpen && !isDataProcessingOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsContactOpen(false);
        setIsTermsOpen(false);
        setIsPrivacyOpen(false);
        setIsDataProcessingOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isContactOpen, isTermsOpen, isPrivacyOpen, isDataProcessingOpen]);

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
              Karmaşık fikirleri performanslı ve kullanıcı dostu web uygulamalarına dönüştüren bir yazılımcıyım. Aklında ne varsa gerçeğe dökmek için neden bekleyesin?
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <a href="#contact" className="inline-flex h-[52px] min-w-[190px] items-center justify-center rounded-[14px] border border-[rgba(113,136,189,.28)] bg-[rgba(8,17,34,.86)] px-4 text-base font-semibold transition hover:-translate-y-0.5">Ücretsiz Ön Görüşme</a>
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
                  Hızlı, faydalı ve sürdürülebilir projeler geliştiriyorum.
                </h2>
              </div>
              <div>
                <p className="max-w-[70ch] text-[clamp(16px,1vw,18px)] leading-[1.8] text-[#e7ecf9]">
                  Merhaba, ben Yusuf. Yazılım geliştirme alanında kendimi sürekli geliştiren ve modern web teknolojilerine odaklanan bir geliştiriciyim. Özellikle frontend tarafında, kullanıcı deneyimini ön planda tutan, sade ve etkili arayüzler tasarlamayı seviyorum.
                </p>
                <p className="mt-3 max-w-[70ch] text-[clamp(16px,1vw,18px)] leading-[1.8] text-[#b7c2d9]">
                  Şu anda React ve modern framework’ler üzerinde çalışarak kendimi bir üst seviyeye taşımayı hedefliyorum.

Gerçek projeler üretmeyi ve öğrendiklerimi uygulamaya dökmeyi önemsiyorum. Bu yüzden hem bireysel çalışmalar hem de iş odaklı projeler geliştirerek portföyümü sürekli büyütüyorum.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 animate-[riseIn_540ms_cubic-bezier(0.23,1,0.32,1)_both] [animation-delay:90ms]">
          <div className="text-center">
            <h2 className="mx-auto max-w-[22ch] font-[var(--font-plus-jakarta)] text-[clamp(34px,3.4vw,58px)] font-semibold leading-[1.15] tracking-[-.022em]">
              Neler Sunuyorum
            </h2>
            <p className="mx-auto mt-3 max-w-[840px] text-[clamp(16px,1.05vw,19px)] leading-[1.7] text-[#b4bfd6]">
              Ürünün fikrinden yayına alınmasına kadar teknik kaliteyi ve iş hedefini birlikte büyüten bir geliştirme modeli.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {serviceCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-[rgba(113,136,189,.28)] bg-[linear-gradient(145deg,rgba(12,21,40,.95),rgba(8,16,31,.94))] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[rgba(140,162,231,.55)]"
              >
                <h3 className="font-[var(--font-plus-jakarta)] text-[clamp(22px,1.45vw,30px)] font-semibold leading-[1.24] text-[#f4f7ff]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.74] text-[#d0daee]">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-12 animate-[riseIn_540ms_cubic-bezier(0.23,1,0.32,1)_both] [animation-delay:110ms]">
          <div className="text-center">
            <h2 className="mx-auto max-w-[22ch] font-[var(--font-plus-jakarta)] text-[clamp(34px,3.4vw,58px)] font-semibold leading-[1.15] tracking-[-.022em]">
              Çalışma Sürecim
            </h2>
            <p className="mx-auto mt-3 max-w-[840px] text-[clamp(16px,1.05vw,19px)] leading-[1.7] text-[#b4bfd6]">
              Hızlı başlatıp kontrollü ilerleyen, riskleri erkenden görünür kılan net bir teslim akışı.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-[rgba(113,136,189,.28)] bg-[rgba(8,16,32,.65)] p-5 text-left"
              >
                <p className="inline-flex rounded-full border border-[rgba(132,154,226,.45)] bg-[rgba(113,126,210,.15)] px-3 py-1 text-xs font-semibold tracking-[.08em] text-[#c7d4fa]">
                  ADIM {item.step}
                </p>
                <h3 className="mt-3 font-[var(--font-plus-jakarta)] text-[clamp(21px,1.3vw,28px)] font-semibold leading-[1.3] text-[#eef3ff]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-[#cbd7ef]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="py-14 text-center animate-[riseIn_540ms_cubic-bezier(0.23,1,0.32,1)_both] [animation-delay:120ms]">
          <h2 className="mx-auto max-w-[22ch] font-[var(--font-plus-jakarta)] text-[clamp(34px,3.4vw,58px)] font-semibold leading-[1.15] tracking-[-.022em]">Ürettiğim, liderlik ettiğim ve büyüdüğüm yolculuk.</h2>
          <p className="mx-auto mt-3 max-w-[800px] text-[clamp(16px,1.05vw,19px)] leading-[1.7] text-[#b4bfd6]">Geliştirmek, yayına almak ve ölçeklemek için kullandığım araçlar.</p>
          <div
            className={`mt-8 grid gap-4 ${
              experienceCards.length === 1
                ? "mx-auto max-w-[980px] grid-cols-1"
                : "md:grid-cols-3"
            }`}
          >
            {experienceCards.map((card) => (
              <article
                key={card.title}
                className={`rounded-2xl border bg-[#0c1528] p-6 text-left transition hover:-translate-y-0.5 ${
                  card.featured
                    ? "border-[rgba(104,126,228,.8)]"
                    : "border-[rgba(113,136,189,.28)]"
                } ${experienceCards.length === 1 ? "p-8 md:p-10" : ""}`}
              >
                <h3 className="font-[var(--font-plus-jakarta)] text-[clamp(22px,1.45vw,30px)] font-semibold leading-[1.24]">{card.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.72] text-[#dbe2f4]">{card.text}</p>
                {"referenceUrl" in card && card.referenceUrl && (
                  <a
                    href={card.referenceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex rounded-full border border-[rgba(132,154,226,.45)] bg-[rgba(113,126,210,.12)] px-4 py-2 text-sm font-semibold text-[#d8e3ff] transition hover:border-[rgba(160,178,240,.7)] hover:bg-[rgba(113,126,210,.2)]"
                  >
                    Referans Siteyi Gör
                  </a>
                )}
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
            <article className="group min-h-[500px] bg-[rgba(9,16,30,.9)] p-6 text-left">
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
              <p className="mt-10 text-[15px] leading-[1.72] text-[#d6ddef]">Konya Teknik Üniversitesi Meslek Yüksekokulu Bilgisayar Programcılığı - 2021 - 2023 </p>
            </article>
            <article className="min-h-[210px] rounded-2xl border border-[rgba(113,136,189,.28)] bg-[#0c1528] p-6 text-left">
              <p className="inline-flex items-center gap-2 rounded-xl border border-[rgba(113,136,189,.28)] bg-white/5 px-3.5 py-2 text-[15px] text-[#e9edf8]">
                <span className="text-[14px]">⚡</span>
                Staj
              </p>
              <p className="mt-10 text-[15px] leading-[1.72] text-[#d6ddef]">Kapsül Teknoloji Yazılım Geliştirme Stajyeri - 2022 Yaz Dönemi, Meram Belediyesi Bilgi İşlem Stajyeri</p>
            </article>
          </div>
        </section>

        <section className="py-[72px] text-center">
          <h2 className="mx-auto max-w-[22ch] font-[var(--font-plus-jakarta)] text-[clamp(34px,3.4vw,58px)] font-semibold leading-[1.15] tracking-[-.022em]">Müşteri Yorumları</h2>
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
              <h3 className="font-[var(--font-plus-jakarta)] text-xl font-semibold">Arafat Uygur</h3>
              <p className="text-sm text-[#f0f2fb]">Müşteri</p>
            </div>
            <div className="absolute left-6 right-6 top-[78px] flex min-h-[84px] items-center justify-center rounded-[14px] border border-[rgba(143,156,188,.62)] bg-white/10 text-md font-semibold">Yusuf ile e-ticaret sitemiz için çalışma fırsatı bulduk ve açıkçası süreç beklediğimden çok daha iyi ilerledi. Ne istediğimizi hızlıca anlayıp bize hem tasarım hem de kullanım açısından gerçekten güzel bir site ortaya çıkardı. Özellikle mobil uyumluluk ve site hızı konusunda çok memnun kaldık.

Süreç boyunca sürekli iletişimde kaldı, her aşamada bilgilendirme yaptı ve taleplerimizi hızlıca çözdü. Sadece verilen işi yapmakla kalmayıp kendi önerileriyle projeyi daha da geliştirdi.

Gönül rahatlığıyla çalışılabilecek, işini ciddiye alan bir yazılımcı. İleride tekrar çalışmayı düşünüyoruz.</div>
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
            <h2 className="mx-auto max-w-[22ch] font-[var(--font-plus-jakarta)] text-[clamp(34px,3.4vw,58px)] font-semibold leading-[1.15] tracking-[-.022em]">Birlikte projeniz için bir adım atalım.</h2>
            <p className="mt-2 max-w-[680px] text-base leading-[1.75] text-[#d2dbef]">İster iş birliği yapmak, ister birlikte çalışmak, ister sadece selam vermek iste. Bana her zaman ulaşabilirsin. En yakın zamanda dönüş yapacağım. </p>
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

          <div className="pointer-events-none absolute left-0 right-0 top-[92px] flex justify-center">
            <Image
              src="/logos/asd.png"
              alt=""
              aria-hidden
              width={980}
              height={420}
              className="h-auto w-[min(86vw,980px)] object-contain opacity-[0.09] mix-blend-screen saturate-0 brightness-150"
            />
          </div>

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
            <p className="text-[13px] text-[#d4ddf0]">Telif Hakkı © 2026 ysflx - Tüm Hakları Saklıdır.</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setIsTermsOpen(true);
                }}
                className="text-[13px] text-[#d4ddf0]"
              >
                Hizmet Şartları
              </a>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setIsPrivacyOpen(true);
                }}
                className="text-[13px] text-[#d4ddf0]"
              >
                Gİzlilik Sözleşmesi
              </a>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setIsDataProcessingOpen(true);
                }}
                className="text-[13px] text-[#d4ddf0]"
              >
                Veri İşleme Sözleşmesi
              </a>
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

      {isTermsOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[101] flex items-center justify-center bg-[rgba(3,8,18,.52)] backdrop-blur-md p-4"
          onClick={() => setIsTermsOpen(false)}
        >
          <div
            className="w-full max-w-[820px] rounded-2xl border border-[rgba(131,154,223,.35)] bg-[linear-gradient(160deg,rgba(18,30,55,.98),rgba(10,18,36,.98))] p-6 shadow-[0_20px_60px_rgba(0,0,0,.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-[var(--font-plus-jakarta)] text-2xl font-semibold">Hizmet Şartları</h3>
              <button
                type="button"
                onClick={() => setIsTermsOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(131,154,223,.35)] text-lg text-[#dbe6ff] transition hover:bg-white/10"
                aria-label="Hizmet şartlarını kapat"
              >
                ×
              </button>
            </div>

            <div className="max-h-[68vh] space-y-4 overflow-y-auto pr-1 text-left text-[15px] leading-[1.75] text-[#d6dff4]">
              <section>
                <h4 className="font-[var(--font-plus-jakarta)] text-lg font-semibold text-white">1. Hizmet Kapsamı</h4>
                <p className="mt-1">
                  Sunulan hizmetler; web geliştirme, teknik danışmanlık, bakım ve performans iyileştirme süreçlerini kapsar. Proje kapsamı,
                  teklif ve mutabakata göre netleştirilir.
                </p>
              </section>

              <section>
                <h4 className="font-[var(--font-plus-jakarta)] text-lg font-semibold text-white">2. Teslim ve Revize</h4>
                <p className="mt-1">
                  Teslim tarihleri proje planına göre belirlenir. Talep edilen revizyonlar, anlaşmada belirtilen kapsam ve süre sınırları
                  içinde uygulanır.
                </p>
              </section>

              <section>
                <h4 className="font-[var(--font-plus-jakarta)] text-lg font-semibold text-white">3. Sorumluluk ve Kullanım</h4>
                <p className="mt-1">
                  Geliştirilen çözümün doğru ve güvenli kullanımı müşterinin sorumluluğundadır. Üçüncü taraf servis kaynaklı kesintilerden
                  doğan etkilerde, teknik destek kapsamında yönlendirme sağlanır.
                </p>
              </section>

              <section>
                <h4 className="font-[var(--font-plus-jakarta)] text-lg font-semibold text-white">4. İletişim</h4>
                <p className="mt-1">
                  Şartlarla ilgili talepler için iletişim formunu kullanarak benimle doğrudan iletişime geçebilirsin.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}

      {isPrivacyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[101] flex items-center justify-center bg-[rgba(3,8,18,.52)] backdrop-blur-md p-4"
          onClick={() => setIsPrivacyOpen(false)}
        >
          <div
            className="w-full max-w-[820px] rounded-2xl border border-[rgba(131,154,223,.35)] bg-[linear-gradient(160deg,rgba(18,30,55,.98),rgba(10,18,36,.98))] p-6 shadow-[0_20px_60px_rgba(0,0,0,.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-[var(--font-plus-jakarta)] text-2xl font-semibold">Gizlilik Sözleşmesi</h3>
              <button
                type="button"
                onClick={() => setIsPrivacyOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(131,154,223,.35)] text-lg text-[#dbe6ff] transition hover:bg-white/10"
                aria-label="Gizlilik sözleşmesini kapat"
              >
                ×
              </button>
            </div>

            <div className="max-h-[68vh] space-y-4 overflow-y-auto pr-1 text-left text-[15px] leading-[1.75] text-[#d6dff4]">
              <section>
                <h4 className="font-[var(--font-plus-jakarta)] text-lg font-semibold text-white">1. Toplanan Bilgiler</h4>
                <p className="mt-1">
                  İletişim formu üzerinden ad soyad, telefon, e-posta ve mesaj bilgileri yalnızca iletişim ve teklif süreçlerini yürütmek için
                  alınır.
                </p>
              </section>
              <section>
                <h4 className="font-[var(--font-plus-jakarta)] text-lg font-semibold text-white">2. Veri Kullanımı</h4>
                <p className="mt-1">
                  Paylaşılan bilgiler, üçüncü taraflara satılmaz veya pazarlama amacıyla izinsiz kullanılmaz. Veriler yalnızca hizmet sunumu
                  kapsamında işlenir.
                </p>
              </section>
              <section>
                <h4 className="font-[var(--font-plus-jakarta)] text-lg font-semibold text-white">3. Güvenlik</h4>
                <p className="mt-1">
                  Kişisel verilerin korunması için güncel güvenlik önlemleri uygulanır. Yetkisiz erişim risklerini azaltmak için teknik
                  kontroller düzenli olarak gözden geçirilir.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}

      {isDataProcessingOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[101] flex items-center justify-center bg-[rgba(3,8,18,.52)] backdrop-blur-md p-4"
          onClick={() => setIsDataProcessingOpen(false)}
        >
          <div
            className="w-full max-w-[820px] rounded-2xl border border-[rgba(131,154,223,.35)] bg-[linear-gradient(160deg,rgba(18,30,55,.98),rgba(10,18,36,.98))] p-6 shadow-[0_20px_60px_rgba(0,0,0,.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-[var(--font-plus-jakarta)] text-2xl font-semibold">Veri İşleme Sözleşmesi</h3>
              <button
                type="button"
                onClick={() => setIsDataProcessingOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(131,154,223,.35)] text-lg text-[#dbe6ff] transition hover:bg-white/10"
                aria-label="Veri işleme sözleşmesini kapat"
              >
                ×
              </button>
            </div>

            <div className="max-h-[68vh] space-y-4 overflow-y-auto pr-1 text-left text-[15px] leading-[1.75] text-[#d6dff4]">
              <section>
                <h4 className="font-[var(--font-plus-jakarta)] text-lg font-semibold text-white">1. İşleme Amacı</h4>
                <p className="mt-1">
                  İletilen kişisel veriler, proje değerlendirme, teklif hazırlama ve iletişim süreçlerinin yürütülmesi amacıyla işlenir.
                </p>
              </section>
              <section>
                <h4 className="font-[var(--font-plus-jakarta)] text-lg font-semibold text-white">2. Saklama Süresi</h4>
                <p className="mt-1">
                  Veriler, hizmet ilişkisi boyunca ve yasal yükümlülüklerin gerektirdiği süre kadar saklanır; süre sonunda güvenli şekilde
                  silinir veya anonimleştirilir.
                </p>
              </section>
              <section>
                <h4 className="font-[var(--font-plus-jakarta)] text-lg font-semibold text-white">3. Veri Sahibi Hakları</h4>
                <p className="mt-1">
                  Veri sahipleri; erişim, düzeltme, silme ve işleme kısıtlama taleplerini iletişim kanalları üzerinden iletebilir.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
