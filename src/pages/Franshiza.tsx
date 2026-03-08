import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMessengers from "@/components/FloatingMessengers";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Users,
  BadgeRussianRuble,
  ShieldCheck,
  Truck,
  GraduationCap,
  Phone,
  CheckCircle2,
  Rocket,
  Target,
  BarChart3,
  Wrench,
} from "lucide-react";

const advantages = [
  {
    icon: BadgeRussianRuble,
    title: "Низкий порог входа",
    desc: "Старт бизнеса от 350 000 ₽. Паушальный взнос включает оборудование, химию и обучение.",
  },
  {
    icon: TrendingUp,
    title: "Окупаемость 2–4 месяца",
    desc: "Средний чек 3 500 ₽, 4–6 заказов в день. Выход на прибыль уже в первые месяцы.",
  },
  {
    icon: GraduationCap,
    title: "Полное обучение",
    desc: "2 недели интенсивного обучения: технологии чистки, работа с клиентами, маркетинг.",
  },
  {
    icon: Truck,
    title: "Оборудование под ключ",
    desc: "Профессиональный экстрактор, пылесос, набор химии и расходников — всё включено.",
  },
  {
    icon: ShieldCheck,
    title: "Проверенная бизнес-модель",
    desc: "Отработанные скрипты, CRM, маркетинговые материалы и поддержка на каждом этапе.",
  },
  {
    icon: Users,
    title: "Поддержка 24/7",
    desc: "Личный куратор, чат франчайзи, помощь с запуском рекламы и первыми заказами.",
  },
];

const steps = [
  { num: "01", title: "Заявка", desc: "Оставьте заявку и мы проведём онлайн-презентацию франшизы." },
  { num: "02", title: "Договор", desc: "Подписание договора и оплата паушального взноса." },
  { num: "03", title: "Обучение", desc: "2 недели обучения технологиям, продажам и управлению." },
  { num: "04", title: "Запуск", desc: "Получение оборудования, настройка рекламы и первые заказы." },
];

const includes = [
  "Профессиональное оборудование (экстрактор, пылесос)",
  "Стартовый набор химии на 50+ заказов",
  "Брендбук и маркетинговые материалы",
  "Настроенная CRM-система",
  "Шаблоны рекламных кампаний",
  "Скрипты продаж и работы с возражениями",
  "Юридическое сопровождение",
  "Доступ в закрытое сообщество франчайзи",
];

const Franshiza = () => {
  useEffect(() => {
    document.title = "Франшиза Qweeq — Химчистка мебели | Бизнес под ключ";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Франшиза химчистки мебели Qweeq. Старт от 350 000 ₽, окупаемость 2–4 месяца. Оборудование, обучение и поддержка под ключ."
      );
    }
  }, []);

  return (
    <>
      <Header />
      <main className="pt-24 md:pt-28 pb-16">
        {/* Breadcrumbs */}
        <div className="container mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Франшиза</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container mb-16">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 md:p-14">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-primary" />
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
                Бизнес с нами
              </span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4 leading-tight">
              Франшиза химчистки мебели
              <span className="text-primary"> Qweeq</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-6">
              Готовый бизнес с проверенной моделью. Старт от 350 000 ₽, окупаемость за 2–4 месяца.
              Мы даём всё: оборудование, обучение, клиентов.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+79160435153"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                Получить презентацию
              </a>
              <a
                href="#advantages"
                className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:bg-secondary transition-colors"
              >
                Подробнее
              </a>
            </div>
          </div>
        </section>

        {/* Numbers */}
        <section className="container mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "350 000 ₽", label: "Старт бизнеса" },
              { value: "2–4 мес.", label: "Окупаемость" },
              { value: "150 000 ₽+", label: "Доход в месяц" },
              { value: "50+", label: "Городов" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-card border border-border rounded-xl p-5 text-center shadow-card"
              >
                <p className="font-heading font-bold text-2xl md:text-3xl text-primary mb-1">
                  {item.value}
                </p>
                <p className="text-muted-foreground text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advantages */}
        <section id="advantages" className="container mb-16">
          <div className="text-center mb-10">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">
              Почему Qweeq
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Преимущества франшизы
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow"
              >
                <adv.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{adv.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What's included */}
        <section className="container mb-16">
          <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-7 h-7 text-primary" />
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
                Что входит в пакет
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {includes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="container mb-16">
          <div className="text-center mb-10">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">
              Как начать
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              4 шага к своему бизнесу
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-card border border-border rounded-xl p-6 shadow-card relative"
              >
                <span className="font-heading font-bold text-4xl text-primary/20 absolute top-3 right-4">
                  {step.num}
                </span>
                <Target className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Financial */}
        <section className="container mb-16">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-7 h-7 text-primary" />
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
                Финансовая модель
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Расходы (старт)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Паушальный взнос</span>
                    <span className="font-semibold text-foreground">250 000 ₽</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Оборудование и химия</span>
                    <span className="font-semibold text-foreground">включено</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Реклама (1-й месяц)</span>
                    <span className="font-semibold text-foreground">50 000 ₽</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Прочие расходы</span>
                    <span className="font-semibold text-foreground">50 000 ₽</span>
                  </li>
                  <li className="flex justify-between font-heading font-bold text-foreground pt-1">
                    <span>Итого</span>
                    <span className="text-primary">от 350 000 ₽</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Доходы (в месяц)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Средний чек</span>
                    <span className="font-semibold text-foreground">3 500 ₽</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Заказов в день</span>
                    <span className="font-semibold text-foreground">4–6</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Выручка в месяц</span>
                    <span className="font-semibold text-foreground">350 000–500 000 ₽</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Расходы в месяц</span>
                    <span className="font-semibold text-foreground">~150 000 ₽</span>
                  </li>
                  <li className="flex justify-between font-heading font-bold text-foreground pt-1">
                    <span>Чистая прибыль</span>
                    <span className="text-primary">150 000–300 000 ₽</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-3">
              Готовы начать свой бизнес?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-6">
              Оставьте заявку и мы отправим подробную презентацию франшизы с финансовой моделью
            </p>
            <a
              href="tel:+79160435153"
              className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-4 rounded-xl font-heading font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              +7 (916) 043-51-53
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingMessengers />
    </>
  );
};

export default Franshiza;
