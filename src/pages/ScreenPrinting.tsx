import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/Screen_Printing.webp";
import garmentsImg from "@/assets/service_digital_Print.webp";

const ScreenPrinting = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Professional Screen Printing Services
              </h1>
              <p className="text-lg text-accent mb-4">
                Bring Your Designs to Life
              </p>
              <p className="text-muted-foreground leading-relaxed text-left lg:text-justify">
                At <span className="font-bold">Leuk Apparel</span>, we provide high-quality <span className="font-bold">screen printing manufacturing services</span> designed to make your ordering process simple, efficient, and stress-free. Our experienced team combines traditional craftsmanship with advanced printing technologies to create vibrant, durable, and visually stunning prints on every garment.
              </p>
            </div>
            <div className="overflow-hidden order-1 lg:order-2">
              <img 
                src={heroImage} 
                alt="Screen Printing Services" 
                className="w-full h-[300px] lg:h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Printing Techniques Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Screen Printing Capabilities
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center mb-8">
              At Leuk Apparel, we specialize in a wide range of custom screen printing services to meet the needs of fashion brands, businesses, and event organizers alike.
            </p>
            <h2 className="text-2xl md:text-3xl text-foreground mb-8">
              We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Plastisol Screen Printing</h3>
                <p className="text-muted-foreground text-sm">Ideal for vibrant and long-lasting colors with a slightly raised texture</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Water-Based Screen Printing</h3>
                <p className="text-muted-foreground text-sm">Eco-friendly and soft to the touch, perfect for a premium feel</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Discharge Printing</h3>
                <p className="text-muted-foreground text-sm">Removes dye from dark garments and replaces it with new color, maintaining breathability</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Foil Printing</h3>
                <p className="text-muted-foreground text-sm">Adds metallic shine and luxury to your designs using heat and pressure</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">High-Density & Puff Printing</h3>
                <p className="text-muted-foreground text-sm">For raised, 3D textures that make designs pop</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Glow-in-the-Dark & Specialty Inks</h3>
                <p className="text-muted-foreground text-sm">Unique finishes that enhance creativity and brand personality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garments We Print Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Garments We Screen Print
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed text-center lg:text-justify">
                Our screen printing services are suitable for a wide variety of garments, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">T-shirts (Round Neck, Polo, Oversized, etc.)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">Hoodies & Sweatshirts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">Sportswear & Activewear</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">Uniforms & Workwear</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">Tote Bags & Accessories</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">Promotional Apparel</span>
                  </div>
                </div>
              </div>
              <p className="text-primary-foreground/90 leading-relaxed text-center lg:text-justify">
                No matter the material or complexity of your design, we ensure sharp detailing, consistent color, and superior quality printing every time.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src={garmentsImg} 
                alt="Garments We Print" 
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

export default ScreenPrinting;