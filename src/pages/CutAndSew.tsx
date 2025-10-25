import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/Cut_sew.webp";
import manufacturingImg from "@/assets/Service_Cut_Sue1.webp";
import qualityImg from "@/assets/Service_Cut_Sue2.webp";
import { useContactModal } from "@/contexts/ContactModalContext";

const CutAndSew = () => {
  const { openModal } = useContactModal();
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Cut & Sew Clothing Manufacturers in India
              </h1>
              <p className="text-lg text-accent mb-4">
                Tailored Perfection by Leuk Apparel
              </p>
              <p className="text-muted-foreground leading-relaxed text-left lg:text-justify">
                At <span className="font-bold">Leuk Apparel</span>, we specialize in delivering <span className="font-bold">market-leading cut and sew clothing solutions</span> that redefine quality and craftsmanship. As one of the top <span className="font-bold">cut and sew manufacturers in India</span>, we combine modern technology with skilled artistry to create fully customized apparel that brings your vision to life.
              </p>
              <p className="text-muted-foreground leading-relaxed text-left lg:text-justify">
                From concept to creation, every garment is designed with precision — giving brands the flexibility to choose fabrics, fits, finishes, and detailing to achieve truly unique results.
              </p>
            </div>
            <div className="overflow-hidden order-1 lg:order-2">
              <img 
                src={heroImage} 
                alt="Cut & Sew Manufacturing" 
                className="w-full h-[300px] lg:h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertly Crafted Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden order-2 lg:order-1">
              <img 
                src={manufacturingImg} 
                alt="Expert Craftsmanship" 
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Expertly Crafted Cut & Sew Apparel
              </h2>
              <p className="text-muted-foreground leading-relaxed text-center lg:text-justify">
                Our <span className="font-bold">cut and sew manufacturing</span> process allows you to design garments from scratch, starting with your choice of <span className="font-bold">premium natural fabrics</span> and ending with meticulous stitching by our talented production team.
              </p>
              <p className="text-muted-foreground leading-relaxed text-center lg:text-justify">
                We maintain <span className="font-bold">state-of-the-art facilities</span> that ensure clean, efficient, and scalable production. Whether you need pre-cut designs, tailored prototypes, or large-scale production runs, our experienced professionals deliver exceptional quality on time — every time.
              </p>
              <p className="text-muted-foreground leading-relaxed text-center lg:text-justify">
                At Leuk Apparel, we turn creative ideas into <span className="font-bold">intricately crafted apparel</span> that stands out in the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comprehensive Manufacturing Capabilities
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center mb-8">
              As a trusted cut and sew manufacturer, we offer a full suite of services, including:
            </p>
            <h2 className="text-2xl md:text-3xl text-foreground mb-8">
              We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Pattern Making & Grading</h3>
                <p className="text-muted-foreground text-sm">Precision pattern development for perfect fits</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Prototyping & Sampling</h3>
                <p className="text-muted-foreground text-sm">Sample creation for design validation</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Bulk & Custom Production</h3>
                <p className="text-muted-foreground text-sm">Scalable production for all order sizes</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Quality Control & Finishing</h3>
                <p className="text-muted-foreground text-sm">Rigorous quality assurance processes</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Fabric Sourcing</h3>
                <p className="text-muted-foreground text-sm">Premium material selection and consultation</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Design Consultation</h3>
                <p className="text-muted-foreground text-sm">Expert guidance for optimal results</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg font-light py-4">
              "Our skilled team manages both <span className="font-bold">medium and large-scale production runs</span> with consistency and care, ensuring your garments meet the highest industry standards."
            </p>
          </div>
        </div>
      </section>

      {/* High-Quality Manufacturing Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                High-Quality Custom Cut & Sew Manufacturer – India
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed text-left lg:text-justify">
                Leuk Apparel is recognized as a <span className="font-bold">reliable global apparel manufacturing partner</span>, serving clients across <span className="font-bold">India and beyond</span>.
              </p>
              <p className="text-primary-foreground/90 leading-relaxed text-left lg:text-justify">
                We provide end-to-end, in-house manufacturing solutions, allowing brands to design, produce, and deliver exceptional clothing collections from the ground up. Our expertise in fashion design and technical production ensures that your creative concepts are transformed into commercially successful products.
              </p>
              <p className="text-primary-foreground/90 leading-relaxed text-left lg:text-justify">
                With a wide range of customization options, we empower you to build clothing lines that resonate with your target audience — enhancing both your brand identity and profitability.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src={qualityImg} 
                alt="Quality Manufacturing" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Why Choose Leuk Apparel for Cut & Sew Manufacturing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Advanced infrastructure and modern equipment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Skilled designers and experienced tailors</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Flexible production volumes — from samples to bulk orders</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Fabric and design consultation for startups and established brands</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Transparent communication and timely delivery</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-center">
              Whether you are a startup, small business, or growing fashion label, Leuk Apparel is your one-stop destination for cut and sew manufacturing. Every order receives our full attention and is handled with precision and passion.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bring Your Designs to Life with Leuk Apparel
            </h2>
            <p className="text-background/90 leading-relaxed text-lg mb-6">
              From fundamental basics to premium custom garments, we deliver quality that inspires confidence.
            </p>
            <p className="text-background/90 leading-relaxed text-lg mb-6">
              Our mission is simple — to help fashion entrepreneurs, designers, and global brands turn creative visions into reality through high-quality cut and sew craftsmanship.
            </p>
            <p className="text-lg font-semibold mb-8">
              Let's build something exceptional — together.
            </p>
            <Button 
              onClick={openModal}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-none"
            >
              Partner with Leuk Apparel Today
            </Button>
            <p className="text-background/70 text-sm mt-4">
              → Experience the future of custom clothing manufacturing
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CutAndSew;