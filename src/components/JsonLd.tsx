import { useEffect } from "react";

const faqs = [
  {
    q: "Сколько времени занимает химчистка дивана?",
    a: "В среднем чистка одного дивана занимает 1–2 часа в зависимости от размера и степени загрязнения. Сушка — ещё 2–4 часа.",
  },
  {
    q: "Какие средства вы используете? Они безопасны?",
    a: "Мы работаем с гипоаллергенными составами 5-го поколения, безопасными для детей и домашних животных.",
  },
  {
    q: "Можно ли вывести старые пятна?",
    a: "В большинстве случаев — да. Мы используем профессиональные пятновыводители с энзимами.",
  },
  {
    q: "Вы работаете по выходным?",
    a: "Да, мы работаем ежедневно с 8:00 до 21:00, включая выходные и праздничные дни.",
  },
  {
    q: "Что делать, если результат не устроит?",
    a: "Мы даём гарантию качества. Если результат вас не устроит — бесплатно проведём повторную чистку или вернём деньги.",
  },
  {
    q: "Вы выезжаете за пределы Рязани?",
    a: "Да, мы обслуживаем Рязань и Рязанскую область. Выезд за город обсуждается индивидуально.",
  },
];

const services = [
  { name: "Химчистка диванов", url: "https://qweeq.ru/chistka-divana" },
  { name: "Химчистка ковров", url: "https://qweeq.ru/khimchistka-kovrov" },
  { name: "Химчистка матрасов", url: "https://qweeq.ru/chistka-matrasov" },
  { name: "Химчистка стульев", url: "https://qweeq.ru/chistka-stuliev" },
  { name: "Химчистка штор", url: "https://qweeq.ru/chistka-shtor" },
  { name: "Выездная химчистка", url: "https://qweeq.ru/vyezdnaya-khimchistka" },
  { name: "Удаление пятен", url: "https://qweeq.ru/udalenie-pyaten" },
  { name: "Удаление запахов", url: "https://qweeq.ru/udalenie-zapahov" },
];

const JsonLd = () => {
  useEffect(() => {
    const schemas = [
      // LocalBusiness
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://qweeq.ru/#business",
        name: "Qweeq — Химчистка мебели в Рязани",
        image: "https://qweeq.ru/og-image.png",
        url: "https://qweeq.ru",
        telephone: "+79160435153",
        email: "polka.pisem@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Рязань",
          addressRegion: "Рязанская область",
          postalCode: "390000",
          addressCountry: "RU",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 54.6296,
          longitude: 39.7421,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "08:00",
          closes: "21:00",
        },
        priceRange: "₽₽",
        description:
          "Профессиональная химчистка мягкой мебели и ковров в Рязани с выездом на дом. Гарантия результата.",
        areaServed: {
          "@type": "City",
          name: "Рязань",
        },
        sameAs: [
          "https://t.me/qweeq_ryazan",
          "https://wa.me/79160435153",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Услуги химчистки",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              url: s.url,
            },
          })),
        },
      },
      // WebSite with SearchAction potential
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://qweeq.ru/#website",
        url: "https://qweeq.ru",
        name: "Qweeq — Химчистка мебели в Рязани",
        publisher: { "@id": "https://qweeq.ru/#business" },
      },
      // FAQPage
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ];

    const scripts = schemas.map((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      scripts.forEach((s) => document.head.removeChild(s));
    };
  }, []);

  return null;
};

export default JsonLd;
