import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMessengers from "@/components/FloatingMessengers";
import ArticleFAQ, { FAQItem } from "@/components/ArticleFAQ";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, ShieldCheck, Sparkles, Truck } from "lucide-react";

export interface DistrictPageProps {
  district: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  features?: string[];
  landmarks?: string[];
  faq: FAQItem[];
}

const defaultFeatures = [
  "Выезд мастера в течение 1–2 часов",
  "Профессиональное оборудование Karcher",
  "Гипоаллергенные средства, безопасные для детей и животных",
  "Гарантия результата или возврат денег",
  "Оплата после проверки результата",
];

const services = [
  { title: "Химчистка диванов", price: "от 2 500 ₽", link: "/chistka-divana" },
  { title: "Химчистка ковров", price: "от 150 ₽/м²", link: "/khimchistka-kovrov" },
  { title: "Химчистка матрасов", price: "от 1 500 ₽", link: "/chistka-matrasov" },
  { title: "Химчистка стульев", price: "от 350 ₽/шт", link: "/chistka-stuliev" },
  { title: "Химчистка штор", price: "от 200 ₽/м²", link: "/chistka-shtor" },
  { title: "Удаление запахов", price: "от 1 000 ₽", link: "/udalenie-zapahov" },
];

const DistrictPage = ({
  district,
  slug,
  metaTitle,
  metaDescription,
  intro,
  features,
  landmarks,
  faq,
}: DistrictPageProps) => {
  useEffect(() => {
    document.title = metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", metaDescription);
  }, [metaTitle, metaDescription]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `Qweeq — Химчистка мебели в районе ${district}, Рязань`,
      url: `https://qweeq.ru/${slug}`,
      telephone: "+79160435153",
      areaServed: {
        "@type": "Place",
        name: `${district}, Рязань`,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Рязань",
        addressRegion: "Рязанская область",
        addressCountry: "RU",
      },
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [district, slug]);

  const usedFeatures = features || defaultFeatures;

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
                <BreadcrumbLink asChild>
                  <Link to="/rayony">Районы</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{district}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="container max-w-4xl">
          {/* Hero */}
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 md:p-12 mb-10">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
                {district}
              </span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
              Химчистка мебели в районе {district}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {intro}
            </p>
            <a
              href="tel:+79160435153"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              Вызвать мастера
            </a>
          </div>

          {/* Advantages */}
          <section className="mb-10">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-5">
              Почему выбирают нас в районе {district}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Truck, text: "Бесплатный выезд по всему району" },
                { icon: Clock, text: "Работаем ежедневно с 8:00 до 21:00" },
                { icon: ShieldCheck, text: "Гарантия 30 дней на все работы" },
                { icon: Sparkles, text: "Профессиональная химия без запаха" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 shadow-card"
                >
                  <item.icon className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section className="mb-10">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-5">
              Услуги в районе {district}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <Link
                  key={s.link}
                  to={s.link}
                  className="flex items-center justify-between bg-card border border-border rounded-xl p-4 shadow-card hover:shadow-lg transition-shadow group"
                >
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {s.title}
                  </span>
                  <span className="text-primary font-heading font-bold text-sm">{s.price}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* What's included */}
          <section className="mb-10">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-5">
              Что входит в услугу
            </h2>
            <ul className="space-y-2">
              {usedFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Landmarks */}
          {landmarks && landmarks.length > 0 && (
            <section className="mb-10">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-5">
                Обслуживаем адреса рядом с
              </h2>
              <div className="flex flex-wrap gap-2">
                {landmarks.map((l) => (
                  <span
                    key={l}
                    className="bg-secondary text-foreground text-sm px-3 py-1.5 rounded-lg border border-border"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <ArticleFAQ items={faq} />

          {/* CTA */}
          <div className="mt-12 bg-primary rounded-2xl p-8 md:p-10 text-center">
            <h2 className="font-heading font-bold text-2xl text-primary-foreground mb-2">
              Закажите химчистку в районе {district}
            </h2>
            <p className="text-primary-foreground/80 mb-5">
              Выезд мастера бесплатно. Оплата после проверки результата.
            </p>
            <a
              href="tel:+79160435153"
              className="inline-flex items-center gap-2 bg-card text-foreground px-7 py-3 rounded-xl font-heading font-bold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              +7 (916) 043-51-53
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingMessengers />
    </>
  );
};

export default DistrictPage;
