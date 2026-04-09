import { Home, ShieldCheck, Wind, Heart, Award, CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: Home, title: t("benefits.home.title"), desc: t("benefits.home.desc") },
    { icon: ShieldCheck, title: t("benefits.quality.title"), desc: t("benefits.quality.desc") },
    { icon: Wind, title: t("benefits.drying.title"), desc: t("benefits.drying.desc") },
    { icon: Heart, title: t("benefits.safe.title"), desc: t("benefits.safe.desc") },
    { icon: Award, title: t("benefits.expert.title"), desc: t("benefits.expert.desc") },
    { icon: CreditCard, title: t("benefits.payment.title"), desc: t("benefits.payment.desc") },
  ];

  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">{t("benefits.label")}</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            {t("benefits.title")}
          </h2>
          <p className="text-muted-foreground">{t("benefits.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-4 p-5 rounded-xl hover:bg-secondary/60 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
