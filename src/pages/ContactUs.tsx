import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building, MapPin, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/contactus.jpg";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('./contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input 
                    type="text" 
                    name="name"
                    placeholder="Name"
                    className="w-full"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="Email"
                    className="w-full"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <Input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone"
                    className="w-full"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea 
                    name="message"
                    placeholder="Message"
                    className="w-full h-32 resize-none"
                    value={formData.message}
                    onChange={handleChange}
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