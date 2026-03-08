import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMessengers from "@/components/FloatingMessengers";
import { Phone, Mail, MapPin, Building2, CreditCard } from "lucide-react";

const Kontakty = () => {
  return (
    <>
      <Header />
      <main className="pt-14 md:pt-16">
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container max-w-3xl">
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Контакты</h1>
            <p className="text-muted-foreground text-lg mb-10">
              Свяжитесь с нами любым удобным способом — мы всегда на связи.
            </p>

            {/* Contact info */}
            <div className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm space-y-5 mb-10">
              <h2 className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" /> Связаться с нами
              </h2>

              <div className="grid gap-4 text-sm">
                <a href="tel:+79160435153" className="flex items-start gap-3 text-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <div>
                    <span className="font-medium">Телефон</span>
                    <p className="text-muted-foreground">+7 (916) 043-51-53</p>
                  </div>
                </a>

                <a href="mailto:polka.pisem@gmail.com" className="flex items-start gap-3 text-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <div>
                    <span className="font-medium">Электронная почта</span>
                    <p className="text-muted-foreground">polka.pisem@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <div>
                    <span className="font-medium">Почтовый адрес</span>
                    <p className="text-muted-foreground">390026, г. Рязань, ул. Высоковольтная, д. 41, кв. 120</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-xs pt-2 border-t border-border">
                Ежедневно 8:00 — 21:00 · WhatsApp / Telegram
              </p>
            </div>

            {/* Requisites */}
            <div className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm space-y-5">
              <h2 className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" /> Реквизиты
              </h2>

              <dl className="grid gap-3 text-sm">
                {[
                  ["Наименование", "Индивидуальный предприниматель Сафронов Алексей Юрьевич"],
                  ["ИНН", "623401087194"],
                  ["ОГРН", "326620000005879"],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-medium text-foreground sm:w-52 shrink-0">{label}</dt>
                    <dd className="text-muted-foreground">{value}</dd>
                  </div>
                ))}
              </dl>

              <h3 className="font-heading font-semibold text-base text-foreground flex items-center gap-2 pt-4 border-t border-border">
                <CreditCard className="w-4 h-4 text-primary" /> Банковские реквизиты
              </h3>

              <dl className="grid gap-3 text-sm">
                {[
                  ["Расчётный счёт", "40802810620000900447"],
                  ["Название банка", "ООО «Банк Точка»"],
                  ["БИК", "044525104"],
                  ["Корр. счёт", "30101810745374525104"],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-medium text-foreground sm:w-52 shrink-0">{label}</dt>
                    <dd className="text-muted-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingMessengers />
    </>
  );
};

export default Kontakty;
