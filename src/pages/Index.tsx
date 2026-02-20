import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import BenefitsSection from "@/components/BenefitsSection";
import ReviewsSection from "@/components/ReviewsSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const Index = () => {
  return (
    <div className="min-h-screen">
      <JsonLd />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <GallerySection />
        <BenefitsSection />
        <ReviewsSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
