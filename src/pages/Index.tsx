import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const catalogRef = useRef<HTMLDivElement>(null);
  const productionRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      image: "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/dc2c2ed4-b28f-40a8-aaeb-f39312d7dff1.jpg",
      title: "Коллекция ВОСТОК",
      subtitle: "Универсальные формы для ресторанов",
    },
    {
      image: "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/7e51dc71-be13-4936-8bc6-f60924d44d49.jpg",
      title: "Натуральная керамика",
      subtitle: "Тепло ручной работы",
    },
    {
      image: "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/690208d6-22ad-474c-a0dd-e94d3831ffac.jpg",
      title: "Для ресторанного бизнеса",
      subtitle: "Контрактное производство",
    },
  ];

  const products = [
    { name: "Тарелка обеденная 28 см", price: "2 890 ₽", image: "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/9b56c0e9-6ac3-4621-a413-42977aaa3186.jpg", badge: "Хит" },
    { name: "Чашка кофейная 200 мл", price: "1 650 ₽", image: "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/dc2c2ed4-b28f-40a8-aaeb-f39312d7dff1.jpg", badge: "Новинка" },
    { name: "Салатник 18 см", price: "2 350 ₽", image: "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/9b56c0e9-6ac3-4621-a413-42977aaa3186.jpg", badge: "" },
    { name: "Набор тарелок (6 шт)", price: "14 900 ₽", image: "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/7e51dc71-be13-4936-8bc6-f60924d44d49.jpg", badge: "Выгодно" },
    { name: "Блюдо сервировочное", price: "4 200 ₽", image: "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/dc2c2ed4-b28f-40a8-aaeb-f39312d7dff1.jpg", badge: "" },
    { name: "Чайная пара", price: "2 100 ₽", image: "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/9b56c0e9-6ac3-4621-a413-42977aaa3186.jpg", badge: "Хит" },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const sections = [catalogRef, productionRef, aboutRef, galleryRef, contactsRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/98 backdrop-blur-md z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold font-serif tracking-wide">сУРАЛа</h1>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>

            <div className="hidden md:flex gap-8 items-center">
              <button
                onClick={() => scrollToSection("catalog")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Каталог
              </button>
              <button
                onClick={() => scrollToSection("restaurants")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Для ресторанов
              </button>
              <button
                onClick={() => scrollToSection("production")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Производство
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Контакты
              </button>
              <Button
                onClick={() => window.open('https://www.ozon.ru', '_blank')}
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                OZON
              </Button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in">
              <button
                onClick={() => scrollToSection("catalog")}
                className="text-left py-2 hover:text-primary transition-colors"
              >
                Каталог
              </button>
              <button
                onClick={() => scrollToSection("restaurants")}
                className="text-left py-2 hover:text-primary transition-colors"
              >
                Для ресторанов
              </button>
              <button
                onClick={() => scrollToSection("production")}
                className="text-left py-2 hover:text-primary transition-colors"
              >
                Производство
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 hover:text-primary transition-colors"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="text-left py-2 hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-16 h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-6 text-white">
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-4 animate-fade-in">
            {slides[currentSlide].title}
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex gap-4 animate-fade-in">
            <Button
              onClick={() => scrollToSection("catalog")}
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 px-8"
            >
              Смотреть каталог
            </Button>
            <Button
              onClick={() => scrollToSection("restaurants")}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Для ресторанов
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            <span className="text-sm">
              {currentSlide + 1} / {slides.length}
            </span>
            <button
              onClick={nextSlide}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <Icon name="ChevronRight" size={24} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Производство на Урале</Badge>
              <h2 className="text-4xl font-serif font-light mb-6">
                Керамика из сердца России
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Семь лет назад художники-керамисты Дмитрий и Дарья переехали в деревню 
                и создали с нуля производство фарфоровой посуды. Каждое изделие проходит 
                через руки мастера и несёт тепло ручной работы.
              </p>
              <Button
                onClick={() => scrollToSection("about")}
                variant="outline"
              >
                Подробнее о нас
              </Button>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/06f72e46-486b-42c2-803f-d28edd632c19.jpg"
                alt="Процесс производства"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-light mb-4">
              Моменты счастья
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Наша посуда создаёт атмосферу для особенных моментов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src="https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/cdc1ac0e-6091-4b76-a194-368b9c7ad014.jpg"
                alt="Счастливая пара за ужином"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-lg font-serif">Уютные вечера вдвоём</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src="https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/fbe21686-8891-41de-bd17-35d689997a78.jpg"
                alt="Друзья за столом"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-lg font-serif">Искренние эмоции с близкими</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-6">
        <div ref={catalogRef} className="container mx-auto max-w-6xl opacity-0 translate-y-10 transition-all duration-700">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-light mb-4">
              Наши изделия
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Авторская керамика ручной работы для ресторанов и дома
            </p>
            <Button
              onClick={() => window.open('https://www.ozon.ru', '_blank')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Купить на OZON
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  {product.badge && (
                    <Badge className="absolute top-4 left-4 z-10">
                      {product.badge}
                    </Badge>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-3">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-light text-primary">
                      {product.price}
                    </p>
                    <Button size="sm" variant="outline">
                      <Icon name="ShoppingBag" size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => window.open('https://www.ozon.ru', '_blank')}
              size="lg"
              variant="outline"
            >
              Смотреть весь каталог
            </Button>
          </div>
        </div>
      </section>

      <section id="restaurants" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">B2B</Badge>
            <h2 className="text-4xl font-serif font-light mb-4">
              Решения для ресторанного бизнеса
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Помогаем создавать уникальную атмосферу через авторскую посуду
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Store" className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-2">Готовые коллекции</h3>
                  <Badge variant="secondary">Доступно на OZON</Badge>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Коллекция "ВОСТОК" — универсальные модели с лаконичным дизайном 
                и приятными тактильными покрытиями. Быстрая доставка через OZON, 
                гибкие условия для оптовых покупателей.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Быстрая доставка</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Оптовые скидки</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Постоянное наличие</span>
                </li>
              </ul>
              <Button
                onClick={() => window.open('https://www.ozon.ru', '_blank')}
                className="w-full"
              >
                Посмотреть на OZON
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Palette" className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-2">Контрактное производство</h3>
                  <Badge variant="secondary">Индивидуальный подход</Badge>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Создаём посуду по вашему уникальному дизайну — от разработки форм 
                и глазурей до запуска серийного производства. Полный цикл работы 
                с собственной лабораторией и опытной командой.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Уникальный дизайн</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Разработка глазурей</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Любые объёмы</span>
                </li>
              </ul>
              <Button
                onClick={() => scrollToSection('contacts')}
                variant="outline"
                className="w-full"
              >
                Обсудить проект
              </Button>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-0 overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/1b34f265-451b-47ef-be03-fe0b751dfe50.jpg"
                alt="Шеф-повар с блюдом"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif mb-3">Для профессионалов</h3>
                <p className="text-muted-foreground text-sm">
                  Шеф-повара выбирают нашу посуду за качество, которое подчёркивает 
                  мастерство кулинарного искусства
                </p>
              </div>
            </Card>
            <Card className="p-0 overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/621f4bad-b5ce-4bcd-9a47-55f1a23d0260.jpg"
                alt="Утренний кофе"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif mb-3">Каждый день особенный</h3>
                <p className="text-muted-foreground text-sm">
                  Превращаем обычное утро в ритуал наслаждения — тепло керамики 
                  в ваших руках создаёт уют
                </p>
              </div>
            </Card>
          </div>
          
          <div className="bg-card p-8 rounded-lg mt-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-serif mb-2">7+</div>
                <p className="text-sm text-muted-foreground">лет на рынке</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif mb-2">200+</div>
                <p className="text-sm text-muted-foreground">ресторанов-клиентов</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif mb-2">50+</div>
                <p className="text-sm text-muted-foreground">уникальных проектов</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif mb-2">10K+</div>
                <p className="text-sm text-muted-foreground">изделий в месяц</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="production" className="py-20 px-6">
        <div ref={productionRef} className="container mx-auto max-w-6xl opacity-0 translate-y-10 transition-all duration-700">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <img
                src="https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/cef34c94-b6e1-4ce2-90b7-d47caed7228f.jpg"
                alt="Керамическая мастерская"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-light mb-6">
                Производство полного цикла
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Наше производство объединяет традиционные техники гончарства 
                и современные технологии. Собственная лаборатория позволяет 
                разрабатывать уникальные глазури и покрытия.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Icon
                    name="Layers"
                    className="text-primary mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Литьё под давлением
                    </h3>
                    <p className="text-muted-foreground">
                      Современная технология для точности и повторяемости форм
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Icon
                    name="Droplet"
                    className="text-primary mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Собственная лаборатория глазурей
                    </h3>
                    <p className="text-muted-foreground">
                      Разработка уникальных пищевых покрытий и текстур
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Icon
                    name="Flame"
                    className="text-primary mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Обжиг до 1280°C
                    </h3>
                    <p className="text-muted-foreground">
                      Высокотемпературный обжиг для прочности и долговечности
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Icon
                    name="Users"
                    className="text-primary mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Команда профессионалов
                    </h3>
                    <p className="text-muted-foreground">
                      Опытные керамисты с художественным образованием
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg">
            <h3 className="text-2xl font-serif mb-8 text-center">Этапы производства</h3>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { icon: "FileText", title: "Проектирование", desc: "Разработка дизайна и форм" },
                { icon: "Droplets", title: "Формовка", desc: "Литьё под давлением" },
                { icon: "Paintbrush", title: "Глазурование", desc: "Нанесение покрытий" },
                { icon: "Flame", title: "Обжиг", desc: "1280°C, 12 часов" },
                { icon: "PackageCheck", title: "Контроль", desc: "Проверка качества" },
              ].map((stage, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={stage.icon as any} className="text-primary" size={28} />
                  </div>
                  <h4 className="font-semibold mb-2">{stage.title}</h4>
                  <p className="text-sm text-muted-foreground">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6 bg-muted/20">
        <div ref={galleryRef} className="container mx-auto max-w-6xl opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl font-serif font-light text-center mb-12">
            Галерея работ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/dc2c2ed4-b28f-40a8-aaeb-f39312d7dff1.jpg",
              "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/9b56c0e9-6ac3-4621-a413-42977aaa3186.jpg",
              "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/06f72e46-486b-42c2-803f-d28edd632c19.jpg",
              "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/7e51dc71-be13-4936-8bc6-f60924d44d49.jpg",
              "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/690208d6-22ad-474c-a0dd-e94d3831ffac.jpg",
              "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/cef34c94-b6e1-4ce2-90b7-d47caed7228f.jpg",
              "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/dc2c2ed4-b28f-40a8-aaeb-f39312d7dff1.jpg",
              "https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/9b56c0e9-6ac3-4621-a413-42977aaa3186.jpg",
            ].map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Работа ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-3xl font-serif text-muted-foreground">
              Made in Russia since 2016
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card">
        <div ref={aboutRef} className="container mx-auto max-w-6xl opacity-0 translate-y-10 transition-all duration-700">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-serif font-light mb-6">Наша история</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                сУРАЛа — производственно-торговое предприятие из сердца России. 
                Уральские художники-керамисты Дмитрий и Дарья семь лет назад переехали 
                в деревню и создали с нуля керамическое производство.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Сегодня мы работаем с ресторанами по всей России, создаём авторские 
                коллекции и реализуем индивидуальные проекты для бизнеса. Каждый новый 
                проект помогает нам расти и совершенствоваться.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
                "Мы черпаем вдохновение в природе и создаём изделия с лаконичным дизайном, 
                приятными тактильными покрытиями и теплом ручной работы"
              </blockquote>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/37bb90ef-2fba-4aa4-81f5-8f96fb27f865/files/06f72e46-486b-42c2-803f-d28edd632c19.jpg"
                alt="Мастерская"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-serif mb-1">Since 2016</div>
                <p className="text-sm opacity-90">Made in Russia</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <Icon
                name="Heart"
                className="mx-auto mb-4 text-primary"
                size={40}
              />
              <h3 className="font-serif text-xl mb-2">Ручная работа</h3>
              <p className="text-muted-foreground text-sm">
                Каждое изделие проходит через руки мастера и несёт тепло творчества
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <Icon
                name="Leaf"
                className="mx-auto mb-4 text-primary"
                size={40}
              />
              <h3 className="font-serif text-xl mb-2">Эко-материалы</h3>
              <p className="text-muted-foreground text-sm">
                Натуральная глина и безопасные глазури для вашего здоровья
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <Icon
                name="Award"
                className="mx-auto mb-4 text-primary"
                size={40}
              />
              <h3 className="font-serif text-xl mb-2">Высокое качество</h3>
              <p className="text-muted-foreground text-sm">
                Соответствие мировым стандартам ресторанной посуды
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div ref={contactsRef} className="container mx-auto max-w-5xl opacity-0 translate-y-10 transition-all duration-700">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif font-light mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-muted-foreground mb-8">
                Ответим на все вопросы о продукции, оптовых заказах 
                и контрактном производстве
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">Урал, Россия</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Send" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Telegram</h3>
                    <p className="text-muted-foreground">@suralaceramics</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Контакты</h3>
                    <p className="text-muted-foreground text-sm">
                      Покупка: @Dasha_karam<br />
                      Опт: @krausful<br />
                      Сотрудничество: @Fedor_Kolpakov
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-serif mb-6">Оставить заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Компания (необязательно)"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="min-h-32"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl mb-4">сУРАЛа</h3>
              <p className="opacity-90 text-sm">
                Посуда для ресторанов из сердца России
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <div className="space-y-2 opacity-90 text-sm">
                <p className="cursor-pointer hover:opacity-70">Тарелки</p>
                <p className="cursor-pointer hover:opacity-70">Чашки</p>
                <p className="cursor-pointer hover:opacity-70">Наборы</p>
                <p className="cursor-pointer hover:opacity-70">Аксессуары</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <div className="space-y-2 opacity-90 text-sm">
                <p className="cursor-pointer hover:opacity-70">О нас</p>
                <p className="cursor-pointer hover:opacity-70">Производство</p>
                <p className="cursor-pointer hover:opacity-70">Для ресторанов</p>
                <p className="cursor-pointer hover:opacity-70">Контакты</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
                <Icon name="Send" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
                <Icon name="Youtube" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 opacity-75 text-sm">
            <p>© 2026 сУРАЛа. Все права защищены.</p>
            <div className="flex gap-6">
              <span className="cursor-pointer hover:opacity-70">Политика конфиденциальности</span>
              <span className="cursor-pointer hover:opacity-70">Условия использования</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;