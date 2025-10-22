import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Scissors, Palette, Shirt, Building, Zap, Award, Circle, Minus } from "lucide-react";
import heroImage from "@/assets/Portfolio.png";
import { useContactModal } from "@/contexts/ContactModalContext";

const Portfolio = () => {
  const { openModal } = useContactModal();
  
  const expertise = [
    { icon: Scissors, title: "Cut & Sew Manufacturing", desc: "Precision tailoring for custom apparel designs." },
    { icon: Palette, title: "Screen Printing", desc: "Long-lasting, vibrant prints for t-shirts, hoodies, and activewear." },
    { icon: Zap, title: "Sublimation Printing", desc: "Full-color, all-over designs for polyester garments and sportswear." },
    { icon: Award, title: "Embroidery", desc: "Elegant, detailed stitching for premium branding and uniforms." },
    { icon: Shirt, title: "Private Labeling", desc: "Build your brand identity with woven labels, tags, and trims." },
    { icon: Building, title: "Clothing Packaging", desc: "Professionally finished garments ready for retail and export." }
  ];

  const workCategories = [
    {
      emoji: "👕",
      title: "T-Shirts & Tops",
      desc: "From round neck and polo shirts to oversized and athletic tees — our custom t-shirt manufacturing capabilities include screen printing, embroidery, and sublimation finishes for a variety of fabrics and fits.",
      services: ["Cut & Sew", "Screen Printing", "Private Labeling"]
    },
    {
      emoji: "🧥",
      title: "Corporate Uniforms & Workwear",
      desc: "Durable, professional, and brand-aligned uniforms crafted for offices, industries, and retail teams.",
      services: ["Embroidery", "Private Labeling", "Packaging"]
    },
    {
      emoji: "🏃",
      title: "Sportswear & Activewear",
      desc: "Engineered for performance and comfort, our sportswear line includes jerseys, tracksuits, leggings, and gym wear — made using advanced sublimation and moisture-wicking fabrics.",
      services: ["Sublimation Printing", "Cut & Sew", "Custom Branding"]
    },
    {
      emoji: "🧢",
      title: "Caps, Hoodies & Outerwear",
      desc: "From 3D-embroidered caps to custom hoodies and jackets, we offer high-end apparel that combines fashion with functionality.",
      services: ["Embroidery", "Screen Printing", "Private Labeling"]
    },
    {
      emoji: "👜",
      title: "Custom Orders & Promotional Apparel",
      desc: "We handle bulk promotional printing and bespoke clothing orders for events, campaigns, and brand merchandising.",
      services: ["Screen Printing", "Packaging", "Private Labeling"]
    }
  ];

  const whyChooseUs = [
    "Over 5 years of experience in apparel manufacturing and customization",
    "Expertise in B2B garment production and export solutions",
    "Advanced infrastructure for printing, embroidery, and tailoring",
    "End-to-end services: from design to branding and packaging",
    "Strong track record of timely delivery and consistent quality"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Our Portfolio – Crafted With Precision, Worn With Pride
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                At Leuk Apparel, every garment we create tells a story — of craftsmanship, creativity, and commitment to quality. As a leading apparel manufacturer in India, we take pride in producing premium-quality clothing for global brands, startups, and fashion entrepreneurs who trust us to bring their designs to life.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Our portfolio reflects our diverse manufacturing expertise, covering everything from custom t-shirts and uniforms to sportswear, corporate apparel, and lifestyle clothing — each piece tailored to perfection.
              </p>
            </div>
            <div className="overflow-hidden order-1 lg:order-2">
              <img 
                src={heroImage} 
                alt="Portfolio" 
                className="w-full h-[300px] lg:h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
               Our Expertise at a Glance
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Work Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <span className="text-4xl mb-4 block">{category.emoji}</span>
                <h3 className="text-lg font-semibold text-foreground mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{category.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.services.map((service, serviceIndex) => (
                    <span key={serviceIndex} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why Brands Choose Leuk Apparel
            </h2>
            <div className="space-y-4 mb-12">
              {whyChooseUs.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <blockquote className="text-2xl font-semibold text-foreground italic mb-8">
                "Quality isn't an act, it's our identity."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Exceptional
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-4xl mx-auto">
            Whether you're launching a new fashion brand, producing custom uniforms, or scaling your existing clothing line, Leuk Apparel is your trusted partner for premium apparel manufacturing.
          </p>
          <p className="text-lg text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto">
            We combine creativity, technology, and craftsmanship to deliver garments that make an impact — from the factory floor to the global marketplace.
          </p>
          <Button 
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300 px-8 py-6 rounded-none text-lg"
            onClick={openModal}
          >
            → Get in touch with Leuk Apparel today to start your next project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;