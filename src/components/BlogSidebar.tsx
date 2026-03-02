import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Sparkles, Droplets, FlaskConical, Eraser, Wind,
  UtensilsCrossed, Layers, BedDouble, Car, Armchair,
  Home, BookOpen, ChevronDown, ChevronRight, Phone,
  Menu, X, Users, Flame, Coffee, Baby, CalendarClock,
} from "lucide-react";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { href: "/chistka-divana", label: "Чистка дивана", icon: Sparkles },
  { href: "/khimchistka-kovrov", label: "Химчистка ковров", icon: Layers },
  { href: "/chistka-matrasov", label: "Химчистка матрасов", icon: BedDouble },
  { href: "/chistka-avtosideniy", label: "Автомобильные сиденья", icon: Car },
  { href: "/chistka-stuliev", label: "Стулья и кресла", icon: Armchair },
  { href: "/chistka-shtor", label: "Химчистка штор", icon: Layers },
  { href: "/chistka-kolyasok", label: "Детские коляски", icon: BedDouble },
  { href: "/chistka-ofisnoy-mebeli", label: "Офисная мебель", icon: Armchair },
  { href: "/khimchistka-mebeli-v-restoranah", label: "Для ресторанов", icon: UtensilsCrossed },
];

const articleLinks = [
  { href: "/kak-pochistit-divan", label: "Как почистить диван", icon: Droplets },
  { href: "/sredstva-dlya-chistki", label: "Средства для чистки", icon: FlaskConical },
  { href: "/udalenie-pyaten", label: "Удаление пятен", icon: Eraser },
  { href: "/chistka-paroochistitelem", label: "Пароочистителем", icon: Wind },
  { href: "/udalenie-zapahov", label: "Удаление запахов", icon: Flame },
  { href: "/pyatna-ot-kofe-i-chaya", label: "Пятна от кофе и чая", icon: Coffee },
  { href: "/chistka-mebeli-s-detmi", label: "Дети и животные", icon: Baby },
  { href: "/kak-chasto-chistit-mebel", label: "Как часто чистить", icon: CalendarClock },
];

const BlogSidebar = () => {
  const { pathname } = useLocation();
  const [servicesOpen, setServicesOpen] = useState(true);
  const [articlesOpen, setArticlesOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const NavContent = () => (
    <nav className="space-y-6">
      <div>
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-1"
        >
          <Home className="w-4 h-4" /> Главная
        </Link>
        <Link
          to="/o-kompanii"
          className={cn(
            "flex items-center gap-2 text-sm font-medium transition-colors",
            pathname === "/o-kompanii" ? "text-primary" : "text-muted-foreground hover:text-primary"
          )}
        >
          <Users className="w-4 h-4" /> О компании
        </Link>
        <Link
          to="/blog"
          className={cn(
            "flex items-center gap-2 text-sm font-medium transition-colors",
            pathname === "/blog" ? "text-primary" : "text-muted-foreground hover:text-primary"
          )}
        >
          <BookOpen className="w-4 h-4" /> Все статьи
        </Link>
      </div>

      {/* Services group */}
      <div>
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground/70 mb-2 hover:text-foreground transition-colors w-full"
        >
          {servicesOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          Услуги
        </button>
        {servicesOpen && (
          <ul className="space-y-1 pl-1">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-2 text-sm py-1.5 px-2 rounded-md transition-colors",
                    pathname === link.href
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <link.icon className="w-4 h-4 shrink-0" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Articles group */}
      <div>
        <button
          onClick={() => setArticlesOpen(!articlesOpen)}
          className="flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground/70 mb-2 hover:text-foreground transition-colors w-full"
        >
          {articlesOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          Полезные статьи
        </button>
        {articlesOpen && (
          <ul className="space-y-1 pl-1">
            {articleLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-2 text-sm py-1.5 px-2 rounded-md transition-colors",
                    pathname === link.href
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <link.icon className="w-4 h-4 shrink-0" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CTA */}
      <a
        href="tel:+79160435153"
        className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity justify-center"
      >
        <Phone className="w-4 h-4" />
        Позвонить
      </a>
    </nav>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-20 left-4 z-40 bg-card border border-border rounded-lg p-2 shadow-md"
        aria-label="Навигация"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:w-60 shrink-0 overflow-y-auto scrollbar-thin",
          "fixed top-16 left-0 bottom-0 z-30 w-64 bg-card border-r border-border p-5 transition-transform lg:relative lg:translate-x-0 lg:border-r-0 lg:bg-transparent lg:p-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <NavContent />
      </aside>
    </>
  );
};

export default BlogSidebar;
