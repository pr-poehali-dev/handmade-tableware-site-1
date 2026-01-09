import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-serif">Глиняное ремесло</h1>
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("catalog")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Каталог
            </button>
            <button
              onClick={() => scrollToSection("production")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Производство
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Магазин
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-serif font-light mb-6 leading-tight">
                Посуда ручной работы
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Каждое изделие уникально и создано с любовью к ремеслу.
                Натуральные материалы и традиционные техники гончарства.
              </p>
              <Button
                onClick={() => scrollToSection("catalog")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
              >
                Смотреть каталог
              </Button>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/dc2c2ed4-b28f-40a8-aaeb-f39312d7dff1.jpg"
                alt="Керамическая посуда"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-serif font-light text-center mb-4">
            Каталог изделий
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Коллекция уникальной керамической посуды для вашего дома
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Обеденные тарелки",
                price: "от 2 500 ₽",
                image:
                  "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/9b56c0e9-6ac3-4621-a413-42977aaa3186.jpg",
              },
              {
                name: "Чайные чашки",
                price: "от 1 800 ₽",
                image:
                  "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/dc2c2ed4-b28f-40a8-aaeb-f39312d7dff1.jpg",
              },
              {
                name: "Кофейные сервизы",
                price: "от 8 500 ₽",
                image:
                  "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/9b56c0e9-6ac3-4621-a413-42977aaa3186.jpg",
              },
              {
                name: "Салатники",
                price: "от 3 200 ₽",
                image:
                  "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/dc2c2ed4-b28f-40a8-aaeb-f39312d7dff1.jpg",
              },
              {
                name: "Декоративные вазы",
                price: "от 4 500 ₽",
                image:
                  "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/9b56c0e9-6ac3-4621-a413-42977aaa3186.jpg",
              },
              {
                name: "Пиалы и миски",
                price: "от 1 500 ₽",
                image:
                  "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/dc2c2ed4-b28f-40a8-aaeb-f39312d7dff1.jpg",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{item.name}</h3>
                  <p className="text-2xl font-light text-primary">
                    {item.price}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="production" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/06f72e46-486b-42c2-803f-d28edd632c19.jpg"
                alt="Процесс производства"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-light mb-6">
                Ручная работа
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Каждое изделие проходит через руки мастера и создается с
                особым вниманием к деталям. Мы используем только натуральную
                глину и экологичные глазури.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Icon
                    name="CheckCircle2"
                    className="text-primary mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Уникальность каждого изделия
                    </h3>
                    <p className="text-muted-foreground">
                      Нет двух одинаковых предметов
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Icon
                    name="CheckCircle2"
                    className="text-primary mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Экологичные материалы
                    </h3>
                    <p className="text-muted-foreground">
                      Натуральная глина и безопасные глазури
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Icon
                    name="CheckCircle2"
                    className="text-primary mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Традиционные техники
                    </h3>
                    <p className="text-muted-foreground">
                      Многовековые секреты мастерства
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-light mb-6">Наш магазин</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Мы производственно-торговое предприятие с собственной мастерской
            и магазином. Вы можете посетить нас, чтобы увидеть процесс
            создания посуды своими глазами и выбрать изделия лично.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="p-6">
              <Icon
                name="MapPin"
                className="mx-auto mb-4 text-primary"
                size={40}
              />
              <h3 className="font-serif text-xl mb-2">Адрес</h3>
              <p className="text-muted-foreground">
                г. Москва, ул. Гончарная, д. 15
              </p>
            </Card>
            <Card className="p-6">
              <Icon
                name="Clock"
                className="mx-auto mb-4 text-primary"
                size={40}
              />
              <h3 className="font-serif text-xl mb-2">Режим работы</h3>
              <p className="text-muted-foreground">
                Пн-Пт: 10:00 - 19:00
                <br />
                Сб-Вс: 11:00 - 17:00
              </p>
            </Card>
            <Card className="p-6">
              <Icon
                name="Phone"
                className="mx-auto mb-4 text-primary"
                size={40}
              />
              <h3 className="font-serif text-xl mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-serif font-light text-center mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Ответим на все ваши вопросы и поможем с выбором
          </p>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Ваше имя
                </label>
                <Input
                  type="text"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="ivan@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <Textarea
                  placeholder="Расскажите, что вас интересует..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full min-h-32"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6"
              >
                Отправить сообщение
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl mb-4">Глиняное ремесло</h3>
              <p className="opacity-90">
                Производство и продажа керамической посуды ручной работы
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 opacity-90">
                <p>+7 (495) 123-45-67</p>
                <p>info@pottery.ru</p>
                <p>г. Москва, ул. Гончарная, 15</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
                <Icon name="Facebook" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
                <Icon name="Youtube" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-75">
            <p>© 2026 Глиняное ремесло. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
