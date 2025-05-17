import Icon from "@/components/ui/icon";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const socialLinks = [
  { icon: "Twitter", url: "#" },
  { icon: "Facebook", url: "#" },
  { icon: "Instagram", url: "#" },
  { icon: "Github", url: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-purple-600">
              CryptoExchange
            </h3>
            <p className="text-sm text-muted-foreground">
              © 2024 Все права защищены
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  <Icon name={link.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
