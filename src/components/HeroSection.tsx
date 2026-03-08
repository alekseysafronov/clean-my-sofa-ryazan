import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-sofa.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Чистый диван после профессиональной химчистки" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="inline-block bg-accent/90 text-accent-foreground font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 animate-fade-in">
            Работаем по всей Рязани и области
          </p>

          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-in-up hero-gradient-text">
            Профессиональная химчистка мебели и ковров
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Выезжаем к вам домой или в офис. Возвращаем мебели и коврам первозданную чистоту с гарантией результата.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="tel:+79160435153"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-bold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              +7 (916) 043-51-53
            </a>
            <a
              href="#pricing"
              onClick={(e) => { e.preventDefault(); document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur text-primary-foreground border border-primary-foreground/20 font-heading font-semibold px-8 py-4 rounded-lg text-base hover:bg-primary-foreground/20 transition-colors"
            >
              Узнать стоимость
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex gap-8 md:gap-12 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            {[
              { value: "5+", label: "лет опыта" },
              { value: "1K+", label: "довольных клиентов" },
              { value: "✓", label: "гарантия результата" },
            ].map((stat) => (
              <div key={stat.label} className="text-primary-foreground">
                <div className="font-heading font-extrabold text-2xl md:text-3xl">{stat.value}</div>
                <div className="text-xs md:text-sm text-primary-foreground/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
