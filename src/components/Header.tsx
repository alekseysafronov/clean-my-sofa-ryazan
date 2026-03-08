import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const siteLinks = [
  { href: "/", label: "Главная" },
  { href: "/blog", label: "Блог" },
  { href: "/faq", label: "FAQ" },
  { href: "/magazin", label: "Магазин" },
  { href: "/franshiza", label: "Франшиза" },
  { href: "/kalkulyator-yur-litsa", label: "Для бизнеса" },
  { href: "/o-kompanii", label: "О компании" },
  { href: "/kontakty", label: "Контакты" },
];

const pageAnchors = [
  { id: "services", label: "Услуги" },
  { id: "pricing", label: "Цены" },
  { id: "gallery", label: "Работы" },
  { id: "benefits", label: "Преимущества" },
  { id: "process", label: "Как работаем" },
  { id: "contact", label: "Контакты" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Primary nav — all pages */}
      <div className="bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-14 md:h-16">
          <Link to="/" className="font-heading font-bold text-xl md:text-2xl text-primary tracking-tight">
            Qweeq
          </Link>

          <nav className="hidden md:flex items-center gap-5">
            {siteLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:+79160435153"
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            +7 (916) 043-51-53
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Меню"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Secondary nav — page anchors, shown on homepage */}
      {isHome && (
        <div className="hidden md:block bg-secondary/80 backdrop-blur-sm border-b border-border">
          <div className="container flex items-center gap-5 h-10">
            {pageAnchors.map((anchor) => (
              <button
                key={anchor.id}
                onClick={() => scrollTo(anchor.id)}
                className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {anchor.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            {siteLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium py-2 ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {isHome && (
              <div className="border-t border-border mt-2 pt-2">
                <p className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground/60 mb-2">На этой странице</p>
                {pageAnchors.map((anchor) => (
                  <button
                    key={anchor.id}
                    onClick={() => scrollTo(anchor.id)}
                    className="block w-full text-left text-sm text-muted-foreground hover:text-primary py-1.5"
                  >
                    {anchor.label}
                  </button>
                ))}
              </div>
            )}

            <a
              href="tel:+79160435153"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-heading font-semibold text-sm justify-center mt-2"
            >
              <Phone className="w-4 h-4" />
              +7 (916) 043-51-53
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
