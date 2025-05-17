
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabData {
  value: string;
  title: string;
  badgeColor: string;
  imageSrc: string;
  description: string;
}

const tabData: TabData[] = [
  {
    value: "exchange",
    title: "Обмен",
    badgeColor: "bg-green-500",
    imageSrc: "https://images.unsplash.com/photo-1645731504293-ec8ce0cc7c2d?q=80&w=2070&auto=format&fit=crop",
    description: "<strong>Просто введите сумму</strong> — и обмен произойдет за секунды без дополнительных подтверждений"
  },
  {
    value: "portfolio",
    title: "Портфолио",
    badgeColor: "bg-blue-500",
    imageSrc: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002&auto=format&fit=crop",
    description: "<strong>Отслеживайте все ваши активы</strong> в режиме реального времени с подробной аналитикой"
  },
  {
    value: "history",
    title: "История",
    badgeColor: "bg-orange-500",
    imageSrc: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop",
    description: "<strong>Полная история всех операций</strong> с возможностью фильтрации и экспорта данных"
  }
];

const AppInterface = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Интерфейс программы</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Простой и интуитивно понятный интерфейс для быстрого обмена криптовалют
        </p>
        
        <Tabs defaultValue="exchange" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {tabData.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>{tab.title}</TabsTrigger>
            ))}
          </TabsList>
          
          {tabData.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="relative">
              <Card className="border-purple-600/10 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={tab.imageSrc} 
                    alt={tab.title} 
                    className="w-full h-auto"
                  />
                  <div className={`absolute top-4 left-4 ${tab.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {tab.title}
                  </div>
                </CardContent>
              </Card>
              <div className="mt-4 p-4 bg-card rounded-lg border border-purple-600/10">
                <p dangerouslySetInnerHTML={{ __html: tab.description }}></p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default AppInterface;
