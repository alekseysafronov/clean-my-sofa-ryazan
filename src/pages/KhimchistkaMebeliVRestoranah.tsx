import ArticleLayout from "@/components/ArticleLayout";
import ServiceReviews from "@/components/ServiceReviews";
import ArticleFAQ from "@/components/ArticleFAQ";
import RelatedArticles from "@/components/RelatedArticles";
import { ShieldCheck, Clock, Sparkles, FileText } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, title: "Безопасные средства", desc: "Все чистящие средства сертифицированы и безопасны для мест общественного питания." },
  { icon: Clock, title: "Работаем без выходных", desc: "Выезжаем в удобное для вас время — ночью, рано утром или в обеденный перерыв." },
  { icon: Sparkles, title: "Профессиональное оборудование", desc: "Экстракторы Karcher и профессиональная химия для идеального результата." },
  { icon: FileText, title: "Договор и документы", desc: "Заключаем договор на разовое или регулярное обслуживание. Предоставляем все закрывающие документы." },
];

const faqItems = [
  { q: "Можно ли провести чистку ночью?", a: "Да, мы работаем в удобное для заведения время — ночью, рано утром, в обеденный перерыв или в выходные." },
  { q: "Средства безопасны для общепита?", a: "Да, все наши средства сертифицированы и безопасны для использования в местах общественного питания." },
  { q: "Сколько стоит регулярное обслуживание?", a: "При заключении договора на регулярное обслуживание — скидка 20% на каждую чистку. Точная стоимость зависит от объёма." },
  { q: "Какую мебель вы чистите в ресторанах?", a: "Диваны, банкетки, кресла, стулья, барные стулья, пуфы, а также шторы и текстильные перегородки." },
];

const KhimchistkaMebeliVRestoranah = () => (
  <ArticleLayout
    title="Химчистка мебели в ресторанах, кафе и барах в Рязани"
    metaDescription="Химчистка мебели для ресторанов и кафе в Рязани. Диваны, кресла, стулья — чистим в нерабочее время. Договор, скидки на регулярное обслуживание."
  >
    <p>
      Компания <strong>Qweeq</strong> предлагает ресторанам, барам и кафе Рязани и области услуги профессиональной
      химчистки мягкой мебели. Мы качественно и оперативно чистим диваны, кресла и стулья как с текстильной, так
      и кожаной обивкой.
    </p>
    <p>
      Удаляем сложные загрязнения и выводим жирные пятна, следы от еды и напитков. С заведениями общественного
      питания возможно заключение договора на регулярное обслуживание.
    </p>

    <h2>Почему стоит сотрудничать с Qweeq</h2>
    <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      {benefits.map((b) => (
        <div key={b.title} className="flex gap-3 p-4 bg-secondary rounded-xl">
          <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <b.icon className="w-5 h-5" />
          </div>
          <div>
            <p className="font-heading font-bold text-foreground text-sm mb-1">{b.title}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <h2>Какую мебель мы чистим</h2>
    <ul>
      <li>Мягкие диваны и банкетки в зале</li>
      <li>Кресла и стулья с тканевой обивкой</li>
      <li>Кожаная мебель (натуральная и экокожа)</li>
      <li>Барные стулья и пуфы</li>
      <li>Шторы, занавески и текстильные перегородки</li>
    </ul>

    <h2>Типичные загрязнения в общепите</h2>
    <ul>
      <li>Жирные пятна от еды и соусов</li>
      <li>Следы от вина, кофе, соков и других напитков</li>
      <li>Общее засаливание от интенсивной эксплуатации</li>
      <li>Неприятные запахи</li>
      <li>Пятна от косметики</li>
    </ul>

    <h2>Как мы работаем</h2>
    <ol className="space-y-2 mb-4 [&_li]:text-muted-foreground">
      <li><strong>1.</strong> Вы оставляете заявку по телефону или в мессенджере</li>
      <li><strong>2.</strong> Мы приезжаем, оцениваем объём и называем точную стоимость</li>
      <li><strong>3.</strong> Проводим чистку в удобное для заведения время</li>
      <li><strong>4.</strong> Принимаете работу — платите по факту</li>
    </ol>

    <h2>Стоимость</h2>
    <table>
      <thead>
        <tr><th>Услуга</th><th>Цена</th></tr>
      </thead>
      <tbody>
        <tr><td>Диван (до 3 мест)</td><td>от 2 500 ₽</td></tr>
        <tr><td>Кресло / стул</td><td>от 500 ₽</td></tr>
        <tr><td>Барный стул / пуф</td><td>от 300 ₽</td></tr>
        <tr><td>Кожаная мебель</td><td>от 1 500 ₽</td></tr>
        <tr><td>Регулярное обслуживание</td><td>скидка 20%</td></tr>
      </tbody>
    </table>
    <p>Точная цена зависит от степени загрязнения и количества предметов. Позвоните — назовём стоимость за 2 минуты.</p>

    <ArticleFAQ items={faqItems} />

    <RelatedArticles links={[
      { href: "/chistka-ofisnoy-mebeli", title: "Химчистка офисной мебели" },
      { href: "/chistka-stuliev", title: "Химчистка стульев и кресел" },
      { href: "/khimchistka-kovrolina-v-ofise", title: "Химчистка ковролина в офисе" },
    ]} />

    <ServiceReviews />
  </ArticleLayout>
);

export default KhimchistkaMebeliVRestoranah;
