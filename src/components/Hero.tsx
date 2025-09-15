import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-paving-showcase.jpg";

const Hero = () => {
  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background via-light-stone to-warm-beige/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Брусчатка под ключ в{" "}
                <span className="text-transparent bg-clip-text bg-gradient-hero">
                  Атырау
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-gray font-medium">
                Красиво, надежно, долговечно
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                Профессиональная укладка брусчатки с гарантией качества. 
                Превратим ваш двор в произведение искусства.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Бесплатная консультация",
                "Работы под ключ",
                "Гарантия 3 года",
                "Быстрые сроки"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-green" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToForm}
                className="gap-2"
              >
                Заказать консультацию
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="consultation" 
                size="lg"
                onClick={() => window.open('tel:+77022410207')}
              >
                Позвонить сейчас
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-forest-green">1000+</div>
                <div className="text-sm text-muted-foreground">Объектов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-forest-green">7</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-forest-green">100%</div>
                <div className="text-sm text-muted-foreground">Гарантия</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-hero">
              <img
                src={heroImage}
                alt="Красивая брусчатка в Атырау - профессиональная укладка"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-forest-green/20"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-card">
                <span className="text-sm font-semibold text-forest-green">7 лет опыта</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
