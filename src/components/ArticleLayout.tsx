import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const allArticles = [
  { href: "/blog", label: "← Все статьи" },
  { href: "/chistka-divana", label: "Профессиональная чистка дивана" },
  { href: "/kak-pochistit-divan", label: "Как почистить диван дома" },
  { href: "/sredstva-dlya-chistki", label: "Средства для чистки" },
  { href: "/udalenie-pyaten", label: "Удаление пятен с дивана" },
  { href: "/chistka-paroochistitelem", label: "Чистка пароочистителем" },
  { href: "/khimchistka-mebeli-v-restoranah", label: "Химчистка в ресторанах" },
];

const ArticleLayout = ({ title, children }: ArticleLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 md:pb-24">
        <div className="container max-w-3xl">
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

          <div className="mt-10">
            <h3 className="font-heading font-semibold text-foreground mb-4">Другие полезные статьи</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {allArticles.map((a) => (
                <Link
                  key={a.href}
                  to={a.href}
                  className="text-sm text-primary hover:underline p-3 bg-secondary rounded-lg"
                >
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleLayout;
