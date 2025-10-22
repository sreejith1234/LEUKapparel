import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clothing.jpg";
import picturewImg from "@/assets/Picture1.png";
import picturebImg from "@/assets/Picture2.png";
import hoodiebImg from "@/assets/hoodiesb.jpg";
import hoodiewImg from "@/assets/hoodiesw.jpg";
import { useContactModal } from "@/contexts/ContactModalContext";

const Hoodies = () => {
  const { openModal } = useContactModal();
  
  const hoodieTypes = [
    {
     image: picturewImg,
    },
    {
     image: picturebImg,
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
                Custom Hoodies
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Premium Custom Hoodie Manufacturer
              </p>
              <p className="text-lg font-semibold text-foreground">
                Leuk Apparel is a trusted name in delivering durable, high-quality hoodies, with expertise in custom design and manufacturing that meets modern streetwear standards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in creating custom hoodies that blend comfort, style, and durability for brands and fashion entrepreneurs.
              </p>
            </div>
            <div className="overflow-hidden order-1 lg:order-2">
              <img 
                src={heroImage} 
                alt="Custom Hoodies" 
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {hoodieTypes.map((type, index) => (
                <div key={index} className="">
                  <img
                    src={type.image}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hoodie Types Section */}
      <section className="pt-4 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 text-left lg:text-justify">
              <p className="text-lg text-foreground leading-relaxed">
                Leuk Apparel is a leading custom clothing manufacturer specializing in <span className="font-bold">high-quality, personalized hoodies</span>. We create baggy-style hoodies that retain their original look and feel, offering designs that resonate with your audience.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Our custom embroidered hoodies feature <span className="font-bold">stylish chest embroidery</span>, <span className="font-bold">hood lining</span>, and optional pocket modifications with prints—perfect for creating standout pieces. We offer <span className="font-bold">full customization</span>, allowing you to choose from our design options or bring your own ideas to life.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                With a focus on modern fashion trends, we deliver hoodies that are <span className="font-bold">warm, soft, lightweight, and durable</span>. Leuk Apparel supports t-shirt manufacturers, clothing brands, and startups with trendy, functional products and reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Hoodie Section */}
      <section 
        className="relative h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hoodiewImg})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Premium Custom Hoodie Manufacturing – Elevating Your Streetwear Brand
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-left lg:text-justify">
              At Leuk Apparels, we understand that every streetwear brand has a unique identity to express. Our expert team specializes in creating custom hoodies that perfectly capture your brand's vibe through superior craftsmanship, innovative design techniques, and premium fleece materials. From concept to completion, we ensure every piece reflects your vision with uncompromising quality and comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainable Manufacturing Section */}
      <section 
        className="relative h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hoodiebImg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl ml-auto text-left lg:text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comfort Excellence – Premium Hoodie Manufacturing
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-left lg:text-justify">
              Committed to ultimate comfort, Leuk Apparels leads the way in premium hoodie manufacturing. We utilize soft fleece fabrics, ergonomic designs, and comfort-enhancing features to create exceptional casual wear that provides warmth and style. Our innovative manufacturing processes ensure that every hoodie we produce meets the highest comfort and quality standards.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hoodies;