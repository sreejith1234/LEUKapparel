import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DesignSection from "@/components/DesignSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <DesignSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
