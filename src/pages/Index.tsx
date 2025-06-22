import Header from "@/components/Header";
import BookCard from "@/components/BookCard";
import { books } from "@/data/books";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredBooks = books.slice(0, 4);

  return (
    <div className="min-h-screen duskwood-gradient">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center candle-glow">
                  <Icon name="Flame" className="w-10 h-10 text-primary" />
                </div>
                <Icon
                  name="Feather"
                  className="w-8 h-8 text-primary/70 absolute -top-2 -right-2"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              DUSKWOOD
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-card-foreground">
              Библиотека мистических знаний
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Откройте для себя коллекцию таинственных книг, справочников и
              интерактивных приключений в атмосферном мире Дасквуда
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/catalog"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors candle-glow"
              >
                Исследовать каталог
              </Link>
              <Link
                to="/search"
                className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors border border-border"
              >
                Найти книгу
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-card-foreground">
              Рекомендуемые книги
            </h2>
            <Link
              to="/catalog"
              className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
            >
              Все книги
              <Icon name="ArrowRight" className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {books.length}
              </div>
              <div className="text-muted-foreground">Книг в коллекции</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Жанра</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <div className="text-muted-foreground">Мистических тайн</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
