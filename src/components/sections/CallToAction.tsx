
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900/10 to-violet-900/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать обменивать без комиссий?</h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Скачайте приложение сейчас и присоединяйтесь к тысячам пользователей
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
      </div>
    </section>
  );
};

export default CallToAction;
