import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, ArrowRight, Sparkles, Droplets, FlaskConical, Eraser, Wind, UtensilsCrossed, Layers, BedDouble, Car, Armchair, Flame, Coffee, Baby, CalendarClock, Home, Building2, Truck } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const articles = [
  { href: "/chistka-divana", title: "Профессиональная чистка дивана в Рязани", description: "Методы глубокой экстракционной чистки, этапы работы и почему стоит доверить диван профессионалам.", icon: Sparkles },
  { href: "/kak-pochistit-divan", title: "Как почистить диван в домашних условиях", description: "5 проверенных способов самостоятельной чистки: мыльный раствор, уксус, сода, нашатырь и спецсредства.", icon: Droplets },
  { href: "/sredstva-dlya-chistki", title: "Лучшие средства для чистки дивана", description: "Обзор народных рецептов, бытовой химии и профессиональных составов для разных типов тканей.", icon: FlaskConical },
  { href: "/udalenie-pyaten", title: "Удаление пятен с дивана", description: "Руководство по выведению пятен от вина, жира, кофе, крови и других загрязнений.", icon: Eraser },
  { href: "/chistka-paroochistitelem", title: "Чистка дивана пароочистителем", description: "Преимущества паровой чистки, пошаговая инструкция и советы профессионалов.", icon: Wind },
  { href: "/khimchistka-mebeli-v-restoranah", title: "Химчистка мебели в ресторанах и кафе", description: "Профессиональная чистка мягкой мебели для заведений общепита. Договор на обслуживание.", icon: UtensilsCrossed },
  { href: "/khimchistka-kovrov", title: "Химчистка ковров", description: "Глубокая экстракционная чистка ковров всех типов: синтетика, шерсть, ручная работа, длинный ворс.", icon: Layers },
  { href: "/chistka-matrasov", title: "Химчистка матрасов", description: "Глубокая чистка, дезинфекция и удаление клещей. Чистим на дому — матрас не нужно никуда везти.", icon: BedDouble },
  { href: "/chistka-avtosideniy", title: "Химчистка автомобильных сидений", description: "Чистка тканевых и кожаных сидений, потолка, дверных карт и багажника прямо у вашего дома.", icon: Car },
  { href: "/chistka-stuliev", title: "Химчистка стульев и кресел", description: "Офисные кресла, обеденные стулья, геймерские кресла, пуфы. Скидки для организаций.", icon: Armchair },
  { href: "/chistka-shtor", title: "Химчистка штор и занавесок", description: "Чистка портьер, тюля, рулонных штор прямо на карнизе. Бережные средства для деликатных тканей.", icon: Layers },
  { href: "/chistka-kolyasok", title: "Чистка детских колясок", description: "Глубокая химчистка и дезинфекция колясок и автокресел. Гипоаллергенные средства.", icon: BedDouble },
  { href: "/chistka-ofisnoy-mebeli", title: "Химчистка офисной мебели", description: "Кресла, перегородки, ковровые покрытия. Работаем в нерабочее время, договор на обслуживание.", icon: Armchair },
  { href: "/udalenie-zapahov", title: "Как удалить запах с дивана и мягкой мебели", description: "Способы борьбы с запахами мочи, табака, сырости и еды. Народные средства и профессиональная дезодорация.", icon: Flame },
  { href: "/pyatna-ot-kofe-i-chaya", title: "Как вывести пятна от кофе и чая с дивана", description: "Пошаговые инструкции удаления пятен от кофе, чая и какао. Что делать можно, а что нельзя.", icon: Coffee },
  { href: "/chistka-mebeli-s-detmi", title: "Чистка мебели в доме с детьми и животными", description: "Безопасные средства, ежедневный уход и гипоаллергенная профессиональная химчистка.", icon: Baby },
  { href: "/kak-chasto-chistit-mebel", title: "Как часто нужно чистить мягкую мебель", description: "Рекомендации по частоте чистки для семей, аллергиков и коммерческих объектов.", icon: CalendarClock },
  { href: "/khimchistka-mebeli-na-domu", title: "Химчистка мебели на дому в Рязани", description: "Преимущества чистки на дому, какое оборудование используем, этапы работы и стоимость услуг.", icon: Home },
  { href: "/khimchistka-kovrolina-v-ofise", title: "Химчистка ковролина в офисе", description: "Профессиональная чистка офисного ковролина. Работаем в нерабочее время, договор на обслуживание.", icon: Building2 },
  { href: "/vyezdnaya-khimchistka", title: "Выездная химчистка мягкой мебели", description: "Приедем в удобное время, почистим диван, кресла, матрас на месте. Рязань и область.", icon: Truck },
];

const Blog = () => {
  useEffect(() => {
    document.title = "Блог — полезные статьи | Qweeq — химчистка в Рязани";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Советы по уходу за мягкой мебелью, удалению пятен и запахов от профессионалов химчистки Qweeq в Рязани.";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container pt-24 pb-16 md:pb-24">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link to="/">Главная</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Блог</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Mobile blog nav */}
        <div className="lg:hidden">
          <BlogSidebar />
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <div className="hidden lg:block">
            <BlogSidebar />
          </div>

          {/* Main content */}
          <main className="flex-1 min-w-0 max-w-2xl">
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
                <AnimatedSection key={article.href} delay={i * 0.06}>
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

            {/* CTA block */}
            <div className="mt-12 p-6 bg-primary rounded-xl text-primary-foreground text-center">
              <p className="font-heading font-bold text-xl mb-3">Нужна профессиональная помощь?</p>
              <p className="text-primary-foreground/80 mb-4">Позвоните — бесплатно проконсультируем и назовём точную цену.</p>
              <a
                href="tel:+79160435153"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                +7 (916) 043-51-53
              </a>
            </div>
          </main>

          {/* Right sidebar — banners */}
          <aside className="hidden xl:block w-56 shrink-0 sticky top-24 max-h-[calc(100vh-6rem)] space-y-5">
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-5 text-center">
              <p className="font-heading font-extrabold text-lg text-accent mb-1">−20%</p>
              <p className="text-sm text-foreground font-medium mb-2">На первый заказ</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">Назовите промокод «ПЕРВЫЙ» при звонке</p>
              <a href="tel:+79160435153" className="inline-block bg-accent text-accent-foreground text-xs font-heading font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Позвонить
              </a>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-center">
              <p className="font-heading font-bold text-sm text-primary mb-1">Регулярная чистка</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">Скидка 15% на каждый повторный заказ. Напомним, когда пора!</p>
              <a href="tel:+79160435153" className="inline-block bg-primary text-primary-foreground text-xs font-heading font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Узнать больше
              </a>
            </div>
            <div className="bg-secondary rounded-xl p-5 text-center border border-border">
              <p className="font-heading font-bold text-sm text-foreground mb-1">Для бизнеса</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">Офисы, рестораны, гостиницы — договор на обслуживание с выгодными условиями</p>
              <a href="tel:+79160435153" className="inline-block bg-foreground text-background text-xs font-heading font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Обсудить
              </a>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
