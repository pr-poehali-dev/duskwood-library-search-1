import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50 mystical-shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center candle-glow">
                <Icon name="Flame" className="w-5 h-5 text-primary" />
              </div>
              <Icon
                name="Feather"
                className="w-4 h-4 text-primary/70 absolute -top-1 -right-1"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">DUSKWOOD</h1>
              <p className="text-xs text-muted-foreground">LIBRARY SEARCH</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/catalog") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Каталог книг
            </Link>
            <Link
              to="/search"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/search") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Поиск
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              О библиотеке
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-muted-foreground hover:text-primary">
            <Icon name="Menu" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
