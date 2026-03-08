import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-section-gradient pt-24 pb-16">
        <div className="container text-center max-w-lg">
          <p className="text-8xl md:text-9xl font-heading font-extrabold text-gradient leading-none mb-4">
            404
          </p>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
            Страница не найдена
          </h1>
          <p className="text-muted-foreground mb-8">
            К сожалению, запрашиваемая страница не существует или была перемещена.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/">
              <Home className="w-5 h-5" />
              Вернуться на главную
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
