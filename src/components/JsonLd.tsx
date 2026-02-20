import { useEffect } from "react";

const JsonLd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
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
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return null;
};

export default JsonLd;
