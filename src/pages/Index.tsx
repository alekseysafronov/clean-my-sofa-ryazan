import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import BenefitsSection from "@/components/BenefitsSection";
import ReviewsSection from "@/components/ReviewsSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <JsonLd />
      <Header />
      <main>
        <HeroSection />
        <AnimatedSection>
          <ServicesSection />
        </AnimatedSection>
        <AnimatedSection>
          <PricingSection />
        </AnimatedSection>
        <AnimatedSection>
          <GallerySection />
        </AnimatedSection>
        <AnimatedSection>
          <BenefitsSection />
        </AnimatedSection>
        <AnimatedSection>
          <ReviewsSection />
        </AnimatedSection>
        <AnimatedSection>
          <ProcessSection />
        </AnimatedSection>
        <AnimatedSection>
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection>
          <CTASection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
