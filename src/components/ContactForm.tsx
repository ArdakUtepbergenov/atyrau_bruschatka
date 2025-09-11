import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pavingType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const pavingTypes = [
    "Классическая брусчатка",
    "Тротуарная плитка",
    "Клинкерная брусчатка",
    "Гранитная брусчатка",
    "Бетонная плитка",
    "Не определился"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в течение 30 минут",
      });
      
      setFormData({ name: "", phone: "", pavingType: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact-form" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Получите бесплатную консультацию
            </h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку и наш специалист свяжется с вами в течение 30 минут
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-forest-green" />
                  Форма заявки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="paving-type">Вид брусчатки</Label>
                    <Select 
                      value={formData.pavingType} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, pavingType: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип брусчатки" />
                      </SelectTrigger>
                      <SelectContent>
                        {pavingTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Свяжитесь с нами прямо сейчас
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-card">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-forest-green" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Телефон</p>
                      <p className="text-muted-foreground">+7 (7122) 12-34-56</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-card">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-forest-green" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="text-muted-foreground">+7 (708) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-card">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-forest-green" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">info@atyrau-paving.kz</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card rounded-xl p-6 shadow-card">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Режим работы
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-medium">Пн-Пт:</span> 9:00 - 18:00</p>
                  <p><span className="font-medium">Сб:</span> 10:00 - 16:00</p>
                  <p><span className="font-medium">Вс:</span> выходной</p>
                </div>
                <p className="text-sm text-forest-green mt-4 font-medium">
                  Бесплатные консультации и выезд на объект!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;