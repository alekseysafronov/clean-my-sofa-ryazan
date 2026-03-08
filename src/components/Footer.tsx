import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import minfinLogo from "@/assets/minfin-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Qweeq</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Профессиональная химчистка мягкой мебели и ковров в Рязани с выездом на дом.
            </p>
            <p className="text-primary-foreground/50 text-xs">
              Сафронов Алексей Юрьевич<br />
              ИНН 623401087194 • ОГРН 326620000005879
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">Контакты</h4>
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
                Рязань и Рязанская область
              </li>
            </ul>
            <p className="text-primary-foreground/50 text-xs mt-3">Ежедневно 8:00 — 21:00 • WhatsApp / Telegram</p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/chistka-divana" className="text-primary-foreground/70 hover:text-accent transition-colors">Химчистка диванов</Link></li>
              <li><Link to="/khimchistka-kovrov" className="text-primary-foreground/70 hover:text-accent transition-colors">Химчистка ковров</Link></li>
              <li><Link to="/chistka-matrasov" className="text-primary-foreground/70 hover:text-accent transition-colors">Химчистка матрасов</Link></li>
              <li><Link to="/chistka-avtosideniy" className="text-primary-foreground/70 hover:text-accent transition-colors">Химчистка автосидений</Link></li>
              <li><Link to="/chistka-stuliev" className="text-primary-foreground/70 hover:text-accent transition-colors">Химчистка стульев</Link></li>
              <li><Link to="/chistka-shtor" className="text-primary-foreground/70 hover:text-accent transition-colors">Химчистка штор</Link></li>
              <li><Link to="/rayony" className="text-primary-foreground/70 hover:text-accent transition-colors">Районы Рязани</Link></li>
              <li><Link to="/franshiza" className="text-primary-foreground/70 hover:text-accent transition-colors">Франшиза</Link></li>
              <li><Link to="/faq" className="text-primary-foreground/70 hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/70 hover:text-accent transition-colors">Все статьи →</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col items-center gap-4 text-xs text-primary-foreground/40">
          <div className="flex items-center gap-3">
            <img src={minfinLogo} alt="Министерство Финансов РФ" className="w-8 h-8 object-contain" />
            <span className="text-primary-foreground/60 text-sm">При поддержке Министерства Финансов РФ</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-3">
            <span>© 2026 Qweeq. Все права защищены.</span>
            <span>ИП Сафронов Алексей • ИНН 623401087194</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
