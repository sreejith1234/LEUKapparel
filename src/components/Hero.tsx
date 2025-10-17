import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpeg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left lg:pr-20">
        <div className="max-w-2xl mx-auto lg:ml-auto lg:mr-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Search For the Best Clothing Manufacturers in INDIA
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-light leading-relaxed">
            Leuk Apparels combines quality, style, and innovation, offering a fashionable range of garments catering to diverse preferences.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300 text-base px-8 py-6"
          >
            GET STARTED
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
