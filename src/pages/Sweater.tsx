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
import sweater3Img from "@/assets/Sweater3.png";

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
      <section 
        className="relative h-[400px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-[60rem] mx-auto">
            <h1 className="text-3xl md:text-4xl font-normal text-white mb-6 ">
              Dumji Merino Blend Crew Sweater & Crew Knitted Jumper Premium Adventure & Everyday Comfort
            </h1>
            <p className="text-md text-white/90 mb-8 leading-relaxed">
              Crafted for warmth, style, and durability—perfect for mountain treks or cozy days 
            </p>
            <Button 
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300 px-8 py-6"
            >
              GET STARTED
            </Button>
          </div>
        </div>
      </section>

      {/* Sweater Types Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-normal mb-2 tracking-widest uppercase text-muted-foreground">
              OUR SERVICE OFFER
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find the perfect custom Sweater manufacturer to meet your fashion and commercial requirements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sweaterTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-foreground mb-4 text-center md:text-justify">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm text-justify flex-grow">
                    {type.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    GET A QUOTE
                  </Button>
                </div>
              </Card>
            ))}
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
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-justify">
              At Leuk Apparels, we understand that every fashion brand has a unique aesthetic to express. Our expert team specializes in creating custom sweaters that perfectly capture your brand's elegance through superior craftsmanship, innovative knitting techniques, and premium yarn materials. From concept to completion, we ensure every piece reflects your vision with uncompromising quality and sophistication.
            </p>
            <Button 
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300 px-8 py-6"
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
          <div className="max-w-2xl ml-auto text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Craftsmanship Excellence – Premium Sweater Manufacturing
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-justify">
              Committed to traditional craftsmanship, Leuk Apparels leads the way in premium sweater manufacturing. We utilize fine yarns, expert knitting techniques, and quality-enhancing processes to create exceptional knitwear that provides warmth and elegance. Our innovative manufacturing processes ensure that every sweater we produce meets the highest standards of comfort and style.
            </p>
            <Button 
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300 px-8 py-6"
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