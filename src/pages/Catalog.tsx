import Header from "@/components/Header";
import BookCard from "@/components/BookCard";
import { books } from "@/data/books";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>("все");

  const genres = [
    "все",
    "художественная литература",
    "справочники",
    "интерактивные игры",
  ];

  const filteredBooks =
    selectedGenre === "все"
      ? books
      : books.filter((book) => book.genre === selectedGenre);

  return (
    <div className="min-h-screen duskwood-gradient">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Каталог книг</h1>
          <p className="text-muted-foreground">
            Полная коллекция мистических знаний библиотеки Дасквуд
          </p>
        </div>

        {/* Genre Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedGenre === genre
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="BookOpen"
              className="w-16 h-16 text-muted-foreground mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">
              Книги не найдены
            </h3>
            <p className="text-muted-foreground">
              В выбранной категории пока нет книг
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
