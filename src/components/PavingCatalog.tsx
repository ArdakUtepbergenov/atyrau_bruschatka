import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpDown, Grid3X3, ShoppingCart } from "lucide-react";

// Импорты изображений
import img1 from "@/assets/brilliantseryi.jpeg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/brilliantfinal.jpeg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/staryigorod.jpeg";
import img9 from "@/assets/30x30.jpg";
import img10 from "@/assets/vavilion.jpeg";
import img11 from "@/assets/11.jpg";
import img12 from "@/assets/hightechstaryi.jpeg";
import img13 from "@/assets/13.jpg";
import img14 from "@/assets/hightech.jpg";
import img15 from "@/assets/15.jpg";
import img16 from "@/assets/16.jpg";
import img17 from "@/assets/vavilon.jpeg";
import img18 from "@/assets/18.jpeg";
import img19 from "@/assets/40x40.jpeg";
import img20 from "@/assets/20.jpg";
import img21 from "@/assets/prokurorjeltyi.jpg";
import img22 from "@/assets/porebrikseryi.jpg";
import img23 from "@/assets/porebrikcvetnoy.jpg";
import img24 from "@/assets/porebrik.jpg";
import img25 from "@/assets/astana_mramor.jpeg";
import img26 from "@/assets/atyrau_mramor.jpeg";
import img27 from "@/assets/parket_mramor.jpeg";
import img28 from "@/assets/kamennyi_cvetok.jpeg";

const PavingCatalog = () => {
  // ✅ по умолчанию теперь id
  const [sortBy, setSortBy] = useState("id");
  const [filterBy, setFilterBy] = useState("all");

  const pavingItems = [
    { id: 1, name: "Астана  Мрамор", price: 7500, category: "classic", size: "Толщина 4 см", image: img25 },
    { id: 2, name: "Атырау мрамор", price: 8000, category: "classic", size: "Толщина 5 см", image: img26 },
    { id: 3, name: "Паркет  мрамор", price: 7500, category: "classic", size: "Толщина 4 см", image: img27 },
    { id: 4, name: "Каменный цветок", price: 7500, category: "classic", size: "Толщина 4 см", image: img28 },
    { id: 5, name: "Бриллиант серый", price: 4500, category: "classic", size: "Толщина 4 см", image: img1 },
    { id: 6, name: "Узор Ташкент", price: 6500, category: "classic", size: "Толщина 5 см", image: img2 },
    { id: 7, name: "Прокурор цветной", price: 5000, category: "classic", size: "Толщина 4 см", image: img3 },
    { id: 8, name: "Бархат", price: 5500, category: "classic", size: "Толщина 4,5 см", image: img4 },
    { id: 9, name: "Бриллиант", price: 5000, category: "classic", size: "Толщина 4 см", image: img5 },
    { id: 10, name: "Прокурор серый", price: 4500, category: "classic", size: "Толщина 4 см", image: img6 },
    { id: 25, name: "Прокурор жёлтый", price: 5000, category: "classic", size: "Толщина 4 см", image: img21 },
    { id: 11, name: "Астана", price: 5000, category: "classic", size: "Толщина 4 см", image: img7 },
    { id: 12, name: "Старый город", price: 7500, category: "classic", size: "Толщина 4 см", image: img8 },
    { id: 15, name: "Мрамор Каменный цветок", price: 6500, category: "classic", size: "Толщина 4 см", image: img11 },
    { id: 18, name: "Хайтек", price: 3500, category: "classic", size: "Толщина 3 см", image: img14 },
    { id: 19, name: "Миллион", price: 4500, category: "classic", size: "Толщина 4 см", image: img15 },
    { id: 20, name: "Ромашка", price: 5500, category: "classic", size: "Толщина 4,5 см", image: img16 },
    { id: 21, name: "Вавилон", price: 4500, category: "classic", size: "Толщина 4 см", image: img17 },
    { id: 16, name: "Мрамор Вавилон", price: 6500, category: "classic", size: "Толщина 4 см", image: img20 },
    { id: 26, name: "Поребрик серый", price: 1500, category: "classic", size: "", image: img22 },
    { id: 27, name: "Поребрик цветной", price: 3000, category: "classic", size: "", image: img23 },
    { id: 28, name: "Поребрик серый", price: 1500, category: "classic", size: "", image: img24 },
    { id: 23, name: "Плитка 30х30", price: 3500, category: "classic", size: "Толщина 3 см", image: img9 },
    { id: 14, name: "Вавилон желтый", price: 5000, category: "antique", size: "Толщина 4 см", image: img10 },
    { id: 24, name: "Хайтек", price: 3500, category: "concrete", size: "Толщина 3 см", image: img12 },
    { id: 17, name: "Атырау", price: 6500, category: "geometric", size: "Толщина 5 см", image: img13 },
    { id: 22, name: "Астана жёлтый", price: 5000, category: "classic", size: "Толщина 4 см", image: img18 },
    { id: 13, name: "Брусчатка 40x40", price: 6500, category: "wave", size: "Толщина 5 см", image: img19 },
  ];

  const categories = [
    { value: "all", label: "Все виды" },
    { value: "classic", label: "Классическая" },
    { value: "geometric", label: "Геометрическая" },
    { value: "wave", label: "Волнистая" },
    { value: "concrete", label: "Бетонная" },
    { value: "antique", label: "Антик" }
  ];

  const sortOptions = [
    { value: "id", label: "По порядку" },
    { value: "name", label: "По названию" },
    { value: "price-asc", label: "Цена: по возрастанию" },
    { value: "price-desc", label: "Цена: по убыванию" }
  ];

  const filteredItems =
    filterBy === "all"
      ? pavingItems
      : pavingItems.filter(item => item.category === filterBy);

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "id":
        return a.id - b.id;
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Каталог брусчатки</h2>
            <p className="text-muted-foreground">
              Более 20 видов качественной брусчатки
            </p>
          </div>

          <div className="flex gap-4 mb-8">
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger>
                <Grid3X3 className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(c => (
                  <SelectItem key={c.value} value={c.value}>
                    {c.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <ArrowUpDown className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(o => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedItems.map(item => (
              <Card key={item.id}>
                <img src={item.image} alt={item.name} />
                <CardContent>
                  <h3>{item.name}</h3>
                  <p>{item.size}</p>
                  <p>{item.price} ₸</p>
                  <Button>
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Заказать
                  </Button>
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
