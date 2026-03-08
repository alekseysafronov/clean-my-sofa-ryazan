import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import ThemeToggle from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const siteLinks = [
  { href: "/", label: "Главная" },
  { href: "/uslugi", label: "Услуги" },
  { href: "/blog", label: "Блог" },
  { href: "/faq", label: "FAQ" },
  { href: "/magazin", label: "Магазин" },
  { href: "/aktsii", label: "Акции" },
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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

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
      <div className="bg-card/95 backdrop-blur-md border-b border-border relative z-[60]">
        <div className="container flex items-center justify-between h-14 md:h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Qweeq — выездная химчистка мебели" className="h-9 md:h-11 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-4">
            {siteLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <a
              href="tel:+79160435153"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              +7 (916) 043-51-53
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle />
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-foreground relative z-[60]"
              aria-label="Меню"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Secondary nav — page anchors, shown on homepage */}
      {isHome && (
        <div className="hidden lg:block bg-secondary/80 backdrop-blur-sm border-b border-border">
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

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-0 z-50 bg-card flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Spacer for header */}
            <div className="h-14 shrink-0" />

            <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
              {siteLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-lg font-medium py-2.5 border-b border-border/50 transition-colors ${
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {isHome && (
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground/60 mb-2">На этой странице</p>
                  {pageAnchors.map((anchor) => (
                    <button
                      key={anchor.id}
                      onClick={() => scrollTo(anchor.id)}
                      className="block w-full text-left text-base text-muted-foreground hover:text-primary py-2"
                    >
                      {anchor.label}
                    </button>
                  ))}
                </motion.div>
              )}

              <motion.a
                href="tel:+79160435153"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3.5 rounded-lg font-heading font-semibold text-base justify-center mt-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <Phone className="w-5 h-5" />
                +7 (916) 043-51-53
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
