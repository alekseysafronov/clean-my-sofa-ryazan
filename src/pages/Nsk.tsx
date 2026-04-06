import { useState, useEffect, useCallback } from "react";
import { Phone, ArrowRight, MapPin, Clock, MessageCircle, Send, ShieldCheck, Sparkles, Truck, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { applyPhoneMask, isPhoneComplete } from "@/lib/phoneMask";
import ConsentCheckbox from "@/components/ConsentCheckbox";
import SeoHead from "@/components/SeoHead";
import AnimatedSection from "@/components/AnimatedSection";
import OptimizedImage from "@/components/OptimizedImage";
import heroImage from "@/assets/hero-sofa.jpg";
import logo from "@/assets/logo.png";

import nskWork1 from "@/assets/nsk/nsk-work-1.webp";
import nskWork2 from "@/assets/nsk/nsk-work-2.webp";
import nskWork3 from "@/assets/nsk/nsk-work-3.webp";
import nskWork4 from "@/assets/nsk/nsk-work-4.webp";
import nskWork5 from "@/assets/nsk/nsk-work-5.webp";
import nskWork6 from "@/assets/nsk/nsk-work-6.webp";
import nskWork7 from "@/assets/nsk/nsk-work-7.webp";
import nskWork8 from "@/assets/nsk/nsk-work-8.webp";

import master1 from "@/assets/nsk/master-1.webp";
import master2 from "@/assets/nsk/master-2.webp";
import master3 from "@/assets/nsk/master-3.webp";
import master4 from "@/assets/nsk/master-4.webp";
import master5 from "@/assets/nsk/master-5.webp";
import master6 from "@/assets/nsk/master-6.webp";

const masterPhotos = [
  { img: master1, label: "Процесс химчистки дивана" },
  { img: master2, label: "Работа с оборудованием Kärcher" },
  { img: master3, label: "Глубокая чистка обивки" },
  { img: master4, label: "Обработка труднодоступных мест" },
  { img: master5, label: "Профессиональная чистка" },
  { img: master6, label: "Результат — чистый диван!" },
];

const MasterCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = masterPhotos.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-card">
        <div className="relative aspect-[4/3]">
          {masterPhotos.map((photo, i) => (
            <img
              key={i}
              src={photo.img}
              alt={photo.label}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="text-primary-foreground font-heading font-semibold text-sm">{masterPhotos[current].label}</span>
          </div>
        </div>
      </div>
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center shadow-md hover:bg-background transition-colors" aria-label="Предыдущее фото">
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center shadow-md hover:bg-background transition-colors" aria-label="Следующее фото">
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>
      <div className="flex justify-center gap-2 mt-4">
        {masterPhotos.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-muted-foreground/30"}`} aria-label={`Фото ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

const PHONE = "+79612210475";
const PHONE_DISPLAY = "+7 (961) 221-04-75";
const EMAIL = "Ivan.avdeev.2012@mail.ru";
const CITY = "Новосибирск";
const DISTRICT = "Октябрьский район";

const prices = [
  {
    category: "Диваны",
    items: [
      { name: "2-местный диван", price: "3 000 ₽" },
      { name: "3-местный диван", price: "3 500 ₽" },
      { name: "4-местный диван", price: "4 500 ₽" },
      { name: "Угловой диван", price: "4 000 ₽" },
    ],
  },
  {
    category: "Кресла и стулья",
    items: [
      { name: "Кресло", price: "850 ₽" },
      { name: "Стул", price: "400 ₽" },
      { name: "Кухонный уголок", price: "3 000 ₽" },
    ],
  },
  {
    category: "Матрасы",
    items: [
      { name: "Матрас (1 сторона)", price: "от 1 800 ₽" },
      { name: "Матрас (2 стороны)", price: "от 3 000 ₽" },
    ],
  },
  {
    category: "Доп. услуги",
    items: [
      { name: "Удаление слаймов / маркеров", price: "500 ₽" },
      { name: "Сушка", price: "500 ₽" },
    ],
  },
];

const gallery = [
  { img: nskWork1, label: "Угловой диван — удаление пятен" },
  { img: nskWork2, label: "Диван — глубокая химчистка" },
  { img: nskWork3, label: "Велюровый диван — восстановление цвета" },
  { img: nskWork4, label: "Диван — выведение застарелых пятен" },
  { img: nskWork5, label: "Стулья — комплексная чистка" },
  { img: nskWork6, label: "Диван — удаление запахов" },
  { img: nskWork7, label: "Матрас — полная химчистка" },
  { img: nskWork8, label: "Тёмный диван — удаление шерсти" },
];

const faqs = [
  {
    q: "Сколько времени занимает химчистка?",
    a: "Чистка дивана занимает 1–2 часа. Сушка — от 2 до 4 часов в зависимости от ткани.",
  },
  {
    q: "Какие средства и оборудование вы используете?",
    a: "Работаем на немецком оборудовании Kärcher с гипоаллергенной химией ChemSpec и Master Force — безопасно для детей и животных.",
  },
  {
    q: "Можно ли вывести старые пятна от слаймов и маркеров?",
    a: "Да, мы специализируемся на сложных загрязнениях. Удаление следов слаймов и маркеров — 500 ₽.",
  },
  {
    q: "Вы работаете по выходным?",
    a: "Да, работаем ежедневно с 8:00 до 21:00, включая выходные и праздники.",
  },
  {
    q: "Как оплатить?",
    a: "Оплата наличными или переводом после проверки результата. Если не устроит — бесплатная повторная чистка.",
  },
];

const steps = [
  { num: "01", title: "Звонок", desc: "Позвоните или напишите в мессенджер — обсудим детали и время." },
  { num: "02", title: "Осмотр", desc: "Мастер приедет, осмотрит мебель и назовёт точную стоимость." },
  { num: "03", title: "Чистка", desc: "Профессиональная химчистка оборудованием Kärcher с химией ChemSpec." },
  { num: "04", title: "Результат", desc: "Оплата только после проверки результата. Гарантия качества." },
];

const NskFloatingMessengers = () => {
  const [open, setOpen] = useState(false);
  const channels = [
    {
      name: "WhatsApp",
      href: `https://wa.me/${PHONE.replace("+", "")}`,
      color: "bg-[hsl(142,70%,45%)]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      href: `https://t.me/${PHONE.replace("+", "")}`,
      color: "bg-[hsl(200,80%,50%)]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
          <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-3">
      {open && (
        <div className="flex flex-row gap-3 animate-fade-in">
          {channels.map((ch) => (
            <a key={ch.name} href={ch.href} target="_blank" rel="noopener noreferrer"
              className={`${ch.color} w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
              aria-label={ch.name}>{ch.icon}</a>
          ))}
        </div>
      )}
      <button onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Связаться с нами">
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};

const Nsk = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [phoneError, setPhoneError] = useState("");
  const [sending, setSending] = useState(false);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `Qweeq — Химчистка мебели в ${CITY}`,
      url: "https://qweeq.ru/nsk",
      telephone: PHONE,
      email: EMAIL,
      areaServed: { "@type": "Place", name: `${DISTRICT}, ${CITY}` },
      address: { "@type": "PostalAddress", addressLocality: CITY, addressRegion: "Новосибирская область", addressCountry: "RU" },
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    if (!isPhoneComplete(form.phone)) { setPhoneError("Введите полный номер телефона"); return; }
    setPhoneError("");
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-telegram", {
        body: { name: form.name.trim(), phone: form.phone.trim(), message: `[НСК] ${form.message.trim()}` },
      });
      if (error) throw error;
      toast({ title: "Заявка отправлена!", description: "Мы перезвоним в ближайшее время." });
      setForm({ name: "", phone: "", message: "" });
    } catch {
      toast({ title: "Ошибка", description: "Не удалось отправить заявку. Позвоните нам!", variant: "destructive" });
    } finally { setSending(false); }
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Химчистка мебели в Новосибирске — Qweeq"
        description={`Профессиональная химчистка мягкой мебели и матрасов в Новосибирске, ${DISTRICT}. Оборудование Kärcher, химия ChemSpec. Звоните: ${PHONE_DISPLAY}`}
        ogImage="https://qweeq.ru/og-image-nsk.jpg"
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="/nsk" className="flex items-center gap-2">
            <img src={logo} alt="Qweeq" className="h-8 w-auto" />
            <span className="text-xs text-muted-foreground font-medium">{CITY}</span>
          </a>
          <div className="flex items-center gap-4">
            <a href={`mailto:${EMAIL}`} className="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition-colors">{EMAIL}</a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
              <Phone className="w-4 h-4" />{PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Чистый диван после химчистки" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-hero-overlay" />
          </div>
          <div className="container relative z-10 py-16 md:py-24">
            <div className="max-w-2xl">
              <p className="inline-block bg-accent/90 text-accent-foreground font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 animate-fade-in">
                {CITY}, {DISTRICT}
              </p>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-in-up hero-gradient-text">
                Профессиональная химчистка мебели в Новосибирске
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                Оборудование Kärcher, химия ChemSpec и Master Force. Выезжаем к вам домой — гарантия результата.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity">
                  <Phone className="w-5 h-5" />{PHONE_DISPLAY}
                </a>
                <a href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur text-primary-foreground border border-primary-foreground/20 font-heading font-semibold px-8 py-4 rounded-lg text-base hover:bg-primary-foreground/20 transition-colors">
                  Узнать стоимость <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="flex gap-8 md:gap-12 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
                {[
                  { value: "Kärcher", label: "оборудование" },
                  { value: "ChemSpec", label: "профессиональная химия" },
                  { value: "✓", label: "гарантия результата" },
                ].map((s) => (
                  <div key={s.label} className="text-primary-foreground">
                    <div className="font-heading font-extrabold text-xl md:text-2xl">{s.value}</div>
                    <div className="text-xs md:text-sm text-primary-foreground/60 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <AnimatedSection>
          <section className="py-16 md:py-24 bg-section-gradient">
            <div className="container">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider text-center mb-2">Почему мы</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-12">Наши преимущества</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Truck, title: "Бесплатный выезд", desc: `По всему ${CITY}у и ${DISTRICT}у` },
                  { icon: ShieldCheck, title: "Гарантия результата", desc: "Не устроит — вернём деньги" },
                  { icon: Sparkles, title: "Kärcher + ChemSpec", desc: "Топовое немецкое оборудование и химия" },
                  { icon: Star, title: "Безопасно", desc: "Гипоаллергенно, безопасно для детей и животных" },
                ].map((item) => (
                  <div key={item.title} className="bg-card rounded-xl p-6 shadow-card text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Pricing */}
        <AnimatedSection>
          <section id="pricing" className="py-16 md:py-24">
            <div className="container">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider text-center mb-2">Прайс-лист</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-4">Стоимость услуг</h2>
              <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">Точная цена после осмотра. Оплата только после проверки результата.</p>
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:snap-none sm:pb-0">
                {prices.map((group) => (
                  <div key={group.category} className="min-w-[260px] snap-start sm:min-w-0 bg-card rounded-xl shadow-card overflow-hidden">
                    <div className="bg-primary text-primary-foreground font-heading font-bold text-center py-3 text-sm uppercase tracking-wider">{group.category}</div>
                    <div className="p-5">
                      <ul className="space-y-3">
                        {group.items.map((item) => (
                          <li key={item.name} className="flex items-center justify-between text-sm">
                            <span className="text-foreground">{item.name}</span>
                            <span className="font-heading font-semibold text-primary whitespace-nowrap ml-2">{item.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Gallery */}
        <AnimatedSection>
          <section className="py-16 md:py-24 bg-section-gradient">
            <div className="container">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider text-center mb-2">Наши работы</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">Результаты до и после</h2>
              <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12">Реальные фотографии работ в {CITY}е</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {gallery.map((item) => (
                  <div key={item.label} className="group rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
                    <div className="relative aspect-square overflow-hidden">
                      <OptimizedImage src={item.img} alt={`До и после: ${item.label}`} className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <span className="text-primary-foreground font-heading font-semibold text-xs">{item.label}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Master Carousel */}
        <AnimatedSection>
          <section className="py-16 md:py-24">
            <div className="container">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider text-center mb-2">Наш мастер</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-4">Иван — ваш специалист в Новосибирске</h2>
              <p className="text-muted-foreground text-center max-w-lg mx-auto mb-10">Профессиональное оборудование Kärcher, опыт и ответственный подход к каждому заказу</p>
              <MasterCarousel />
            </div>
          </section>
        </AnimatedSection>

        {/* Process */}
        <AnimatedSection>
          <section className="py-16 md:py-24 bg-section-gradient">
            <div className="container">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider text-center mb-2">Как мы работаем</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12">4 простых шага к чистоте</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, i) => (
                  <div key={step.num} className="relative bg-card rounded-xl p-6 shadow-card text-center">
                    <div className="font-heading font-extrabold text-5xl text-primary/10 mb-2">{step.num}</div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    {i < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/20" />}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection>
          <section className="py-16 md:py-24 bg-section-gradient">
            <div className="container max-w-3xl">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider text-center mb-2">Вопросы и ответы</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-10">Частые вопросы</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-5 shadow-card">
                    <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="text-center lg:text-left">
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Готовы вернуть чистоту?</h2>
                <p className="text-primary-foreground/80 max-w-lg mx-auto lg:mx-0 mb-8 text-lg">
                  Позвоните или напишите в мессенджер — приедем в удобное время. Бесплатная консультация.
                </p>
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading font-bold px-10 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity mb-10">
                  <Phone className="w-5 h-5" />{PHONE_DISPLAY}
                </a>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-primary-foreground/70">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{CITY}, {DISTRICT}</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" />Ежедневно 8:00–21:00</span>
                  <span className="flex items-center gap-2"><MessageCircle className="w-4 h-4" />WhatsApp / Telegram</span>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="bg-card text-foreground rounded-xl p-6 md:p-8 shadow-card-hover space-y-4">
                <h3 className="font-heading font-bold text-xl mb-2">Оставьте заявку</h3>
                <p className="text-muted-foreground text-sm mb-4">Перезвоним в течение 15 минут</p>
                <div>
                  <label htmlFor="nsk-name" className="text-sm font-medium mb-1 block">Ваше имя *</label>
                  <input id="nsk-name" type="text" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Иван" />
                </div>
                <div>
                  <label htmlFor="nsk-phone" className="text-sm font-medium mb-1 block">Телефон *</label>
                  <input id="nsk-phone" type="tel" required value={form.phone}
                    onFocus={() => { if (!form.phone) setForm({ ...form, phone: "+7" }); }}
                    onChange={(e) => { setForm({ ...form, phone: applyPhoneMask(e.target.value) }); setPhoneError(""); }}
                    className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring ${phoneError ? "border-destructive" : "border-input"}`}
                    placeholder="+7 (___) ___-__-__" />
                  {phoneError && <p className="text-destructive text-xs mt-1">{phoneError}</p>}
                </div>
                <div>
                  <label htmlFor="nsk-msg" className="text-sm font-medium mb-1 block">Опишите проблему</label>
                  <textarea id="nsk-msg" maxLength={500} rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Например: пятно на диване" />
                </div>
                <ConsentCheckbox id="nsk-consent" checked={consent} onChange={setConsent} />
                <button type="submit" disabled={sending || !consent}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60">
                  <Send className="w-4 h-4" />{sending ? "Отправка..." : "Отправить заявку"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[hsl(200,25%,15%)] text-white dark:bg-[hsl(200,25%,8%)]">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <img src={logo} alt="Qweeq" className="h-10 w-auto brightness-0 invert mb-4" />
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Профессиональная химчистка мебели и матрасов в {CITY}е с выездом на дом.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">Контакты</h4>
              <ul className="space-y-3 text-sm">
                <li><a href={`tel:${PHONE}`} className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"><Phone className="w-4 h-4 shrink-0" />{PHONE_DISPLAY}</a></li>
                <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"><Send className="w-4 h-4 shrink-0" />{EMAIL}</a></li>
                <li className="flex items-center gap-2 text-primary-foreground/70"><MapPin className="w-4 h-4 shrink-0" />{CITY}, {DISTRICT}</li>
              </ul>
              <p className="text-primary-foreground/50 text-xs mt-3">Ежедневно 8:00 — 21:00 • WhatsApp / Telegram</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">Оборудование</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>🇩🇪 Kärcher — профессиональные экстракторы</li>
                <li>🧪 ChemSpec — гипоаллергенная химия</li>
                <li>💪 Master Force — усиленные составы</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
            <p>© 2026 Qweeq — {CITY}. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <NskFloatingMessengers />
    </div>
  );
};

export default Nsk;
