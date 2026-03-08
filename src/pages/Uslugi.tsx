import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import FloatingMessengers from "@/components/FloatingMessengers";
import AnimatedSection from "@/components/AnimatedSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Link } from "react-router-dom";
import { Sofa, Layers, Armchair, Car, BedDouble, Shirt, Baby, Building2, ArrowRight } from "lucide-react";

import beforeSofa from "@/assets/before-sofa.jpg";
import afterSofa from "@/assets/after-sofa.jpg";
import beforeCarpet from "@/assets/before-carpet.jpg";
import afterCarpet from "@/assets/after-carpet.jpg";
import beforeArmchair from "@/assets/before-armchair.jpg";
import afterArmchair from "@/assets/after-armchair.jpg";

const services = [
  {
    icon: Sofa,
    title: "Химчистка диванов",
    desc: "Глубокая очистка диванов любых размеров и материалов. Удаляем пятна, запахи и аллергены.",
    link: "/chistka-divana",
    price: "от 2 000 ₽",
  },
  {
    icon: Layers,
    title: "Чистка ковров",
    desc: "Профессиональная чистка ковров с восстановлением цвета и структуры ворса.",
    link: "/khimchistka-kovrov",
    price: "от 1 500 ₽",
  },
  {
    icon: Armchair,
    title: "Химчистка кресел и стульев",
    desc: "Бережная очистка кресел и стульев с мягкой обивкой.",
    link: "/chistka-stuliev",
    price: "от 400 ₽",
  },
  {
    icon: Car,
    title: "Чистка автосалонов",
    desc: "Комплексная химчистка салона: сиденья, потолок, двери, багажник.",
    link: "/chistka-avtosideniy",
    price: "от 3 000 ₽",
  },
  {
    icon: BedDouble,
    title: "Чистка матрасов",
    desc: "Удаление пятен, пыли и аллергенов из матрасов любого размера.",
    link: "/chistka-matrasov",
    price: "от 1 500 ₽",
  },
  {
    icon: Shirt,
    title: "Чистка штор",
    desc: "Химчистка штор и занавесок без снятия и со снятием с карнизов.",
    link: "/chistka-shtor",
    price: "от 300 ₽/м²",
  },
  {
    icon: Baby,
    title: "Чистка детских колясок",
    desc: "Безопасная очистка колясок гипоаллергенными средствами.",
    link: "/chistka-kolyasok",
    price: "от 1 500 ₽",
  },
  {
    icon: Building2,
    title: "Химчистка офисной мебели",
    desc: "Регулярная чистка офисных кресел, диванов и перегородок.",
    link: "/chistka-ofisnoy-mebeli",
    price: "от 800 ₽",
  },
];

const beforeAfterItems = [
  {
    before: beforeAfter1,
    after: beforeAfter1,
    title: "Диван — удаление пятен",
    description: "Вывели застарелые пятна от кофе и вина с дивана из микрофибры",
  },
  {
    before: beforeAfter2,
    after: beforeAfter2,
    title: "Ковёр — глубокая чистка",
    description: "Полная чистка шерстяного ковра с восстановлением цвета",
  },
  {
    before: beforeAfter3,
    after: beforeAfter3,
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

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((svc) => (
                  <Link
                    key={svc.title}
                    to={svc.link}
                    className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <svc.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">{svc.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{svc.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-heading font-bold text-sm">{svc.price}</span>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
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
