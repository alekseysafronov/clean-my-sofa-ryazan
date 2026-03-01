import { Star } from "lucide-react";

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

const ServiceReviews = () => {
  // Show 3 random reviews
  const displayReviews = reviews.slice(0, 3);

  return (
    <div className="not-prose my-10">
      <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Отзывы наших клиентов</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayReviews.map((review) => (
          <div
            key={review.name}
            className="bg-secondary rounded-xl p-5 border border-border"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-sm shrink-0">
                {review.avatar}
              </div>
              <div className="min-w-0">
                <p className="font-heading font-semibold text-foreground text-sm truncate">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.service}</p>
              </div>
            </div>
            <div className="flex gap-0.5 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < review.rating ? "text-accent fill-accent" : "text-border"}`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceReviews;
