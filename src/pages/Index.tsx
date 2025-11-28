import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const features = [
    {
      icon: "MessageSquare",
      title: "Управление чатами",
      description: "Подключайте один или несколько чатов, контролируйте доступ и создавайте викторины там, где хотите."
    },
    {
      icon: "Target",
      title: "Создание викторин",
      description: "Создавайте вопросы, управляйте логикой викторины и проводите их вместе с модератором."
    },
    {
      icon: "Timer",
      title: "Удобные таймеры",
      description: "Выберите длительность: 1, 2 или 3 минуты — бот корректно отследит время и завершит раунд."
    },
    {
      icon: "Trophy",
      title: "Определение победителей",
      description: "Бот автоматически фиксирует ответы участников и определяет победителя первым и точным образом."
    },
    {
      icon: "BarChart3",
      title: "Статистика игроков",
      description: "Полная история активности игроков: участие, победы, вовлечённость, динамика."
    },
    {
      icon: "Sparkles",
      title: "Красивые уведомления",
      description: "Стильное оформление сообщений, аккуратная подача и современный визуальный стиль."
    }
  ];

  const pricing = [
    {
      name: "Бесплатно",
      price: "0",
      period: "",
      description: "1 активная викторина",
      features: ["Тестовый доступ", "Базовые функции", "1 чат"],
      popular: false,
      badge: "🆓"
    },
    {
      name: "Месяц",
      price: "8",
      period: "/месяц",
      description: "Полный доступ ко всем функциям",
      features: ["Неограниченные викторины", "Все функции", "Несколько чатов", "Статистика"],
      popular: false,
      badge: "💳"
    },
    {
      name: "6 месяцев",
      price: "40",
      period: "",
      description: "Экономия и расширенные возможности",
      features: ["Всё из Месяца", "Экономия 17%", "Приоритетная поддержка"],
      popular: true,
      badge: "💎"
    },
    {
      name: "1 год",
      price: "78",
      period: "",
      description: "Максимальная выгода",
      features: ["Всё из 6 месяцев", "Экономия 19%", "VIP поддержка", "Ранний доступ к новинкам"],
      popular: false,
      badge: "👑"
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent pointer-events-none" />
      
      <nav className="relative z-50 border-b border-border/50 backdrop-blur-lg bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl gradient-purple flex items-center justify-center glow-purple">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-gradient">QuizXataunBot</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('features')} className="text-muted-foreground hover:text-foreground transition-colors">
                Возможности
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-muted-foreground hover:text-foreground transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </button>
            </div>
            <Button className="gradient-purple glow-purple hover:scale-105 transition-transform">
              <Icon name="Send" size={18} className="mr-2" />
              Запустить бота
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-20 pb-32 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 gradient-purple text-white border-0 px-4 py-2 text-sm">
              ⚡ Telegram викторины нового уровня
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-gradient">QuizXataunBot</span>
              <br />
              <span className="text-foreground">ваш инструмент для</span>
              <br />
              <span className="text-foreground">профессиональных викторин</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Создавайте яркие, динамичные и вовлекающие викторины в любых Telegram-чатах. 
              Идеально для стримеров, комьюнити, крипто-проектов и игровых сообществ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gradient-purple glow-purple text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Icon name="Rocket" size={24} className="mr-2" />
                Начать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:border-primary hover:scale-105 transition-all">
                <Icon name="PlayCircle" size={24} className="mr-2" />
                Посмотреть демо
              </Button>
            </div>
          </div>
          <div className="mt-16 animate-float">
            <img 
              src="https://cdn.poehali.dev/projects/8db5704d-4815-4cca-8831-8367c13a9378/files/497ce2b8-22ff-4ea5-94db-6648dd701c63.jpg" 
              alt="QuizXataunBot Interface"
              className="rounded-2xl shadow-2xl max-w-4xl mx-auto glow-purple border-2 border-purple-500/30"
            />
          </div>
        </div>
      </section>

      <section id="features" className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-orange text-white border-0 px-4 py-2">
              🌟 Возможности
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Всё для идеальных викторин
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              QuizXataunBot автоматизирует процесс, упрощает управление и красиво оформляет результаты
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 hover:glow-purple cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl gradient-purple flex items-center justify-center mb-4 group-hover:glow-purple transition-all">
                    <Icon name={feature.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="relative rounded-3xl overflow-hidden gradient-purple p-12 md:p-16 glow-purple">
            <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/8db5704d-4815-4cca-8831-8367c13a9378/files/65b43825-3dcb-42d2-bc37-e57b424ec175.jpg')] opacity-20 bg-cover bg-center" />
            <div className="relative z-10 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Почему выбирают QuizXataunBot
              </h2>
              <div className="grid md:grid-cols-4 gap-8 mt-12">
                {[
                  { icon: "Zap", text: "Простое управление" },
                  { icon: "Award", text: "Профессиональная подача" },
                  { icon: "Users", text: "Увеличение активности" },
                  { icon: "Sparkles", text: "Красивые уведомления" }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-4 animate-glow">
                      <Icon name={item.icon as any} size={32} />
                    </div>
                    <p className="font-bold">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-blue text-white border-0 px-4 py-2">
              💰 Тарифы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Выберите свой план
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Четыре варианта на любой уровень задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((plan, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden transition-all duration-300 ${
                  plan.popular 
                    ? 'scale-105 border-2 border-primary glow-purple' 
                    : 'hover:scale-105 border-border/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 gradient-purple text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    ПОПУЛЯРНО
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="text-4xl mb-2">{plan.badge}</div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-black text-gradient">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">USDT{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Icon name="CheckCircle2" size={20} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'gradient-purple glow-purple' 
                        : 'bg-card hover:bg-muted'
                    }`}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-card/50 backdrop-blur border-border/50 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12">
                <Badge className="mb-4 gradient-orange text-white border-0 px-4 py-2">
                  📞 Контакты
                </Badge>
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  Готовы начать?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Свяжитесь с нами в Telegram и начните создавать профессиональные викторины уже сегодня!
                </p>
                <div className="space-y-4">
                  <Button size="lg" className="w-full gradient-purple glow-purple">
                    <Icon name="Send" size={20} className="mr-2" />
                    Написать в Telegram
                  </Button>
                  <Button size="lg" variant="outline" className="w-full border-2">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Поддержка 24/7
                  </Button>
                </div>
                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    Идеально подходит для стримеров казино, крипто-комьюнити и любых активных чатов
                  </p>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://cdn.poehali.dev/projects/8db5704d-4815-4cca-8831-8367c13a9378/files/be8e188e-179c-40c6-933e-aa0b8718e123.jpg" 
                  alt="Winner Celebration"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="relative border-t border-border/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg gradient-purple flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold text-gradient">QuizXataunBot</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Документация</a>
              <a href="#" className="hover:text-foreground transition-colors">API</a>
              <a href="#" className="hover:text-foreground transition-colors">Блог</a>
              <a href="#" className="hover:text-foreground transition-colors">Поддержка</a>
            </div>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0">
              © 2024 QuizXataunBot. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
