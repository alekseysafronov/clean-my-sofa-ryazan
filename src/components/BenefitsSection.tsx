import { Home, ShieldCheck, Wind, Heart, Award, CreditCard } from "lucide-react";

const benefits = [
  { icon: Home, title: "Выезд на дом", desc: "Работаем у вас дома или в офисе. Не нужно везти мебель — мы приедем сами." },
  { icon: ShieldCheck, title: "Гарантия качества", desc: "Если результат не устроит — бесплатно переделаем или вернём деньги." },
  { icon: Wind, title: "Быстрая сушка", desc: "Мебель высыхает за 2-4 часа благодаря профессиональному оборудованию." },
  { icon: Heart, title: "Безопасные средства", desc: "Используем гипоаллергенные составы, безопасные для детей и животных." },
  { icon: Award, title: "Опытный мастер", desc: "Более 5 лет опыта в химчистке. Знаем особенности всех материалов." },
  { icon: CreditCard, title: "Удобная оплата", desc: "Оплата наличными или переводом после выполнения работы." },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">Почему мы</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            6 причин выбрать нас
          </h2>
          <p className="text-muted-foreground">Делаем всё, чтобы вы остались довольны результатом</p>
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
