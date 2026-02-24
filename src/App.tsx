import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import ChistkaDivana from "./pages/ChistkaDivana";
import KakPochistitDivan from "./pages/KakPochistitDivan";
import SredstvaDlyaChistki from "./pages/SredstvaDlyaChistki";
import UdaleniePyaten from "./pages/UdaleniePyaten";
import ChistkaParoochistitelem from "./pages/ChistkaParoochistitelem";
import KhimchistkaMebeliVRestoranah from "./pages/KhimchistkaMebeliVRestoranah";
import KhimchistkaKovrov from "./pages/KhimchistkaKovrov";
import ChistkaMatrasov from "./pages/ChistkaMatrasov";
import ChistkaAvtosideniy from "./pages/ChistkaAvtosideniy";
import ChistkaStuliev from "./pages/ChistkaStuliev";
import ChistkaShtory from "./pages/ChistkaShtory";
import ChistkaKolyasok from "./pages/ChistkaKolyasok";
import ChistkaOfisnoyMebeli from "./pages/ChistkaOfisnoyMebeli";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/chistka-divana" element={<ChistkaDivana />} />
          <Route path="/kak-pochistit-divan" element={<KakPochistitDivan />} />
          <Route path="/sredstva-dlya-chistki" element={<SredstvaDlyaChistki />} />
          <Route path="/udalenie-pyaten" element={<UdaleniePyaten />} />
          <Route path="/chistka-paroochistitelem" element={<ChistkaParoochistitelem />} />
          <Route path="/khimchistka-mebeli-v-restoranah" element={<KhimchistkaMebeliVRestoranah />} />
          <Route path="/khimchistka-kovrov" element={<KhimchistkaKovrov />} />
          <Route path="/chistka-matrasov" element={<ChistkaMatrasov />} />
          <Route path="/chistka-avtosideniy" element={<ChistkaAvtosideniy />} />
          <Route path="/chistka-stuliev" element={<ChistkaStuliev />} />
          <Route path="/chistka-shtor" element={<ChistkaShtory />} />
          <Route path="/chistka-kolyasok" element={<ChistkaKolyasok />} />
          <Route path="/chistka-ofisnoy-mebeli" element={<ChistkaOfisnoyMebeli />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
