
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
