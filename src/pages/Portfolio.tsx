import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scissors, Palette, Shirt, Building, Zap, Award, } from "lucide-react";
import heroImage from "@/assets/Portfolio.webp";
import PortfolioImg from "@/assets/portfolio_last_page.webp";
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
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
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
                className="w-full h-[300px] lg:h-[500px] object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Expertise at a Glance
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center mb-8">
              As a trusted apparel manufacturer, we offer a full suite of services, including:
            </p>
            <h2 className="text-2xl md:text-3xl text-foreground mb-8">
              We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {expertise.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg font-light py-4">
              "Our skilled team manages both <span className="font-bold">medium and large-scale production runs</span> with consistency and care, ensuring your garments meet the highest industry standards."
            </p>
          </div>
        </div>
      </section>

      {/* Work Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Work Categories
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center mb-8">
              We specialize in diverse apparel categories, delivering quality across all segments:
            </p>
            <h2 className="text-2xl md:text-3xl text-foreground mb-8">
              We Specialize In
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {workCategories.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border shadow-sm flex flex-col h-full">
                  <span className="text-4xl mb-4 block">{category.emoji}</span>
                  <h3 className="font-bold text-foreground mb-2">{category.title}</h3>
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
            <p className="text-muted-foreground leading-relaxed text-lg font-light py-4">
              "From concept to completion, we deliver <span className="font-bold">exceptional quality</span> across all categories, ensuring your brand stands out in the market."
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Why Choose Leuk Apparel
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Explore our diverse portfolio showcasing expertly crafted apparel across categories—from custom hoodies and premium sweaters to adorable babywear and stylish track pants. At Leuk Apparels, every piece reflects our commitment to quality, innovation, and craftsmanship tailored to elevate your brand.
              </p>
            </div>
            <div className="overflow-hidden">
              <img 
                src={PortfolioImg} 
                alt="Leuk Apparels Portfolio" 
                className="w-full h-[400px] lg:h-[500px] object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;