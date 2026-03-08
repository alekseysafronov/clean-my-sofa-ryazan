import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import FloatingMessengers from "@/components/FloatingMessengers";
import AnimatedSection from "@/components/AnimatedSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import beforeSofa from "@/assets/before-sofa.jpg";
import afterSofa from "@/assets/after-sofa.jpg";
import beforeCarpet from "@/assets/before-carpet.jpg";
import afterCarpet from "@/assets/after-carpet.jpg";
import beforeArmchair from "@/assets/before-armchair.jpg";
import afterArmchair from "@/assets/after-armchair.jpg";

import serviceSofa from "@/assets/service-sofa.jpg";
import serviceCarpet from "@/assets/service-carpet.jpg";
import serviceArmchair from "@/assets/service-armchair.jpg";
import serviceCar from "@/assets/service-car.jpg";
import serviceMattress from "@/assets/service-mattress.jpg";
import serviceCurtains from "@/assets/service-curtains.jpg";
import serviceStroller from "@/assets/service-stroller.jpg";
import serviceOffice from "@/assets/service-office.jpg";

const services = [
  {
    image: serviceSofa,
    title: "Химчистка диванов",
    desc: "Глубокая очистка диванов любых размеров и материалов. Удаляем пятна, запахи и аллергены.",
    link: "/chistka-divana",
    price: "от 2 000 ₽",
    time: "2–4 часа",
  },
  {
    image: serviceCarpet,
    title: "Чистка ковров",
    desc: "Профессиональная чистка ковров с восстановлением цвета и структуры ворса.",
    link: "/khimchistka-kovrov",
    price: "от 1 500 ₽",
    time: "1–3 часа",
  },
  {
    image: serviceArmchair,
    title: "Химчистка кресел и стульев",
    desc: "Бережная очистка кресел и стульев с мягкой обивкой.",
    link: "/chistka-stuliev",
    price: "от 400 ₽",
    time: "1–2 часа",
  },
  {
    image: serviceCar,
    title: "Чистка автосалонов",
    desc: "Комплексная химчистка салона: сиденья, потолок, двери, багажник.",
    link: "/chistka-avtosideniy",
    price: "от 3 000 ₽",
    time: "3–5 часов",
  },
  {
    image: serviceMattress,
    title: "Чистка матрасов",
    desc: "Удаление пятен, пыли и аллергенов из матрасов любого размера.",
    link: "/chistka-matrasov",
    price: "от 1 500 ₽",
    time: "1–2 часа",
  },
  {
    image: serviceCurtains,
    title: "Чистка штор",
    desc: "Химчистка штор и занавесок без снятия и со снятием с карнизов.",
    link: "/chistka-shtor",
    price: "от 300 ₽/м²",
    time: "2–4 часа",
  },
  {
    image: serviceStroller,
    title: "Чистка детских колясок",
    desc: "Безопасная очистка колясок гипоаллергенными средствами.",
    link: "/chistka-kolyasok",
    price: "от 1 500 ₽",
    time: "1–2 часа",
  },
  {
    image: serviceOffice,
    title: "Химчистка офисной мебели",
    desc: "Регулярная чистка офисных кресел, диванов и перегородок.",
    link: "/chistka-ofisnoy-mebeli",
    price: "от 800 ₽",
    time: "2–4 часа",
  },
];

const beforeAfterItems = [
  {
    before: beforeSofa,
    after: afterSofa,
    title: "Диван — удаление пятен",
    description: "Вывели застарелые пятна от кофе и вина с дивана из микрофибры",
  },
  {
    before: beforeCarpet,
    after: afterCarpet,
    title: "Ковёр — глубокая чистка",
    description: "Полная чистка шерстяного ковра с восстановлением цвета",
  },
  {
    before: beforeArmchair,
    after: afterArmchair,
    title: "Кресло — полная химчистка",
    description: "Химчистка кресла из велюра с удалением запахов",
  },
];

const Uslugi = () => {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="Услуги химчистки мебели в Рязани — Qweeq"
        description="Полный каталог услуг химчистки мягкой мебели, ковров, матрасов и автосалонов в Рязани. Выезд на дом, гарантия результата."
      />
      <Header />
      <main className="pt-28 md:pt-32">
        {/* Hero */}
        <section className="pb-12 md:pb-16">
          <div className="container text-center">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">Каталог услуг</p>
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
              Наши услуги
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Профессиональная химчистка мягкой мебели, ковров и текстиля с выездом на дом в Рязани
            </p>
          </div>
        </section>

        {/* Before/After Sliders */}
        <AnimatedSection>
          <section className="py-12 md:py-20 bg-section-gradient">
            <div className="container">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider text-center mb-2">
                Результаты работ
              </p>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-center mb-4">
                До и после — двигайте ползунок
              </h2>
              <p className="text-muted-foreground text-center max-w-lg mx-auto mb-10">
                Сравните результат: проведите ползунком по изображению, чтобы увидеть разницу
              </p>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {beforeAfterItems.map((item) => (
                  <div key={item.title} className="space-y-3">
                    <BeforeAfterSlider
                      beforeSrc={item.before}
                      afterSrc={item.after}
                      alt={item.title}
                    />
                    <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Services Grid */}
        <AnimatedSection>
          <section className="py-12 md:py-20">
            <div className="container">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider text-center mb-2">
                Все услуги
              </p>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-center mb-10">
                Выберите нужную услугу
              </h2>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((svc) => (
                  <Link
                    key={svc.title}
                    to={svc.link}
                    className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm text-foreground text-sm font-heading font-bold px-3 py-1.5 rounded-full shadow-sm">
                        {svc.price}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading font-bold text-lg text-foreground mb-3">{svc.title}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-1">
                        <span>Время работы</span>
                        <span className="text-foreground font-medium">{svc.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{svc.desc}</p>
                      <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                        Подробнее <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
      <FloatingMessengers />
    </div>
  );
};

export default Uslugi;
