import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Who we Are", href: "/who-we-are" },
    { name: "Our Products", href: "#", hasDropdown: true },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const productCategories = [
    "Hoodies",
    "Sweater",
    "Track Pants",
    "T-Shirts"
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
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    className={`relative flex items-center text-sm font-normal transition-colors duration-300 after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 ${
                      location.pathname.startsWith('/products/')
                        ? 'text-accent after:w-full'
                        : 'text-white hover:text-accent after:w-0 hover:after:w-full'
                    }`}
                    onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  {productsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-4 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      {productCategories.map((category) => {
                        const categoryPath = `/products/${category.toLowerCase().replace(/\s+/g, '-')}`;
                        const isActive = location.pathname === categoryPath;
                        return (
                          <Link
                            key={category}
                            to={categoryPath}
                            className={`block px-4 py-2 text-sm transition-colors rounded-md ${
                              isActive
                                ? 'bg-accent text-accent-foreground'
                                : 'text-gray-700 hover:bg-gray-100 hover:text-accent'
                            }`}
                            onClick={() => setProductsDropdownOpen(false)}
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
                  className={`relative text-sm font-normal transition-colors duration-300 after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 ${
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
                  className="relative text-sm font-normal text-white hover:text-accent transition-colors duration-300 after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Right side - Search */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 hidden">
              <Search className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-primary-foreground/10"
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
                  <div className={`text-sm font-normal py-2 ${
                    location.pathname.startsWith('/products/')
                      ? 'text-accent'
                      : 'text-white'
                  }`}>
                    {item.name}
                  </div>
                  <div className="ml-4 space-y-2">
                    {productCategories.map((category) => {
                      const categoryPath = `/products/${category.toLowerCase().replace(/\s+/g, '-')}`;
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
