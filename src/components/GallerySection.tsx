import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";

const items = [
  { img: beforeAfter1, label: "Диван — удаление пятен" },
  { img: beforeAfter2, label: "Ковёр — выведение вина" },
  { img: beforeAfter3, label: "Кресло — полная химчистка" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-section-gradient">
      <div className="container">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider text-center mb-2">Наши работы</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
          Результаты до и после
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12">
          Реальные фотографии наших работ — убедитесь в качестве сами
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.label} className="group rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.img}
                  alt={`До и после: ${item.label}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-primary-foreground font-heading font-semibold text-sm">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
