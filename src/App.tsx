import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import ChistkaDivana from "./pages/ChistkaDivana";
import KakPochistitDivan from "./pages/KakPochistitDivan";
import SredstvaDlyaChistki from "./pages/SredstvaDlyaChistki";
import UdaleniePyaten from "./pages/UdaleniePyaten";
import ChistkaParoochistitelem from "./pages/ChistkaParoochistitelem";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chistka-divana" element={<PageWrapper><ChistkaDivana /></PageWrapper>} />
          <Route path="/kak-pochistit-divan" element={<PageWrapper><KakPochistitDivan /></PageWrapper>} />
          <Route path="/sredstva-dlya-chistki" element={<PageWrapper><SredstvaDlyaChistki /></PageWrapper>} />
          <Route path="/udalenie-pyaten" element={<PageWrapper><UdaleniePyaten /></PageWrapper>} />
          <Route path="/chistka-paroochistitelem" element={<PageWrapper><ChistkaParoochistitelem /></PageWrapper>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
