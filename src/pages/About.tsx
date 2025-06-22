import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen duskwood-gradient">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center candle-glow">
                  <Icon name="Flame" className="w-8 h-8 text-primary" />
                </div>
                <Icon
                  name="Feather"
                  className="w-6 h-6 text-primary/70 absolute -top-1 -right-1"
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">
              О библиотеке Дасквуд
            </h1>
            <p className="text-lg text-muted-foreground">
              Хранилище мистических знаний и древних тайн
            </p>
          </div>

          <div className="space-y-8">
            {/* History Section */}
            <div className="bg-card/30 p-8 rounded-lg mystical-shadow">
              <div className="flex items-center mb-4">
                <Icon name="BookOpen" className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-card-foreground">
                  История
                </h2>
              </div>
              <p className="text-card-foreground/80 leading-relaxed">
                Библиотека Дасквуд была основана в 1847 году исследователем
                мистических явлений Альбертом Дасквудом. Расположенная в самом
                сердце таинственного леса, она стала центром изучения
                паранормальных явлений и хранилищем редких знаний о мистическом
                мире.
              </p>
            </div>

            {/* Mission Section */}
            <div className="bg-card/30 p-8 rounded-lg mystical-shadow">
              <div className="flex items-center mb-4">
                <Icon name="Target" className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-card-foreground">
                  Наша миссия
                </h2>
              </div>
              <p className="text-card-foreground/80 leading-relaxed">
                Мы стремимся сохранить и передать знания о мистических явлениях,
                предоставляя исследователям и любителям мистики доступ к
                уникальной коллекции книг, справочников и интерактивных
                материалов.
              </p>
            </div>

            {/* Collection Section */}
            <div className="bg-card/30 p-8 rounded-lg mystical-shadow">
              <div className="flex items-center mb-6">
                <Icon name="Library" className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-card-foreground">
                  Наша коллекция
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon
                      name="BookHeart"
                      className="w-6 h-6 text-purple-400"
                    />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">
                    Художественная литература
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Мистические романы, готические истории и паранормальные
                    приключения
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="BookMarked" className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">
                    Справочники
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Энциклопедии мистических существ, руководства по магии и
                    древние тексты
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Gamepad2" className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">
                    Интерактивные игры
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Книги-квесты, загадки и интерактивные приключения в мире
                    Дасквуда
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-card/30 p-8 rounded-lg mystical-shadow">
              <div className="flex items-center mb-4">
                <Icon name="MapPin" className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-card-foreground">
                  Посетите нас
                </h2>
              </div>
              <p className="text-card-foreground/80 leading-relaxed mb-4">
                Библиотека Дасквуд открыта для всех искателей знаний. Мы
                приглашаем вас исследовать нашу коллекцию и погрузиться в
                атмосферу мистики и тайн.
              </p>
              <div className="flex items-center text-muted-foreground">
                <Icon name="Clock" className="w-4 h-4 mr-2" />
                <span>Открыто: пн-пт 9:00-21:00, сб-вс 10:00-18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
