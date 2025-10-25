import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/Hoodies1.webp";
import hoodiebImg from "@/assets/hoodie2.webp";
import hoodiewImg from "@/assets/hoodies3.webp";
import picturewImg from "@/assets/Picture1.webp";
import picturebImg from "@/assets/Picture2.webp";
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
              Premium Custom Hoodie Manufacturing for Streetwear Brands
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-left lg:text-justify">
              At <span className="font-bold">Leuk Apparels</span>, we bring your street wear vision to life with precision and passion. We specialize in crafting <span className="font-bold">high-quality custom hoodies</span> that embody your brand’s unique identity. Our experienced team combines <span className="font-bold">cutting-edge design techniques, superior craftsmanship</span>, and <span className="font-bold">luxurious fleece fabrics</span> to deliver hoodies that stand out in both style and comfort.
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
              Custom Hoodie Manufacturer | Premium Streetwear Production – Leuk Apparels
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-left lg:text-justify">
              Leuk Apparels offers premium custom hoodie manufacturing for streetwear brands. High-quality fleece, private label options, and full-service apparel production. From initial concept to final production, we work closely with you to ensure every detail reflects your brand’s essence. Whether you're launching a new line or scaling your streetwear label, trust Leuk Apparels to deliver <span className="font-bold">exceptional quality and unmatched customization</span>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hoodies;