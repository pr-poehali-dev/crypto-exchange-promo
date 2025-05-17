
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full py-4 border-b border-border/40 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-purple-600">
            CryptoExchange
          </Link>
          
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex space-x-6">
              <a href="#features" className="text-sm font-medium hover:text-purple-600 transition-colors">
                Преимущества
              </a>
              <a href="#app" className="text-sm font-medium hover:text-purple-600 transition-colors">
                Интерфейс
              </a>
              <a href="#roadmap" className="text-sm font-medium hover:text-purple-600 transition-colors">
                Roadmap
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-purple-600 transition-colors">
                Отзывы
              </a>
            </nav>
            
            <ThemeToggle />
            
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700 hidden md:flex">
              <Icon name="Download" className="mr-2 h-4 w-4" />
              Скачать
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
