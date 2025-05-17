
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { TestimonialCard, TestimonialCardProps } from "@/components/ui/testimonial-card";

const testimonials: TestimonialCardProps[] = [
  {
    rating: 5,
    content: "\"Наконец-то сервис, который не берет комиссию за обмен! Потрясающая скорость транзакций.\"",
    name: "Алексей К.",
    role: "Трейдер",
    initials: "АК"
  },
  {
    rating: 5,
    content: "\"Простой и понятный интерфейс. Обмениваю BTC на USDT регулярно, никаких проблем не возникает.\"",
    name: "Марина В.",
    role: "Инвестор",
    initials: "МВ"
  },
  {
    rating: 4.5,
    content: "\"Пользуюсь уже месяц. Сэкономил на комиссиях больше, чем ожидал. Рекомендую всем!\"",
    name: "Дмитрий С.",
    role: "Крипто-энтузиаст",
    initials: "ДС"
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Отзывы</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Что говорят наши пользователи
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
