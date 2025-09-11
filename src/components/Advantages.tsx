import { CheckCircle, Star, Shield, Clock } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: Star,
      title: "Опытная команда",
      description: "Более 5 лет успешной работы в сфере укладки брусчатки. Наши мастера знают все тонкости профессии.",
      stats: "200+ проектов"
    },
    {
      icon: CheckCircle,
      title: "Высокое качество укладки",
      description: "Используем проверенные технологии и соблюдаем все стандарты. Каждый этап работ контролируется.",
      stats: "100% качество"
    },
    {
      icon: Clock,
      title: "Доступные цены",
      description: "Предлагаем конкурентоспособные цены без скрытых платежей. Прозрачное ценообразование.",
      stats: "От 2500 тг/м²"
    },
    {
      icon: Shield,
      title: "Гарантия на работу",
      description: "Даем официальную гарантию на все виды работ. Бесплатное устранение дефектов в гарантийный период.",
      stats: "3 года гарантии"
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-gradient-to-br from-light-stone to-warm-beige/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Почему мы лучшие в Атырау
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Наши преимущества делают нас надежным партнером для реализации ваших проектов
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-hero transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <advantage.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {advantage.title}
                      </h3>
                      <span className="text-sm font-medium text-forest-green bg-accent px-3 py-1 rounded-full">
                        {advantage.stats}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-card rounded-xl p-8 shadow-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Готовы начать ваш проект?
              </h3>
              <p className="text-muted-foreground mb-6">
                Получите бесплатную консультацию и расчет стоимости работ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-hero text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-hero transition-all duration-300"
                >
                  Заказать консультацию
                </button>
                <button 
                  onClick={() => window.open('tel:+77122123456')}
                  className="inline-flex items-center justify-center gap-2 bg-warm-beige text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-warm-beige/90 border border-stone-gray/20"
                >
                  Позвонить сейчас
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;