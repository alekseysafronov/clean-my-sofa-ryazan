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
import SeoHead from "@/components/SeoHead";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingMessengers from "@/components/FloatingMessengers";
import MapSection from "@/components/MapSection";
import CalculatorSection from "@/components/CalculatorSection";
import StatsCounter from "@/components/StatsCounter";
import SocialProofNotification from "@/components/SocialProofNotification";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="Химчистка мебели в Рязани — Qweeq"
        description="Профессиональная химчистка мягкой мебели и ковров в Рязани с выездом на дом. Гарантия результата. Звоните: +7 (916) 043-51-53"
      />
      <JsonLd />
      <Header />
      <main>
        <HeroSection />
        <StatsCounter />
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
          <CalculatorSection />
        </AnimatedSection>
        <AnimatedSection>
          <MapSection />
        </AnimatedSection>
        <AnimatedSection>
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection>
          <CTASection />
        </AnimatedSection>
      </main>
      <Footer />
      <FloatingMessengers />
      <SocialProofNotification />
    </div>
  );
};

export default Index;
