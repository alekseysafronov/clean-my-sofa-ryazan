import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import FloatingMessengers from "@/components/FloatingMessengers";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, Clock, Gift, Percent, Building2 } from "lucide-react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getEndOfMonth = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
};

const useCountdown = (targetDate: Date): TimeLeft => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};

const TimerBlock = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="bg-primary text-primary-foreground text-2xl md:text-4xl font-heading font-bold w-16 md:w-20 h-16 md:h-20 flex items-center justify-center rounded-xl">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-xs text-muted-foreground mt-1.5">{label}</span>
  </div>
);

const promotions = [
  {
    icon: Gift,
    title: "Скидка 20% на первый заказ",
    description: "Используйте промокод «ПЕРВЫЙ» при оформлении заказа и получите скидку 20% на любую услугу химчистки.",
    code: "ПЕРВЫЙ",
    badge: "–20%",
    badgeColor: "bg-accent text-accent-foreground",
  },
  {
    icon: Percent,
    title: "Скидка 15% на регулярное обслуживание",
    description: "Закажите регулярную химчистку и получите постоянную скидку 15% на все последующие заказы.",
    code: null,
    badge: "–15%",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    icon: Building2,
    title: "Спецусловия для бизнеса",
    description: "Особые цены для офисов, ресторанов и гостиниц. Индивидуальный график обслуживания и оплата по безналу.",
    code: null,
    badge: "B2B",
    badgeColor: "bg-secondary text-secondary-foreground",
  },
];

const Aktsii = () => {
  const timeLeft = useCountdown(getEndOfMonth());

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Акции и спецпредложения — Qweeq химчистка в Рязани"
        description="Скидки на химчистку мебели в Рязани. Промокод на первый заказ, скидки на регулярное обслуживание и спецусловия для бизнеса."
      />
      <Header />
      <main className="pt-28 md:pt-32">
        {/* Hero */}
        <section className="pb-8 md:pb-12">
          <div className="container text-center">
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-2">
              Ограниченное предложение
            </p>
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
              Акции и спецпредложения
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
              Успейте воспользоваться выгодными предложениями на химчистку мебели и ковров
            </p>

            {/* Countdown Timer */}
            <div className="inline-flex flex-col items-center bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">До конца акции осталось</span>
              </div>
              <div className="flex gap-3 md:gap-4">
                <TimerBlock value={timeLeft.days} label="дней" />
                <span className="text-2xl md:text-4xl font-bold text-primary self-start mt-3 md:mt-4">:</span>
                <TimerBlock value={timeLeft.hours} label="часов" />
                <span className="text-2xl md:text-4xl font-bold text-primary self-start mt-3 md:mt-4">:</span>
                <TimerBlock value={timeLeft.minutes} label="минут" />
                <span className="text-2xl md:text-4xl font-bold text-primary self-start mt-3 md:mt-4">:</span>
                <TimerBlock value={timeLeft.seconds} label="секунд" />
              </div>
            </div>
          </div>
        </section>

        {/* Promotions */}
        <AnimatedSection>
          <section className="py-12 md:py-20">
            <div className="container">
              <div className="grid gap-6 md:grid-cols-3">
                {promotions.map((promo, i) => (
                  <motion.div
                    key={promo.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow relative overflow-hidden"
                  >
                    <span className={`absolute top-4 right-4 ${promo.badgeColor} text-sm font-heading font-bold px-3 py-1 rounded-full`}>
                      {promo.badge}
                    </span>
                    <promo.icon className="w-10 h-10 text-primary mb-4" />
                    <h2 className="font-heading font-bold text-lg text-foreground mb-3">{promo.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{promo.description}</p>
                    {promo.code && (
                      <div className="bg-secondary rounded-lg px-4 py-2 inline-block">
                        <span className="text-xs text-muted-foreground">Промокод: </span>
                        <span className="font-heading font-bold text-foreground">{promo.code}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <section className="py-12 md:py-20 bg-section-gradient">
            <div className="container text-center">
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-4">
                Готовы заказать со скидкой?
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                Позвоните нам или оставьте заявку — мы рассчитаем стоимость с учётом вашей скидки
              </p>
              <a
                href="tel:+79160435153"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-heading font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                +7 (916) 043-51-53
              </a>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
      <FloatingMessengers />
    </div>
  );
};

export default Aktsii;
