import { Facebook, Instagram, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/logo.png";

const Footer = () => {
  const pages = [
    { name: "Home", href: "/" },
    { name: "Who we Are", href: "/who-we-are" },
    { name: "Uniform", href: "/uniform" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact-us" }
  ];
  
  const productCategories = [
    "T-Shirts", 
    "Track Pants",
    "Baby Clothing",
    "Hoodies",
    "Sweater"
  ];
  
  const serviceCategories = [
    "Cut & Sew Clothing",
    "Screen Printing", 
    "Sublimation Printing",
    "Embroidery",
    "Labeling & Packaging"
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
                <p className="font-semibold mb-1">SALES OFFICES</p>
                <p className="mb-2">📍TC-6/1389, PTP Nagar, Trivandrum, Kerala, India - 698052.</p>
                <p>📍Master's Villa, Gandhinagar, Mudiyoorkara, Kottayam-686008.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">FACTORY ADDRESS</p>
                <p>📍60 Pannai Nagar, Perundurai Road, Erode, Tamil Nadu, India - 638052</p>
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
                  <Link to={page.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              {productCategories.map((category, index) => {
                const categoryPath = `/products/${category.toLowerCase().replace(/\s+/g, '-')}`;
                return (
                  <li key={index}>
                    <Link to={categoryPath} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {category}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {serviceCategories.map((category, index) => {
                const categoryPath = `/services/${category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`;
                return (
                  <li key={index}>
                    <Link to={categoryPath} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {category}
                    </Link>
                  </li>
                );
              })}
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
