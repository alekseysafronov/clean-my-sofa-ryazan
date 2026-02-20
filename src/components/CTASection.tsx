import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
          Готовы вернуть чистоту?
        </h2>
        <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 text-lg">
          Позвоните прямо сейчас — приеду в удобное для вас время. Бесплатная консультация и точный расчёт стоимости.
        </p>

        <a
          href="tel:+79160435153"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading font-bold px-10 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity mb-10"
        >
          <Phone className="w-5 h-5" />
          +7 (916) 043-51-53
        </a>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-primary-foreground/70">
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Рязань и область</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Ежедневно 8:00 - 21:00</span>
          <span className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp / Telegram</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
