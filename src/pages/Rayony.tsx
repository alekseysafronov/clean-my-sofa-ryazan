import { useEffect } from "react";
import { Link } from "react-router-dom";
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
import { MapPin, ArrowRight } from "lucide-react";

const districts = [
  { slug: "khimchistka-centr-ryazani", name: "Центр", desc: "Ленина, Свободы, Почтовая, Соборная площадь" },
  { slug: "khimchistka-dashkovo-pesochnya", name: "Дашково-Песочня", desc: "Новосёлов, Зубковой, пр-т Шабулина" },
  { slug: "khimchistka-kanishchevo", name: "Канищево", desc: "Бирюзова, Крупской, Канищевское шоссе" },
  { slug: "khimchistka-priokskiy", name: "Приокский", desc: "Великанова, Бронная, набережная Оки" },
  { slug: "khimchistka-moskovskiy", name: "Московский", desc: "Первомайский пр-т, Московская, Чкалова" },
  { slug: "khimchistka-borki", name: "Борки", desc: "Михайловское шоссе, Мервинская, ЖК «Борки»" },
  { slug: "khimchistka-dyagilevo", name: "Дягилево", desc: "Белякова, Станкозаводская" },
  { slug: "khimchistka-solotcha", name: "Солотча", desc: "Солотчинское шоссе, курорт Солотча" },
];

const Rayony = () => {
  useEffect(() => {
    document.title = "Химчистка мебели по районам Рязани | Qweeq";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Профессиональная химчистка мебели с выездом во все районы Рязани: Дашково-Песочня, Канищево, Приокский, Московский, Борки и другие.");
  }, []);

  return (
    <>
      <Header />
      <main className="pt-24 md:pt-28 pb-16">
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
                <BreadcrumbPage>Районы Рязани</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="w-7 h-7 text-primary" />
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
              Локальные услуги
            </span>
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-3">
            Химчистка мебели по районам Рязани
          </h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Работаем во всех районах Рязани. Выезд мастера бесплатный, время прибытия — от 30 минут до 2 часов.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {districts.map((d) => (
              <Link
                key={d.slug}
                to={`/${d.slug}`}
                className="group bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-lg transition-all hover:border-primary/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {d.name}
                  </h2>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm">{d.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingMessengers />
    </>
  );
};

export default Rayony;
