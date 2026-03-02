import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import { Phone } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ArticleLayoutProps {
  title: string;
  metaDescription?: string;
  children: ReactNode;
  relatedLinks?: { href: string; label: string }[];
}

const ArticleLayout = ({ title, metaDescription, children }: ArticleLayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Set document title
    document.title = `${title} | Qweeq — химчистка в Рязани`;

    // Set meta description
    if (metaDescription) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = metaDescription;
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://qweeq.ru/" },
        { "@type": "ListItem", position: 2, name: "Блог", item: "https://qweeq.ru/blog" },
        { "@type": "ListItem", position: 3, name: title, item: `https://qweeq.ru${pathname}` },
      ],
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [title, pathname, metaDescription]);
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container pt-24 pb-16 md:pb-24 flex gap-8">
        {/* Sidebar */}
        <BlogSidebar />

        {/* Main content */}
        <main className="flex-1 min-w-0 max-w-2xl">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog">Блог</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{title.length > 40 ? title.slice(0, 40) + "…" : title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-8 leading-tight">
            {title}
          </h1>

          <article className="prose prose-lg max-w-none text-foreground
            [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4
            [&_h3]:font-heading [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2
            [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4
            [&_ul]:space-y-2 [&_ul]:mb-4 [&_li]:text-muted-foreground
            [&_strong]:text-foreground
            [&_table]:w-full [&_table]:text-sm [&_th]:bg-secondary [&_th]:p-3 [&_th]:text-left [&_th]:font-heading [&_th]:font-semibold
            [&_td]:p-3 [&_td]:border-b [&_td]:border-border [&_td]:text-muted-foreground
          ">
            {children}
          </article>

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
      <Footer />
    </div>
  );
};

export default ArticleLayout;
