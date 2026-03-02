import ArticleLayout from "@/components/ArticleLayout";
import { ShieldCheck, Award, Users, Clock, Sparkles, Heart } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Честность", desc: "Называем точную цену до начала работы. Никаких скрытых доплат." },
  { icon: Award, title: "Качество", desc: "Используем профессиональное оборудование Karcher и сертифицированную химию." },
  { icon: Heart, title: "Забота", desc: "Гипоаллергенные средства, безопасные для детей и животных." },
  { icon: Clock, title: "Пунктуальность", desc: "Приезжаем вовремя и работаем быстро — результат в тот же день." },
];

const milestones = [
  { year: "2023", text: "Начало карьеры в клининге — работа в хостелах Москвы: ежедневная уборка, стирка, поддержание чистоты в номерах." },
  { year: "2024", text: "Мойка окон в районе Москва-Сити. Генеральные уборки после ремонтов и подготовка помещений к открытию магазинов." },
  { year: "2025", text: "Углублённое изучение технологий химчистки мягкой мебели и текстиля. Обучение работе с профессиональным оборудованием." },
  { year: "2026", text: "Основание компании Qweeq в Рязани при поддержке государства по программе социального контракта. Запуск услуг химчистки мебели с выездом на дом." },
];

const team = [
  { name: "Алексей Сафронов", role: "Основатель, мастер-технолог", desc: "3 года опыта в клининге: хостелы Москвы, мойка окон в Москва-Сити, генеральные уборки. Лично выполняет и контролирует каждый заказ." },
];

const OKompanii = () => (
  <ArticleLayout
    title="О компании Qweeq — химчистка мебели в Рязани"
    metaDescription="Компания Qweeq — профессиональная химчистка мебели в Рязани, основана в 2026 году по соцконтракту. 3 года опыта в клининге, выезд на дом, гарантия результата."
  >
    <p>
      <strong>Qweeq</strong> — это компания, основанная в 2026 году в Рязани при поддержке государства по программе социального контракта. За плечами основателя — 3 года практического опыта в сфере клининга: уборка хостелов в Москве, мойка окон в районе Москва-Сити, генеральные уборки после ремонтов и подготовка помещений к открытию. Сегодня мы специализируемся на профессиональной химчистке мягкой мебели, ковров и текстиля с выездом на дом по Рязани и области.
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
        { num: "3 года", label: "опыта в клининге" },
        { num: "2026", label: "год основания" },
        { num: "Karcher", label: "оборудование" },
        { num: "100%", label: "гарантия результата" },
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
