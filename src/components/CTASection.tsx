import { useState } from "react";
import { Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { applyPhoneMask, isPhoneComplete } from "@/lib/phoneMask";
import ConsentCheckbox from "@/components/ConsentCheckbox";

const CTASection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [phoneError, setPhoneError] = useState("");
  const [sending, setSending] = useState(false);

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
      const { data, error } = await supabase.functions.invoke('send-telegram', {
        body: { name: form.name.trim(), phone: form.phone.trim(), message: form.message.trim() },
      });

      if (error) throw error;

      toast({ title: "Заявка отправлена!", description: "Мы перезвоним в ближайшее время." });
      setForm({ name: "", phone: "", message: "" });
    } catch (err) {
      console.error('Error sending form:', err);
      toast({ title: "Ошибка", description: "Не удалось отправить заявку. Позвоните нам!", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — CTA text */}
          <div className="text-center lg:text-left">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Готовы вернуть чистоту?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto lg:mx-0 mb-8 text-lg">
              Позвоните прямо сейчас — приеду в удобное для вас время. Бесплатная консультация и точный расчёт стоимости.
            </p>

            <a
              href="tel:+79160435153"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading font-bold px-10 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity mb-10"
            >
              <Phone className="w-5 h-5" />
              +7 (916) 043-51-53
            </a>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Рязань и область</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Ежедневно 8:00–21:00</span>
              <span className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp / Telegram</span>
            </div>
          </div>

          {/* Right — Contact form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card text-foreground rounded-xl p-6 md:p-8 shadow-card-hover space-y-4"
          >
            <h3 className="font-heading font-bold text-xl mb-2">Оставьте заявку</h3>
            <p className="text-muted-foreground text-sm mb-4">Перезвоним в течение 15 минут</p>

            <div>
              <label htmlFor="cta-name" className="text-sm font-medium mb-1 block">Ваше имя *</label>
              <input
                id="cta-name"
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
              <label htmlFor="cta-phone" className="text-sm font-medium mb-1 block">Телефон *</label>
              <input
                id="cta-phone"
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
              <label htmlFor="cta-msg" className="text-sm font-medium mb-1 block">Опишите проблему</label>
              <textarea
                id="cta-msg"
                maxLength={500}
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Например: пятно от вина на светлом диване"
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
      </div>
    </section>
  );
};

export default CTASection;
