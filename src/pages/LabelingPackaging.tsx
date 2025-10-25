import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/labeling_repacking.webp";
import labelingImg from "@/assets/Service_labelling1.webp";
import packagingImg from "@/assets/Service_labelling2.webp";

const LabelingPackaging = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Private Labeling & Clothing Packaging Services
              </h1>
              <p className="text-lg text-accent mb-4">
                Build Your Brand with Leuk Apparel
              </p>
              <p className="text-muted-foreground leading-relaxed text-left lg:text-justify">
                At <span className="font-bold">Leuk Apparel,</span> we help fashion brands, startups, and retailers <span className="font-bold">create their own identity</span> through our <span className="font-bold">private labeling and professional packaging services.</span>
              </p>
              <p className="text-muted-foreground leading-relaxed text-left lg:text-justify">
                From concept to completion, our goal is to make your brand stand out in every detail — from the garment's design to the final label, tag, and packaging that reaches your customer. Our team ensures that every product leaving our facility reflects your brand's <span className="font-bold">style, story, and quality promise</span> — because presentation matters as much as production.
              </p>
            </div>
            <div className="overflow-hidden order-1 lg:order-2">
              <img 
                src={heroImage} 
                alt="Private Labeling & Packaging Services" 
                className="w-full h-[300px] lg:h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Private Labeling Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden order-2 lg:order-1">
              <img 
                src={labelingImg} 
                alt="Private Labeling Services" 
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Private Labeling Services Include
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">Custom Brand Labels</h3>
                  <p className="text-muted-foreground text-sm">Woven, printed, or heat transfer labels with your brand logo</p>
                </div>
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">Neck & Size Tags</h3>
                  <p className="text-muted-foreground text-sm">Professionally placed internal branding tags</p>
                </div>
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">Care & Wash Labels</h3>
                  <p className="text-muted-foreground text-sm">Fully compliant with global textile standards</p>
                </div>
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">Hang Tags & Barcodes</h3>
                  <p className="text-muted-foreground text-sm">Branded tags for a premium retail finish</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-center lg:text-justify mt-4">
                We manage every step to ensure your garments are retail-ready, reflecting a polished, cohesive, and professional appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Solutions Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Clothing Packaging Solutions
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed text-center lg:text-justify">
                Your product's first impression starts with its packaging — and at Leuk Apparel, we make it count. We offer <span className="font-bold">custom apparel packaging solutions</span> that enhance your brand's appeal, protect your garments, and deliver a premium unboxing experience for your customers.
              </p>
              <p className="text-primary-foreground/90 leading-relaxed text-center lg:text-justify">
                Each package is designed to meet your branding, durability, and shipping requirements, ensuring your apparel arrives in style — locally or internationally.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src={packagingImg} 
                alt="Packaging Solutions" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Options Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Packaging Capabilities
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center lg:text-justify mb-8">
              Each package is designed to meet your branding, durability, and shipping requirements, ensuring your apparel arrives in style.
            </p>
            <h2 className="text-2xl md:text-3xl text-foreground mb-8">
              We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Poly Bags</h3>
                <p className="text-muted-foreground text-sm">Standard & Custom Printed options available</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Custom-Branded Boxes & Cartons</h3>
                <p className="text-muted-foreground text-sm">Professional packaging with your brand identity</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Tissue Wrapping & Inserts</h3>
                <p className="text-muted-foreground text-sm">Premium presentation and protection</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Hang Tags & Stickers</h3>
                <p className="text-muted-foreground text-sm">Branded finishing touches for retail appeal</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Eco-Friendly Packaging Options</h3>
                <p className="text-muted-foreground text-sm">Sustainable solutions for environmentally conscious brands</p>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Retail Folding & Finishing Services</h3>
                <p className="text-muted-foreground text-sm">Professional presentation ready for retail</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LabelingPackaging;