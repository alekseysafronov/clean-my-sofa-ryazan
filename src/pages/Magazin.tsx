import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

interface Product {
  name: string;
  price: number;
}

interface ProductSet {
  title: string;
  badge: string;
  products: Product[];
}

const sets: ProductSet[] = [
  {
    title: "ChemSpec",
    badge: "Набор Элит",
    products: [
      { name: "Formula 90", price: 519.5 },
      { name: "Enz-All", price: 499.5 },
      { name: "All Fibre Textile Rinse", price: 228.15 },
      { name: "Energizer", price: 410.0 },
    ],
  },
  {
    title: "Бриз",
    badge: "Набор Оптимальный+",
    products: [
      { name: "ORANGE", price: 247.5 },
      { name: "LIME", price: 129.0 },
      { name: "SSR (Огонёк)", price: 442.5 },
      { name: "FIBER RINSE (Ручеёк)", price: 105.9 },
      { name: "Urine Remover", price: 295.5 },
      { name: "PRE-SPRAY HD (Бульдозер)", price: 259.35 },
      { name: "BREEZ SMART", price: 300.0 },
      { name: "MAGIC GEL", price: 950.0 },
    ],
  },
];

const formatPrice = (p: number) =>
  p.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const Magazin = () => {
  useEffect(() => {
    document.title = "Магазин химии для клининга | Qweeq — Рязань";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Купить профессиональную химию для химчистки мебели и ковров в Рязани. ChemSpec, Бриз — порции по 50 г.";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-secondary">
        <div className="container text-center max-w-2xl">
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-4">
            Магазин профессиональной химии
          </h1>
          <p className="text-muted-foreground text-lg">
            Порции по 50 г — попробуйте прежде, чем покупать литрами. Та&nbsp;же химия, которой работаем мы.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 md:py-20">
        <div className="container grid gap-8 md:grid-cols-2 max-w-4xl">
          {sets.map((set) => {
            const total = set.products.reduce((s, p) => s + p.price, 0);
            return (
              <Card key={set.title} className="overflow-hidden">
                <CardHeader className="bg-primary/5 border-b border-border">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <CardTitle className="text-xl">{set.title}</CardTitle>
                    <Badge variant="secondary" className="font-heading text-xs">
                      {set.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y divide-border">
                    {set.products.map((p) => (
                      <li key={p.name} className="flex items-center justify-between px-6 py-3">
                        <span className="text-sm text-foreground">{p.name}</span>
                        <span className="font-heading font-bold text-sm text-primary whitespace-nowrap">
                          {formatPrice(p.price)}&nbsp;₽
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between px-6 py-4 bg-secondary/50 border-t border-border">
                    <span className="font-heading font-semibold text-sm text-foreground">Набор целиком</span>
                    <span className="font-heading font-extrabold text-lg text-primary">
                      {formatPrice(total)}&nbsp;₽
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          * Цена указана за порцию 50 г. Возможна продажа полных ёмкостей — уточняйте по телефону.
        </p>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-xl text-center">
          <div className="bg-primary rounded-xl p-8 text-primary-foreground">
            <p className="font-heading font-bold text-xl mb-2">Хотите заказать?</p>
            <p className="text-primary-foreground/80 mb-5 text-sm">
              Позвоните или напишите — соберём набор и доставим по Рязани.
            </p>
            <a
              href="tel:+79160435153"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              +7 (916) 043-51-53
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Magazin;
