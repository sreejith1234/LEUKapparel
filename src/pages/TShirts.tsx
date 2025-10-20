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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Custom T-Shirts
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Leading Custom T-Shirt Manufacturing Company – Redefining Quality and Comfort
              </p>
              <p className="text-lg font-semibold text-foreground">
                Leuk Apparels, a premier custom t-shirt manufacturer in India, creates exceptional products with unmatched precision and style. We blend craftsmanship with innovation, delivering t-shirts that define modern fashion.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to provide every customer with an extraordinary, personalized fashion experience built on quality, creativity, and comfort.
              </p>
            </div>
            <div className="overflow-hidden order-1 lg:order-2">
              <img 
                src={heroImage} 
                alt="Custom T-Shirts" 
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
              {tshirtTypes.map((type, index) => (
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

      {/* T-shirt Types Section */}
      <section className="pt-4 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 text-left lg:text-justify">
              <p className="text-lg text-foreground leading-relaxed">
                Look no further if you're searching for a t-shirt manufacturer that delivers <span className="font-bold">exceptional quality</span>, <span className="font-bold">extensive customization options</span>, and <span className="font-bold">premium materials</span>. Leuk Apparels is your one-stop solution for creating fully customized t-shirts tailored to your brand's vision.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                We offer a diverse range of t-shirt styles, including <span className="font-bold">Round Neck designs</span> made from <span className="font-bold">colorfast, shrink-resistant fabrics</span> that ensure lasting comfort and durability. Our advanced manufacturing facility is fully equipped to handle every stage of production.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                For those seeking a stylish alternative, our <span className="font-bold">V-Neck T-Shirts</span> are designed to enhance appearance by visually elongating the neck and complementing a variety of face shapes. Popular among both men and women, these shirts combine <span className="font-bold">modern aesthetics with a perfect fit</span>.
              </p>
            </div>
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
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-left lg:text-justify">
              At Leuk Apparels, we understand that every brand has a unique story to tell. Our expert team specializes in creating custom t-shirts that perfectly capture your brand's essence through superior craftsmanship, innovative design techniques, and premium materials. From concept to completion, we ensure every piece reflects your vision with uncompromising quality and attention to detail.
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
        style={{ backgroundImage: `url(${tshirtw})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl ml-auto text-left lg:text-right">
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-6">
              Sustainable Excellence – Eco-Friendly T-Shirt Manufacturing
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 text-left lg:text-justify">
              Committed to environmental responsibility, Leuk Apparels leads the way in sustainable t-shirt manufacturing. We utilize eco-friendly materials, water-efficient processes, and non-toxic dyes to create premium garments that are kind to both your skin and the planet. Our sustainable practices ensure that every t-shirt we produce meets the highest environmental standards without compromising on quality or style.
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

export default TShirts;