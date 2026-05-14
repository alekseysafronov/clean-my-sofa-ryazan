import { Phone, MapPin, Check, Sparkles, Shield, Clock, Users, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import ServiceReviews from "@/components/ServiceReviews";
import ArticleFAQ from "@/components/ArticleFAQ";
import heroImage from "@/assets/auto-detailing-hero.jpg?w=1600&format=webp";

const PHONE_DISPLAY = "+7 (916) 043-51-53";
const PHONE_LINK = "tel:+79160435153";
const ADDRESS = "г. Рязань, ул. МОГЭС, 13 — подземный паркинг";

const pricing = [
  { name: "Переднее сиденье", price: "от 1 000 ₽" },
  { name: "Заднее сиденье / диван", price: "от 2 000 ₽" },
  { name: "Ковролин салона", price: "от 3 000 ₽" },
  { name: "Ковролин со снятием сидений", price: "от 5 000 ₽" },
  { name: "Двери (1 шт.)", price: "от 500 ₽" },
  { name: "Потолок", price: "от 3 000 ₽" },
  { name: "Потолок со снятием", price: "от 7 000 ₽" },
  { name: "Козырьки и боковушки", price: "от 500 ₽" },
  { name: "Ремни безопасности", price: "от 500 ₽" },
  { name: "Пластик торпеды", price: "от 1 500 ₽" },
  { name: "Руль", price: "от 500 ₽" },
];

const equipment = [
  {
    name: "Santoemma Sabrina",
    type: "Моющий экстрактор",
    desc: "Профессиональная итальянская машина с мощным вакуумом и подачей раствора под давлением. Глубокая экстракция загрязнений из ткани и поролона.",
  },
  {
    name: "Twinc",
    type: "Орбитальная машинка",
    desc: "Деликатно и равномерно вспенивает химию по поверхности. Не повреждает обивку, поднимает въевшуюся грязь даже из плотного велюра.",
  },
  {
    name: "Karcher · Tornado",
    type: "Профессиональные пылесосы",
    desc: "Сухая и влажная уборка пыли, песка и шерсти животных из всех уголков салона перед химчисткой.",
  },
];

const benefits = [
  { icon: Sparkles, title: "Дорогая мебельная и автохимия", desc: "Профессиональные составы для ткани, кожи, экокожи и алькантары — без разводов и резкого запаха." },
  { icon: Users, title: "Работаем в 4 руки", desc: "Два мастера одновременно — салон готов в 2 раза быстрее без потери качества." },
  { icon: Shield, title: "Безопасно для салона", desc: "Подбираем химию под тип материала. Никаких ожогов, разводов и потери цвета." },
  { icon: Clock, title: "Готово за 2–4 часа", desc: "Полная химчистка салона легкового авто — за полдня. Внедорожники и минивэны — чуть дольше." },
];

const process = [
  "Загоняем авто в крытый тёплый паркинг — работаем в любую погоду",
  "Тщательная сухая уборка пылесосами Karcher / Tornado",
  "Предварительная обработка пятен спецсоставами",
  "Машинная химчистка экстрактором Santoemma и роторной Twinc",
  "Финишная экстракция и сушка — забираете сухой салон",
];

const faqItems = [
  { q: "Где проходит химчистка?", a: "В крытом подземном паркинге по адресу МОГЭС, 13 в Рязани. Тёплое сухое помещение, удобный заезд, работаем круглый год." },
  { q: "Сколько по времени делается салон?", a: "Стандартный легковой автомобиль — 2–4 часа за счёт работы в 4 руки. Внедорожники и микроавтобусы — 4–6 часов." },
  { q: "С каким материалом работаете?", a: "Ткань, велюр, алькантара, натуральная кожа, экокожа, пластик, ковролин. Под каждый материал — своя химия и насадки." },
  { q: "Сиденье будет мокрым после чистки?", a: "Нет. Экстрактор Santoemma Sabrina вытягивает 95% влаги. Остаточная сушка — 1–2 часа, можно сразу ехать." },
  { q: "Можно записаться на сегодня?", a: "Чаще всего да — позвоните по номеру " + PHONE_DISPLAY + ", уточним свободное окно." },
];

const KhimchistkaAvto = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Химчистка салона автомобиля",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Qweeq — химчистка авто",
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
        title="Химчистка салона автомобиля в Рязани — МОГЭС, 13"
        description="Профессиональная химчистка авто в крытом паркинге на МОГЭС, 13. Экстрактор Santoemma Sabrina, орбитальная Twinc, работа в 4 руки. От 1 000 ₽. Готово за 2–4 часа."
        ogImage="https://qweeq.ru/og-image.jpg"
        jsonLd={jsonLd}
      />
      <Header />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Химчистка салона автомобиля в Рязани" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        </div>

        <div className="container relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="inline-block bg-accent/90 text-accent-foreground font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 animate-fade-in">
              Химчистка авто · Рязань
            </p>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-foreground animate-fade-in-up">
              Химчистка салона автомобиля
              <span className="block text-primary mt-2">от 1 000 ₽</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Тёплый крытый паркинг на МОГЭС, 13. Работаем в 4 руки на профессиональном оборудовании Santoemma, Twinc, Karcher. Возвращаем салон в идеальное состояние за 2–4 часа.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a href={PHONE_LINK} className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity">
                <Phone className="w-5 h-5" />
                {PHONE_DISPLAY}
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-8 py-4 rounded-lg text-base hover:bg-primary/90 transition-colors">
                Узнать цены
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-md animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
              {[
                { v: "2–4 ч", l: "На один авто" },
                { v: "4 руки", l: "Команда мастеров" },
                { v: "365", l: "Дней в году" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-heading font-extrabold text-2xl md:text-3xl text-primary">{s.v}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 md:py-24 bg-section-gradient">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">Почему мы</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Профессиональная химчистка, а не «помыли водой»</h2>
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

      {/* EQUIPMENT */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">Оборудование</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Работаем на профессиональной технике</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Не бытовые «моющие пылесосы», а полноценные промышленные машины — то же оборудование, что в дилерских детейлинг-центрах.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {equipment.map((e) => (
              <div key={e.name} className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-5">
                  <Wrench className="w-7 h-7" />
                </div>
                <p className="text-xs font-heading uppercase tracking-wider text-muted-foreground mb-1">{e.type}</p>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{e.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 md:py-24 bg-section-gradient">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">Прайс-лист</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Стоимость химчистки</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Цены за элементы салона. Финальная стоимость зависит от состояния и материала обивки — точно посчитаем по фото или на месте.</p>
          </div>

          <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-card overflow-hidden border border-border/50">
            <div className="bg-primary text-primary-foreground font-heading font-bold text-center py-4 text-sm uppercase tracking-wider">
              Химчистка элементов салона
            </div>
            <ul className="divide-y divide-border">
              {pricing.map((p) => (
                <li key={p.name} className="flex items-center justify-between px-6 py-4 hover:bg-muted/40 transition-colors">
                  <span className="text-foreground">{p.name}</span>
                  <span className="font-heading font-bold text-primary whitespace-nowrap ml-4">{p.price}</span>
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
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">Как мы работаем</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">5 шагов до идеального салона</h2>
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
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">Где мы находимся</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Подземный паркинг МОГЭС, 13</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Тёплый крытый паркинг в центре Рязани с отличной транспортной доступностью. Удобный заезд, никакой грязи и сквозняков — поэтому работаем круглый год без оглядки на погоду.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Крытое отапливаемое помещение",
                  "Удобный заезд для любого авто",
                  "Парковка для клиентов рядом",
                  "Близко к центру и основным магистралям",
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
                title="Адрес химчистки авто — МОГЭС 13, Рязань"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ServiceReviews />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-section-gradient">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">Частые вопросы</h2>
          </div>
          <ArticleFAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-primary/70 p-10 md:p-16 text-center">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-foreground mb-4">
              Запишитесь на химчистку — салон будет как новый
            </h2>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-8">
              Бесплатная консультация и точный расчёт по фото. Свободные окна каждый день, в том числе по выходным.
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

export default KhimchistkaAvto;
