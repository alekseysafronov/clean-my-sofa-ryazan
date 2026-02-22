import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Сколько времени занимает химчистка дивана?",
    a: "В среднем чистка одного дивана занимает 1–2 часа в зависимости от размера и степени загрязнения. Сушка — ещё 2–4 часа.",
  },
  {
    q: "Какие средства вы используете? Они безопасны?",
    a: "Мы работаем с гипоаллергенными составами 5-го поколения, безопасными для детей и домашних животных. Средства сертифицированы и не оставляют резкого запаха.",
  },
  {
    q: "Можно ли вывести старые пятна?",
    a: "В большинстве случаев — да. Мы используем профессиональные пятновыводители с энзимами, которые справляются даже с застарелыми загрязнениями. Точный результат оценим после осмотра.",
  },
  {
    q: "Вы работаете по выходным?",
    a: "Да, мы работаем ежедневно с 8:00 до 21:00, включая выходные и праздничные дни.",
  },
  {
    q: "Нужно ли мне что-то подготовить перед приездом мастера?",
    a: "Достаточно убрать личные вещи с дивана и обеспечить доступ к мебели. Всё оборудование и средства мастер привозит с собой.",
  },
  {
    q: "Что делать, если результат не устроит?",
    a: "Мы даём гарантию качества. Если результат вас не устроит — бесплатно проведём повторную чистку или вернём деньги.",
  },
  {
    q: "Вы выезжаете за пределы Рязани?",
    a: "Да, мы обслуживаем Рязань и Рязанскую область. Выезд за город обсуждается индивидуально.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider text-center mb-2">
          Вопросы и ответы
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-4">
          Частые вопросы
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-10">
          Ответы на самые популярные вопросы наших клиентов
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl border border-border px-5 shadow-card"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
