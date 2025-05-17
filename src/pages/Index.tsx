
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-purple-900/20 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600">
              Обменивайте криптовалюту без комиссий — быстро и безопасно
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              0% комиссии, мгновенные сделки, поддержка BTC, USDT и других активов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Icon name="Download" className="mr-2 h-5 w-5" />
                Скачать для Windows
              </Button>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600/10">
                <Icon name="Apple" className="mr-2 h-5 w-5" />
                Скачать для Mac
              </Button>
            </div>
          </div>
          
          <div className="mt-16 relative max-w-5xl mx-auto">
            <div className="bg-card rounded-xl shadow-xl overflow-hidden border border-purple-600/20">
              <img 
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop" 
                alt="Интерфейс приложения" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 -left-4 h-24 bg-gradient-to-t from-background to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Преимущества, которые <span className="text-purple-600">выделяют нас</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card className="border-purple-600/10 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="rounded-full bg-purple-600/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="BadgePercent" className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Без комиссий</h3>
                <p className="text-muted-foreground">0% комиссии на все транзакции, независимо от объёма</p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-purple-600/10 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="rounded-full bg-purple-600/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="Zap" className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Быстрые транзакции</h3>
                <p className="text-muted-foreground">Обменивайте мгновенно без задержек и ожиданий</p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-purple-600/10 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="rounded-full bg-purple-600/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="Layout" className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Простой интерфейс</h3>
                <p className="text-muted-foreground">Интуитивно понятный для новичков и профессионалов</p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-purple-600/10 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="rounded-full bg-purple-600/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="Coins" className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Множество пар</h3>
                <p className="text-muted-foreground">Поддержка всех популярных криптовалют и токенов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Interface section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Интерфейс программы</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">Простой и интуитивно понятный интерфейс для быстрого обмена криптовалют</p>
          
          <Tabs defaultValue="exchange" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="exchange">Обмен</TabsTrigger>
              <TabsTrigger value="portfolio">Портфолио</TabsTrigger>
              <TabsTrigger value="history">История</TabsTrigger>
            </TabsList>
            <TabsContent value="exchange" className="relative">
              <Card className="border-purple-600/10 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1645731504293-ec8ce0cc7c2d?q=80&w=2070&auto=format&fit=crop" 
                    alt="Обмен валюты" 
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Обмен
                  </div>
                </CardContent>
              </Card>
              <div className="mt-4 p-4 bg-card rounded-lg border border-purple-600/10">
                <p><strong>Просто введите сумму</strong> — и обмен произойдет за секунды без дополнительных подтверждений</p>
              </div>
            </TabsContent>
            <TabsContent value="portfolio">
              <Card className="border-purple-600/10 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002&auto=format&fit=crop" 
                    alt="Портфолио" 
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Портфолио
                  </div>
                </CardContent>
              </Card>
              <div className="mt-4 p-4 bg-card rounded-lg border border-purple-600/10">
                <p><strong>Отслеживайте все ваши активы</strong> в режиме реального времени с подробной аналитикой</p>
              </div>
            </TabsContent>
            <TabsContent value="history">
              <Card className="border-purple-600/10 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" 
                    alt="История транзакций" 
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    История
                  </div>
                </CardContent>
              </Card>
              <div className="mt-4 p-4 bg-card rounded-lg border border-purple-600/10">
                <p><strong>Полная история всех операций</strong> с возможностью фильтрации и экспорта данных</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Roadmap section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Roadmap</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">Наш план развития на ближайшее будущее</p>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-purple-600/20"></div>
            
            {/* Q2 2024 */}
            <div className="relative z-10 mb-16">
              <div className="flex items-center mb-2">
                <div className="w-1/2 text-right pr-8">
                  <h3 className="text-xl font-bold">Q2 2024</h3>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 border-4 border-background"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              <div className="flex">
                <div className="w-1/2 text-right pr-8">
                  <Card className="ml-auto bg-card/50 border-purple-600/10 max-w-xs">
                    <CardContent className="p-4">
                      <p>Запуск приложения для Windows и Mac с поддержкой BTC, ETH, USDT</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-1/2"></div>
              </div>
            </div>
            
            {/* Q3 2024 */}
            <div className="relative z-10 mb-16">
              <div className="flex items-center mb-2">
                <div className="w-1/2"></div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 border-4 border-background"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-bold">Q3 2024</h3>
                </div>
              </div>
              <div className="flex">
                <div className="w-1/2"></div>
                <div className="w-1/2 pl-8">
                  <Card className="bg-card/50 border-purple-600/10 max-w-xs">
                    <CardContent className="p-4">
                      <p>Интеграция с Binance и поддержка 30+ альткоинов</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            {/* Q4 2024 */}
            <div className="relative z-10 mb-16">
              <div className="flex items-center mb-2">
                <div className="w-1/2 text-right pr-8">
                  <h3 className="text-xl font-bold">Q4 2024</h3>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 border-4 border-background"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              <div className="flex">
                <div className="w-1/2 text-right pr-8">
                  <Card className="ml-auto bg-card/50 border-purple-600/10 max-w-xs">
                    <CardContent className="p-4">
                      <p>Мобильное приложение для iOS и Android</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-1/2"></div>
              </div>
            </div>
            
            {/* Q1 2025 */}
            <div className="relative z-10">
              <div className="flex items-center mb-2">
                <div className="w-1/2"></div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 border-4 border-background"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-bold">Q1 2025</h3>
                </div>
              </div>
              <div className="flex">
                <div className="w-1/2"></div>
                <div className="w-1/2 pl-8">
                  <Card className="bg-card/50 border-purple-600/10 max-w-xs">
                    <CardContent className="p-4">
                      <p>Запуск DeFi функций и собственной платежной системы</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Отзывы</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">Что говорят наши пользователи</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="border-purple-600/10 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="italic mb-4">"Наконец-то сервис, который не берет комиссию за обмен! Потрясающая скорость транзакций."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center mr-3">
                    <span className="font-bold text-purple-700">АК</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Алексей К.</h4>
                    <p className="text-sm text-muted-foreground">Трейдер</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="border-purple-600/10 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="italic mb-4">"Простой и понятный интерфейс. Обмениваю BTC на USDT регулярно, никаких проблем не возникает."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center mr-3">
                    <span className="font-bold text-purple-700">МВ</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Марина В.</h4>
                    <p className="text-sm text-muted-foreground">Инвестор</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 3 */}
            <Card className="border-purple-600/10 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="StarHalf" className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="italic mb-4">"Пользуюсь уже месяц. Сэкономил на комиссиях больше, чем ожидал. Рекомендую всем!"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center mr-3">
                    <span className="font-bold text-purple-700">ДС</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Дмитрий С.</h4>
                    <p className="text-sm text-muted-foreground">Крипто-энтузиаст</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900/10 to-violet-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать обменивать без комиссий?</h2>
            <p className="text-xl mb-8 text-muted-foreground">Скачайте приложение сейчас и присоединяйтесь к тысячам пользователей</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Icon name="Download" className="mr-2 h-5 w-5" />
                Скачать для Windows
              </Button>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600/10">
                <Icon name="Apple" className="mr-2 h-5 w-5" />
                Скачать для Mac
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-purple-600">CryptoExchange</h3>
              <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                <Icon name="Github" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Background pattern */}
      <style jsx="true">{`
        .bg-grid-pattern {
          background-image: radial-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default Index;
