import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/Baby_main.webp";
import baby2Img from "@/assets/Baby2.webp";
import baby3Img from "@/assets/baby3.webp";
import baby4Img from "@/assets/baby4.webp";
import baby5Img from "@/assets/baby5.webp";
import baby6Img from "@/assets/baby6.webp";

const BabyClothing = () => {
  const babyClothingTypes = [
    {
      image: baby2Img,
    },
    {
      image: baby3Img,
    },
    {
      image: baby4Img,
    },
    
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Trusted Infant & Baby Clothing Manufacturer
              </h1>
              <p className="text-lg text-foreground leading-relaxed">
                Our diverse product line includes everything from <span className="font-bold">baby bibs, thermal tops, ribbed tanks, and layover tees to soft pants, cozy jumpsuits, frocks, and sweatshirts</span> — each crafted with care, comfort, and attention to detail.
              </p>
              <p>
                As a <span className="font-bold">leading babywear manufacturer</span>, we go beyond production — offering <span className="font-bold">end-to-end solutions</span> for brands and retailers worldwide. From concept development and fabric sourcing to cutting, stitching, and finishing, we manage every step to deliver excellence in every garment.
              </p>
            </div>
            <div className="overflow-hidden order-1 lg:order-2">
              <img 
                src={heroImage} 
                alt="Custom Baby Clothing" 
                className="w-full h-[300px] lg:h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="pt-16 pb-4 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {babyClothingTypes.map((type, index) => (
                <div key={index} className="aspect-square">
                  <img
                    src={type.image}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Baby Clothing Types Section */}
      <section className="pt-4 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 text-left lg:text-justify">
              <p className="text-lg text-foreground leading-relaxed">
                We’re also proud to specialize in <span className="font-bold">organic and sustainable baby clothing</span>, ensuring that our products are <span className="font-bold">gentle on delicate skin and kind to the planet</span>.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                At Leuk Apparels, we believe that every stitch tells a story of <span className="font-bold">love, comfort, and craftsmanship</span>. Our goal is simple — to create <span className="font-bold">adorable, durable, and high-quality babywear</span> that parents trust and babies love to wear.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Whether you’re a start-up brand or an established retailer, we’re here to bring your vision to life with <span className="font-bold">customized baby clothing solutions</span> — from design to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Baby Clothing Section */}
      <section 
        className="relative h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${baby5Img})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Trusted Infant & Baby Clothing Manufacturer
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-2 text-left lg:text-justify">
              We understand that nothing is more heartwarming than a toddler dressed in adorable, high-quality outfits. That’s why we pour our passion into every stitch—creating garments that are not only stylish but also made with love and care.
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-2 text-left lg:text-justify">
              From concept to completion, we’re equipped to handle custom baby garment manufacturing to meet your exact specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainable Manufacturing Section */}
      <section className="relative h-screen flex items-center bg-cover bg-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${baby6Img})`, transform: 'scaleX(-1)' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl ml-auto text-left lg:text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Bring Your Babywear Vision to Life?
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-2">
              Partner with Leuk Apparels—your trusted infant and kids’ clothing manufacturer. Whether you're launching a new babywear brand or expanding your product line, we’re here to turn your ideas into beautifully crafted garments.
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-2">
              Get in touch today to start your custom baby clothing journey with us!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BabyClothing;