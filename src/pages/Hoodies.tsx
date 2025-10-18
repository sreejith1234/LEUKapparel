import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-clothing.jpg";
import picturewImg from "@/assets/Picture1.png";
import picturebImg from "@/assets/Picture2.png";
import picturemImg from "@/assets/Picture3.jpg";
import hoodiebImg from "@/assets/hoodiesb.jpg";
import hoodiewImg from "@/assets/hoodiesw.jpg";

const Hoodies = () => {
  const hoodieTypes = [
    {
      title: "Pullover Hoodies",
      description: "Leuk Apparel  is a leading custom clothing manufacturer specializing in high-quality, personalized hoodies. We create baggy-style hoodies that retain their original look and feel, offering designs that resonate with your audience.",
      image: picturewImg,
    },
    {
      title: "Zip-Up Hoodies",
      description: "Our custom embroidered hoodies feature stylish chest embroidery, hood lining, and optional pocket modifications with prints—perfect for creating standout pieces. We offer full customization, allowing you to choose from our design options or bring your own ideas to life.",
      image: picturebImg,
    },
    {
      title: "Oversized Hoodies",
      description: "With a focus on modern fashion trends, we deliver hoodies that are warm, soft, lightweight, and durable. Leuk Apparel supports t-shirt manufacturers, clothing brands, and startups with trendy, functional products and reliable service.",
      image: picturemImg,
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
            <h1 className="text-3xl md:text-4xl font-normal text-white mb-6">
              Premium Custom Hoodie Manufacturer
            </h1>
            <p className="text-md text-white/90 mb-8 leading-relaxed">
              Leuk Apparel is a trusted name in delivering durable, high-quality hoodies, with expertise in custom design and manufacturing.
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

      {/* Hoodie Types Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-normal mb-2 tracking-widest uppercase text-muted-foreground">
              OUR SERVICE OFFER
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find the perfect custom Hoodie manufacturer to meet your fashion and commercial requirements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hoodieTypes.map((type, index) => (
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
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-justify">
              At Leuk Apparels, we understand that every streetwear brand has a unique identity to express. Our expert team specializes in creating custom hoodies that perfectly capture your brand's vibe through superior craftsmanship, innovative design techniques, and premium fleece materials. From concept to completion, we ensure every piece reflects your vision with uncompromising quality and comfort.
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
        style={{ backgroundImage: `url(${hoodiebImg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl ml-auto text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comfort Excellence – Premium Hoodie Manufacturing
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-justify">
              Committed to ultimate comfort, Leuk Apparels leads the way in premium hoodie manufacturing. We utilize soft fleece fabrics, ergonomic designs, and comfort-enhancing features to create exceptional casual wear that provides warmth and style. Our innovative manufacturing processes ensure that every hoodie we produce meets the highest comfort and quality standards.
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

export default Hoodies;