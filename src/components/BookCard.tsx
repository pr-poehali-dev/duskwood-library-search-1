import { Book } from "@/data/books";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const getGenreColor = (genre: Book["genre"]) => {
    switch (genre) {
      case "художественная литература":
        return "bg-purple-500/20 text-purple-300";
      case "справочники":
        return "bg-blue-500/20 text-blue-300";
      case "интерактивные игры":
        return "bg-green-500/20 text-green-300";
      default:
        return "bg-gray-500/20 text-gray-300";
    }
  };

  return (
    <div className="book-card p-4 rounded-lg mystical-shadow h-full flex flex-col">
      <div className="aspect-[3/4] mb-4 overflow-hidden rounded-md">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-xs px-2 py-1 rounded-full ${getGenreColor(book.genre)}`}
          >
            {book.genre}
          </span>
          <span className="text-xs text-muted-foreground">{book.year}</span>
        </div>

        <h3 className="font-bold text-lg mb-2 text-card-foreground">
          {book.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
        <p className="text-sm text-card-foreground/80 flex-1">
          {book.description}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
