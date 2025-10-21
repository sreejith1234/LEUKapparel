import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import manufacturingImage from "@/assets/cut-sew.jpg";
import Main_Page from "@/assets/Main_Page.png";
import Aboutus from "@/assets/All_About2.png";
import Aboutus1 from "@/assets/All_About1.png";
import heroImage from "@/assets/hero-clothing.jpg";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About LEUK Apparels
              </h1>
              <p className="text-lg text-accent mb-4">
                Your Trusted Clothing Manufacturer in India
              </p>
              <p className="text-lg font-semibold text-foreground">
                LEUK Apparels is an established garment manufacturing company based in South India, with its own production unit and a strong network of partner factories across Tamil Nadu, India.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in delivering custom clothing solutions for brands, businesses, and fashion entrepreneurs — providing a one-stop destination from concept to completion.
              </p>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 mt-8">
                What We Do
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                At LEUK, we manage every stage of the garment-making process — from design development, sampling, bulk production, to quality finishing. Our team ensures that every order is handled with attention to detail, maintaining high-quality standards and timely delivery.
              </p>
              <p className="text-foreground font-semibold italic text-lg mb-6">
                From concept to completion — your vision, our expertise
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                With meticulous attention to detail and unwavering commitment to quality, we transform ideas into exceptional garments that exceed expectations.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none">
                Contact Us
              </Button>
            </div>
            <div className="overflow-hidden order-1 lg:order-2">
              <img 
                src={Aboutus} 
                alt="About LEUK Apparels" 
                className="w-full h-[300px] lg:h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-lg order-1 lg:order-1">
              <img 
                src={Main_Page} 
                alt="Our mission" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6 order-2 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-left lg:text-justify">Vision Statement</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-left lg:text-justify">
                <p>
                  To be a globally recognized apparels manufacturer known for innovation, craftsmanship, and ethical production — empowering brands with sustainable, high-quality garments made with precision and care.
                </p>
                <p className="font-semibold italic text-foreground">
                  Empowering global brands with quality, innovation, and ethical craftsmanship
                </p>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-left lg:text-justify mt-8">Mission Statement</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-left lg:text-justify">
                <p>
                  Our mission is to deliver superior-quality garments through innovation, technology, and teamwork. We strive to support fashion brands and businesses by offering complete end-to-end manufacturing solutions — from design development and sampling to large-scale production — ensuring consistency, transparency, and timely delivery at every stage.
                </p>
                <p className="font-semibold italic text-foreground">
                  Delivering excellence in every stitch — from design to delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-left lg:text-justify">Why Choose LEUK</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We understand that launching or expanding a fashion brand can be challenging. That's why LEUK offers end-to-end manufacturing support, ensuring communication is smooth, timelines are clear, and your brand's vision is brought to life efficiently. Whether you're an emerging designer or an established label, our flexible production setup is built to meet your unique needs.
                </p>
                
                <h3 className="text-2xl font-bold text-foreground mt-6 text-left lg:text-justify">Our Strength</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>In-house garment production facility</li>
                  <li>Strong network of textile and stitching units across Tamil Nadu</li>
                  <li>Expertise in t-shirts, uniforms, hoodies, and corporate wear</li>
                  <li>Fast turnaround with strict quality control</li>
                  <li>Personalized service and transparent communication</li>
                </ul>
                
                <h3 className="text-2xl font-bold text-foreground mt-6 text-left lg:text-justify">Our Commitment</h3>
                <p>
                  At LEUK Apparels, we believe in innovation, craftsmanship, and consistency. From development to delivery, our mission is to help brands grow with reliable, stylish, and high-quality garments — made with care in India.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg order-1 lg:order-2">
              <img 
                src={manufacturingImage} 
                alt="Customer satisfaction" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
