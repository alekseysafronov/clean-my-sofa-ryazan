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

const JsonLd = () => {
  useEffect(() => {
    const localBusiness = document.createElement("script");
    localBusiness.type = "application/ld+json";
    localBusiness.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Qweeq — Химчистка мебели в Рязани",
      image: "https://qweeq.ru/og-image.png",
      url: "https://qweeq.ru",
      telephone: "+79160435153",
      email: "polka.pisem@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Рязань",
        addressRegion: "Рязанская область",
        addressCountry: "RU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 54.6296,
        longitude: 39.7421,
      },
      openingHours: "Mo-Su 08:00-21:00",
      priceRange: "₽₽",
      description:
        "Профессиональная химчистка мягкой мебели и ковров в Рязани с выездом на дом. Гарантия результата.",
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: 54.6296, longitude: 39.7421 },
        geoRadius: "50000",
      },
    });

    const faqPage = document.createElement("script");
    faqPage.type = "application/ld+json";
    faqPage.text = JSON.stringify({
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
    });

    document.head.appendChild(localBusiness);
    document.head.appendChild(faqPage);
    return () => {
      document.head.removeChild(localBusiness);
      document.head.removeChild(faqPage);
    };
  }, []);

  return null;
};

export default JsonLd;
