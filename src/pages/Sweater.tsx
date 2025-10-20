import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/sweater.jpg";
import sweaterImg from "@/assets/sweatshirt.jpg";
import sweatersmokeImg from "@/assets/sweatersmoke.jpg";
import sweaterfogImg from "@/assets/sweaterfog.jpg";
import sweater1Img from "@/assets/Sweater1.png";
import sweater2Img from "@/assets/Sweater2.png";
import sweater3Img from "@/assets/sweater3.png";

const Sweater = () => {
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
              Premium Custom Sweater Manufacturing – Elevating Your Fashion Brand
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-left lg:text-justify">
              At Leuk Apparels, we understand that every fashion brand has a unique aesthetic to express. Our expert team specializes in creating custom sweaters that perfectly capture your brand's elegance through superior craftsmanship, innovative knitting techniques, and premium yarn materials. From concept to completion, we ensure every piece reflects your vision with uncompromising quality and sophistication.
            </p>
            <Button 
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300 px-8 py-6 rounded-none"
            >
              INQUIRE NOW
            </Button>
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
              Craftsmanship Excellence – Premium Sweater Manufacturing
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-left lg:text-justify">
              Committed to traditional craftsmanship, Leuk Apparels leads the way in premium sweater manufacturing. We utilize fine yarns, expert knitting techniques, and quality-enhancing processes to create exceptional knitwear that provides warmth and elegance. Our innovative manufacturing processes ensure that every sweater we produce meets the highest standards of comfort and style.
            </p>
            <Button 
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300 px-8 py-6 rounded-none"
            >
              INQUIRE NOW
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sweater;