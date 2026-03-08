import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, CheckCircle, Clock, Award } from "lucide-react";

const stats = [
  { icon: Users, value: 2500, suffix: "+", label: "Довольных клиентов" },
  { icon: CheckCircle, value: 4800, suffix: "+", label: "Выполненных заказов" },
  { icon: Clock, value: 5, suffix: " лет", label: "Опыт работы" },
  { icon: Award, value: 98, suffix: "%", label: "Положительных отзывов" },
];

const AnimatedNumber = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCurrent(value);
        clearInterval(timer);
      } else {
        setCurrent(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="text-3xl md:text-4xl font-heading font-bold text-primary">
      {current.toLocaleString("ru-RU")}{suffix}
    </span>
  );
};

const StatsCounter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center space-y-2"
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
              <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
