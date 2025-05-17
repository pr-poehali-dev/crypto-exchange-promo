
import { Card, CardContent } from "@/components/ui/card";

interface RoadmapItem {
  quarter: string;
  description: string;
  position: "left" | "right";
}

const roadmapItems: RoadmapItem[] = [
  {
    quarter: "Q2 2024",
    description: "Запуск приложения для Windows и Mac с поддержкой BTC, ETH, USDT",
    position: "left"
  },
  {
    quarter: "Q3 2024",
    description: "Интеграция с Binance и поддержка 30+ альткоинов",
    position: "right"
  },
  {
    quarter: "Q4 2024",
    description: "Мобильное приложение для iOS и Android",
    position: "left"
  },
  {
    quarter: "Q1 2025",
    description: "Запуск DeFi функций и собственной платежной системы",
    position: "right"
  }
];

const Roadmap = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Roadmap</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Наш план развития на ближайшее будущее
        </p>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-purple-600/20"></div>
          
          {roadmapItems.map((item, index) => (
            <div key={index} className="relative z-10 mb-16 last:mb-0">
              <div className="flex items-center mb-2">
                {item.position === "left" ? (
                  <>
                    <div className="w-1/2 text-right pr-8">
                      <h3 className="text-xl font-bold">{item.quarter}</h3>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 border-4 border-background"></div>
                    <div className="w-1/2 pl-8"></div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2"></div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 border-4 border-background"></div>
                    <div className="w-1/2 pl-8">
                      <h3 className="text-xl font-bold">{item.quarter}</h3>
                    </div>
                  </>
                )}
              </div>
              <div className="flex">
                {item.position === "left" ? (
                  <>
                    <div className="w-1/2 text-right pr-8">
                      <Card className="ml-auto bg-card/50 border-purple-600/10 max-w-xs">
                        <CardContent className="p-4">
                          <p>{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-1/2"></div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2"></div>
                    <div className="w-1/2 pl-8">
                      <Card className="bg-card/50 border-purple-600/10 max-w-xs">
                        <CardContent className="p-4">
                          <p>{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
