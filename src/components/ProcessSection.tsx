import { useLanguage } from "@/contexts/LanguageContext";

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    { num: "01", title: t("process.step1.title"), desc: t("process.step1.desc") },
    { num: "02", title: t("process.step2.title"), desc: t("process.step2.desc") },
    { num: "03", title: t("process.step3.title"), desc: t("process.step3.desc") },
    { num: "04", title: t("process.step4.title"), desc: t("process.step4.desc") },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-section-gradient">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">{t("process.label")}</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            {t("process.title")}
          </h2>
          <p className="text-muted-foreground">{t("process.subtitle")}</p>
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:snap-none sm:pb-0">
          {steps.map((step, i) => (
            <div key={step.num} className="min-w-[240px] snap-start sm:min-w-0 relative bg-card rounded-xl p-6 shadow-card text-center">
              <div className="font-heading font-extrabold text-5xl text-primary/10 mb-2">{step.num}</div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
