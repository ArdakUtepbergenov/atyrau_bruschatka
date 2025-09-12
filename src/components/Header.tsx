import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Атырау Брусчатка логотип" className="h-8 w-auto rounded-lg object-contain" />
            <span className="font-bold text-xl text-foreground">Атырау Брусчатка</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">О нас</button>
            <button onClick={() => scrollToSection('works')} className="text-foreground hover:text-primary transition-colors">Наши работы</button>
            <button onClick={() => scrollToSection('catalog')} className="text-foreground hover:text-primary transition-colors">Каталог</button>
            <button onClick={() => scrollToSection('advantages')} className="text-foreground hover:text-primary transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
          </nav>

          {/* Phone Button Desktop */}
          <div className="hidden md:flex">
            <Button variant="cta" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              +77022410207
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary">О нас</button>
              <button onClick={() => scrollToSection('works')} className="text-left text-foreground hover:text-primary">Наши работы</button>
              <button onClick={() => scrollToSection('catalog')} className="text-left text-foreground hover:text-primary">Каталог</button>
              <button onClick={() => scrollToSection('advantages')} className="text-left text-foreground hover:text-primary">Преимущества</button>
              <button onClick={() => scrollToSection('contacts')} className="text-left text-foreground hover:text-primary">Контакты</button>
              <Button variant="cta" size="sm" className="gap-2 w-fit">
                <Phone className="w-4 h-4" />
                +77022410207
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
