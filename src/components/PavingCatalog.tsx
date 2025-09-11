import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpDown, Grid3X3, ShoppingCart } from "lucide-react";

import pavingClassic from "@/assets/paving-classic-rectangular.jpg";
import pavingClinker from "@/assets/paving-clinker-brick.jpg";
import pavingGranite from "@/assets/paving-granite-dark.jpg";
import pavingWave from "@/assets/paving-concrete-wave.jpg";
import pavingHexagonal from "@/assets/paving-hexagonal-beige.jpg";

const PavingCatalog = () => {
  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("all");

  // Каталог брусчатки - 20 моделей
  const pavingItems = [
    { id: 1, name: "Классическая прямоугольная", price: 2500, category: "classic", size: "200x100x60", image: pavingClassic },
    { id: 2, name: "Брусчатка «Старый город»", price: 3200, category: "classic", size: "различные", image: pavingClassic },
    { id: 3, name: "Тротуарная плитка «Волна»", price: 2800, category: "wave", size: "240x120x60", image: pavingWave },
    { id: 4, name: "Клинкерная брусчатка", price: 4500, category: "clinker", size: "200x100x50", image: pavingClinker },
    { id: 5, name: "Гранитная брусчатка", price: 5800, category: "granite", size: "100x100x80", image: pavingGranite },
    { id: 6, name: "Плитка «Ромб»", price: 2600, category: "geometric", size: "170x148x60", image: pavingHexagonal },
    { id: 7, name: "Брусчатка «Кирпичик»", price: 2400, category: "classic", size: "200x100x40", image: pavingClassic },
    { id: 8, name: "Плитка «Соты»", price: 3400, category: "geometric", size: "различные", image: pavingHexagonal },
    { id: 9, name: "Тротуарная плитка «Рифленая»", price: 2700, category: "textured", size: "300x300x30", image: pavingWave },
    { id: 10, name: "Брусчатка «Антик»", price: 3800, category: "antique", size: "160x160x60", image: pavingGranite },
    { id: 11, name: "Плитка «Паркет»", price: 3100, category: "parquet", size: "250x62x60", image: pavingClassic },
    { id: 12, name: "Бетонная плитка «Луна»", price: 2200, category: "concrete", size: "350x350x50", image: pavingWave },
    { id: 13, name: "Брусчатка «Катушка»", price: 2900, category: "geometric", size: "170x140x60", image: pavingHexagonal },
    { id: 14, name: "Плитка «Черепашка»", price: 3500, category: "textured", size: "300x300x60", image: pavingWave },
    { id: 15, name: "Клинкерная «Ретро»", price: 4200, category: "clinker", size: "210x100x52", image: pavingClinker },
    { id: 16, name: "Гранитная «Колотая»", price: 6200, category: "granite", size: "100x100x100", image: pavingGranite },
    { id: 17, name: "Плитка «Мозаика»", price: 2800, category: "geometric", size: "различные", image: pavingHexagonal },
    { id: 18, name: "Брусчатка «Фантазия»", price: 3300, category: "classic", size: "160x240x60", image: pavingClassic },
    { id: 19, name: "Плитка «Волны»", price: 2600, category: "wave", size: "340x340x45", image: pavingWave },
    { id: 20, name: "Эко-плитка «Травка»", price: 3700, category: "eco", size: "400x400x80", image: pavingHexagonal }
  ];

  const categories = [
    { value: "all", label: "Все виды" },
    { value: "classic", label: "Классическая" },
    { value: "geometric", label: "Геометрическая" },
    { value: "clinker", label: "Клинкерная" },
    { value: "granite", label: "Гранитная" },
    { value: "textured", label: "Фактурная" },
    { value: "wave", label: "Волнистая" },
    { value: "concrete", label: "Бетонная" },
    { value: "antique", label: "Антик" },
    { value: "parquet", label: "Паркет" },
    { value: "eco", label: "Эко" }
  ];

  const sortOptions = [
    { value: "name", label: "По названию" },
    { value: "price-asc", label: "Цена: по возрастанию" },
    { value: "price-desc", label: "Цена: по убыванию" }
  ];

  // Filter and sort items
  const filteredItems = filterBy === "all" 
    ? pavingItems 
    : pavingItems.filter(item => item.category === filterBy);

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Каталог брусчатки
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Более 20 видов качественной брусчатки для любых задач и бюджета
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-full">
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Catalog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sortedItems.map((item) => (
              <Card key={item.id} className="overflow-hidden shadow-card hover:shadow-hero transition-all duration-300 group">
                <div className="aspect-square bg-gradient-card overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-forest-green transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Размер: {item.size} мм
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-forest-green">
                      {item.price.toLocaleString()} ₸
                    </span>
                    <span className="text-sm text-muted-foreground">за м²</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="cta" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Заказать
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('tel:+77122123456')}
                    >
                      Узнать цену
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Block */}
          <div className="bg-gradient-card rounded-xl p-8 shadow-card text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Не нашли подходящий вариант?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Мы поможем подобрать идеальную брусчатку под ваши задачи и бюджет. 
              Консультация бесплатно!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Получить консультацию
              </Button>
              <Button 
                variant="consultation"
                onClick={() => window.open('tel:+77122123456')}
              >
                Позвонить специалисту
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PavingCatalog;