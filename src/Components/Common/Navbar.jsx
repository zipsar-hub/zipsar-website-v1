import { useState, useEffect } from "react";
import ShinyText from "../Animated/ShinyText";
import { Link } from "react-scroll";

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose, activeSection }) => {
  const handleMenuItemClick = () => {
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = ["Home", "Service", "About", "Contact"];

  return (
    <div
      className={`fixed inset-0 bg-black/90 backdrop-blur-md z-40 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-white/10 backdrop-blur-lg rounded-2xl p-6 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-10"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="flex flex-col gap-4 text-center font-button">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer py-3 px-4 rounded-lg transition-colors ${
                activeSection === item
                  ? "bg-white/20 text-white font-semibold"
                  : "hover:bg-white/10"
              }`}
              onClick={handleMenuItemClick}
            >
              <Link to={item} smooth>
                {item}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <button
              className="w-full px-3 py-2 border border-white/50 rounded-full cursor-pointer hover:bg-white/10 transition-colors"
              onClick={onClose}
            >
              <ShinyText
                text={"Get in Touch"}
                disabled={false}
                speed={5}
                className="font-semibold font-button"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const menuItems = ["Home", "Service", "About", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Check which section is currently in view
      const sections = menuItems
        .map((item) => document.getElementById(item))
        .filter(Boolean);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();

        // Consider a section active if it's within the top 50% of the viewport
        if (rect.top <= window.innerHeight * 0.5) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Original Navbar */}
      <div
        className={`w-full h-[80px] flex items-center justify-center transition-transform duration-500 ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="w-[80%] flex items-center justify-between border-b border-white/50 h-[100%]">
          <h1 className="text-3xl font-bold font-logo cursor-pointer">
            Zipsar
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-7 font-button">
            {menuItems.map((item) => (
              <li
                key={item}
                className={`cursor-pointer transition-colors duration-200 ${
                  activeSection === item
                    ? "text-white font-semibold border-b-2 border-white/70 pb-1"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <Link to={item} smooth>
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <button className="hidden md:block px-3 py-2 border border-white/50 rounded-full cursor-pointer hover:bg-white/10 transition-colors">
            <ShinyText
              text={"Get in Touch"}
              disabled={false}
              speed={5}
              className="font-semibold font-button"
            />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center items-center focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`w-full h-0.5 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Fixed Scrolled Navbar */}
      <div
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled
            ? "translate-y-4 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="w-[80vw] bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-logo cursor-pointer">Zipsar</h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-7 font-button">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className={`cursor-pointer transition-colors duration-200 relative ${
                    activeSection === item
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <Link to={item} smooth>
                    {item}
                  </Link>
                  {activeSection === item && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop Button */}
            <button className="hidden md:block px-3 py-2 border bg-black border-white/50 rounded-full cursor-pointer hover:bg-gray-900 transition-colors">
              <ShinyText
                text={"Get in Touch"}
                disabled={false}
                speed={5}
                className="font-semibold font-button"
              />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center items-center focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`w-full h-0.5 bg-white transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white transition-transform duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        activeSection={activeSection}
      />
    </>
  );
};

export default Navbar;
