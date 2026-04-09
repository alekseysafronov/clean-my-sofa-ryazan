import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();

  const prices = [
    {
      category: t("pricing.sofas"),
      items: [
        { name: t("pricing.2seat"), price: "от 2 000 ₽" },
        { name: t("pricing.3seat"), price: "от 2 500 ₽" },
        { name: t("pricing.corner"), price: "от 3 500 ₽" },
        { name: t("pricing.stain"), price: "от 300 ₽" },
      ],
    },
    {
      category: t("pricing.chairs"),
      items: [
        { name: t("pricing.armchair"), price: "от 1 000 ₽" },
        { name: t("pricing.officeChair"), price: "от 800 ₽" },
        { name: t("pricing.softChair"), price: "от 400 ₽" },
        { name: t("pricing.pouf"), price: "от 500 ₽" },
      ],
    },
    {
      category: t("pricing.carpets"),
      items: [
        { name: t("pricing.carpetSmall"), price: "от 1 500 ₽" },
        { name: t("pricing.carpetMed"), price: "от 2 500 ₽" },
        { name: t("pricing.carpetLarge"), price: "от 250 ₽/м²" },
        { name: t("pricing.carpetTile"), price: "от 200 ₽/м²" },
      ],
    },
    {
      category: t("pricing.cars"),
      items: [
        { name: t("pricing.carFabric"), price: "от 3 000 ₽" },
        { name: t("pricing.carLeather"), price: "от 4 000 ₽" },
        { name: t("pricing.ceiling"), price: "от 1 500 ₽" },
        { name: t("pricing.trunk"), price: "от 1 000 ₽" },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">{t("pricing.label")}</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("pricing.subtitle")}
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
