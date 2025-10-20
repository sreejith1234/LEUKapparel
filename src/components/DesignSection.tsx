import { Button } from "@/components/ui/button";
import designUniqueBg from "@/assets/design-unique.jpg";

const DesignSection = () => {
  return (
    <section 
      className="relative min-h-[500px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${designUniqueBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center md:text-left lg:text-justify">
            Design Something Unique With Us
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8 text-left lg:text-justify">
            Want to avoid dealing with design and sourcing hassles? We add your labels, logos, and more to our blanks to make them unique.
          </p>
          <Button 
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300 px-8 py-6 text-base"
          >
            INQUIRE NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
