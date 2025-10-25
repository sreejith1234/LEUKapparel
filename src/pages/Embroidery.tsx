import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/embroidery.webp";
import garmentsImg from "@/assets/service_embroidery_lastpage.webp";

const Embroidery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Professional Garment Embroidery Services
              </h1>
              <p className="text-lg text-accent mb-4">
                Premium Stitching, Timeless Quality
              </p>
              <p className="text-muted-foreground leading-relaxed text-left lg:text-justify">
                At <span className="font-bold">Leuk Apparel</span>, we bring elegance and durability together through our <span className="font-bold">high-quality garment embroidery services</span>. Whether you're looking to add a professional touch to uniforms, showcase your brand logo, or create intricate custom designs, our embroidery solutions ensure a <span className="font-bold">refined and long-lasting finish</span> that elevates every garment.
              </p>
              <p className="text-muted-foreground leading-relaxed text-left lg:text-justify">
                We use <span className="font-bold">state-of-the-art</span> embroidery machines, premium threads, and expert craftsmanship to produce detailed designs with impeccable precision — perfect for <span className="font-bold">corporate wear, fashion apparel, and promotional clothing.</span>
              </p>
            </div>
            <div className="overflow-hidden order-1 lg:order-2">
              <img 
                src={heroImage} 
                alt="Embroidery Services" 
                className="w-full h-[300px] lg:h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Embroidery Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Embroidery Capabilities
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center lg:text-justify mb-8">
              Our embroidery division is equipped to handle everything from small custom runs to large-scale bulk production, maintaining quality and precision throughout.
            </p>
            <h2 className="text-2xl md:text-3xl text-foreground mb-8">
              We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Logo Embroidery</h3>
                <p className="text-muted-foreground text-sm">Perfect for branding uniforms, polo shirts, and workwear</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Monogram Embroidery</h3>
                <p className="text-muted-foreground text-sm">Elegant personalization for shirts, towels, and accessories</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">3D Puff Embroidery</h3>
                <p className="text-muted-foreground text-sm">Adds raised, dimensional effects for caps, hoodies, and jackets</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Appliqué & Patch Embroidery</h3>
                <p className="text-muted-foreground text-sm">Custom fabric patches with stitched borders for a premium look</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Chain Stitch & Flat Embroidery</h3>
                <p className="text-muted-foreground text-sm">For intricate designs and smooth, professional finishes</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Badge & Emblem Creation</h3>
                <p className="text-muted-foreground text-sm">Custom embroidered patches for uniforms, schools, or clubs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garments We Embroider Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Garments We Embroider
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed text-center lg:text-justify">
                Our embroidery services are ideal for a wide range of apparel, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">Polo Shirts & T-Shirts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">Corporate Uniforms & Workwear</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">Hoodies, Jackets & Sweatshirts</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">Caps, Hats & Beanies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">Sportswear & Team Apparel</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">Bags, Towels & Accessories</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src={garmentsImg} 
                alt="Garments We Embroider" 
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

export default Embroidery;