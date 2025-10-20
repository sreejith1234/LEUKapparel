import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building, MapPin, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/contactus.jpg";

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-[200px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-lg border shadow-sm">
              <h2 className="text-2xl font-bold text-accent mb-8">CONTACT INFO</h2>
              
              <div className="space-y-8">
                {/* Head Office */}
                <div className="flex items-start space-x-4">
                  <Building className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">SALES OFFICE</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      TC-6/1389, PTP Nagar<br />
                      Trivandrum, Kerala,<br />
                      India - 698052
                    </p>
                  </div>
                </div>

                {/* Factory Address */}
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">FACTORY ADDRESS</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      60 Pannai Nagar,<br />
                      Perundurai Road,<br />
                      Erode, Tamil Nadu, India - 638052
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">E-MAIL</h3>
                    <a href="mailto:info@leukapparels.com" className="text-gray-600 text-sm hover:text-orange-500 transition-colors">
                      info@leukapparels.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">PHONE</h3>
                    <a href="tel:+918558030303" className="text-gray-600 text-sm hover:text-orange-500 transition-colors">
                      (+91) 8558030303
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg border shadow-sm">
              <h2 className="text-2xl font-bold text-accent mb-8">SEND US A MESSAGE</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Name"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="Email"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="Phone"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Message"
                    className="w-full h-32 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 rounded-none font-medium"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;