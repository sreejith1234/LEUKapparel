const AboutSections = () => {
  const sections = [
    {
      title: "Design Something Unique With Us",
      content: "Want to avoid dealing with design and sourcing hassles? We add your labels, logos, and more to our blanks to make them unique.",
    },
    {
      title: "Become the Most Recognized Clothing Manufacturer in the INDIA",
      content: "Leuk apparels custom clothing manufacturer INDIA helps you to build your brand today. Give us a brief of what you're looking for, and we'll make it happen with low minimums and short lead times. To ensure that your apparels manufacturer can compete with leading brands in the fashion business without sacrificing quality, our knowledgeable and experienced manufacturing teams put in a lot of effort. Leuk apparels high-quality clothing manufacturer is your one-stop shop for all types of fashion apparels, from designing to production & printing.",
    },
    {
      title: "Leuk Apparels Clothing Manufacturer INDIA: Screen Printing, Embroidery, Cut & Sew",
      content: "Leuk Apparels Custom apparels manufacturer offers service for both small and large fashion brands and companies. We are a one-stop shop where you can get any type of bespoke clothing you need. We provide quality clothing manufacturer services in the INDIA to assist building designers in fast realizing their clothing line ambitions and converting their innovation and entrepreneurship into tangible revenues.",
    },
    {
      title: "Budget Friendly Apparels Partner",
      content: "We provide enticing pricing tiers and incentives for greater orders. You'll be able to benefit from higher profits as your brand and company grow along with us. Because we have a complete garment production line and extensive knowledge of private-label clothing manufacturing. Our experts assess each element and adornment needed to provide your final product to produce chic and current custom apparels. You have total control and visibility over the entire process with our vertically integrated production process.",
    },
    {
      title: "Simplify Your Brand Building Process with our Clothing Knowledge and Experience",
      content: "We are among the good clothing manufacturers of customized products, providing a flawless user experience and unrestricted assistance all along the way. We can create practically any kind of personalized clothing because we are a reputable apparels manufacturer. You will be assisted at every step of the way by our production staff, who will also give you regular updates. Because of this, we can give you exactly what you need in the quantity you want. By doing so, you can avoid working with third parties and purchase your whole custom clothing collection.",
    },
    {
      title: "Best Custom Apparels Manufacturer with Minimum MOQ",
      content: "Finding a Custom clothes manufacturing partner is essential to your brand's development. However, if it doesn't offer you the caliber you require, it won't be successful in the long run. We provide a high quality of comfort and a wide range of services to our clients. We offer 50 units of each design as a clothing manufacturer small quantity order.",
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
