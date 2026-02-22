import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Sparkles, Droplets, FlaskConical, Eraser, Wind } from "lucide-react";

const articles = [
  {
    href: "/chistka-divana",
    title: "Профессиональная чистка дивана в Рязани",
    description: "Как мы возвращаем мебели первозданный вид: методы глубокой экстракционной чистки, этапы работы и почему стоит доверить диван профессионалам.",
    icon: Sparkles,
  },
  {
    href: "/kak-pochistit-divan",
    title: "Как почистить диван в домашних условиях",
    description: "5 проверенных способов самостоятельной чистки: мыльный раствор, уксус, сода, нашатырь и специальные средства. Пошаговые инструкции.",
    icon: Droplets,
  },
  {
    href: "/sredstva-dlya-chistki",
    title: "Лучшие средства для чистки дивана",
    description: "Обзор народных рецептов, бытовой химии и профессиональных составов. Как выбрать средство в зависимости от типа ткани и загрязнения.",
    icon: FlaskConical,
  },
  {
    href: "/udalenie-pyaten",
    title: "Удаление пятен с дивана",
    description: "Руководство по выведению пятен от вина, жира, кофе, крови и других загрязнений. Таблица средств для каждого типа пятна.",
    icon: Eraser,
  },
  {
    href: "/chistka-paroochistitelem",
    title: "Чистка дивана пароочистителем",
    description: "Преимущества паровой чистки, пошаговая инструкция и советы профессионалов. Какие ткани подходят, а какие нет.",
    icon: Wind,
  },
];

const Blog = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-24 pb-16 md:pb-24">
      <div className="container max-w-4xl">
        <AnimatedSection>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-3 leading-tight">
            Полезные статьи
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            Советы по уходу за мягкой мебелью от профессионалов химчистки
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {articles.map((article, i) => (
            <AnimatedSection key={article.href} delay={i * 0.08}>
              <Link
                to={article.href}
                className="group flex items-start gap-4 p-5 md:p-6 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
              >
                <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary mt-0.5">
                  <article.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-1">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Blog;
