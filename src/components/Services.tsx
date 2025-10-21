import { Button } from "@/components/ui/button";
import privateLabelImg from "@/assets/private-label.jpg";
import cutSewImg from "@/assets/cut-sew.jpg";
import uniformImg from "@/assets/uniform.jpg";
import sportswearImg from "@/assets/sportswear.jpg";
import officeImg from "@/assets/office.jpg";
import workImg from "@/assets/work.jpg";
import aviationImg from "@/assets/aviation.jpg";
import customImg from "@/assets/custom.jpg";
import medicalImg from "@/assets/medical.jpg";

const Services = () => {
  const services = [
    {
      title: "Corporate & Office Uniforms",
      description: "Professional corporate uniforms for offices, banks, and business environments with modern designs and quality fabrics.",
      image: officeImg,
    },
    {
      title: "School & Educational Uniforms",
      description: "Comfortable and durable school uniforms for students and educational institutions with customizable designs.",
      image: uniformImg,
    },
    {
      title: "Healthcare & Medical Uniforms",
      description: "Professional medical uniforms designed for healthcare workers including scrubs, lab coats, and medical accessories.",
      image: medicalImg,
    },
    {
      title: "Hospitality & Service Industry Uniforms",
      description: "Quality uniforms for restaurants, hotels, and service industries including chef wear, server uniforms, and hospitality attire.",
      image: privateLabelImg,
    },
    {
      title: "Sports & Fitness Uniforms",
      description: "Athletic uniforms and sportswear for teams, fitness centers, and sports organizations with custom designs.",
      image: sportswearImg,
    },
    {
      title: "Aviation & Travel",
      description: "Professional uniforms for airlines, travel agencies, and transportation services with elegant and functional designs.",
      image: aviationImg,
    },
    {
      title: "Custom Promotional Uniforms",
      description: "Branded promotional uniforms for events, marketing campaigns, and corporate branding with custom logos and designs.",
      image: customImg,
    },
    {
      title: "Industrial & Workwear",
      description: "Durable workwear and safety uniforms for industrial environments, construction, and manufacturing sectors.",
      image: workImg,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Leuk Clothing Manufacturer Services, We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You get everything you need to start your fashion line, corporate business, and accessory. Let's be distinctive, with Leuk apparels.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative h-80 overflow-hidden shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-4 h-14 flex items-center justify-center">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm flex-grow">
                  {service.description}
                </p>
                <Button
                  className="bg-transparent border border-accent text-accent hover:bg-accent hover:text-white px-6 py-2 rounded-none font-medium tracking-wide transition-colors mt-auto"
                >
                  GET A QUOTE
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
