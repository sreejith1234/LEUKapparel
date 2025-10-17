import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import manufacturingImage from "@/assets/cut-sew.jpg";
import embroideryImage from "@/assets/embroidery.jpg";
import leatherImage from "@/assets/leather.jpg";
import heroImage from "@/assets/hero-clothing.jpg";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About LEUK Apparels
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Your Trusted Clothing Manufacturer in India
          </p>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg">
              <img 
                src={manufacturingImage} 
                alt="Manufacturing process" 
                className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src={embroideryImage} 
                alt="Custom embroidery work" 
                className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src={leatherImage} 
                alt="Leather goods" 
                className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 text-muted-foreground leading-relaxed text-left">
              <p className="text-lg font-semibold text-foreground">
                LEUK Apparels is an established garment manufacturing company based in South India, with its own production unit and a strong network of partner factories across Tamil Nadu, India.
              </p>
              <p>
                We specialize in delivering custom clothing solutions for brands, businesses, and fashion entrepreneurs — providing a one-stop destination from concept to completion.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">What We Do</h3>
              <p>
                At LEUK, we manage every stage of the garment-making process — from design development, sampling, bulk production, to quality finishing. Our team ensures that every order is handled with attention to detail, maintaining high-quality standards and timely delivery.
              </p>
            </div>
            <div className="mt-8">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Schedule a free consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Vision Statement</h2>
              <div className="space-y-4 text-primary-foreground/90 leading-relaxed">
                <p>
                  To be a globally recognized apparels manufacturer known for innovation, craftsmanship, and ethical production — empowering brands with sustainable, high-quality garments made with precision and care.
                </p>
                <p className="font-semibold italic">
                  Empowering global brands with quality, innovation, and ethical craftsmanship
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src={heroImage} 
                alt="Our mission" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-lg order-2 lg:order-1">
              <img 
                src={manufacturingImage} 
                alt="Customer satisfaction" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose LEUK</h2>
              <div className="space-y-4 text-background/90 leading-relaxed">
                <p>
                  We understand that launching or expanding a fashion brand can be challenging. That's why LEUK offers end-to-end manufacturing support, ensuring communication is smooth, timelines are clear, and your brand's vision is brought to life efficiently. Whether you're an emerging designer or an established label, our flexible production setup is built to meet your unique needs.
                </p>
                
                <h3 className="text-2xl font-bold mt-6">Our Strength</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>In-house garment production facility</li>
                  <li>Strong network of textile and stitching units across Tamil Nadu</li>
                  <li>Expertise in t-shirts, uniforms, hoodies, and corporate wear</li>
                  <li>Fast turnaround with strict quality control</li>
                  <li>Personalized service and transparent communication</li>
                </ul>
                
                <h3 className="text-2xl font-bold mt-6">Our Commitment</h3>
                <p>
                  At LEUK Apparels, we believe in innovation, craftsmanship, and consistency. From development to delivery, our mission is to help brands grow with reliable, stylish, and high-quality garments — made with care in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Mission Statement
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Our mission is to deliver superior-quality garments through innovation, technology, and teamwork. We strive to support fashion brands and businesses by offering complete end-to-end manufacturing solutions — from design development and sampling to large-scale production — ensuring consistency, transparency, and timely delivery at every stage.
            </p>
            <p className="text-foreground font-semibold italic text-lg mb-6">
              Delivering excellence in every stitch — from design to delivery
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              At LEUK Apparels, we are committed to sustainability, fair practices, and continuous improvement.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
