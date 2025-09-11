import { Award, Clock, Shield, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Профессиональная команда",
      description: "Опытные мастера с многолетним стажем"
    },
    {
      icon: Shield,
      title: "Качественные материалы",
      description: "Работаем только с проверенными поставщиками"
    },
    {
      icon: Clock,
      title: "Соблюдение сроков",
      description: "Всегда завершаем работы в оговоренные сроки"
    },
    {
      icon: Award,
      title: "Гарантия качества",
      description: "Даем гарантию на все выполненные работы"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              О компании «Атырау Брусчатка»
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы специализируемся на профессиональной укладке брусчатки в городе Атырау. 
              Наша команда обеспечивает полный цикл работ от консультации до завершения проекта.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Почему выбирают нас?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                За годы работы мы зарекомендовали себя как надежная компания, которая 
                предоставляет услуги высокого качества. Мы помогаем подобрать оптимальные 
                материалы, разрабатываем индивидуальные решения и обеспечиваем долговечный результат.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Каждый проект для нас уникален. Мы учитываем особенности участка, 
                пожелания клиента и бюджет, предлагая оптимальные решения для каждой ситуации.
              </p>
            </div>
            
            <div className="bg-gradient-card rounded-xl p-8 shadow-card">
              <h4 className="text-xl font-semibold text-foreground mb-4">Наши услуги</h4>
              <ul className="space-y-3">
                {[
                  "Консультация и выбор материалов",
                  "Подготовка основания",
                  "Укладка брусчатки любой сложности",
                  "Установка бордюров и водостоков",
                  "Гарантийное обслуживание"
                ].map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-hero transition-shadow">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-forest-green" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;