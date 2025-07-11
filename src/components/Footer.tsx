
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-artistic rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg"></span>
              </div>
              <span className="font-display font-bold text-xl">
                Garside Enterprise
              </span>
            </div>
            <p className="text-white/70 mb-4">
              Premium art supplies and materials for creators who demand excellence. 
              Crafting possibilities since 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-terracotta transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/70 hover:text-terracotta transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-terracotta transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-terracotta transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/gallery?category=Clay & Materials" className="text-white/70 hover:text-terracotta transition-colors">
                  Clay & Materials
                </Link>
              </li>
              <li>
                <Link to="/gallery?category=Tools & Equipment" className="text-white/70 hover:text-terracotta transition-colors">
                  Sculpting Tools
                </Link>
              </li>
              <li>
                <Link to="/gallery?category=Equipment" className="text-white/70 hover:text-terracotta transition-colors">
                  Pottery Equipment
                </Link>
              </li>
              <li>
                <Link to="/gallery?category=Glazes & Finishes" className="text-white/70 hover:text-terracotta transition-colors">
                  Glazes & Finishes
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © 2024 Garside Enterprise. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-white/70 hover:text-terracotta transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-white/70 hover:text-terracotta transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/shipping-info" className="text-white/70 hover:text-terracotta transition-colors text-sm">
              Shipping Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
