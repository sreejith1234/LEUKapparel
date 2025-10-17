import { Facebook, Instagram, Twitter, Github } from "lucide-react";

const Footer = () => {
  const pages = ["Home", "About", "FAQ", "Privacy Policy", "Terms", "Contact Us"];
  
  const products1 = ["T-shirts", "Hoodies", "Sweatshirts", "Sportswear", "Jeans", "Baby Clothing"];
  
  const products2 = ["Leather Goods", "Neck Gaiter", "Socks", "Swimwear", "Uniforms"];
  
  const services = [
    "Screen Printing", "Sublimation Printing", "Custom Embroidery", "Cut and Sew", "Private Label", "Clothing Packaging"
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        {/* Logo */}
        <div className="mb-8">
          <div className="text-white text-2xl font-bold tracking-tight">
            LEUK<span className="font-light">apparel</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Contact Us */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p>No. 123, Anna Salai</p>
              <p>Chennai, Tamil Nadu 600002</p>
              <p className="mt-3">
                Tel: <a href="tel:+914412345678" className="hover:text-white transition-colors">+91 44 1234 5678</a>
              </p>
              <p>
                Email: <a href="mailto:sales@leukapparel.com" className="text-blue-400 hover:text-white transition-colors">sales@leukapparel.com</a>
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
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products 1 */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              {products1.map((product, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products 2 */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              {products2.map((product, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    {product}
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
            <span>© Copyright © 2025 Leuk Apparel. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
