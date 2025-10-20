const AboutSections = () => {
  const sections = [
    {
      title: "Become the Most Recognized Clothing Manufacturer in the INDIA",
      content: "Leuk apparels custom clothing manufacturer INDIA helps you to build your brand today. Give us a brief of what you're looking for, and we'll make it happen with low minimums and short lead times. To ensure that your apparels manufacturer can compete with leading brands in the fashion business without sacrificing quality, our knowledgeable and experienced manufacturing teams put in a lot of effort. Leuk apparels high-quality clothing manufacturer is your one-stop shop for all types of fashion apparels, from designing to production & printing.",
    },
    {
      title: "Leuk Apparels Clothing Manufacturer INDIA: Screen Printing, Embroidery, Cut & Sew",
      content: "Leuk Apparels Custom apparels manufacturer offers service for both small and large fashion brands and companies. We are a one-stop shop where you can get any type of bespoke clothing you need. We provide quality clothing manufacturer services in the INDIA to assist building designers in fast realizing their clothing line ambitions and converting their innovation and entrepreneurship into tangible revenues.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center md:text-justify">
                {section.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg text-justify">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSections;
