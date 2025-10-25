import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ArrowRight, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/logo.png";
import whatsappIcon from "@/assets/WhatsApp.svg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Who we Are", href: "/who-we-are" },
    { name: "Our Products", href: "#", hasDropdown: true, type: "products" },
    { name: "Services", href: "#", hasDropdown: true, type: "services" },
    { name: "Uniform", href: "/uniform" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact-us" },
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
    <header className="sticky top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-md transition-shadow duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center text-2xl font-bold tracking-tight text-white">
              <img src={heroImage} alt="LEUKapparel Logo" className="h-8 w-8 mr-2" />
              LEUK <span className="font-normal pl-1">apparels</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.name} 
                  className="relative h-20 flex items-center" 
                  ref={item.type === 'products' ? dropdownRef : servicesDropdownRef}
                  onMouseEnter={() => {
                    setProductsDropdownOpen(false);
                    setServicesDropdownOpen(false);
                    item.type === 'products' ? setProductsDropdownOpen(true) : setServicesDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    hoverTimeoutRef.current = setTimeout(() => {
                      item.type === 'products' ? setProductsDropdownOpen(false) : setServicesDropdownOpen(false);
                    }, 150);
                  }}
                >
                  <div className="relative">
                    <button
                      className={`relative flex items-center text-sm font-normal transition-colors duration-300 after:absolute after:top-[-8px] after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 ${
                        (item.type === 'products' && location.pathname.startsWith('/products/')) || (item.type === 'services' && location.pathname.startsWith('/services/'))
                          ? 'text-accent after:w-full'
                          : 'text-white hover:text-accent after:w-0 hover:after:w-full'
                      }`}
                    >
                      {item.name}
                    </button>
                    {((item.type === 'products' && productsDropdownOpen) || (item.type === 'services' && servicesDropdownOpen)) && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-2 before:content-[''] before:absolute before:top-[-6px] before:left-4 before:w-0 before:h-0 before:border-l-[6px] before:border-r-[6px] before:border-b-[6px] before:border-l-transparent before:border-r-transparent before:border-b-white">
                      {(item.type === 'products' ? productCategories : serviceCategories).map((category) => {
                        const categoryPath = item.type === 'products' 
                          ? `/products/${category.toLowerCase().replace(/\s+/g, '-')}`
                          : `/services/${category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`;
                        const isActive = location.pathname === categoryPath;
                        return (
                          <Link
                            key={category}
                            to={categoryPath}
                            className={`group flex items-center px-2 py-2 text-sm transition-all duration-300 ${
                              isActive
                                ? 'text-accent'
                                : 'text-gray-700 hover:text-accent'
                            }`}
                            onClick={() => {
                              setProductsDropdownOpen(false);
                              setServicesDropdownOpen(false);
                            }}
                          >
                            <ArrowRight className={`w-4 h-4 mr-2 transition-all duration-300 ${
                              isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                            }`} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                            <span>{category}</span>
                          </Link>
                        );
                      })}
                      </div>
                    )}
                  </div>
                </div>
              ) : item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-sm font-normal transition-colors duration-300 after:absolute after:top-[-8px] after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 ${
                    location.pathname === item.href
                      ? 'text-accent after:w-full'
                      : 'text-white hover:text-accent after:w-0 hover:after:w-full'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-normal text-white hover:text-accent transition-colors duration-300 after:absolute after:top-[-8px] after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Right side - WhatsApp */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <a 
                href="https://wa.me/918558030303" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white w-10 h-10 rounded-full transition-colors duration-300"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
              </a>
              <span className="text-white text-xs mt-1">+91 8558030303</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-primary-foreground/10 rounded-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div key={item.name}>
                  <button 
                    className={`flex items-center justify-between w-full text-sm font-normal py-2 ${
                      (item.type === 'products' && location.pathname.startsWith('/products/')) || (item.type === 'services' && location.pathname.startsWith('/services/'))
                        ? 'text-accent'
                        : 'text-white'
                    }`}
                    onClick={() => {
                      if (item.type === 'products') {
                        setMobileProductsOpen(!mobileProductsOpen);
                        setMobileServicesOpen(false);
                      } else {
                        setMobileServicesOpen(!mobileServicesOpen);
                        setMobileProductsOpen(false);
                      }
                    }}
                  >
                    {item.name}
                    {item.type === 'products' ? (
                      mobileProductsOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
                    ) : (
                      mobileServicesOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  {((item.type === 'products' && mobileProductsOpen) || (item.type === 'services' && mobileServicesOpen)) && (
                    <div className="ml-4 space-y-2 mt-2">
                      {(item.type === 'products' ? productCategories : serviceCategories).map((category) => {
                        const categoryPath = item.type === 'products' 
                          ? `/products/${category.toLowerCase().replace(/\s+/g, '-')}`
                          : `/services/${category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`;
                        const isActive = location.pathname === categoryPath;
                        return (
                          <Link
                            key={category}
                            to={categoryPath}
                            className={`block text-sm py-1 transition-colors ${
                              isActive
                                ? 'text-accent'
                                : 'text-white/80 hover:text-accent'
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {category}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-normal transition-colors duration-300 py-2 ${
                    location.pathname === item.href
                      ? 'text-accent'
                      : 'text-white hover:text-accent'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-normal text-white hover:text-accent transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
            
            {/* Mobile WhatsApp */}
            <div className="flex items-center justify-center pt-4 border-t border-primary-foreground/10">
              <div className="flex flex-col items-center">
                <a 
                  href="https://wa.me/918558030303" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white w-10 h-10 rounded-full transition-colors duration-300"
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
                </a>
                <span className="text-white text-xs mt-1">+91 8558030303</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
