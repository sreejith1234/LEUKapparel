import { Button } from "@/components/ui/button";
import privateLabelImg from "@/assets/Hospitality.png";
import uniformImg from "@/assets/SE_New.webp";
import sportswearImg from "@/assets/Sports.png";
import officeImg from "@/assets/Corporate_Office Uniforms.png";
import workImg from "@/assets/IndustrialWorkwear.png";
import aviationImg from "@/assets/Aviation_ Travel.png";
import customImg from "@/assets/CustomPromotionalUniforms.png";
import medicalImg from "@/assets/Healthcare.png";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const services = [
    {
      title: "Corporate & Office Uniforms",
      description: "We design and manufacture premium Corporate and Office Uniforms that combine style, comfort, and professionalism. Our uniforms are tailored to reflect your brand's identity while ensuring your team looks confident and well-presented every day.",
      image: officeImg,
      fullContent: "At Leuk Apparels, we design and manufacture premium Corporate and Office Uniforms that combine style, comfort, and professionalism. Our uniforms are tailored to reflect your brand's identity while ensuring your team looks confident and well-presented every day.\n\nWe offer a wide range of custom-designed office wear, including:\n• Formal shirts and trousers for men and women\n• Polo T-shirts and chinos for smart-casual office environments\n• Reception and front-desk uniforms\n• Housekeeping and support staff attire\n\nEach garment is crafted using high-quality, breathable fabrics that offer durability, easy maintenance, and a professional finish. Whether your business demands a modern corporate look or a classic formal appearance, we deliver uniforms that enhance your company's image and employee comfort.\n\nLet your team represent your brand with confidence and class — choose Leuk Apparels for all your corporate and office uniform needs."
    },
    {
      title: "School & Educational Uniforms",
      description: "We take pride in being one of the trusted names in school and educational uniform manufacturing across India. We currently supply high-quality uniforms to several reputed and prestigious schools, known for their commitment to excellence.",
      image: uniformImg,
      fullContent: "At Leuk Apparels, we take pride in being one of the trusted names in school and educational uniform manufacturing across India. We currently supply high-quality uniforms to several reputed and prestigious schools, known for their commitment to excellence.\n\nOur uniforms are designed with comfort, durability, and neat appearance in mind — ensuring that students look smart and feel confident throughout the day. From pre-primary to higher secondary levels, we offer a complete range of customized school uniforms, including:\n\n• Shirts, trousers, skirts, and pinafores\n• Blazers, sweaters, and ties\n• House uniforms and sportswear\n• Custom socks, belts, and accessories\n\nWe use premium, breathable fabrics that withstand daily wear and frequent washing while maintaining their shape and color. Every piece is carefully tailored to meet each school's identity, colors, and design requirements.\n\nWith Leuk Apparels, schools can rely on a trusted uniform partner dedicated to quality, consistency, and long-term relationships."
    },
    {
      title: "Healthcare & Medical Uniforms",
      description: "We specialize in crafting high-quality Healthcare and Medical Uniforms designed for comfort, durability, and a professional appearance. Our uniforms are trusted by hospitals, clinics, laboratories, and healthcare institutions across India for their superior fabric quality and practical design.",
      image: medicalImg,
      fullContent: "At Leuk Apparels, we specialize in crafting high-quality Healthcare and Medical Uniforms designed for comfort, durability, and a professional appearance. Our uniforms are trusted by hospitals, clinics, laboratories, and healthcare institutions across India for their superior fabric quality and practical design.\n\nWe understand the demanding nature of the healthcare environment — that's why our uniforms are made from breathable, easy-care, and antibacterial fabrics that ensure comfort and hygiene throughout long working hours.\n\nOur product range includes:\n• Scrub suits and lab coats\n• Nurse and doctor uniforms\n• Patient gowns and attendant wear\n• Hospital housekeeping and support staff uniforms\n\nEach garment is tailored to provide freedom of movement, stain resistance, and long-lasting performance while maintaining a neat, professional look.\n\nWith Leuk Apparels, you get uniforms that reflect care, professionalism, and trust — the true spirit of the healthcare industry."
    },
    {
      title: "Hospitality & Service Industry Uniforms",
      description: "We design and manufacture premium Hospitality and Service Industry Uniforms that combine elegance, comfort, and functionality. Our uniforms help your staff look polished and professional — creating a strong first impression that enhances your brand image.",
      image: privateLabelImg,
      fullContent: "At Leuk Apparels, we design and manufacture premium Hospitality and Service Industry Uniforms that combine elegance, comfort, and functionality. Our uniforms help your staff look polished and professional — creating a strong first impression that enhances your brand image.\n\nWe cater to a wide range of establishments, including hotels, restaurants, resorts, catering services, and customer service organizations. Every uniform is thoughtfully designed to reflect your brand identity while ensuring maximum comfort for long working hours.\n\nOur collection includes:\n• Front office and reception uniforms\n• Chef coats, aprons, and kitchen wear\n• Housekeeping and maintenance uniforms\n• Waiter, steward, and service staff attire\n• Concierge and event uniforms\n\nWe use premium, easy-care fabrics that are durable, breathable, and stain-resistant — ideal for the dynamic hospitality environment. From classic designs to modern styles, each piece is tailored to fit perfectly and project a sense of sophistication.\n\nWith Leuk Apparels, you can outfit your team in uniforms that embody professionalism, style, and hospitality excellence."
    },
    {
      title: "Sports & Fitness Uniforms",
      description: "We design and produce high-performance Sports and Fitness Uniforms that combine style, comfort, and durability. Whether for schools, colleges, academies, or professional teams, our uniforms are built to inspire confidence and enhance performance.",
      image: sportswearImg,
      fullContent: "At Leuk Apparels, we design and produce high-performance Sports and Fitness Uniforms that combine style, comfort, and durability. Whether for schools, colleges, academies, or professional teams, our uniforms are built to inspire confidence and enhance performance.\n\nWe use breathable, stretchable, and moisture-wicking fabrics that keep athletes cool and comfortable during intense activity. Each piece is crafted to allow maximum movement and long-lasting wear — perfect for both training and competition.\n\nOur product range includes:\n• Team jerseys and shorts\n• Tracksuits and training wear\n• Polo T-shirts and gym wear\n• Sports jackets, hoodies, and activewear sets\n• Customized kits with name and logo printing\n\nWith custom design options, we help teams represent their identity with pride through personalized colors, logos, and branding.\n\nEmpower your team with Leuk Apparels' Sports and Fitness Uniforms — where performance meets style."
    },
    {
      title: "Aviation & Travel",
      description: "We specialize in designing Aviation and Travel Industry Uniforms that combine elegance, comfort, and professionalism. Our uniforms help airline, airport, and travel staff make a lasting impression, reflecting your brand's identity while ensuring functionality throughout demanding work hours.",
      image: aviationImg,
      fullContent: "At Leuk Apparels, we specialize in designing Aviation and Travel Industry Uniforms that combine elegance, comfort, and professionalism. Our uniforms help airline, airport, and travel staff make a lasting impression, reflecting your brand's identity while ensuring functionality throughout demanding work hours.\n\nWe offer a comprehensive range of uniforms for:\n• Cabin crew and airline staff\n• Ground handling and check-in personnel\n• Airport security and concierge staff\n• Travel agency and tour guide uniforms\n\nEach garment is made from premium, breathable fabrics that are durable, easy to maintain, and provide all-day comfort. With tailored fits and attention to detail, our uniforms ensure staff look sharp, feel confident, and perform efficiently.\n\nWith Leuk Apparels, your aviation and travel team can embody professionalism, style, and brand excellence at every customer touch point."
    },
    {
      title: "Custom Promotional Uniforms",
      description: "we create Custom Promotional Uniforms that help your brand stand out during events, campaigns, and corporate promotions. Designed for visibility, comfort, and style, our uniforms are perfect for trade shows, exhibitions, marketing events, and brand activations.",
      image: customImg,
      fullContent: "At Leuk Apparels, we create Custom Promotional Uniforms that help your brand stand out during events, campaigns, and corporate promotions. Designed for visibility, comfort, and style, our uniforms are perfect for trade shows, exhibitions, marketing events, and brand activations.\n\nOur range includes:\n• Branded T-shirts, polos, and jackets\n• Caps, aprons, and accessories\n• Event staff uniforms\n• Customizable options with logos, slogans, and brand colors\n\nEach garment is crafted from high-quality, durable fabrics that are comfortable to wear and easy to maintain. With precision printing and embroidery, your brand gets maximum impact while your team stays professional and cohesive.\n\nWith Leuk Apparels, your promotional uniforms don't just represent your brand — they amplify it with style and professionalism."
    },
    {
      title: "Industrial & Workwear",
      description: "We design and manufacture Industrial and Workwear uniforms that prioritize safety, durability, and comfort. Our uniforms are trusted by factories, manufacturing units, construction sites, and engineering companies for their superior quality and practical design.",
      image: workImg,
      fullContent: "At Leuk Apparels, we design and manufacture Industrial and Workwear uniforms that prioritize safety, durability, and comfort. Our uniforms are trusted by factories, manufacturing units, construction sites, and engineering companies for their superior quality and practical design.\n\nWe offer a wide range of workwear, including:\n• Overalls, coveralls, and boiler suits\n• Industrial jackets and trousers\n• Safety vests and high-visibility uniforms\n• Protective aprons and gloves\n\nEach garment is made from high-quality, heavy-duty fabrics that withstand tough working conditions while providing comfort and ease of movement. Our uniforms meet industry safety standards and can be customized with logos, branding, and specific functional features.\n\nWith Leuk Apparels, your workforce is equipped with uniforms that combine safety, functionality, and professionalism — designed to perform as hard as your team does."
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
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm flex-grow line-clamp-3">
                  {service.description}
                </p>
                <Button
                  onClick={() => setSelectedService(service)}
                  className="bg-transparent border border-accent text-accent hover:bg-accent hover:text-white px-6 py-2 rounded-none font-medium tracking-wide transition-colors mt-auto"
                >
                  VIEW MORE
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col md:flex-row max-h-[90vh] overflow-hidden">
              <div className="md:w-1/2 flex-shrink-0">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-64 md:h-full object-cover rounded-l-lg"
                />
              </div>
              <div className="md:w-1/2 flex flex-col min-h-0">
                <div className="p-6 pb-4 flex-shrink-0">
                  <h3 className="text-2xl font-bold text-foreground">
                    {selectedService.title}
                  </h3>
                </div>
                <div className="px-6 pb-6 overflow-y-auto flex-1 min-h-0">
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {selectedService.fullContent || selectedService.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
