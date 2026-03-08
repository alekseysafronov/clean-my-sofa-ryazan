import { useState, useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  name: string;
  rating: number;
  text: string;
  service: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    name: "Анна М.",
    rating: 5,
    text: "Диван выглядит как новый! Пятна от кофе и детского питания исчезли полностью. Мастер приехал вовремя, работал аккуратно. Рекомендую!",
    service: "Чистка дивана",
    avatar: "АМ",
  },
  {
    name: "Дмитрий К.",
    rating: 5,
    text: "Заказывал химчистку ковра 12 м². Ковёр стал ярче, запах от собаки пропал. Очень довольны результатом.",
    service: "Химчистка ковра",
    avatar: "ДК",
  },
  {
    name: "Елена С.",
    rating: 5,
    text: "Почистили матрас — ребёнок перестал чихать по утрам. Оказывается, там было столько пыли! Спасибо за профессионализм.",
    service: "Чистка матраса",
    avatar: "ЕС",
  },
  {
    name: "Ольга П.",
    rating: 4,
    text: "Химчистка стульев в нашем кафе — быстро, качественно, без запаха. Работали ночью, к утру всё было готово.",
    service: "Химчистка в ресторане",
    avatar: "ОП",
  },
  {
    name: "Игорь В.",
    rating: 5,
    text: "Салон авто почистили отлично. Сиденья как из магазина, пятна от кофе ушли. Буду обращаться ещё.",
    service: "Чистка автосидений",
    avatar: "ИВ",
  },
  {
    name: "Марина Т.",
    rating: 5,
    text: "Почистили коляску перед рождением второго ребёнка. Выглядит идеально, никаких пятен и запахов. Средства безопасные — это важно.",
    service: "Чистка коляски",
    avatar: "МТ",
  },
];

const UslugiReviews = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const perPage = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : typeof window !== "undefined" && window.innerWidth >= 640 ? 2 : 1;
  const maxIndex = Math.max(0, reviews.length - perPage);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [maxIndex]);

  const go = (dir: -1 | 1) => {
    setCurrent((prev) => {
      const next = prev + dir;
      if (next < 0) return maxIndex;
      if (next > maxIndex) return 0;
      return next;
    });
    resetTimer();
  };

  return (
    <section className="py-12 md:py-20 bg-section-gradient">
      <div className="container">
        <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider text-center mb-2">
          Отзывы
        </p>
        <h2 className="font-heading font-bold text-2xl md:text-4xl text-center mb-4">
          Что говорят наши клиенты
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-10">
          Реальные отзывы от людей, которые уже воспользовались нашими услугами
        </p>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={() => go(-1)}
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden mx-6 md:mx-8">
            <motion.div
              className="flex gap-5"
              animate={{ x: `calc(-${current} * (100% / ${perPage} + 20px / ${perPage}))` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="shrink-0"
                  style={{ width: `calc((100% - ${(perPage - 1) * 20}px) / ${perPage})` }}
                >
                  <div className="bg-card border border-border rounded-xl p-6 shadow-card h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-full bg-primary/15 text-primary flex items-center justify-center font-heading font-bold text-sm shrink-0">
                        {review.avatar}
                      </div>
                      <div className="min-w-0">
                        <p className="font-heading font-semibold text-foreground truncate">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.service}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "text-accent fill-accent" : "text-border"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">«{review.text}»</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); resetTimer(); }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Отзыв ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UslugiReviews;
