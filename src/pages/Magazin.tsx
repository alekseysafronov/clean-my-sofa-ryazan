import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, ShoppingCart, Send, Check } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { applyPhoneMask, isPhoneComplete } from "@/lib/phoneMask";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import ConsentCheckbox from "@/components/ConsentCheckbox";

interface Product {
  name: string;
  price: number;
}

interface ProductSet {
  title: string;
  badge: string;
  products: Product[];
}

const sets: ProductSet[] = [
  {
    title: "ChemSpec",
    badge: "Набор Элит",
    products: [
      { name: "Formula 90", price: 519.5 },
      { name: "Enz-All", price: 499.5 },
      { name: "All Fibre Textile Rinse", price: 228.15 },
      { name: "Energizer", price: 410.0 },
    ],
  },
  {
    title: "Бриз",
    badge: "Набор Оптимальный+",
    products: [
      { name: "ORANGE", price: 247.5 },
      { name: "LIME", price: 129.0 },
      { name: "SSR (Огонёк)", price: 442.5 },
      { name: "FIBER RINSE (Ручеёк)", price: 105.9 },
      { name: "Urine Remover", price: 295.5 },
      { name: "PRE-SPRAY HD (Бульдозер)", price: 259.35 },
      { name: "BREEZ SMART", price: 300.0 },
      { name: "MAGIC GEL", price: 950.0 },
    ],
  },
];

const allProducts = sets.flatMap((s) =>
  s.products.map((p) => ({ ...p, set: s.title }))
);

const formatPrice = (p: number) =>
  p.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const Magazin = () => {
  const { toast } = useToast();
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);

  // SeoHead handles meta tags

  const toggle = (productName: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(productName)) next.delete(productName);
      else next.add(productName);
      return next;
    });
  };

  const selectSet = (set: ProductSet) => {
    const allSelected = set.products.every((p) => selected.has(p.name));
    setSelected((prev) => {
      const next = new Set(prev);
      set.products.forEach((p) => {
        if (allSelected) next.delete(p.name); else next.add(p.name);
      });
      return next;
    });
  };

  const selectedItems = allProducts.filter((p) => selected.has(p.name));
  const total = selectedItems.reduce((s, p) => s + p.price, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedItems.length === 0 || !name.trim() || !isPhoneComplete(phone)) return;

    setSending(true);
    try {
      const itemsList = selectedItems
        .map((p) => `  • ${p.name} (${p.set}) — ${formatPrice(p.price)} ₽`)
        .join("\n");

      const message = `🛒 Заказ из магазина!\n\nТовары:\n${itemsList}\n\n💰 Итого: ${formatPrice(total)} ₽`;

      const { error } = await supabase.functions.invoke("send-telegram", {
        body: { name: name.trim(), phone: phone.replace(/\D/g, ""), message },
      });

      if (error) throw error;

      setSent(true);
      toast({ title: "Заказ отправлен!", description: "Мы свяжемся с вами в ближайшее время." });
    } catch {
      toast({ title: "Ошибка", description: "Не удалось отправить заказ. Позвоните нам!", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SeoHead title="Магазин химии для клининга — Рязань" description="Купить профессиональную химию для химчистки мебели и ковров в Рязани. ChemSpec, Бриз — порции по 50 г." />
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-secondary">
        <div className="container text-center max-w-2xl">
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-4">
            Магазин профессиональной химии
          </h1>
          <p className="text-muted-foreground text-lg">
            Порции по 50 г — попробуйте прежде, чем покупать литрами. Выберите товары и оформите заказ.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 md:py-20">
        <div className="container grid gap-8 md:grid-cols-2 max-w-4xl">
          {sets.map((set) => {
            const setTotal = set.products.reduce((s, p) => s + p.price, 0);
            const allChecked = set.products.every((p) => selected.has(p.name));
            return (
              <Card key={set.title} className="overflow-hidden">
                <CardHeader className="bg-primary/5 border-b border-border">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <CardTitle className="text-xl">{set.title}</CardTitle>
                    <Badge variant="secondary" className="font-heading text-xs">
                      {set.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y divide-border">
                    {set.products.map((p) => (
                      <li
                        key={p.name}
                        className="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-secondary/30 transition-colors"
                        onClick={() => toggle(p.name)}
                      >
                        <Checkbox
                          checked={selected.has(p.name)}
                          onCheckedChange={() => toggle(p.name)}
                          onClick={(e) => e.stopPropagation()}
                        />
                        <span className="text-sm text-foreground flex-1">{p.name}</span>
                        <span className="font-heading font-bold text-sm text-primary whitespace-nowrap">
                          {formatPrice(p.price)}&nbsp;₽
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between px-6 py-4 bg-secondary/50 border-t border-border">
                    <button
                      onClick={() => selectSet(set)}
                      className="font-heading font-semibold text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {allChecked ? "Убрать набор" : "Выбрать весь набор"}
                    </button>
                    <span className="font-heading font-extrabold text-lg text-primary">
                      {formatPrice(setTotal)}&nbsp;₽
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          * Цена указана за порцию 50 г. Возможна продажа полных ёмкостей — уточняйте по телефону.
        </p>
      </section>

      {/* Order form */}
      <section id="order" className="pb-16 md:pb-24">
        <div className="container max-w-lg">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <ShoppingCart className="w-5 h-5 text-primary" />
                Оформить заказ
              </CardTitle>
            </CardHeader>
            <CardContent>
              {sent ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-heading font-bold text-lg text-foreground mb-1">Заказ принят!</p>
                  <p className="text-sm text-muted-foreground">Мы перезвоним вам в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Selected items summary */}
                  {selectedItems.length > 0 ? (
                    <div className="bg-secondary/50 rounded-lg p-4 space-y-1">
                      {selectedItems.map((p) => (
                        <div key={p.name} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{p.name}</span>
                          <span className="font-medium text-foreground">{formatPrice(p.price)} ₽</span>
                        </div>
                      ))}
                      <div className="flex justify-between pt-2 border-t border-border mt-2">
                        <span className="font-heading font-semibold text-foreground">Итого</span>
                        <span className="font-heading font-extrabold text-primary">{formatPrice(total)} ₽</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-2">
                      Выберите товары выше ↑
                    </p>
                  )}

                  <Input
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={100}
                    required
                  />
                  <Input
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(applyPhoneMask(e.target.value))}
                    type="tel"
                    required
                  />

                  <ConsentCheckbox id="shop-consent" checked={consent} onChange={setConsent} />

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={selectedItems.length === 0 || !name.trim() || !isPhoneComplete(phone) || sending || !consent}
                  >
                    {sending ? (
                      "Отправка…"
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Отправить заказ
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Magazin;
