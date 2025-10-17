import { Button } from "@/components/ui/button";
import smallBusinessBg from "@/assets/small-business.jpg";
import reputableBg from "@/assets/reputable-manufacturer.jpg";
import innovativeBg from "@/assets/innovative-thoughts.jpg";
import reducedPricesBg from "@/assets/reduced-prices.jpg";

const FeatureSections = () => {
  const features = [
    {
      title: "A Leading Custom Clothing Manufacturer for Small Business",
      description: "If you are searching for a tried-and-true systematic approach, Tack apparels is the best custom clothing manufacturer for small and large businesses. One-stop custom apparels manufacturer with extensive experience in the production of clothing, we uphold friendly associations with fashionistas.",
      image: smallBusinessBg,
    },
    {
      title: "Explore Reputable Custom Clothing Manufacturers in the USA",
      description: "From sketch and design to pattern making, sample production, and packing/shipping, we handle the entire manufacturing process. With us, you can get everything you need to manufacture under one roof. Contact us now for better consultation!",
      image: reputableBg,
      isRight: true,
    },
    {
      title: "Expand Innovative Thoughts to Life",
      description: "You won't ever go on your clothes manufacturing journey alone since we are always here to support you and go with you every step of the way.",
      image: innovativeBg,
    },
    {
      title: "Reduced Prices as You Expand",
      description: "For larger orders, we provide discounts and enticing pricing tiers. You'll benefit from higher profits as you expand with us as your brand and business gain traction.",
      image: reducedPricesBg,
      isRight: true,
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <section 
          key={index}
          className="relative min-h-[500px] flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${feature.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto px-4 py-20">
            <div className={`max-w-2xl ${feature.isRight ? 'ml-auto text-right' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {feature.title}
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                {feature.description}
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
      ))}
    </>
  );
};

export default FeatureSections;
