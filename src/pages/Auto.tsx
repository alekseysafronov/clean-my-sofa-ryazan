import { Phone, MapPin, Mail, Check, Scissors, Sparkles, Shield, Award, ArrowRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SeoHead from "@/components/SeoHead";
import heroInterior from "@/assets/auto/hero-interior.jpg";
import serviceStitching from "@/assets/auto/service-stitching.jpg";
import serviceCeiling from "@/assets/auto/service-ceiling.jpg";
import servicePlastic from "@/assets/auto/service-plastic.jpg";
import serviceRepair from "@/assets/auto/service-repair.jpg";
import serviceCeramic from "@/assets/auto/service-ceramic.jpg";

const PHONE_DISPLAY = "8 (965) 7-11111-7";
const PHONE_LINK = "tel:+79657111117";
const EMAIL = "info@autodressmaking.ru";
const ADDRESS = "МОГЭС, д. 13, НИКА ПАРК";

const additionalServices = [
  "Шумоизоляция",
  "Полировка",
  "Керамика",
  "Тонировка",
  "Аквапринт",
  "Химчистка салона",
  "Покраска натуральной кожи",
  "Натуральный карбон",
  "Установка доп. оборудования",
];

const materials = [
  { name: "Алькантара", origin: "Италия · Япония" },
  { name: "Натуральная кожа", origin: "Германия · Италия · Австрия · Россия" },
  { name: "Premium Экокожа", origin: "на микрофибре" },
  { name: "Потолочная ткань", origin: "Германия" },
  { name: "Замша искусственная", origin: "премиум сегмент" },
  { name: "Натуральный карбон", origin: "по запросу" },
];

const services = [
  {
    title: "Перетяжка потолков",
    image: serviceCeiling,
    desc: "Перетяжка автомобильных потолков любой сложности. В комплекс входит: потолок, стойки, козырьки. Возможна перетяжка только потолка.",
    points: ["Алькантара Италия / Япония", "Потолочная ткань Германия", "Premium экокожа на микрофибре"],
  },
  {
    title: "Ремонт сидений",
    image: serviceRepair,
    desc: "Восстановление поролона, укрепление фасадных частей, изменение форм, частичная замена деталей обшивки.",
    points: ["Латексированный и прорезиненный поролон", "Натуральная кожа, экокожа, ткань", "Индивидуальный подход"],
  },
  {
    title: "Перетяжка пластика в кожу",
    image: servicePlastic,
    desc: "Перетяжка пластика салона автомобиля любой сложности. Алькантара, натуральная кожа, экокожа Premium.",
    points: ["Безупречные ровные швы", "Отделочная строчка по выбору", "Полная или частичная перетяжка"],
  },
  {
    title: "Профессиональный пошив салона",
    image: serviceStitching,
    desc: "Полный пошив салона с красивой ровной отделочной строчкой. Любые сложные формы и индивидуальный дизайн.",
    points: ["Diamond stitching", "Контрастная нить", "Эксклюзивные паттерны"],
  },
];

const benefits = [
  { icon: Award, title: "Безупречное качество", desc: "Каждый шов — произведение искусства" },
  { icon: Shield, title: "Гарантия на работу", desc: "Используем только премиум материалы" },
  { icon: Sparkles, title: "Ощущение исключительности", desc: "Ваш салон — отражение характера" },
  { icon: Scissors, title: "Сложные формы", desc: "Перешиваем детали любой геометрии" },
];

const Auto = () => {
  return (
    <div className="min-h-screen bg-[hsl(0_0%_4%)] text-[hsl(40_20%_92%)] font-body antialiased selection:bg-[hsl(38_85%_55%)] selection:text-black">
      <SeoHead
        title="VIP-Ателье AutoDressMaking — премиум пошив салона авто"
        description="Профессиональный пошив салона, перетяжка потолков, ремонт сидений, кожа, алькантара. Безупречное качество, ощущение исключительности."
        ogImage="/og-image.jpg"
      />

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-[hsl(38_85%_55%/0.15)]">
        <div className="container max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2 group">
            <span className="font-heading font-extrabold text-xl tracking-tight text-white">
              AUTO<span className="text-[hsl(38_85%_55%)]">DRESS</span>MAKING
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-widest text-white/70">
            <a href="#services" className="hover:text-[hsl(38_85%_55%)] transition-colors">Услуги</a>
            <a href="#materials" className="hover:text-[hsl(38_85%_55%)] transition-colors">Материалы</a>
            <a href="#extra" className="hover:text-[hsl(38_85%_55%)] transition-colors">Доп. услуги</a>
            <a href="#contacts" className="hover:text-[hsl(38_85%_55%)] transition-colors">Контакты</a>
          </nav>
          <a
            href={PHONE_LINK}
            className="hidden md:inline-flex items-center gap-2 border border-[hsl(38_85%_55%)] text-[hsl(38_85%_55%)] hover:bg-[hsl(38_85%_55%)] hover:text-black transition-all px-5 py-2.5 rounded-sm text-sm font-semibold tracking-wide"
          >
            <Phone className="w-4 h-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroInterior} alt="Премиум салон авто" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10 pb-24 pt-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
              <div className="h-px w-12 bg-[hsl(38_85%_55%)]" />
              <span className="text-[hsl(38_85%_55%)] text-xs uppercase tracking-[0.4em] font-semibold">VIP · Ателье</span>
            </div>

            <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 text-white animate-fade-in-up">
              AUTO<br />
              <span className="italic font-light text-[hsl(38_85%_55%)]">DressMaking</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-4 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Профессиональный пошив салона автомобиля.
            </p>
            <p className="text-base md:text-lg text-white/50 italic mb-12 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Наше безупречное качество — Ваше ощущение исключительности.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a
                href={PHONE_LINK}
                className="group inline-flex items-center justify-center gap-3 bg-[hsl(38_85%_55%)] text-black font-heading font-bold px-8 py-4 rounded-sm text-sm uppercase tracking-widest hover:bg-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                Бесплатная консультация
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 rounded-sm text-sm uppercase tracking-widest hover:border-[hsl(38_85%_55%)] hover:text-[hsl(38_85%_55%)] transition-colors"
              >
                Наши услуги
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest writing-mode-vertical">
          <div className="h-12 w-px bg-white/20" />
          <span>Scroll</span>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-[hsl(0_0%_4%)] p-8 lg:p-10 group hover:bg-[hsl(0_0%_6%)] transition-colors">
                <b.icon className="w-10 h-10 text-[hsl(38_85%_55%)] mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.2} />
                <h3 className="font-heading font-bold text-xl text-white mb-3">{b.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 bg-[hsl(0_0%_6%)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 md:mb-24">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[hsl(38_85%_55%)]" />
              <span className="text-[hsl(38_85%_55%)] text-xs uppercase tracking-[0.4em] font-semibold">Услуги</span>
            </div>
            <h2 className="font-heading font-extrabold text-4xl md:text-6xl text-white leading-tight">
              Перешиваем детали авто <span className="italic font-light text-[hsl(38_85%_55%)]">любой сложной формы</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            {services.map((s) => (
              <article key={s.title} className="bg-[hsl(0_0%_6%)] group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <h3 className="absolute bottom-6 left-8 right-8 font-heading font-extrabold text-2xl md:text-3xl text-white">
                    {s.title}
                  </h3>
                </div>
                <div className="p-8 lg:p-10">
                  <p className="text-white/60 leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-white/80 text-sm">
                        <Check className="w-4 h-4 text-[hsl(38_85%_55%)] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Premium block */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img src={serviceStitching} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>
        <div className="container max-w-5xl mx-auto px-6 relative z-10 text-center">
          <Sparkles className="w-12 h-12 text-[hsl(38_85%_55%)] mx-auto mb-8" strokeWidth={1} />
          <p className="font-heading text-3xl md:text-5xl lg:text-6xl text-white leading-tight italic font-light">
            «Красивые ровные швы <br className="hidden md:block" />с отделочной строчкой —<br />
            <span className="not-italic font-extrabold text-[hsl(38_85%_55%)]">наша подпись.»</span>
          </p>
          <div className="h-px w-24 bg-[hsl(38_85%_55%)] mx-auto mt-12" />
          <p className="text-white/40 text-xs uppercase tracking-[0.4em] mt-6">VIP AutoDressMaking</p>
        </div>
      </section>

      {/* Materials */}
      <section id="materials" className="py-24 md:py-32 bg-[hsl(0_0%_6%)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[hsl(38_85%_55%)]" />
                <span className="text-[hsl(38_85%_55%)] text-xs uppercase tracking-[0.4em] font-semibold">Материалы</span>
              </div>
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white leading-tight mb-8">
                Только лучшее <span className="italic font-light text-[hsl(38_85%_55%)]">из Европы и Азии</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Точный расчёт стоимости после осмотра автомобиля и выбора материала. Мы работаем с поставщиками
                премиум-сегмента и подбираем фактуру и цвет под характер вашего авто.
              </p>
              <p className="text-white/40 italic">Консультация бесплатная и ни к чему Вас не обязывает.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-white/5">
              {materials.map((m) => (
                <div key={m.name} className="bg-[hsl(0_0%_6%)] p-6 group hover:bg-[hsl(0_0%_8%)] transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-heading font-bold text-lg text-white">{m.name}</h4>
                    <Star className="w-4 h-4 text-[hsl(38_85%_55%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-white/40 text-xs uppercase tracking-widest">{m.origin}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section id="extra" className="py-24 md:py-32 border-t border-white/5">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[hsl(38_85%_55%)]" />
              <span className="text-[hsl(38_85%_55%)] text-xs uppercase tracking-[0.4em] font-semibold">Дополнительно</span>
            </div>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white leading-tight">
              Полный комплекс <span className="italic font-light text-[hsl(38_85%_55%)]">в одном месте</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {additionalServices.map((s, i) => (
              <div
                key={s}
                className="bg-[hsl(0_0%_4%)] hover:bg-[hsl(0_0%_8%)] transition-colors p-8 flex items-center gap-6 group"
              >
                <span className="font-heading text-3xl font-extralight text-[hsl(38_85%_55%)]/40 group-hover:text-[hsl(38_85%_55%)] transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-heading font-semibold text-lg text-white">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase ceramic */}
      <section className="relative py-24 md:py-32 bg-[hsl(0_0%_6%)] overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={serviceCeramic} alt="Керамическое покрытие" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[hsl(38_85%_55%)]" />
                <span className="text-[hsl(38_85%_55%)] text-xs uppercase tracking-[0.4em] font-semibold">Detailing</span>
              </div>
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white leading-tight mb-6">
                Сохраним блеск <span className="italic font-light text-[hsl(38_85%_55%)]">на годы</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Полировка кузова, керамическое покрытие, тонировка стёкол и аквапринт — выполняем в студии параллельно с пошивом
                салона. Один визит, идеальный автомобиль.
              </p>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-3 text-[hsl(38_85%_55%)] border-b border-[hsl(38_85%_55%)] pb-2 text-sm uppercase tracking-widest font-semibold hover:text-white hover:border-white transition-colors"
              >
                Записаться <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts CTA */}
      <section id="contacts" className="py-24 md:py-32 bg-black border-t border-[hsl(38_85%_55%/0.15)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[hsl(38_85%_55%)]" />
                <span className="text-[hsl(38_85%_55%)] text-xs uppercase tracking-[0.4em] font-semibold">Запись</span>
              </div>
              <h2 className="font-heading font-extrabold text-4xl md:text-6xl text-white leading-tight mb-8">
                Запись <span className="italic font-light text-[hsl(38_85%_55%)]">на перешив</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-12 max-w-md">
                Консультация бесплатная и ни к чему Вас не обязывает. Приезжайте в студию или свяжитесь с нами в любом мессенджере.
              </p>

              <div className="space-y-8">
                <a href={PHONE_LINK} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 border border-[hsl(38_85%_55%)] flex items-center justify-center group-hover:bg-[hsl(38_85%_55%)] transition-colors">
                    <Phone className="w-5 h-5 text-[hsl(38_85%_55%)] group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Телефон</p>
                    <p className="font-heading font-bold text-2xl text-white group-hover:text-[hsl(38_85%_55%)] transition-colors">
                      {PHONE_DISPLAY}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 border border-white/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[hsl(38_85%_55%)]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Адрес</p>
                    <p className="font-heading font-bold text-xl text-white">{ADDRESS}</p>
                  </div>
                </div>

                <a href={`mailto:${EMAIL}`} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 border border-white/20 flex items-center justify-center group-hover:border-[hsl(38_85%_55%)] transition-colors">
                    <Mail className="w-5 h-5 text-[hsl(38_85%_55%)]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                    <p className="font-heading font-bold text-lg text-white group-hover:text-[hsl(38_85%_55%)] transition-colors">
                      {EMAIL}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-[hsl(0_0%_6%)] p-10 lg:p-14 border border-white/5">
              <h3 className="font-heading font-extrabold text-3xl text-white mb-2">Бесплатная консультация</h3>
              <p className="text-white/50 mb-10">Ответим в течение 15 минут</p>

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = PHONE_LINK;
                }}
              >
                <div>
                  <label className="block text-white/40 text-xs uppercase tracking-widest mb-3">Ваше имя</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-white/20 focus:border-[hsl(38_85%_55%)] outline-none py-3 text-white text-lg transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs uppercase tracking-widest mb-3">Телефон</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-transparent border-b border-white/20 focus:border-[hsl(38_85%_55%)] outline-none py-3 text-white text-lg transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs uppercase tracking-widest mb-3">Авто / задача</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 focus:border-[hsl(38_85%_55%)] outline-none py-3 text-white text-lg transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 group inline-flex items-center justify-center gap-3 bg-[hsl(38_85%_55%)] text-black font-heading font-bold px-8 py-5 text-sm uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Записаться
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-white/30 text-xs leading-relaxed pt-4">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-heading font-extrabold text-lg text-white">
            AUTO<span className="text-[hsl(38_85%_55%)]">DRESS</span>MAKING
          </p>
          <p className="text-white/40 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} VIP-Ателье · Все права защищены
          </p>
          <Link to="/" className="text-white/40 text-xs uppercase tracking-widest hover:text-[hsl(38_85%_55%)] transition-colors">
            ← На главную
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Auto;
