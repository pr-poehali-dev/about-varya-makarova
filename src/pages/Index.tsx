import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-muted/30 to-accent/20">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Варвара Макарова
          </h1>
          <div className="flex gap-6">
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">Обо мне</a>
            <a href="#pets" className="text-foreground/70 hover:text-secondary transition-colors">Питомцы</a>
            <a href="#study" className="text-foreground/70 hover:text-accent transition-colors">Учёба</a>
            <a href="#counselor" className="text-foreground/70 hover:text-primary transition-colors">Вожатство</a>
          </div>
        </div>
      </nav>

      <section id="about" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center animate-fade-in">
            <div className="inline-block p-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-6">
              <img 
                src="https://cdn.poehali.dev/files/dfbee72a-e805-40be-ab37-4519aac7ce2e.jpeg" 
                alt="Варвара Макарова" 
                className="w-40 h-40 rounded-full object-cover shadow-xl"
              />
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Привет! Я Варя
            </h2>
            <p className="text-2xl md:text-3xl text-foreground/80 mb-6">
              Макарова Варвара Александровна
            </p>
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-xl font-semibold shadow-lg">
              <Icon name="Sparkles" size={24} />
              <span>17 лет</span>
            </div>
          </div>
        </div>
      </section>

      <section id="pets" className="py-20 px-4 bg-gradient-to-r from-secondary/10 to-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            <Icon name="Cat" size={50} className="inline-block mr-4 text-secondary" />
            Мои любимые кошки
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 animate-scale-in border-2 border-secondary/30 hover:border-secondary overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-full h-64 mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform">
                  <img 
                    src="https://cdn.poehali.dev/files/cb0c512e-fedd-4346-b41c-d6a4ab026c7a.jpeg" 
                    alt="Боня" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-secondary mb-3">Боня</h3>
                <p className="text-lg text-foreground/70">Моя пушистая любимица</p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-2xl transition-all duration-300 animate-scale-in border-2 border-secondary/30 hover:border-secondary overflow-hidden" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-8 text-center">
                <div className="w-full h-64 mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform">
                  <img 
                    src="https://cdn.poehali.dev/files/5a71e496-c01e-4d41-a04c-84c7d8d62cdc.jpeg" 
                    alt="Стеша" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-secondary mb-3">Стеша</h3>
                <p className="text-lg text-foreground/70">Вторая пушистая красавица</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="study" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            <Icon name="GraduationCap" size={50} className="inline-block mr-4 text-accent" />
            Учёба и планы
          </h2>
          <Card className="border-2 border-accent/30 hover:border-accent transition-all shadow-xl animate-scale-in">
            <CardContent className="p-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon name="BookOpen" size={60} className="text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4 text-accent">11 класс</h3>
                  <p className="text-xl text-foreground/80 mb-6">
                    Активно готовлюсь к выпускным экзаменам
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-lg shadow-md">
                      <Icon name="Heart" size={20} className="inline-block mr-2" />
                      Биология
                    </div>
                    <div className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold text-lg shadow-md">
                      <Icon name="Users" size={20} className="inline-block mr-2" />
                      Обществознание
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="counselor" className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            <Icon name="Heart" size={50} className="inline-block mr-4 text-primary" />
            Моё призвание — вожатство
          </h2>
          <Card className="border-2 border-primary/30 hover:border-primary transition-all shadow-2xl animate-scale-in overflow-hidden">
            <CardContent className="p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://cdn.poehali.dev/files/542ffb85-6330-4290-9522-566556309bed.png" 
                      alt="Вожатство в ДОЛ Солнечный" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left order-1 md:order-2">
                  <div className="inline-block mb-6">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary via-accent to-secondary rounded-full flex items-center justify-center shadow-2xl">
                        <Icon name="Award" size={64} className="text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                        🏆
                      </div>
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Лучшая вожатая
                  </h3>
                  <p className="text-2xl text-foreground/80 mb-4">
                    ДОЛ "Солнечный"
                  </p>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full text-xl font-bold shadow-xl mb-6">
                    <Icon name="Sun" size={28} />
                    <span>1 смена</span>
                  </div>
                  <p className="text-lg text-foreground/70 mt-6">
                    Вожатство — это не просто работа, это дело моей души. Каждая смена приносит новые эмоции, знакомства и незабываемые моменты!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground/5">
        <div className="container mx-auto text-center">
          <p className="text-foreground/60 text-lg">
            © 2024 Макарова Варвара • Создано с 💜
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;