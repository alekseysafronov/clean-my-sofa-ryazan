import { useState } from "react";
import { Phone, Calculator } from "lucide-react";

const serviceOptions = [
  {
    id: "sofa2",
    label: "2-местный диван",
    price: 2000,
    category: "Диваны",
  },
  {
    id: "sofa3",
    label: "3-местный диван",
    price: 2500,
    category: "Диваны",
  },
  {
    id: "sofaCorner",
    label: "Угловой диван",
    price: 3500,
    category: "Диваны",
  },
  {
    id: "armchair",
    label: "Кресло",
    price: 1000,
    category: "Кресла и стулья",
  },
  {
    id: "officeChair",
    label: "Офисное кресло",
    price: 800,
    category: "Кресла и стулья",
  },
  {
    id: "chair",
    label: "Стул мягкий",
    price: 400,
    category: "Кресла и стулья",
  },
  {
    id: "mattressSingle",
    label: "Матрас односпальный",
    price: 1500,
    category: "Матрасы",
  },
  {
    id: "mattressDouble",
    label: "Матрас двуспальный",
    price: 2500,
    category: "Матрасы",
  },
  {
    id: "carpet5",
    label: "Ковёр до 5 м²",
    price: 1500,
    category: "Ковры",
  },
  {
    id: "carpet10",
    label: "Ковёр 5–10 м²",
    price: 2500,
    category: "Ковры",
  },
  {
    id: "carSeats",
    label: "Салон авто (ткань)",
    price: 3000,
    category: "Автомобили",
  },
  {
    id: "stainRemoval",
    label: "Выведение пятна",
    price: 300,
    category: "Доп. услуги",
  },
];

const CalculatorSection = () => {
  const [selected, setSelected] = useState<Record<string, number>>({});

  const toggleItem = (id: string) => {
    setSelected((prev) => {
      const copy = { ...prev };
      if (copy[id]) {
        delete copy[id];
      } else {
        copy[id] = 1;
      }
      return copy;
    });
  };

  const changeQty = (id: string, delta: number) => {
    setSelected((prev) => {
      const qty = (prev[id] || 0) + delta;
      if (qty <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: qty };
    });
  };

  const total = Object.entries(selected).reduce((sum, [id, qty]) => {
    const svc = serviceOptions.find((s) => s.id === id);
    return sum + (svc ? svc.price * qty : 0);
  }, 0);

  const categories = [...new Set(serviceOptions.map((s) => s.category))];

  return (
    <section id="calculator" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">
            Калькулятор
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Рассчитайте стоимость
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Выберите услуги и количество — получите примерную стоимость за секунду
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-card border border-border p-6 md:p-8">
          {categories.map((cat) => (
            <div key={cat} className="mb-6 last:mb-0">
              <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                {cat}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {serviceOptions
                  .filter((s) => s.category === cat)
                  .map((svc) => {
                    const isActive = !!selected[svc.id];
                    return (
                      <label
                        key={svc.id}
                        htmlFor={`calc-${svc.id}`}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 cursor-pointer transition-colors border select-none ${
                          isActive
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/30"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <input
                            id={`calc-${svc.id}`}
                            type="checkbox"
                            checked={isActive}
                            onChange={() => toggleItem(svc.id)}
                            className="accent-primary w-4 h-4 shrink-0"
                          />
                          <span className="text-sm text-foreground truncate">{svc.label}</span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          {isActive && (
                            <div className="flex items-center gap-1">
                              <button
                                onClick={(e) => { e.stopPropagation(); changeQty(svc.id, -1); }}
                                className="w-7 h-7 rounded-md bg-secondary text-foreground font-bold text-sm hover:bg-secondary/80 transition-colors"
                              >
                                −
                              </button>
                              <span className="w-7 text-center text-sm font-semibold text-foreground">
                                {selected[svc.id]}
                              </span>
                              <button
                                onClick={(e) => { e.stopPropagation(); changeQty(svc.id, 1); }}
                                className="w-7 h-7 rounded-md bg-secondary text-foreground font-bold text-sm hover:bg-secondary/80 transition-colors"
                              >
                                +
                              </button>
                            </div>
                          )}
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {svc.price.toLocaleString("ru-RU")} ₽
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}

          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Calculator className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Примерная стоимость</p>
                <p className="font-heading font-extrabold text-2xl text-foreground">
                  {total > 0 ? `от ${total.toLocaleString("ru-RU")} ₽` : "—"}
                </p>
              </div>
            </div>
            <a
              href="tel:+79160435153"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              Позвонить
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
