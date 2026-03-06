const prices = [
  {
    category: "Диваны",
    items: [
      { name: "2-местный диван", price: "от 2 000 ₽" },
      { name: "3-местный диван", price: "от 2 500 ₽" },
      { name: "Угловой диван", price: "от 3 500 ₽" },
      { name: "Выведение пятна", price: "от 300 ₽" },
    ],
  },
  {
    category: "Кресла и стулья",
    items: [
      { name: "Кресло", price: "от 1 000 ₽" },
      { name: "Офисное кресло", price: "от 800 ₽" },
      { name: "Стул мягкий", price: "от 400 ₽" },
      { name: "Пуф / банкетка", price: "от 500 ₽" },
    ],
  },
  {
    category: "Ковры",
    items: [
      { name: "до 5 м²", price: "от 1 500 ₽" },
      { name: "5–10 м²", price: "от 2 500 ₽" },
      { name: "свыше 10 м²", price: "от 250 ₽/м²" },
      { name: "Ковролин", price: "от 200 ₽/м²" },
    ],
  },
  {
    category: "Автомобили",
    items: [
      { name: "Салон (ткань)", price: "от 3 000 ₽" },
      { name: "Салон (кожа)", price: "от 4 000 ₽" },
      { name: "Потолок", price: "от 1 500 ₽" },
      { name: "Багажник", price: "от 1 000 ₽" },
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">Прайс-лист</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Стоимость услуг
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Точная цена определяется после осмотра. Оплата только после выполнения работы.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:snap-none sm:pb-0">
          {prices.map((group) => (
            <div key={group.category} className="min-w-[260px] snap-start sm:min-w-0 bg-card rounded-xl shadow-card overflow-hidden">
              <div className="bg-primary text-primary-foreground font-heading font-bold text-center py-3 text-sm uppercase tracking-wider">
                {group.category}
              </div>
              <div className="p-5">
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-center justify-between text-sm">
                      <span className="text-foreground">{item.name}</span>
                      <span className="font-heading font-semibold text-primary whitespace-nowrap ml-2">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
