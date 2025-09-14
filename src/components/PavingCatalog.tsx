import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpDown, Grid3X3, ShoppingCart } from "lucide-react";

// Импорты картинок
// import img1 from "@/assets/1.jpeg";
// import img2 from "@/assets/2.JPG";
// import img3 from "@/assets/3.JPG";
// import img4 from "@/assets/4.JPG";
// import img5 from "@/assets/5.jpeg";
// import img6 from "@/assets/6.JPG";
// import img7 from "@/assets/7.JPG";
// import img8 from "@/assets/8.JPG";
// import img9 from "@/assets/9.JPG";
// import img10 from "@/assets/10.JPG";
// import img11 from "@/assets/11.JPG";
// import img12 from "@/assets/12.JPG";
// import img13 from "@/assets/13.JPG";
// import img14 from "@/assets/14.JPG";
// import img15 from "@/assets/15.JPG";
// import img16 from "@/assets/16.JPG";
// import img17 from "@/assets/17.jpeg";
// import img18 from "@/assets/18.JPG";
// import img19 from "@/assets/19.JPG";

import img1 from "@/assets/brilliantseryi.jpeg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/brilliantfinal.jpeg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/staryigorod.jpeg";
import img9 from "@/assets/9.jpeg";
import img10 from "@/assets/vavilion.jpeg";
import img11 from "@/assets/11.jpg";
import img12 from "@/assets/12.jpeg";
import img13 from "@/assets/13.jpeg";
import img14 from "@/assets/hightech.jpeg";
import img15 from "@/assets/15.jpg";
import img16 from "@/assets/16.jpg";
import img17 from "@/assets/vavilon.jpeg";
import img18 from "@/assets/18.jpeg";
import img19 from "@/assets/40x40.jpeg";
import img20 from "@/assets/20.jpg";



const PavingCatalog = () => {
  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("all");

  // Каталог брусчатки - 19 моделей
  const pavingItems = [
  { id: 1, name: "Вавилон", price: 4500, category: "classic", size: "Толщина 4 см", image: img1 },
  { id: 2, name: "Узор Ташкент", price: 6500, category: "classic", size: "Толщина 5 см", image: img2 },
  { id: 3, name: "Прокурор цветной", price: 5000, category: "classic", size: "Толщина 4 см", image: img3 },
  { id: 4, name: "Бархат", price: 5500, category: "classic", size: "Толщина 4,5 см", image: img4 },
  { id: 5, name: "Бриллиант", price: 4500, category: "classic", size: "Толщина 4 см", image: img5 },
  { id: 6, name: "Прокурор серый", price: 4500, category: "classic", size: "Толщина 4 см", image: img6 },
  { id: 7, name: "Астана", price: 5000, category: "classic", size: "Толщина 4 см", image: img7 },
  { id: 8, name: "Старый город", price: 6500, category: "classic", size: "Толщина 4 см", image: img8 },
  { id: 11, name: "Мрамор Каменный цветок", price: 6500, category: "classic", size: "Толщина 4 см", image: img11 },
  { id: 14, name: "Хайтек", price: 3500, category: "classic", size: "Толщина 3 см", image: img14 },
  { id: 15, name: "Миллион", price: 4500, category: "classic", size: "Толщина 4 см", image: img15 },
  { id: 16, name: "Ромашка", price: 5500, category: "classic", size: "Толщина 4,5 см", image: img16 },
  { id: 17, name: "Старый город", price: 7500, category: "classic", size: "Толщина 4 см", image: img17 },
  { id: 12, name: "Мрамор Вавилон", price: 6500, category: "classic", size: "Толщина 4 см", image: img20 },

  // остальные элементы пока без изменений
  { id: 9, name: "Брусчатка 9", price: 5300, category: "classic",  size: "Толщина 4 см", image: img9 },
  { id: 10, name: "Вавилон желтый", price: 5000, category: "antique", size: "Толщина 4 см", image: img10 },
  //{ id: 12, name: "Брусчатка 12", price: 4600, category: "concrete", size: "350x350x50", image: img12 },
  { id: 13, name: "Брусчатка 13", price: 6500, category: "geometric", size: "Толщина 4 см", image: img13 },
  { id: 18, name: "Брусчатка 18", price: 4500, category: "classic", size: "Толщина 4 см", image: img18 },
  { id: 19, name: "Брусчатка 40x40", price: 5300, category: "wave", size: "Толщина 4 см", image: img19 },
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
    { value: "hexagonal", label: "Гексагональная" }
  ];

  const sortOptions = [
    { value: "name", label: "По названию" },
    { value: "price-asc", label: "Цена: по возрастанию" },
    { value: "price-desc", label: "Цена: по убыванию" }
  ];

  // Фильтр и сортировка
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
          {/* Заголовок */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Каталог брусчатки
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Более 19 видов качественной брусчатки для любых задач и бюджета
            </p>
          </div>

          {/* Фильтры */}
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

          {/* Сетка каталога */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sortedItems.map(item => (
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
                    {item.size}
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
                      onClick={() => window.open('tel:+77022410207')}
                    >
                      Узнать цену
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PavingCatalog;
