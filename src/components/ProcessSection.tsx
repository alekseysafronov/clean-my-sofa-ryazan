const steps = [
  { num: "01", title: "Звонок", desc: "Позвоните или оставьте заявку. Обсудим детали и согласуем удобное время." },
  { num: "02", title: "Осмотр", desc: "Приезжаю, осматриваю мебель или ковёр, оцениваю загрязнения и называю точную цену." },
  { num: "03", title: "Чистка", desc: "Провожу профессиональную химчистку с применением современного оборудования." },
  { num: "04", title: "Результат", desc: "Показываю результат. Оплата только после того, как вы убедитесь в качестве." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-section-gradient">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">Как мы работаем</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            4 простых шага к чистоте
          </h2>
          <p className="text-muted-foreground">Процесс максимально удобен для вас</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative bg-card rounded-xl p-6 shadow-card text-center">
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
