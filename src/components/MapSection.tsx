const MapSection = () => {
  return (
    <section id="map" className="py-16 md:py-24 bg-section-gradient">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">
            Зона обслуживания
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Работаем по всей Рязани и области
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Выезжаем бесплатно в любой район города. За город — по договорённости.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-card border border-border">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A44f7e5c8b8d1a4c5e3f2d6b9a7c4e1f3&amp;source=constructor&amp;ll=39.7421%2C54.6296&amp;z=11&amp;pt=39.7421%2C54.6296%2Cpm2rdm"
            width="100%"
            height="450"
            frameBorder="0"
            title="Зона обслуживания Qweeq в Рязани"
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
