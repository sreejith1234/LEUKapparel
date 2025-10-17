import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeatureSections from "@/components/FeatureSections";
import DesignSection from "@/components/DesignSection";
import CTASection from "@/components/CTASection";
import AboutSections from "@/components/AboutSections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <FeatureSections />
      <CTASection />
      <DesignSection />
      <AboutSections />
      <Footer />
    </div>
  );
};

export default Index;
