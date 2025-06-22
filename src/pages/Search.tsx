import Header from "@/components/Header";
import BookCard from "@/components/BookCard";
import { books } from "@/data/books";
import { useState, useMemo } from "react";
import Icon from "@/components/ui/icon";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("все");

  const genres = [
    "все",
    "художественная литература",
    "справочники",
    "интерактивные игры",
  ];

  const filteredBooks = useMemo(() => {
    let filtered = books;

    // Filter by genre
    if (selectedGenre !== "все") {
      filtered = filtered.filter((book) => book.genre === selectedGenre);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.description.toLowerCase().includes(query),
      );
    }

    return filtered;
  }, [searchQuery, selectedGenre]);

  return (
    <div className="min-h-screen duskwood-gradient">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Поиск книг</h1>
          <p className="text-muted-foreground">
            Найдите нужную книгу в коллекции Дасквуд
          </p>
        </div>

        {/* Search Form */}
        <div className="mb-8 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Icon
              name="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Поиск по названию, автору или описанию..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-card-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          {/* Genre Filter */}
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

        {/* Search Results */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            Найдено книг:{" "}
            <span className="text-card-foreground font-semibold">
              {filteredBooks.length}
            </span>
          </p>
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
              name="SearchX"
              className="w-16 h-16 text-muted-foreground mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">
              Книги не найдены
            </h3>
            <p className="text-muted-foreground mb-4">
              По вашему запросу ничего не найдено. Попробуйте изменить параметры
              поиска.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedGenre("все");
              }}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
