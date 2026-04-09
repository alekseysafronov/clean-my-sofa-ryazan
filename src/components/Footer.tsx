import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import minfinLogo from "@/assets/minfin-logo.png";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-[hsl(200,25%,15%)] text-white dark:bg-[hsl(200,25%,8%)]">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src={logo} alt="Qweeq" className="h-10 w-auto brightness-0 invert mb-4" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              {t("footer.desc")}
            </p>
            <p className="text-primary-foreground/50 text-xs">
              Сафронов Алексей Юрьевич<br />
              ИНН 623401087194 • ОГРН 326620000005879
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">{t("footer.contacts")}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+79160435153" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  +7 (916) 043-51-53
                </a>
              </li>
              <li>
                <a href="mailto:polka.pisem@gmail.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  polka.pisem@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 shrink-0" />
                {t("footer.location")}
              </li>
            </ul>
            <p className="text-primary-foreground/50 text-xs mt-3">{t("footer.hours")}</p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">{t("footer.servicesTitle")}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/chistka-divana" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("footer.sofaCleaning")}</Link></li>
              <li><Link to="/khimchistka-kovrov" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("footer.carpetCleaning")}</Link></li>
              <li><Link to="/chistka-matrasov" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("footer.mattressCleaning")}</Link></li>
              <li><Link to="/chistka-avtosideniy" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("footer.carCleaning")}</Link></li>
              <li><Link to="/chistka-stuliev" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("footer.chairCleaning")}</Link></li>
              <li><Link to="/chistka-shtor" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("footer.curtainCleaning")}</Link></li>
              <li><Link to="/rayony" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("footer.districts")}</Link></li>
              <li><Link to="/franshiza" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("nav.franchise")}</Link></li>
              <li><Link to="/faq" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("nav.faq")}</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("footer.allArticles")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col items-center gap-4 text-xs text-primary-foreground/40">
          <div className="flex items-center gap-3">
            <img src={minfinLogo} alt="Министерство Финансов РФ" className="w-8 h-8 object-contain" />
            <span className="text-primary-foreground/60 text-sm">{t("footer.minfin")}</span>
          </div>
          <p className="text-center text-primary-foreground/50 text-xs leading-relaxed max-w-xl">
            {t("footer.disclaimer")}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-3">
            <span>{t("footer.rights")}</span>
            <div className="flex items-center gap-3">
              <Link to="/politika-konfidencialnosti" className="hover:text-primary-foreground/70 transition-colors underline underline-offset-2">{t("footer.privacy")}</Link>
              <span>•</span>
              <span>ИП Сафронов Алексей • ИНН 623401087194</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
