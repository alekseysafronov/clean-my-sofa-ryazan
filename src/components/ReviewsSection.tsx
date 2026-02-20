import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ольга М.",
    text: "Заказывала химчистку дивана — результат превзошёл ожидания! Пятна от кофе исчезли полностью, диван как новый. Алексей приехал вовремя, работал аккуратно. Рекомендую!",
    rating: 5,
    service: "Химчистка дивана",
  },
  {
    name: "Дмитрий К.",
    text: "Чистили ковёр 3×4 м — был весь в пятнах после детей. Теперь выглядит как из магазина. Очень доволен ценой и качеством. Буду обращаться ещё.",
    rating: 5,
    service: "Чистка ковра",
  },
  {
    name: "Анна С.",
    text: "Вызывала на чистку автосалона. Быстро, качественно, без лишних запахов. Салон стал свежим и приятным. Спасибо за отличную работу!",
    rating: 5,
    service: "Чистка автосалона",
  },
  {
    name: "Игорь В.",
    text: "Отличный мастер! Почистил два кресла и угловой диван за пару часов. Использовал безопасные средства — у нас кошка, и никаких проблем. Цены адекватные.",
    rating: 5,
    service: "Химчистка кресел",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider text-center mb-2">Отзывы</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
          Что говорят наши клиенты
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12">
          Более 1000 довольных клиентов в Рязани и области
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                «{review.text}»
              </p>
              <div className="flex items-center justify-between">
                <span className="font-heading font-semibold text-sm">{review.name}</span>
                <span className="text-xs text-muted-foreground">{review.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
