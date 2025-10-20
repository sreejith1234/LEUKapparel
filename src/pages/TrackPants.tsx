import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/trackhero.jpg";
import track1Img from "@/assets/track1.jpg";
import track2Img from "@/assets/track2.jpg";
import trackPants1Img from "@/assets/track_pants1.png";
import trackPants2Img from "@/assets/track_pants2.webp";
import trackPants3Img from "@/assets/track_pants3.png";
import trackPants4Img from "@/assets/track_pants4.webp";


const TrackPants = () => {
  const trackPantsTypes = [
    {
      image: trackPants2Img,
    },
    {
      image: trackPants3Img,
    },
    {
      image: trackPants1Img,
    },
    {
      image: trackPants4Img,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Custom Track Pants
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Crafted for all-day comfort, durability, and a perfect team fit
              </p>
              <p className="text-lg font-semibold text-foreground">
                Experience the perfect blend of comfort and style with our premium tracksuit pants. Each pair is crafted to meet the highest standards of quality and performance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Crafted for warmth, style, and durability—perfect for mountain treks, cozy days, or professional team wear.
              </p>
            </div>
            <div className="overflow-hidden order-1 lg:order-2">
              <img 
                src={heroImage} 
                alt="Custom Track Pants" 
                className="w-full h-[300px] lg:h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="pt-16 pb-4 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {trackPantsTypes.map((type, index) => (
                <div key={index} className="aspect-square">
                  <img
                    src={type.image}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Track Pants Types Section */}
      <section className="pt-4 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 text-left lg:text-justify">
              <p className="text-lg text-foreground leading-relaxed">
                Experience the perfect blend of <span className="font-bold">comfort and style</span> with our premium tracksuit pants. Each pair is crafted to meet the <span className="font-bold">highest standards of quality and performance</span>, ensuring long-lasting wear and a flawless fit.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                With a wide range of <span className="font-bold">customization options</span>, we bring your brand's unique identity to life. Our tracksuit bottoms offer <span className="font-bold">unmatched comfort, durability, and versatility</span>, available in various styles — from <span className="font-bold">classic relaxed fits</span> and <span className="font-bold">modern joggers</span> to <span className="font-bold">tapered, slim-fit, cargo, flare-leg</span>, and <span className="font-bold">tech-fabric designs</span>.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Every style is tailored to suit different activities and fashion preferences, striking the ideal balance between <span className="font-bold">comfort, functionality, and contemporary appeal</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Track Pants Section */}
      <section 
        className="relative h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${track1Img})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Professional & Reliable Tone
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-2 text-left lg:text-justify">
              Customized Tracksuits Perfect for Teams, Workforces, and Events.
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-2 text-left lg:text-justify">
              Premium Comfort. Consistent Quality. Perfect for Every Team
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-2 text-left lg:text-justify">
              Designed for Uniformity. Built for Everyday Performance
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-2 text-left lg:text-justify">
              Smart. Durable. Custom-Made for Your Brand
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-2 text-left lg:text-justify">
              Your Ideal Partner for Bulk and Corporate Tracksuit Manufacturing
            </p>
          </div>
        </div>
      </section>

      {/* Sustainable Manufacturing Section */}
      <section className="relative h-screen flex items-center bg-cover bg-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${track2Img})`, transform: 'scaleX(-1)' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl ml-auto text-left lg:text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Engaging & Modern Tone
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-2">
              Uniting Teams in Comfort and Style
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-2">
              Crafted for Performance. Perfect for Every Team
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-2">
              Custom Tracksuits That Define Your Brand’s Identity
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-2">
              From Corporate Comfort to Team Spirit — We Stitch It All
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-2">
              Where Professional Design Meets Everyday Wearability
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrackPants;