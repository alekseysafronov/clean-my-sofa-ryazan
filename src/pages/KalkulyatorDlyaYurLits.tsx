import { useState } from "react";
import { Phone, Send, Building2, Calculator, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { applyPhoneMask, isPhoneComplete } from "@/lib/phoneMask";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMessengers from "@/components/FloatingMessengers";


const serviceOptions = [
  { id: "sofa2", label: "2-местный диван", price: 2000, unit: "шт.", category: "Диваны" },
  { id: "sofa3", label: "3-местный диван", price: 2500, unit: "шт.", category: "Диваны" },
  { id: "sofaCorner", label: "Угловой диван", price: 3500, unit: "шт.", category: "Диваны" },
  { id: "armchair", label: "Кресло", price: 1000, unit: "шт.", category: "Кресла и стулья" },
  { id: "officeChair", label: "Офисное кресло", price: 800, unit: "шт.", category: "Кресла и стулья" },
  { id: "chair", label: "Стул мягкий", price: 400, unit: "шт.", category: "Кресла и стулья" },
  { id: "mattressSingle", label: "Матрас односпальный", price: 1500, unit: "шт.", category: "Матрасы" },
  { id: "mattressDouble", label: "Матрас двуспальный", price: 2500, unit: "шт.", category: "Матрасы" },
  { id: "carpet", label: "Ковёр / ковролин", price: 300, unit: "м²", category: "Ковры и ковролин" },
  { id: "carSeats", label: "Салон авто (ткань)", price: 3000, unit: "шт.", category: "Автомобили" },
  { id: "curtains", label: "Шторы", price: 250, unit: "м²", category: "Шторы" },
  { id: "stainRemoval", label: "Выведение пятна", price: 300, unit: "шт.", category: "Доп. услуги" },
];

const emptyForm = {
  companyName: "",
  inn: "",
  contactName: "",
  phone: "",
  email: "",
  bankDetails: "",
  address: "",
  comment: "",
};

const KalkulyatorDlyaYurLits = () => {
  const { toast } = useToast();
  const [quantities, setQuantities] = useState<Record<string, string>>({});
  const [form, setForm] = useState(emptyForm);
  const [sending, setSending] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const setQty = (id: string, raw: string) => {
    const cleaned = raw.replace(/\D/g, "");
    setQuantities((prev) => ({ ...prev, [id]: cleaned }));
  };

  const getQty = (id: string): number => {
    const v = quantities[id];
    return v ? parseInt(v, 10) || 0 : 0;
  };

  const total = serviceOptions.reduce((sum, svc) => sum + svc.price * getQty(svc.id), 0);
  const hasItems = total > 0;

  const categories = [...new Set(serviceOptions.map((s) => s.category))];

  const buildOrderText = () => {
    return serviceOptions
      .filter((svc) => getQty(svc.id) > 0)
      .map((svc) => {
        const qty = getQty(svc.id);
        return `• ${svc.label} × ${qty} ${svc.unit} = ${(svc.price * qty).toLocaleString("ru-RU")} ₽`;
      })
      .join("\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.contactName.trim() || !form.phone.trim()) {
      toast({ title: "Заполните обязательные поля", description: "Имя контакта и телефон обязательны", variant: "destructive" });
      return;
    }
    if (!isPhoneComplete(form.phone)) {
      setPhoneError("Введите полный номер телефона");
      return;
    }
    setPhoneError("");

    setSending(true);
    try {
      const orderDetails = buildOrderText();
      const lines = [
        `🏢 Заявка от юр. лица`,
        orderDetails ? `\n📋 Заказ:\n${orderDetails}` : "",
        `\n💰 Итого: от ${total.toLocaleString("ru-RU")} ₽`,
        form.companyName.trim() ? `\n🏛 Компания: ${form.companyName.trim()}` : "",
        form.inn.trim() ? `📄 ИНН: ${form.inn.trim()}` : "",
        form.email.trim() ? `📧 Email: ${form.email.trim()}` : "",
        form.address.trim() ? `📍 Адрес: ${form.address.trim()}` : "",
        form.bankDetails.trim() ? `🏦 Реквизиты: ${form.bankDetails.trim()}` : "",
        form.comment.trim() ? `💬 Комментарий: ${form.comment.trim()}` : "",
      ].filter(Boolean).join("\n");

      const { error } = await supabase.functions.invoke("send-telegram", {
        body: { name: form.contactName.trim(), phone: form.phone.trim(), message: lines },
      });
      if (error) throw error;

      toast({ title: "Заявка отправлена!", description: "Наш менеджер свяжется с вами в ближайшее время." });
      setForm(emptyForm);
      setQuantities({});
    } catch {
      toast({ title: "Ошибка", description: "Не удалось отправить. Позвоните нам!", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  const update = (field: keyof typeof emptyForm, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20 md:pt-24 pb-16">
        <div className="container max-w-5xl">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Building2 className="w-4 h-4" />
              Для юридических лиц
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Калькулятор для организаций
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Рассчитайте стоимость химчистки для вашего офиса, ресторана или гостиницы. Работаем по безналичному расчёту, предоставляем закрывающие документы.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Services table */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
                <div className="px-6 py-4 bg-secondary/50 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-primary" />
                    <h2 className="font-heading font-semibold text-foreground">Выберите услуги</h2>
                  </div>
                </div>

                <div className="divide-y divide-border">
                  {categories.map((cat) => (
                    <div key={cat} className="px-6 py-4">
                      <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3">
                        {cat}
                      </h3>
                      <div className="space-y-2">
                        {serviceOptions
                          .filter((s) => s.category === cat)
                          .map((svc) => {
                            const qty = getQty(svc.id);
                            const lineTotal = svc.price * qty;
                            return (
                              <div
                                key={svc.id}
                                className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3 border transition-colors ${
                                  qty > 0 ? "border-primary bg-primary/5" : "border-border"
                                }`}
                              >
                                <div className="flex-1 min-w-0">
                                  <span className="text-sm text-foreground">{svc.label}</span>
                                  <span className="text-xs text-muted-foreground ml-2">
                                    {svc.price.toLocaleString("ru-RU")} ₽ / {svc.unit}
                                  </span>
                                </div>
                                <div className="flex items-center gap-3 shrink-0">
                                  <input
                                    type="text"
                                    inputMode="numeric"
                                    value={quantities[svc.id] || ""}
                                    onChange={(e) => setQty(svc.id, e.target.value)}
                                    placeholder="0"
                                    className="w-16 text-center rounded-lg border border-input bg-background px-2 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                  />
                                  <span className="text-xs text-muted-foreground w-6">{svc.unit}</span>
                                  {qty > 0 && (
                                    <span className="text-sm font-semibold text-foreground whitespace-nowrap min-w-[70px] text-right">
                                      {lineTotal.toLocaleString("ru-RU")} ₽
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total bar */}
                <div className="px-6 py-5 bg-secondary/50 border-t border-border flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Примерная стоимость</span>
                  <span className="font-heading font-extrabold text-2xl text-foreground">
                    {hasItems ? `от ${total.toLocaleString("ru-RU")} ₽` : "—"}
                  </span>
                </div>
              </div>
            </div>

            {/* Business form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl shadow-card border border-border overflow-hidden sticky top-24"
              >
                <div className="px-6 py-4 bg-secondary/50 border-b border-border">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <h2 className="font-heading font-semibold text-foreground">Данные организации</h2>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Обязательные поля отмечены *</p>
                </div>

                <div className="px-6 py-5 space-y-4">
                  {/* Required */}
                  <div>
                    <label htmlFor="b2b-contact" className="text-sm font-medium mb-1 block text-foreground">
                      Контактное лицо <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="b2b-contact"
                      type="text"
                      required
                      maxLength={100}
                      value={form.contactName}
                      onChange={(e) => update("contactName", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Иванов Иван Иванович"
                    />
                  </div>

                  <div>
                    <label htmlFor="b2b-phone" className="text-sm font-medium mb-1 block text-foreground">
                      Телефон <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="b2b-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onFocus={() => { if (!form.phone) update("phone", "+7"); }}
                      onChange={(e) => { update("phone", applyPhoneMask(e.target.value)); setPhoneError(""); }}
                      className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${phoneError ? "border-destructive" : "border-input"}`}
                      placeholder="+7 (___) ___-__-__"
                    />
                    {phoneError && <p className="text-destructive text-xs mt-1">{phoneError}</p>}
                  </div>

                  <hr className="border-border" />

                  {/* Optional business fields */}
                  <div>
                    <label htmlFor="b2b-company" className="text-sm font-medium mb-1 block text-foreground">
                      Название организации
                    </label>
                    <input
                      id="b2b-company"
                      type="text"
                      maxLength={200}
                      value={form.companyName}
                      onChange={(e) => update("companyName", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder='ООО "Ромашка"'
                    />
                  </div>

                  <div>
                    <label htmlFor="b2b-inn" className="text-sm font-medium mb-1 block text-foreground">
                      ИНН
                    </label>
                    <input
                      id="b2b-inn"
                      type="text"
                      inputMode="numeric"
                      maxLength={12}
                      value={form.inn}
                      onChange={(e) => update("inn", e.target.value.replace(/\D/g, ""))}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="1234567890"
                    />
                  </div>

                  <div>
                    <label htmlFor="b2b-email" className="text-sm font-medium mb-1 block text-foreground">
                      Рабочая почта
                    </label>
                    <input
                      id="b2b-email"
                      type="email"
                      maxLength={200}
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="zakaz@company.ru"
                    />
                  </div>

                  <div>
                    <label htmlFor="b2b-address" className="text-sm font-medium mb-1 block text-foreground">
                      Адрес объекта
                    </label>
                    <input
                      id="b2b-address"
                      type="text"
                      maxLength={300}
                      value={form.address}
                      onChange={(e) => update("address", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="г. Рязань, ул. Примерная, д. 1"
                    />
                  </div>

                  <div>
                    <label htmlFor="b2b-bank" className="text-sm font-medium mb-1 block text-foreground">
                      Банковские реквизиты
                    </label>
                    <textarea
                      id="b2b-bank"
                      maxLength={500}
                      rows={3}
                      value={form.bankDetails}
                      onChange={(e) => update("bankDetails", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="р/с, БИК, наименование банка"
                    />
                  </div>

                  <div>
                    <label htmlFor="b2b-comment" className="text-sm font-medium mb-1 block text-foreground">
                      Комментарий
                    </label>
                    <textarea
                      id="b2b-comment"
                      maxLength={1000}
                      rows={3}
                      value={form.comment}
                      onChange={(e) => update("comment", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Пожелания, удобное время, особенности объекта"
                    />
                  </div>
                </div>

                <div className="px-6 pb-6 space-y-3">
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {sending ? "Отправка..." : "Отправить заявку"}
                  </button>
                  <a
                    href="tel:+79160435153"
                    className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Phone className="w-4 h-4" />
                    Позвонить
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingMessengers />
    </div>
  );
};

export default KalkulyatorDlyaYurLits;
