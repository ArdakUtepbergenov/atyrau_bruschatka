import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary-foreground rounded-sm"></div>
                </div>
                <span className="font-bold text-xl">Атырау Брусчатка</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Профессиональная укладка брусчатки в Атырау. Качество, надежность, долговечность.
              </p>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://wa.me/77081234567')}
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('tel:+77022410207')}
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Phone className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Наши услуги</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Укладка брусчатки</li>
                <li>Тротуарная плитка</li>
                <li>Подготовка основания</li>
                <li>Установка бордюров</li>
                <li>Благоустройство территории</li>
                <li>Гарантийное обслуживание</li>
              </ul>
            </div>

            {/* Catalog */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Каталог</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Классическая брусчатка</li>
                <li>Клинкерная плитка</li>
                <li>Гранитная брусчатка</li>
                <li>Тротуарная плитка</li>
                <li>Эко-плитка</li>
                <li>Фактурная плитка</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary-foreground/60" />
                  <div>
                    <p className="text-primary-foreground">+77022410207</p>
                    <p className="text-sm text-primary-foreground/60">Основной</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-primary-foreground/60" />
                  <div>
                    <p className="text-primary-foreground">+77022410207</p>
                    <p className="text-sm text-primary-foreground/60">WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-foreground/60 mt-0.5" />
                  <div>
                    <p className="text-primary-foreground">г. Атырау, ул. Абая, 45</p>
                    <p className="text-sm text-primary-foreground/60">Офис 12, 2 этаж</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary-foreground/60" />
                  <div>
                    <p className="text-primary-foreground">info@atyrau-paving.kz</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-foreground/10 rounded-lg p-3">
                <p className="text-sm text-primary-foreground/80 mb-2">Режим работы:</p>
                <p className="text-sm text-primary-foreground">Пн-Пт: 9:00-18:00</p>
                <p className="text-sm text-primary-foreground">Сб: 10:00-16:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} Атырау Брусчатка. Все права защищены.
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-primary-foreground/60">
              <span>Лицензия № АТ-123456</span>
              <span>•</span>
              <span>ИИН: 123456789012</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-primary-foreground/40">
              Атырау • Балыкши • Атырауская область
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;