import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, MessageCircle, Mail } from "lucide-react";

const Contacts = () => {
  const handleCallRequest = () => {
    // Here you would typically integrate with a callback service
    alert("Ваша заявка на обратный звонок принята! Мы перезвоним в течение 5 минут.");
  };

  return (
    <section id="contacts" className="py-20 bg-light-stone/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Контакты
            </h2>
            <p className="text-lg text-muted-foreground">
              Мы находимся в центре Атырау и готовы помочь с любыми вопросами
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Свяжитесь с нами
                </h3>
                
                <div className="space-y-4">
                  {/* Phone */}
                  <Card className="shadow-card hover:shadow-hero transition-shadow">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-forest-green" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">Основной телефон</h4>
                        <p className="text-muted-foreground">+7 (7122) 12-34-56</p>
                        <p className="text-sm text-muted-foreground">Звонки принимаем с 9:00 до 18:00</p>
                      </div>
                      <Button 
                        variant="cta" 
                        size="sm"
                        onClick={() => window.open('tel:+77122123456')}
                      >
                        Позвонить
                      </Button>
                    </CardContent>
                  </Card>

                  {/* WhatsApp */}
                  <Card className="shadow-card hover:shadow-hero transition-shadow">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-forest-green" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">WhatsApp</h4>
                        <p className="text-muted-foreground">+7 (708) 123-45-67</p>
                        <p className="text-sm text-muted-foreground">Доступен 24/7 для срочных вопросов</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open('https://wa.me/77081234567')}
                      >
                        Написать
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  <Card className="shadow-card hover:shadow-hero transition-shadow">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-forest-green" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">Электронная почта</h4>
                        <p className="text-muted-foreground">info@atyrau-paving.kz</p>
                        <p className="text-sm text-muted-foreground">Отвечаем в течение 2 часов</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open('mailto:info@atyrau-paving.kz')}
                      >
                        Написать
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Address */}
                  <Card className="shadow-card">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-forest-green" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">Наш офис</h4>
                        <p className="text-muted-foreground">г. Атырау, ул. Абая, 45</p>
                        <p className="text-sm text-muted-foreground">Офис 12, 2 этаж</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Working Hours */}
                  <Card className="shadow-card">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-forest-green" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">Режим работы</h4>
                        <div className="text-muted-foreground space-y-1">
                          <p>Пн-Пт: 9:00 - 18:00</p>
                          <p>Сб: 10:00 - 16:00</p>
                          <p>Вс: выходной</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Call Request */}
              <div className="bg-gradient-card rounded-xl p-6 shadow-card">
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Заказать обратный звонок
                </h4>
                <p className="text-muted-foreground mb-4">
                  Не можете дозвониться? Оставьте заявку и мы перезвоним в течение 5 минут!
                </p>
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={handleCallRequest}
                >
                  Заказать звонок
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Как нас найти
              </h3>
              
              {/* Google Maps Embed */}
              <div className="aspect-video bg-gradient-card rounded-xl overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93326.29509592743!2d51.88447457123487!3d47.11672969803887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41fd1caa566be063%3A0x7dce6ac31c52384c!2sAtyrau!5e0!3m2!1sen!2skz!4v1652345678901!5m2!1sen!2skz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта офиса Атырау Брусчатка"
                ></iframe>
              </div>

              {/* Location Benefits */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-lg p-4 shadow-card text-center">
                  <div className="text-2xl font-bold text-forest-green mb-1">5 мин</div>
                  <div className="text-sm text-muted-foreground">от центра</div>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-card text-center">
                  <div className="text-2xl font-bold text-forest-green mb-1">Рядом</div>
                  <div className="text-sm text-muted-foreground">парковка</div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Районы обслуживания
                </h4>
                <div className="text-muted-foreground space-y-2">
                  <p>• Атырау (все районы)</p>
                  <p>• поселок Балыкши</p>
                  <p>• Атырауская область (до 50 км)</p>
                </div>
                <p className="text-sm text-forest-green mt-3 font-medium">
                  Выезд и консультация бесплатно!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;