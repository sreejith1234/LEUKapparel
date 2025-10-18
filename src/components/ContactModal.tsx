import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";

const ContactModal = () => {
  const { isOpen, closeModal } = useContactModal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    closeModal();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-center mb-6 text-accent">CONTACT US</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full"
          />
          
          <Input
            type="email"
            name="email"
            placeholder="Email address *"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full"
          />
          
          <Input
            type="tel"
            name="phone"
            placeholder="Phone number *"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full"
          />
          
          <Textarea
            name="message"
            placeholder="Message *"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full h-24 resize-none"
          />
          
          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 rounded-md"
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;