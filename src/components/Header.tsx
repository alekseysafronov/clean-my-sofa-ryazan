import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#services", label: "Услуги" },
  { href: "/#pricing", label: "Цены" },
  { href: "/#benefits", label: "Преимущества" },
  { href: "/#process", label: "Как работаем" },
  { href: "/#contact", label: "Контакты" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-heading font-bold text-xl md:text-2xl text-primary tracking-tight">
          Qweeq
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+79160435153"
          className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
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

      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border animate-fade-in">
          <nav className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-base font-medium text-muted-foreground hover:text-primary py-2"
              >
                {link.label}
              </a>
            ))}
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
