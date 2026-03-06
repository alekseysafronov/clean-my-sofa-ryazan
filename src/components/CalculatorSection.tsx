import { useState } from "react";
import { Phone, Calculator, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { applyPhoneMask, isPhoneComplete } from "@/lib/phoneMask";

const serviceOptions = [
  { id: "sofa2", label: "2-местный диван", price: 2000, category: "Диваны" },
  { id: "sofa3", label: "3-местный диван", price: 2500, category: "Диваны" },
  { id: "sofaCorner", label: "Угловой диван", price: 3500, category: "Диваны" },
  { id: "armchair", label: "Кресло", price: 1000, category: "Кресла и стулья" },
  { id: "officeChair", label: "Офисное кресло", price: 800, category: "Кресла и стулья" },
  { id: "chair", label: "Стул мягкий", price: 400, category: "Кресла и стулья" },
  { id: "mattressSingle", label: "Матрас односпальный", price: 1500, category: "Матрасы" },
  { id: "mattressDouble", label: "Матрас двуспальный", price: 2500, category: "Матрасы" },
  { id: "carpet5", label: "Ковёр до 5 м²", price: 1500, category: "Ковры" },
  { id: "carpet10", label: "Ковёр 5–10 м²", price: 2500, category: "Ковры" },
  { id: "carSeats", label: "Салон авто (ткань)", price: 3000, category: "Автомобили" },
  { id: "stainRemoval", label: "Выведение пятна", price: 300, category: "Доп. услуги" },
];

const CalculatorSection = () => {
  const { toast } = useToast();
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", contact: "" });
  const [sending, setSending] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const toggleItem = (id: string) => {
    setSelected((prev) => {
      const copy = { ...prev };
      if (copy[id]) delete copy[id];
      else copy[id] = 1;
      return copy;
    });
  };

  const changeQty = (id: string, delta: number) => {
    setSelected((prev) => {
      const qty = (prev[id] || 0) + delta;
      if (qty <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: qty };
    });
  };

  const total = Object.entries(selected).reduce((sum, [id, qty]) => {
    const svc = serviceOptions.find((s) => s.id === id);
    return sum + (svc ? svc.price * qty : 0);
  }, 0);

  const categories = [...new Set(serviceOptions.map((s) => s.category))];

  const buildOrderText = () => {
    const lines = Object.entries(selected)
      .map(([id, qty]) => {
        const svc = serviceOptions.find((s) => s.id === id);
        if (!svc) return null;
        return `• ${svc.label} × ${qty} = ${(svc.price * qty).toLocaleString("ru-RU")} ₽`;
      })
      .filter(Boolean);
    return lines.join("\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    if (!validatePhone(form.phone)) {
      setPhoneError("Введите корректный номер телефона (не менее 10 цифр)");
      return;
    }
    setPhoneError("");

    setSending(true);
    try {
      const orderDetails = buildOrderText();
      const message = `🧮 Расчёт из калькулятора:\n${orderDetails}\n\n💰 Итого: от ${total.toLocaleString("ru-RU")} ₽${form.contact.trim() ? `\n📧 Доп. контакт: ${form.contact.trim()}` : ""}`;

      const { error } = await supabase.functions.invoke("send-telegram", {
        body: { name: form.name.trim(), phone: form.phone.trim(), message },
      });
      if (error) throw error;

      toast({ title: "Заявка отправлена!", description: "Мы перезвоним в ближайшее время." });
      setForm({ name: "", phone: "", contact: "" });
      setShowForm(false);
    } catch {
      toast({ title: "Ошибка", description: "Не удалось отправить. Позвоните нам!", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="calculator" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">Калькулятор</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Рассчитайте стоимость</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Выберите услуги и количество — получите примерную стоимость за секунду</p>
        </div>

        <div className="bg-card rounded-2xl shadow-card border border-border p-6 md:p-8">
          {categories.map((cat) => (
            <div key={cat} className="mb-6 last:mb-0">
              <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">{cat}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {serviceOptions
                  .filter((s) => s.category === cat)
                  .map((svc) => {
                    const isActive = !!selected[svc.id];
                    return (
                      <label
                        key={svc.id}
                        htmlFor={`calc-${svc.id}`}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 cursor-pointer transition-colors border select-none ${
                          isActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <input id={`calc-${svc.id}`} type="checkbox" checked={isActive} onChange={() => toggleItem(svc.id)} className="accent-primary w-4 h-4 shrink-0" />
                          <span className="text-sm text-foreground truncate">{svc.label}</span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          {isActive && (
                            <div className="flex items-center gap-1">
                              <button onClick={(e) => { e.stopPropagation(); changeQty(svc.id, -1); }} className="w-7 h-7 rounded-md bg-secondary text-foreground font-bold text-sm hover:bg-secondary/80 transition-colors">−</button>
                              <span className="w-7 text-center text-sm font-semibold text-foreground">{selected[svc.id]}</span>
                              <button onClick={(e) => { e.stopPropagation(); changeQty(svc.id, 1); }} className="w-7 h-7 rounded-md bg-secondary text-foreground font-bold text-sm hover:bg-secondary/80 transition-colors">+</button>
                            </div>
                          )}
                          <span className="text-xs text-muted-foreground whitespace-nowrap">{svc.price.toLocaleString("ru-RU")} ₽</span>
                        </div>
                      </label>
                    );
                  })}
              </div>
            </div>
          ))}

          {/* Total + buttons */}
          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Calculator className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Примерная стоимость</p>
                <p className="font-heading font-extrabold text-2xl text-foreground">
                  {total > 0 ? `от ${total.toLocaleString("ru-RU")} ₽` : "—"}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {total > 0 && (
                <button
                  onClick={() => setShowForm((v) => !v)}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" />
                  Отправить заявку
                </button>
              )}
              <a
                href="tel:+79160435153"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                Позвонить
              </a>
            </div>
          </div>

          {/* Inline form */}
          {showForm && total > 0 && (
            <form onSubmit={handleSubmit} className="mt-6 pt-6 border-t border-border space-y-4 max-w-md mx-auto">
              <div>
                <label htmlFor="calc-name" className="text-sm font-medium mb-1 block text-foreground">Ваше имя *</label>
                <input
                  id="calc-name" type="text" required maxLength={100}
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Алексей"
                />
              </div>
              <div>
                <label htmlFor="calc-phone" className="text-sm font-medium mb-1 block text-foreground">Телефон *</label>
                <input
                  id="calc-phone" type="tel" required maxLength={20}
                  value={form.phone} onChange={(e) => { setForm({ ...form, phone: e.target.value }); setPhoneError(""); }}
                  className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${phoneError ? "border-destructive" : "border-input"}`}
                  placeholder="+7 (___) ___-__-__"
                />
                {phoneError && <p className="text-destructive text-xs mt-1">{phoneError}</p>}
              </div>
              <div>
                <label htmlFor="calc-contact" className="text-sm font-medium mb-1 block text-foreground">Почта или мессенджер</label>
                <input
                  id="calc-contact" type="text" maxLength={100}
                  value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="email или @telegram (необязательно)"
                />
              </div>
              <button
                type="submit" disabled={sending}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {sending ? "Отправка..." : "Отправить заявку"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
