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


const TrackPants = () => {
  const trackPantsTypes = [
    {
      title: "Athletic Track Pants",
      description: "Experience the perfect blend of comfort and style with our premium tracksuit pants. Each pair is crafted to meet the highest standards of quality and performance, ensuring long-lasting wear and a flawless fit",
      image: trackPants2Img,
    },
    {
      title: "Jogger Track Pants",
      description: "With a wide range of customization options, we bring your brand’s unique identity to life. Our tracksuit bottoms offer unmatched comfort, durability, and versatility, available in various styles — from classic relaxed fits and modern joggers to tapered, slim-fit, cargo, flare-leg, and tech-fabric designs",
      image: trackPants3Img,
    },
    {
      title: "Slim Fit Track Pants",
      description: "Every style is tailored to suit different activities and fashion preferences, striking the ideal balance between comfort, functionality, and contemporary appeal.",
      image: trackPants1Img,
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-[60rem] mx-auto">
            <h1 className="text-3xl md:text-4xl font-normal text-white mb-6">
              Custom track pants crafted for all-day comfort, durability, and a perfect team fit.
            </h1>
            <p className="text-md text-white/90 mb-8 leading-relaxed">
              Crafted for warmth, style, and durability—perfect for mountain treks or cozy days 
            </p>
            <Button 
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300 px-8 py-6"
            >
              GET STARTED
            </Button>
          </div>
        </div>
      </section>

      {/* Track Pants Types Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-normal mb-2 tracking-widest uppercase text-muted-foreground">
              OUR SERVICE OFFER
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find the perfect custom Track Pants manufacturer to meet your athletic and commercial requirements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trackPantsTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-foreground mb-4 text-center md:text-justify">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm text-justify flex-grow">
                    {type.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    GET A QUOTE
                  </Button>
                </div>
              </Card>
            ))}
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
            <p className="text-white/90 text-lg leading-relaxed mb-2 text-justify">
              Customized Tracksuits Perfect for Teams, Workforces, and Events.
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-2 text-justify">
              Premium Comfort. Consistent Quality. Perfect for Every Team
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-2 text-justify">
              Designed for Uniformity. Built for Everyday Performance
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-2 text-justify">
              Smart. Durable. Custom-Made for Your Brand
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-2 text-justify">
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
          <div className="max-w-2xl ml-auto text-right">
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