import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import privateLabelImg from "@/assets/private-label.jpg";
import cutSewImg from "@/assets/cut-sew.jpg";
import embroideryImg from "@/assets/embroidery.jpg";
import tshirtImg from "@/assets/tshirt.jpg";
import hoodieImg from "@/assets/hoodie.jpg";
import sportswearImg from "@/assets/sportswear.jpg";
import sweatshirtImg from "@/assets/sweatshirt.jpg";
import babyClothingImg from "@/assets/baby-clothing.jpg";
import uniformImg from "@/assets/uniform.jpg";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Private Label Clothing",
      description: "Leuk Apparels is a quality-driven private-label clothing manufacturer that serves the needs of well-known companies and a brand-new clothing line. In the high need for private labels, we are here by your side as the finest option to stand out in the congested apparels industry.",
      image: privateLabelImg,
      link: "#",
    },
    {
      title: "Cut & Sew Manufacturer",
      description: "You have access to the best cut-and-sew apparels manufacturer. You can specify how your intended article is to be created from scratch. Everything is under one roof, from fabric selection to the finishing touches on the finished project.",
      image: cutSewImg,
      link: "#",
    },
    {
      title: "Custom Embroidery Services",
      description: "With our cutting-edge custom embroidery procedures and techniques, elevate your brand. We provide you with a quick and dependable facility that offers high-quality goods, including embroidered digitalization services and custom apparels manufacturing.",
      image: embroideryImg,
      link: "#",
    },
    {
      title: "T-shirt Manufacturer",
      description: "If you are looking for a reputable, high-quality clothing manufacturer, you are in the right place. We carefully consider the needs of the customer, which enables us to produce premium, especially custom T-shirt that meets their requirements.",
      image: tshirtImg,
      link: "#",
    },
    {
      title: "Hoodie Manufacturers",
      description: "Leuk Apparels uses a variety of custom clothing, you can create your very own brand of a customized hoodie. Showcase incredibly high-quality custom-made hoodies that satisfy the needs and preferences of your target markets to make a powerful message for your company.",
      image: hoodieImg,
      link: "#",
    },
    {
      title: "Sportswear Manufacturers",
      description: "Build your custom fitness apparels manufacturer brand with Leuk Apparels. Send us any reference drawings, pictures, and design files, and the rest is up to us. We will help you every step of the way, from sampling to manufacturing.",
      image: sportswearImg,
      link: "#",
    },
    {
      title: "Custom Sweatshirt Maker",
      description: "If you choose us as your custom sweatshirt manufacturer, we can offer you clothing in a variety of styles, colors, and sizes for adults, children, and infants. You can choose from a wide variety of customization options for your personalized sweatshirts at our facilities.",
      image: sweatshirtImg,
      link: "#",
    },
    {
      title: "Baby Clothing Manufacturers",
      description: "Do you want to create a children's custom clothes brand but are unsure of where to begin? Our team and services can accommodate your needs. Work with us and create custom kids' clothing, and more!",
      image: babyClothingImg,
      link: "#",
    },
    {
      title: "Uniform Manufacturers",
      description: "Use all the customization choices we provide to create your very own line of business uniforms that will stand out and make a powerful statement for your brand. Invest in corporate attire that stands out.",
      image: uniformImg,
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Leuk Clothing Manufacturer Services, We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You get everything you need to start your fashion line, corporate business, and accessory.
            Let's be distinctive, with Leuk apparels.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <a
                    href={service.link}
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm text-justify">
                  {service.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  GET A QUOTE
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
