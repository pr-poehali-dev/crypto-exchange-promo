
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { FeatureCard, FeatureCardProps } from "@/components/ui/feature-card";

const features: FeatureCardProps[] = [
  {
    icon: "BadgePercent",
    title: "Без комиссий",
    description: "0% комиссии на все транзакции, независимо от объёма"
  },
  {
    icon: "Zap",
    title: "Быстрые транзакции",
    description: "Обменивайте мгновенно без задержек и ожиданий"
  },
  {
    icon: "Layout",
    title: "Простой интерфейс",
    description: "Интуитивно понятный для новичков и профессионалов"
  },
  {
    icon: "Coins",
    title: "Множество пар",
    description: "Поддержка всех популярных криптовалют и токенов"
  }
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Преимущества, которые <span className="text-purple-600">выделяют нас</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
