import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/T-shirts_banner.png";
import tshirtImg from "@/assets/V-neck_ts.png";
import vneckImg from "@/assets/vneck_ts.png";
import poloImg from "@/assets/Polo_ts.png";
import tshirtd from "@/assets/tshirtd.jpg";
import tshirtw from "@/assets/tshirtw.jpg";

const TShirts = () => {
  const tshirtTypes = [
    {
      title: "T-shirts",
      description: "Look no further if you’re searching for a t-shirt manufacturer that delivers exceptional quality, extensive customization options, and premium materials. Leuk Apparels is your one-stop solution for creating fully customized t-shirts tailored to your brand’s vision.",
      image: poloImg,
    },
    {
      title: "Round Neck T-shirts",
      description: "We offer a diverse range of t-shirt styles, including Round Neck designs made from colorfast, shrink-resistant fabrics that ensure lasting comfort and durability. Our advanced manufacturing facility is fully equipped to handle every stage of production — from design and pattern creation to finishing and quality control — all under one roof.",
      image: tshirtImg,
    },
    {
      title: "V-Neck T-shirts",
      description: "For those seeking a stylish alternative, our V-Neck T-Shirts are designed to enhance appearance by visually elongating the neck and complementing a variety of face shapes. Popular among both men and women, these shirts combine modern aesthetics with a perfect fit.",
      image: vneckImg,
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
              Leading Custom T-Shirt Manufacturing Company – Redefining Quality and Comfort
            </h1>
            <p className="text-md text-white/90 mb-8 leading-relaxed">
              Leuk Apparels, a premier custom t-shirt manufacturer in the INDIA, creates exceptional products—whether fused or printed—with unmatched precision and style. We stand apart by blending craftsmanship with innovation, delivering t-shirts that define modern fashion. Our mission is to provide every customer with an extraordinary, personalized fashion experience built on quality, creativity, and comfort.
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

      {/* T-shirt Types Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-normal mb-2 tracking-widest uppercase text-muted-foreground">
              OUR SERVICE OFFER
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find the perfect custom T-shirt manufacturer to meet your corporate or commercial requirements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tshirtTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 text-center md:text-justify">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm text-justify">
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

      {/* Custom T-Shirt Section */}
      <section 
        className="relative h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${tshirtd})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Premium Custom T-Shirt Manufacturing – Elevating Your Brand Identity
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-justify">
              At Leuk Apparels, we understand that every brand has a unique story to tell. Our expert team specializes in creating custom t-shirts that perfectly capture your brand's essence through superior craftsmanship, innovative design techniques, and premium materials. From concept to completion, we ensure every piece reflects your vision with uncompromising quality and attention to detail.
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
        style={{ backgroundImage: `url(${tshirtw})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl ml-auto text-right">
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-6">
              Sustainable Excellence – Eco-Friendly T-Shirt Manufacturing
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-justify">
              Committed to environmental responsibility, Leuk Apparels leads the way in sustainable t-shirt manufacturing. We utilize eco-friendly materials, water-efficient processes, and non-toxic dyes to create premium garments that are kind to both your skin and the planet. Our sustainable practices ensure that every t-shirt we produce meets the highest environmental standards without compromising on quality or style.
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

export default TShirts;