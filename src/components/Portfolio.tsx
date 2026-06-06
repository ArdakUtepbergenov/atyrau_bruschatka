import { useState } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import portfolioResidence from "@/assets/portfolio-private-residence.jpg";
import portfolioCommercial from "@/assets/portfolio-commercial-plaza.jpg";

const Portfolio = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Placeholder for portfolio images - will be replaced with generated images
  const portfolioItems = [
    {
      id: 1,
      title: "Частная резиденция, Атырау",
      description: "Укладка классической брусчатки во дворе частного дома",
      category: "Частные дома",
      area: "120 м²",
      image: portfolioResidence
    },
    {
      id: 2,
      title: "Торговый центр «Атырау Плаза»",
      description: "Благоустройство территории торгового центра",
      category: "Коммерческие объекты",
      area: "800 м²",
      image: portfolioCommercial
    },
    {
      id: 3,
      title: "Парковая зона в ЖК «Сауле»",
      description: "Создание пешеходных дорожек и зон отдыха",
      category: "Благоустройство",
      area: "450 м²",
      image: portfolioResidence
    },
    {
      id: 4,
      title: "Кафе «Ас-Арай»",
      description: "Оформление входной группы и террасы",
      category: "Коммерческие объекты",
      area: "65 м²",
      image: portfolioCommercial
    },
    {
      id: 5,
      title: "Загородный дом, пос. Балыкши",
      description: "Комплексное благоустройство территории",
      category: "Частные дома",
      area: "200 м²",
      image: portfolioResidence
    },
    {
      id: 6,
      title: "Детский сад «Болашак»",
      description: "Безопасные покрытия для детских площадок",
      category: "Социальные объекты",
      area: "300 м²",
      image: portfolioCommercial
    }
  ];

  const categories = ["Все работы", "Частные дома", "Коммерческие объекты", "Благоустройство", "Социальные объекты"];
  const [selectedCategory, setSelectedCategory] = useState("Все работы");

  const filteredItems = selectedCategory === "Все работы" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="works" className="py-20 bg-light-stone/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наши работы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Более 1000 успешно завершенных проектов в Атырау и области
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentImage(0);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-forest-green text-white shadow-card"
                    : "bg-card text-muted-foreground hover:bg-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Main Gallery */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            {/* Image Carousel */}
            <div className="relative">
              <div className="aspect-video bg-gradient-card rounded-xl overflow-hidden shadow-card">
                <img
                  src={filteredItems[currentImage]?.image}
                  alt={filteredItems[currentImage]?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-card hover:bg-card transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-card hover:bg-card transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {filteredItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImage ? "bg-forest-green" : "bg-stone-gray/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-accent text-forest-green text-sm font-medium rounded-full mb-4">
                  {filteredItems[currentImage]?.category}
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {filteredItems[currentImage]?.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {filteredItems[currentImage]?.description}
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-card">
                <h4 className="font-semibold text-foreground mb-3">Детали проекта</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Площадь:</span>
                    <span className="font-medium text-foreground">{filteredItems[currentImage]?.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Тип объекта:</span>
                    <span className="font-medium text-foreground">{filteredItems[currentImage]?.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Статус:</span>
                    <span className="font-medium text-forest-green">Завершен</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card rounded-lg p-6">
                <p className="text-muted-foreground text-sm mb-4">
                  Хотите такой же качественный результат для своего объекта?
                </p>
                <button 
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center bg-forest-green text-white px-6 py-3 rounded-lg font-medium hover:bg-forest-green/90 transition-colors"
                >
                  Заказать такой же проект
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "1000+", label: "Завершенных проектов" },
              { number: "200 000+", label: "Квадратных метров" },
              { number: "7", label: "Лет опыта" },
              { number: "100%", label: "Довольных клиентов" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-card rounded-lg shadow-card">
                <div className="text-2xl md:text-3xl font-bold text-forest-green mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
