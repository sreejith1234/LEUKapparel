import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/Service_sublimation.webp";
import garmentsImg from "@/assets/service_sublimation2.webp";

const SublimationPrinting = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Premium Sublimation Printing Services
              </h1>
              <p className="text-lg text-accent mb-4">
                Vibrant, Full-Color Apparel Printing
              </p>
              <p className="text-muted-foreground leading-relaxed text-left lg:text-justify">
                At <span className="font-bold">Leuk Apparel</span>, we specialize in <span className="font-bold">high-quality sublimation printing services</span> that transform creative designs into vivid, full-color apparel. Our process is built around precision, durability, and ease — making it simple for brands and businesses to bring their designs to life with stunning results that never fade, peel, or crack.
              </p>
              <p className="text-muted-foreground leading-relaxed text-left lg:text-justify">
                Whether you're a <span className="font-bold">fashion brand</span>, <span className="font-bold">sportswear label</span>, or <span className="font-bold">corporate client</span>, our sublimation solutions guarantee photo-realistic prints with rich detail and lasting brilliance.
              </p>
            </div>
            <div className="overflow-hidden order-1 lg:order-2">
              <img 
                src={heroImage} 
                alt="Sublimation Printing Services" 
                className="w-full h-[300px] lg:h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Sublimation Printing Capabilities
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center lg:text-center mb-8">
              At <span className="font-bold">Leuk Apparel</span>, we use <span className="font-bold">state-of-the-art sublimation technology</span> and <span className="font-bold">premium-grade inks</span> to ensure sharp, accurate color reproduction and consistency across all fabric types.
            </p>
            <h2 className="text-2xl md:text-3xl text-foreground mb-8">
              We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">All-Over Sublimation Printing</h3>
                <p className="text-muted-foreground text-sm">Seamless, full-body designs for t-shirts, jerseys, leggings, and more</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Panel Sublimation Printing</h3>
                <p className="text-muted-foreground text-sm">Print on individual garment panels before stitching for precise alignment</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Cut & Sew Sublimation</h3>
                <p className="text-muted-foreground text-sm">Combine sublimation printing with our tailoring expertise for a premium finish</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Custom Sportswear Printing</h3>
                <p className="text-muted-foreground text-sm">Ideal for team uniforms, performance wear, and branded merchandise</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Photo & Gradient Printing</h3>
                <p className="text-muted-foreground text-sm">Perfect for high-resolution images, gradients, and complex patterns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garments We Sublimate Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Garments We Sublimate
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed text-center lg:text-left">
                Our sublimation printing services are ideal for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">Sports Jerseys & Team Uniforms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">Performance T-Shirts & Activewear</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">Polo Shirts & Tracksuits</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">Leggings, Shorts & Joggers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">Custom Hoodies & Jackets</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">Promotional Apparel & Accessories</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src={garmentsImg} 
                alt="Garments We Sublimate" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SublimationPrinting;