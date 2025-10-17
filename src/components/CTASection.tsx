import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <p className="text-sm font-normal mb-2 tracking-widest uppercase text-muted-foreground">GET YOUR</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          Fashion Line Started!
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed text-muted-foreground">
          To learn more about how we can support your clothing manufacturing, 
          apparel development, and fashion design businesses, get in touch with us right away.
        </p>
        <p className="text-base mb-8 text-muted-foreground">
          Are you willing to move to the next stage?
        </p>
        <Button 
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-base px-8 py-6"
        >
          Schedule a Consultation
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
