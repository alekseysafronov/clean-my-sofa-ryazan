import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMessengers from "@/components/FloatingMessengers";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

interface FAQCategory {
  title: string;
  items: { q: string; a: string }[];
}

const categories: FAQCategory[] = [
  {
    title: "Общие вопросы",
    items: [
      {
        q: "Какие услуги вы предоставляете?",
        a: "Мы специализируемся на профессиональной химчистке мягкой мебели, ковров, матрасов, штор, детских колясок и автомобильных сидений. Работаем с выездом на дом по Рязани и области.",
      },
      {
        q: "Вы работаете по выходным?",
        a: "Да, мы работаем ежедневно с 8:00 до 21:00, включая выходные и праздничные дни.",
      },
      {
        q: "Вы выезжаете за пределы Рязани?",
        a: "Да, мы обслуживаем Рязань и Рязанскую область. Выезд за город обсуждается индивидуально — позвоните, и мы рассчитаем стоимость.",
      },
      {
        q: "Как вызвать мастера?",
        a: "Позвоните нам по телефону +7 (916) 043-51-53 или оставьте заявку на сайте. Мы перезвоним в течение 15 минут и согласуем удобное время.",
      },
    ],
  },
  {
    title: "Химчистка мебели",
    items: [
      {
        q: "Сколько времени занимает химчистка дивана?",
        a: "В среднем чистка одного дивана занимает 1–2 часа в зависимости от размера и степени загрязнения. Сушка — ещё 2–4 часа.",
      },
      {
        q: "Нужно ли мне что-то подготовить перед приездом мастера?",
        a: "Достаточно убрать личные вещи с дивана и обеспечить доступ к мебели. Всё оборудование и средства мастер привозит с собой.",
      },
      {
        q: "Можно ли чистить кожаную мебель?",
        a: "Да, мы работаем с кожей, экокожей, замшей, велюром, флоком, жаккардом и другими типами обивки. Для каждого материала подбирается индивидуальная технология.",
      },
      {
        q: "Мебель будет мокрой после чистки?",
        a: "После экстракторной чистки мебель остаётся слегка влажной. Полное высыхание — 3–6 часов в зависимости от ткани и проветривания помещения.",
      },
    ],
  },
  {
    title: "Средства и безопасность",
    items: [
      {
        q: "Какие средства вы используете? Они безопасны?",
        a: "Мы работаем с гипоаллергенными составами 5-го поколения, безопасными для детей и домашних животных. Средства сертифицированы и не оставляют резкого запаха.",
      },
      {
        q: "Безопасна ли чистка для детей и животных?",
        a: "Абсолютно безопасна. Все наши средства имеют сертификаты безопасности и подходят для домов с маленькими детьми и питомцами.",
      },
      {
        q: "Останется ли запах химии после чистки?",
        a: "Нет, современные средства практически не имеют запаха. После высыхания мебель будет пахнуть свежестью.",
      },
    ],
  },
  {
    title: "Пятна и загрязнения",
    items: [
      {
        q: "Можно ли вывести старые пятна?",
        a: "В большинстве случаев — да. Мы используем профессиональные пятновыводители с энзимами, которые справляются даже с застарелыми загрязнениями.",
      },
      {
        q: "Выводите ли вы пятна от мочи животных?",
        a: "Да, мы удаляем как пятна, так и запах мочи. Используем специальные энзимные составы, которые разрушают органические соединения на молекулярном уровне.",
      },
      {
        q: "Справляетесь ли вы с пятнами от кофе и вина?",
        a: "Да, пятна от кофе, чая, вина, соков — одни из самых частых в нашей практике. Чем раньше обратитесь, тем лучше результат, но и застарелые пятна обычно поддаются.",
      },
      {
        q: "А если пятно не выведется?",
        a: "Мы честно предупредим, если пятно может не удалиться полностью (например, следы от краски или фломастера на светлой ткани). В таких случаях стоимость уменьшается.",
      },
    ],
  },
  {
    title: "Цены и оплата",
    items: [
      {
        q: "Сколько стоит химчистка дивана?",
        a: "Стоимость зависит от размера и степени загрязнения. Чистка стандартного дивана — от 2 500 ₽. Точную цену назовём после описания мебели по телефону.",
      },
      {
        q: "Есть ли скидки?",
        a: "Да! Скидка 20% на первый заказ, 15% — на повторный. Для юридических лиц действуют специальные тарифы.",
      },
      {
        q: "Какие способы оплаты вы принимаете?",
        a: "Наличные, банковский перевод, оплата по QR-коду. Для юридических лиц — оплата по счёту с актом выполненных работ.",
      },
      {
        q: "Нужна ли предоплата?",
        a: "Нет, оплата производится после выполнения работ и вашей проверки результата.",
      },
    ],
  },
  {
    title: "Гарантии",
    items: [
      {
        q: "Что делать, если результат не устроит?",
        a: "Мы даём гарантию качества. Если результат вас не устроит — бесплатно проведём повторную чистку или вернём деньги.",
      },
      {
        q: "Даёте ли вы гарантию на работу?",
        a: "Да, на все виды работ действует гарантия 30 дней. Если пятно проявится повторно — бесплатная перечистка.",
      },
      {
        q: "А если мастер повредит мебель?",
        a: "Наша ответственность застрахована. В случае повреждения мы компенсируем ущерб в полном объёме.",
      },
    ],
  },
];

const FAQ = () => {
  useEffect(() => {
    document.title = "Частые вопросы (FAQ) — Химчистка мебели Qweeq в Рязани";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Ответы на частые вопросы о химчистке мебели, ковров и матрасов в Рязани. Цены, сроки, безопасность средств, гарантии — всё в одном месте."
      );
    }
  }, []);

  useEffect(() => {
    const allItems = categories.flatMap((c) => c.items);
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.faqSchema = "true";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Частые вопросы</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="container max-w-4xl">
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-3">
            Частые вопросы
          </h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Собрали ответы на самые популярные вопросы наших клиентов. Не нашли ответ? Позвоните — поможем!
          </p>

          <div className="space-y-10">
            {categories.map((cat, ci) => (
              <section key={ci}>
                <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-4">
                  {cat.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {cat.items.map((item, fi) => (
                    <AccordionItem
                      key={fi}
                      value={`cat-${ci}-faq-${fi}`}
                      className="bg-card rounded-xl border border-border px-5 shadow-card"
                    >
                      <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 bg-primary rounded-2xl p-8 md:p-10 text-center">
            <h2 className="font-heading font-bold text-2xl text-primary-foreground mb-2">
              Не нашли ответ на свой вопрос?
            </h2>
            <p className="text-primary-foreground/80 mb-5">
              Позвоните нам — ответим на любые вопросы и поможем с выбором услуги
            </p>
            <a
              href="tel:+79160435153"
              className="inline-flex items-center gap-2 bg-card text-foreground px-7 py-3 rounded-xl font-heading font-bold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              +7 (916) 043-51-53
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingMessengers />
    </>
  );
};

export default FAQ;
