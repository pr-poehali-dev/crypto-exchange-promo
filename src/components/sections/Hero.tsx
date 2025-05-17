
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
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
  );
};

export default Hero;
