import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import GradientText from "../Animated/GradiantText";

const Footer = () => {
  return (
    <footer className="w-full bg-[#121314] font-button">
      {/* Main Footer Content */}
      <div className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* First Part - Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold font-logo text-white mb-4 flex items-center gap-2">
                  <img
                    src="/Images/Zipsar_trans.svg"
                    alt="Zipsar_logo"
                    className="w-[40px] h-[40px] object-fill"
                  />
                  Zipsar
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Transforming ideas into digital reality with advanced
                  technology solutions.
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-110 group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Second Part - Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    App Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    DevOps Solution
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    AI Integration
                  </a>
                </li>
              </ul>
            </div>

            {/* Third Part - Company */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Fourth Part - Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#a556fb] flex-shrink-0 mt-0.5" />
                  <div className="text-gray-400 text-sm leading-relaxed">
                    <p>KGISL Campus</p>
                    <p>Sarvanampatti, Coimbatore - 035</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#a556fb] flex-shrink-0" />
                  <a
                    href="mailto:support@zipsar.com"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    support@zipsar.com
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#a556fb] flex-shrink-0" />
                  <a
                    href="tel:+919786897669"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    +91 9786897669
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="px-6 md:px-12 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Zipsar. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
