import { Sofa, Armchair, Car, Layers } from "lucide-react";

const services = [
  {
    icon: Sofa,
    title: "Химчистка диванов",
    desc: "Глубокая очистка диванов любых размеров и материалов. Удаляем пятна, запахи и аллергены.",
    features: ["Любые ткани", "Выведение пятен", "Устранение запахов"],
  },
  {
    icon: Layers,
    title: "Чистка ковров",
    desc: "Профессиональная чистка ковров с восстановлением цвета и структуры ворса.",
    features: ["Все виды ковров", "Восстановление цвета", "Антибактериальная обработка"],
  },
  {
    icon: Armchair,
    title: "Химчистка кресел",
    desc: "Бережная очистка кресел и стульев с мягкой обивкой. Офисная и домашняя мебель.",
    features: ["Офисные кресла", "Домашняя мебель", "Деликатные ткани"],
  },
  {
    icon: Car,
    title: "Чистка автосалонов",
    desc: "Комплексная химчистка салона автомобиля: сиденья, потолок, двери, багажник.",
    features: ["Сиденья и потолок", "Пластик и кожа", "Удаление запахов"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-section-gradient">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">Наши услуги</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Чистота и свежесть для вашего дома
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Предоставляем полный спектр услуг по химчистке мягкой мебели и ковров с выездом на дом
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:snap-none sm:pb-0">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="min-w-[280px] snap-start sm:min-w-0 bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <svc.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{svc.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{svc.desc}</p>
              <ul className="space-y-1.5">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
