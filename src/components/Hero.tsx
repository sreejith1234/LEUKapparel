import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";
import { useContactModal } from "@/contexts/ContactModalContext";

const Hero = () => {
  const { openModal } = useContactModal();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-right md:bg-right-center scale-x-[-1]"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 md:bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 hidden md:block" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-justify lg:pr-20">
        <div className="max-w-2xl mx-auto lg:ml-auto lg:mr-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-center md:text-justify">
            Search For the Best Clothing Manufacturers in INDIA
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-light leading-relaxed text-justify">
            Leuk Apparels combines quality, style, and innovation, offering a fashionable range of garments catering to diverse preferences.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300 text-base px-8 py-6"
            onClick={openModal}
          >
            GET STARTED
          </Button>
        </div>
      </div>
      

    </section>
  );
};

export default Hero;
