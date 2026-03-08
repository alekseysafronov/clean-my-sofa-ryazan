import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMessengers from "@/components/FloatingMessengers";
import { Phone, Mail, MapPin, Building2, CreditCard, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { applyPhoneMask, isPhoneComplete } from "@/lib/phoneMask";
import ConsentCheckbox from "@/components/ConsentCheckbox";

const Kontakty = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [phoneError, setPhoneError] = useState("");
  const [sending, setSending] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    if (!isPhoneComplete(form.phone)) {
      setPhoneError("Введите полный номер телефона");
      return;
    }
    setPhoneError("");
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-telegram", {
        body: { name: form.name.trim(), phone: form.phone.trim(), message: form.message.trim() },
      });
      if (error) throw error;
      toast({ title: "Заявка отправлена!", description: "Мы перезвоним в ближайшее время." });
      setForm({ name: "", phone: "", message: "" });
    } catch {
      toast({ title: "Ошибка", description: "Не удалось отправить заявку. Позвоните нам!", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-14 md:pt-16">
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container max-w-4xl">
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Контакты</h1>
            <p className="text-muted-foreground text-lg mb-10">
              Свяжитесь с нами любым удобным способом — мы всегда на связи.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* Contact info */}
              <div className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm space-y-5">
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

              {/* Contact form */}
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm space-y-4"
              >
                <h2 className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" /> Оставьте заявку
                </h2>
                <p className="text-muted-foreground text-sm">Перезвоним в течение 15 минут</p>

                <div>
                  <label htmlFor="k-name" className="text-sm font-medium mb-1 block">Ваше имя *</label>
                  <input
                    id="k-name"
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Алексей"
                  />
                </div>

                <div>
                  <label htmlFor="k-phone" className="text-sm font-medium mb-1 block">Телефон *</label>
                  <input
                    id="k-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onFocus={() => { if (!form.phone) setForm({ ...form, phone: "+7" }); }}
                    onChange={(e) => { setForm({ ...form, phone: applyPhoneMask(e.target.value) }); setPhoneError(""); }}
                    className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring ${phoneError ? "border-destructive" : "border-input"}`}
                    placeholder="+7 (___) ___-__-__"
                  />
                  {phoneError && <p className="text-destructive text-xs mt-1">{phoneError}</p>}
                </div>

                <div>
                  <label htmlFor="k-msg" className="text-sm font-medium mb-1 block">Сообщение</label>
                  <textarea
                    id="k-msg"
                    maxLength={500}
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Опишите вашу задачу или вопрос"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  {sending ? "Отправка..." : "Отправить заявку"}
                </button>
              </form>
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
