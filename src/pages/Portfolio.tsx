import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Scissors, Palette, Shirt, Building, Zap, Award, Circle, Minus } from "lucide-react";
import heroImage from "@/assets/hero-clothing.jpg";

const Portfolio = () => {
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
      <section className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">

        
        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Scissors */}
          <Scissors className="absolute top-20 left-10 w-8 h-8 text-primary/20 animate-pulse" style={{transform: 'rotate(15deg)'}} />
          <Scissors className="absolute bottom-20 right-1/3 w-5 h-5 text-primary/20 animate-bounce" style={{transform: 'rotate(-15deg)', animationDelay: '0.5s'}} />
          
          {/* Thread Spools (using emojis) */}
          <span className="absolute top-48 left-20 text-xl animate-bounce" style={{animationDelay: '2s', filter: 'hue-rotate(120deg)'}}>🧵</span>
          <span className="absolute bottom-32 right-20 text-lg animate-bounce" style={{animationDelay: '0.8s', filter: 'hue-rotate(240deg)'}}>🧵</span>
          
          {/* Buttons (using Circle with different colors) */}
          <Circle className="absolute top-60 left-1/3 w-4 h-4 text-indigo-400/40 fill-current animate-pulse" style={{animationDelay: '2.2s'}} />
          <Circle className="absolute top-24 right-1/4 w-3 h-3 text-pink-400/40 fill-current animate-bounce" style={{animationDelay: '1.8s'}} />
          <Circle className="absolute bottom-48 right-1/4 w-5 h-5 text-teal-400/40 fill-current animate-pulse" style={{animationDelay: '0.3s'}} />
          

          

          
          {/* Wavy thread lines */}
          <svg className="absolute top-1/3 right-1/4 w-20 h-8 text-orange-400/30 animate-pulse" style={{animationDelay: '1.8s'}}>
            <path d="M 0 4 Q 5 0 10 4 T 20 4" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <svg className="absolute bottom-1/4 left-1/5 w-16 h-6 text-cyan-400/30 animate-bounce" style={{animationDelay: '0.6s'}}>
            <path d="M 0 3 Q 4 0 8 3 T 16 3" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <svg className="absolute top-1/2 left-1/3 w-24 h-10 text-amber-400/25 animate-pulse" style={{animationDelay: '2.3s'}}>
            <path d="M 0 5 Q 6 0 12 5 T 24 5" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <svg className="absolute bottom-1/3 right-1/5 w-18 h-7 text-emerald-400/30 animate-bounce" style={{animationDelay: '1.1s'}}>
            <path d="M 0 3.5 Q 4.5 0 9 3.5 T 18 3.5" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Our Portfolio – Crafted With Precision, Worn With Pride
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
              At Leuk Apparel, every garment we create tells a story — of craftsmanship, creativity, and commitment to quality. As a leading apparel manufacturer in India, we take pride in producing premium-quality clothing for global brands, startups, and fashion entrepreneurs who trust us to bring their designs to life.
            </p>
            <p className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
              Our portfolio reflects our diverse manufacturing expertise, covering everything from custom t-shirts and uniforms to sportswear, corporate apparel, and lifestyle clothing — each piece tailored to perfection.
            </p>
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