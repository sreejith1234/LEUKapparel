import { Facebook, Instagram, Twitter, Github } from "lucide-react";
import heroImage from "@/assets/logo.png";

const Footer = () => {
  const pages = [
    { name: "Home", href: "/" },
    { name: "Who we Are", href: "/who-we-are" },
    { name: "Services", href: "#" },
    { name: "Contact Us", href: "/contact-us" }
  ];
  
  const products1 = [
    { name: "Hoodies", href: "/products/hoodies" },
    { name: "Sweater", href: "/products/sweater" },
    { name: "Track Pants", href: "/products/track-pants" },
    { name: "T-Shirts", href: "/products/t-shirts" }
  ];
  
  const services = [
    "Screen Printing", "Sublimation Printing", "Custom Embroidery", "Cut and Sew"
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        {/* Logo */}
        <div className="mb-8">
          <div className="flex items-center text-white text-2xl font-bold tracking-tight">
            <img src={heroImage} alt="LEUKapparels Logo" className="h-8 w-8 mr-2" />
            LEUK<span className="font-light pl-1">apparels</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Contact Us */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4 text-sm text-slate-400 mb-4">
              <div>
                <p className="font-semibold mb-1">SALES OFFICE</p>
                <p>TC-6/1389, PTP Nagar, Trivandrum, Kerala, India - 698052</p>
              </div>
              <div>
                <p className="font-semibold mb-1">FACTORY ADDRESS</p>
                <p>60 Pannai Nagar, Perundurai Road, Erode, Tamil Nadu, India - 638052</p>
              </div>
            </div>
            <div className="text-sm text-slate-400">
              <p>
                Email: <a href="mailto:info@leukapparels.com" className="text-blue-400 hover:text-white transition-colors">info@leukapparels.com</a>
              </p>
              <p>
                Phone: <a href="tel:+918558030303" className="hover:text-white transition-colors">+91 8558030303</a>
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Pages</h3>
            <ul className="space-y-3">
              {pages.map((page, index) => (
                <li key={index}>
                  <a href={page.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              {products1.map((product, index) => (
                <li key={index}>
                  <a href={product.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 text-center">
          <div className="text-sm text-slate-400">
            <span>© Copyright © 2025 Leuk Apparels. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
