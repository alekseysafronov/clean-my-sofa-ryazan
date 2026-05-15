import { Phone, MapPin, Check, Shield, Clock, AlertTriangle, Droplets, Sparkles, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import ArticleFAQ from "@/components/ArticleFAQ";
import heroImage from "@/assets/oil-rain-hero.jpg?w=1600&format=webp";

const PHONE_DISPLAY = "+7 (916) 043-51-53";
const PHONE_LINK = "tel:+79160435153";
const ADDRESS = "г. Рязань, ул. МОГЭС, 13 — подземный паркинг";

const pricing = [
  { name: "Легковой автомобиль (весь кузов)", price: "3 000 ₽", note: "Седан, хэтчбек, универсал" },
  { name: "Кроссовер / внедорожник", price: "от 4 000 ₽", note: "По объёму загрязнения" },
  { name: "Минивэн / микроавтобус", price: "от 5 000 ₽", note: "Расчёт на месте" },
  { name: "Локальные пятна (до 5 шт.)", price: "от 1 000 ₽", note: "Капот, крыша, двери" },
  { name: "Стёкла и оптика", price: "от 500 ₽", note: "Битумные брызги" },
  { name: "Колёсные арки и пороги", price: "от 800 ₽", note: "С нижней частью кузова" },
];

const benefits = [
  { icon: Zap, title: "Срочный выезд", desc: "Принимаем авто день в день. Чем быстрее снять нефть с ЛКП — тем меньше риск повреждения лака." },
  { icon: Shield, title: "Безопасно для краски", desc: "Только pH-нейтральные антибитумные составы. Не разъедают лак, резину и пластиковый обвес." },
  { icon: Sparkles, title: "Полировка после", desc: "При необходимости полируем места снятия пятен — лак выглядит как до катастрофы." },
  { icon: Clock, title: "1–3 часа на авто", desc: "Стандартный легковой кузов очищаем за 1,5–2 часа в крытом тёплом боксе." },
];

const process = [
  "Бесконтактная мойка под высоким давлением — снимаем рыхлый слой нефти и грязи",
  "Ручная обработка каждого пятна антибитумным растворителем (Koch, Grass, Pingo)",
  "Деликатное оттирание микрофиброй без давления и абразивов",
  "Повторная мойка с автошампунем и нейтрализация остатков химии",
  "Сушка, осмотр и при необходимости — точечная полировка ЛКП",
];

const dangers = [
  "Нефть и битум разъедают лак за 24–72 часа на солнце",
  "Капли въедаются в резиновые уплотнители и пластик",
  "На стёклах оставляют масляную плёнку — снижают видимость",
  "Попадают в подкапотное пространство — вред электрике и шлангам",
  "Налипают на колёсные арки — ускоряют коррозию",
];

const faqItems = [
  { q: "Что произошло и почему срочно?", a: "После аварии на нефтезаводе в Рязани в нескольких районах выпали нефтяные осадки. Битумные и масляные капли въедаются в лак за 1–3 суток на солнце и оставляют матовые пятна, которые потом убираются только полировкой или перекраской. Чем раньше снять — тем дешевле и безопаснее." },
  { q: "Сколько стоит очистка целого кузова?", a: "Легковой автомобиль (седан, хэтчбек, универсал) — 3 000 ₽ за весь кузов. Кроссоверы и внедорожники — от 4 000 ₽, минивэны — от 5 000 ₽. Если пятен немного — посчитаем как локальную обработку, от 1 000 ₽." },
  { q: "Не повредите ли краску?", a: "Нет. Работаем только профессиональными антибитумными составами с нейтральным pH (Koch Chemie, Grass, Pingo). Они растворяют нефть и битум, но не трогают лак, резину и пластик. Никакого скребка и абразивов." },
  { q: "Где проходит очистка?", a: "В крытом тёплом подземном паркинге по адресу МОГЭС, 13 в Рязани. Удобный заезд, работаем в любую погоду." },
  { q: "Сколько по времени?", a: "Стандартный легковой автомобиль — 1,5–2 часа. Сильно загрязнённые внедорожники — до 3 часов. Можно подождать на месте." },
  { q: "Можно записаться на сегодня?", a: "Да, в условиях ЧС работаем с расширенным графиком. Звоните " + PHONE_DISPLAY + " — найдём ближайшее окно." },
];

const OchistkaOtNefti = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Очистка автомобиля от нефти и битума",
      "name": "Срочная очистка кузова от нефтяных пятен в Рязани",
      "description": "Удаление нефтяных и битумных пятен с кузова автомобиля после нефтяного дождя в Рязани. Работа профессиональной антибитумной химией, тёплый крытый паркинг.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Qweeq — детейлинг и химчистка авто",
        "telephone": "+79160435153",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. МОГЭС, 13",
          "addressLocality": "Рязань",
          "addressCountry": "RU",
        },
      },
      "areaServed": "Рязань",
      "offers": pricing.map((p) => ({ "@type": "Offer", "name": p.name, "price": p.price, "priceCurrency": "RUB" })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Очистка авто от нефти и битума в Рязани — 3 000 ₽ за кузов"
        description="Срочная очистка автомобиля от нефтяных и битумных пятен после нефтяного дождя в Рязани. Профессиональная антибитумная химия, тёплый паркинг МОГЭС, 13. Готово за 1–2 часа."
        ogImage="https://qweeq.ru/og-image.jpg"
        jsonLd={jsonLd}
      />
      <Header />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden bg-[hsl(200_30%_8%)]">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Очистка автомобиля от нефтяных пятен в Рязани" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(200_30%_8%/0.92)] via-[hsl(200_30%_8%/0.78)] to-[hsl(200_30%_8%/0.45)]" />
        </div>

        <div className="container relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 animate-fade-in">
              <AlertTriangle className="w-3.5 h-3.5" />
              Срочно · Рязань · Нефтяной дождь
            </p>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-white animate-fade-in-up">
              Очистка авто от нефти и битума
              <span className="block text-[hsl(185_70%_65%)] mt-2">3 000 ₽ за кузов</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              После аварии на нефтезаводе в городе выпал нефтяной дождь. Снимаем битумные и масляные пятна с кузова без вреда для лака — у нас уже есть вся специальная химия и оборудование. Тёплый паркинг на МОГЭС, 13.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity">
                <Phone className="w-5 h-5" />
                Срочная запись · {PHONE_DISPLAY}
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 font-heading font-semibold px-8 py-4 rounded-lg text-base hover:bg-white/20 transition-colors">
                Цены и услуги
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-md animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
              {[
                { v: "3 000 ₽", l: "Весь кузов" },
                { v: "1–2 ч", l: "Срок работы" },
                { v: "Сегодня", l: "Запись день в день" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-heading font-extrabold text-xl md:text-3xl text-[hsl(185_70%_65%)]">{s.v}</div>
                  <div className="text-xs md:text-sm text-white/70 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DANGER */}
      <section className="py-16 md:py-24 bg-section-gradient">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-destructive font-heading font-semibold text-sm uppercase tracking-wider mb-3">
                <AlertTriangle className="w-4 h-4" />
                Почему нельзя медлить
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-5">
                Нефть «съедает» лак за 1–3 дня
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Нефтепродукты под солнцем нагреваются и работают как агрессивный растворитель — проникают в лак, оставляют матовые пятна, въедаются в пластик и резину. Если не снять сразу — следы можно убрать только глубокой полировкой или перекраской детали.
              </p>
            </div>
            <ul className="space-y-3">
              {dangers.map((d) => (
                <li key={d} className="flex items-start gap-3 bg-card rounded-xl p-4 border border-destructive/20">
                  <Droplets className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                  <span className="text-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">Как мы помогаем</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">У нас уже есть всё для работы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Профессиональная антибитумная химия, аппараты высокого давления, тёплый паркинг и команда мастеров — готовы принимать авто прямо сейчас.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-[var(--card-shadow-hover)] transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 md:py-24 bg-section-gradient">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">Прайс</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Стоимость очистки от нефти</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Цены фиксированные. За весь кузов легкового авто — 3 000 ₽, точечные пятна — дешевле.</p>
          </div>

          <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-card overflow-hidden border border-border/50">
            <div className="bg-primary text-primary-foreground font-heading font-bold text-center py-4 text-sm uppercase tracking-wider">
              Удаление нефтяных и битумных пятен
            </div>
            <ul className="divide-y divide-border">
              {pricing.map((p) => (
                <li key={p.name} className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-muted/40 transition-colors">
                  <div>
                    <div className="text-foreground font-medium">{p.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{p.note}</div>
                  </div>
                  <span className="font-heading font-bold text-primary whitespace-nowrap">{p.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-10">
            <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity">
              <Phone className="w-5 h-5" />
              Записаться · {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">Технология</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">5 шагов — и нефти как не было</h2>
          </div>
          <ol className="space-y-4">
            {process.map((step, i) => (
              <li key={i} className="flex gap-4 bg-card rounded-xl p-5 shadow-card border border-border/50">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <p className="text-foreground pt-1.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16 md:py-24 bg-section-gradient">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">Адрес</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Подземный паркинг МОГЭС, 13</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Тёплый крытый бокс в центре Рязани. Удобный заезд для любого авто, работаем в любую погоду — ваша машина не будет стоять под нефтяным дождём, пока ждёт очереди.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Крытое отапливаемое помещение",
                  "Заезд день в день, без записи",
                  "Парковка для клиентов рядом",
                  "Расширенный график работы из-за ЧС",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  <Phone className="w-5 h-5" />
                  {PHONE_DISPLAY}
                </a>
                <a href="https://yandex.ru/maps/?text=Рязань+МОГЭС+13" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-border bg-card text-foreground font-heading font-semibold px-6 py-3 rounded-lg hover:bg-muted transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                  {ADDRESS}
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-card border border-border h-[400px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?text=Рязань%20МОГЭС%2013&z=16"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Адрес очистки авто от нефти — МОГЭС 13, Рязань"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">Частые вопросы</h2>
          </div>
          <ArticleFAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-section-gradient">
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-primary/70 p-10 md:p-16 text-center">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-foreground mb-4">
              Не дайте нефти разъесть лак — запишитесь сегодня
            </h2>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-8">
              Бесплатная консультация по фото и срочная запись. Принимаем авто каждый день, пока продолжается ситуация с нефтяными осадками в Рязани.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity">
                <Phone className="w-5 h-5" />
                {PHONE_DISPLAY}
              </a>
              <Link to="/kontakty" className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur text-primary-foreground border border-primary-foreground/30 font-heading font-semibold px-8 py-4 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                Все контакты
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OchistkaOtNefti;
