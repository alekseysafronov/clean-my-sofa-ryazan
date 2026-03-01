import ArticleLayout from "@/components/ArticleLayout";
import { ShieldCheck, Award, Users, Clock, Sparkles, Heart } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Честность", desc: "Называем точную цену до начала работы. Никаких скрытых доплат." },
  { icon: Award, title: "Качество", desc: "Используем профессиональное оборудование Karcher и сертифицированную химию." },
  { icon: Heart, title: "Забота", desc: "Гипоаллергенные средства, безопасные для детей и животных." },
  { icon: Clock, title: "Пунктуальность", desc: "Приезжаем вовремя и работаем быстро — результат в тот же день." },
];

const milestones = [
  { year: "2019", text: "Основание компании. Первые заказы — чистка диванов у друзей и знакомых." },
  { year: "2020", text: "Закупка профессионального оборудования Karcher. Выход на рынок Рязани." },
  { year: "2021", text: "Расширение услуг: ковры, матрасы, автомобильные сиденья." },
  { year: "2022", text: "Более 500 довольных клиентов. Начало работы с ресторанами и кафе." },
  { year: "2023", text: "Запуск регулярного обслуживания офисов. Договоры с 15 организациями." },
  { year: "2024", text: "1 500+ выполненных заказов. Добавлены услуги чистки штор и колясок." },
  { year: "2025", text: "Команда из 4 мастеров. Охват всей Рязанской области." },
];

const team = [
  { name: "Алексей Сафронов", role: "Основатель, мастер-технолог", desc: "Опыт в химчистке — более 6 лет. Лично контролирует качество каждого заказа." },
  { name: "Дмитрий Волков", role: "Старший мастер", desc: "Специализация — кожаная мебель и автомобильные салоны. Обучался в Германии." },
  { name: "Мария Петрова", role: "Менеджер по работе с клиентами", desc: "Примет заявку, ответит на вопросы и подберёт удобное время." },
];

const OKompanii = () => (
  <ArticleLayout
    title="О компании Qweeq — химчистка мебели в Рязани"
    metaDescription="Компания Qweeq — профессиональная химчистка мебели в Рязани с 2019 года. 1500+ заказов, команда из 4 мастеров, выезд на дом, гарантия результата."
  >
    <p>
      <strong>Qweeq</strong> — это команда профессионалов, которая с 2019 года занимается химчисткой мягкой мебели, ковров и текстиля в Рязани и Рязанской области. Мы выезжаем на дом и возвращаем вещам первоначальный вид без лишних хлопот для вас.
    </p>

    <h2>Наши ценности</h2>
    <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      {values.map((v) => (
        <div key={v.title} className="flex gap-3 p-4 bg-secondary rounded-xl">
          <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <v.icon className="w-5 h-5" />
          </div>
          <div>
            <p className="font-heading font-bold text-foreground text-sm mb-1">{v.title}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <h2>История компании</h2>
    <div className="not-prose space-y-4 my-6">
      {milestones.map((m) => (
        <div key={m.year} className="flex gap-4 items-start">
          <span className="shrink-0 w-14 text-center font-heading font-extrabold text-primary text-lg">{m.year}</span>
          <div className="flex-1 border-l-2 border-primary/20 pl-4 pb-2">
            <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
          </div>
        </div>
      ))}
    </div>

    <h2>Наша команда</h2>
    <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      {team.map((t) => (
        <div key={t.name} className="bg-secondary rounded-xl p-5 border border-border text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-lg mx-auto mb-3">
            {t.name.split(" ").map(w => w[0]).join("")}
          </div>
          <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
          <p className="text-xs text-primary font-medium mb-2">{t.role}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
        </div>
      ))}
    </div>

    <h2>Сертификаты и гарантии</h2>
    <ul>
      <li>Все чистящие средства имеют сертификаты безопасности (СанПиН)</li>
      <li>Используем оборудование Karcher — мировой стандарт профессиональной уборки</li>
      <li>Даём гарантию на каждый заказ — если результат не устроит, переделаем бесплатно</li>
      <li>Работаем по договору с юридическими лицами, предоставляем закрывающие документы</li>
      <li>Страхование ответственности — ваша мебель под защитой</li>
    </ul>

    <h2>Qweeq в цифрах</h2>
    <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
      {[
        { num: "1 500+", label: "заказов выполнено" },
        { num: "6 лет", label: "на рынке" },
        { num: "4.9", label: "рейтинг на Яндексе" },
        { num: "98%", label: "клиентов рекомендуют" },
      ].map((s) => (
        <div key={s.label} className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-center">
          <p className="font-heading font-extrabold text-2xl text-primary">{s.num}</p>
          <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
        </div>
      ))}
    </div>

    <p>Мы дорожим каждым клиентом и работаем так, чтобы вы обращались к нам снова. Позвоните — и убедитесь сами.</p>
  </ArticleLayout>
);

export default OKompanii;
