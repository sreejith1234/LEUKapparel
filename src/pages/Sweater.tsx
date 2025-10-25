import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/ds1.webp";
import sweatersmokeImg from "@/assets/DS2.webp";
import sweaterfogImg from "@/assets/ds3.webp";
import sweater1Img from "@/assets/Sweater1.webp";
import sweater2Img from "@/assets/Sweater2.webp";
import sweater3Img from "@/assets/Sweater3.webp";
import { useContactModal } from "@/contexts/ContactModalContext";

const Sweater = () => {
  const { openModal } = useContactModal();
  
  const sweaterTypes = [
    {
      title: "Premium Crew Sweaters",
      description: "Experience comfort and performance with the Sherpa Dumji Merino Blend Crew Sweater, crafted from merino wool, alpaca, and durable nylon. Designed for everyday wear and mountain adventures, it offers moisture-wicking, antimicrobial properties, and temperature regulation—even in wet conditions.",
      image: sweater1Img,
    },
    {
      title: "Cardigan Sweaters",
      description: "Elevate your casual wardrobe with the Barbour Lavensdale Crew Knitted Jumper, featuring a cosy oversized fit, neppy yarn texture, and stylish reverse knit stripe. Perfect for layering or lounging, it blends warmth, softness, and modern design.",
      image: sweater2Img,
    },
    {
      title: "Turtleneck Sweaters",
      description: "For those seeking a sophisticated alternative, our Turtleneck Sweaters are designed to provide warmth while maintaining a classic, timeless aesthetic. Popular among professionals and fashion enthusiasts, these sweaters combine elegance with ultimate comfort and versatility.",
      image: sweater3Img,
    }
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
                Custom Sweaters
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Premium Adventure & Everyday Comfort
              </p>
              <p className="text-lg font-semibold text-foreground">
                Experience comfort and performance with our premium sweater collection, crafted from merino wool, alpaca, and durable materials. Designed for everyday wear and mountain adventures.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Crafted for warmth, style, and durability—perfect for mountain treks or cozy days with moisture-wicking and temperature regulation properties.
              </p>
            </div>
            <div className="overflow-hidden order-1 lg:order-2">
              <img 
                src={heroImage} 
                alt="Custom Sweaters" 
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {sweaterTypes.map((type, index) => (
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

      {/* Sweater Types Section */}
      <section className="pt-4 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 text-left lg:text-justify">
              <p className="text-lg text-foreground leading-relaxed">
                Experience comfort and performance with the <span className="font-bold">Sherpa Dumji Merino Blend Crew Sweater</span>, crafted from merino wool, alpaca, and durable nylon. Designed for everyday wear and mountain adventures, it offers <span className="font-bold">moisture-wicking, antimicrobial properties, and temperature regulation</span>—even in wet conditions.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Elevate your casual wardrobe with the <span className="font-bold">Barbour Lavensdale Crew Knitted Jumper</span>, featuring a cosy oversized fit, neppy yarn texture, and stylish reverse knit stripe. Perfect for layering or lounging, it blends <span className="font-bold">warmth, softness, and modern design</span>.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                For those seeking a sophisticated alternative, our <span className="font-bold">Turtleneck Sweaters</span> are designed to provide warmth while maintaining a classic, timeless aesthetic. Popular among professionals and fashion enthusiasts, these sweaters combine <span className="font-bold">elegance with ultimate comfort and versatility</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Sweater Section */}
      <section 
        className="relative h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${sweatersmokeImg})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Wrap Up in Style with Dumj Sweaters
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-left lg:text-justify">
              Discover the perfect blend of warmth, comfort, and craftsmanship with our premium Dumj sweaters. Designed for modern lifestyles and made with high-quality materials, our sweaters are ideal for fashion-forward brands looking to offer cozy yet stylish winter wear.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Partner with Leuk Apparels today
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-left lg:text-justify">
              to create your custom Dumj sweater collection that stands out in every season.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainable Manufacturing Section */}
      <section 
        className="relative h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${sweaterfogImg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl ml-auto text-left lg:text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Craftsmanship Excellence in Premium Sweater Manufacturing
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-left lg:text-justify">
              At <span className="font-bold">Leuk Apparels</span>, we are passionate about preserving the art of traditional craftsmanship while embracing modern innovation. As a leading name in <span className="font-bold">premium sweater manufacturing</span>, we specialize in producing high-quality knitwear that combines <span className="font-bold">timeless elegance with superior comfort</span>.
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-left lg:text-justify">
              Using only the <span className="font-bold">finest yarns</span> and <span className="font-bold">expert knitting techniques</span>, our team ensures each sweater is meticulously crafted to meet the highest standards. From luxurious textures to flawless finishes, every piece reflects our commitment to <span className="font-bold">quality, durability, and style</span>.
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-left lg:text-justify">
              Whether you're building a fashion-forward collection or a classic winter line, trust Leuk Apparels to deliver exceptional sweaters that elevate your brand.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sweater;