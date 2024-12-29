import React from 'react';
import { Facebook, Twitter, Instagram, Heart, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-wider">
              One<span className="text-yellow-400">Komiks</span>
            </div>
            <p className="text-white/80 text-sm">
              Discover and read the best Filipino comics. Join our community of creators and readers!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-white/80 hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-white/80 hover:text-yellow-400 transition-colors">Contact</a></li>
              <li><a href="/privacy" className="text-white/80 hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-white/80 hover:text-yellow-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="/genre/action" className="text-white/80 hover:text-yellow-400 transition-colors">Action</a></li>
              <li><a href="/genre/romance" className="text-white/80 hover:text-yellow-400 transition-colors">Romance</a></li>
              <li><a href="/genre/comedy" className="text-white/80 hover:text-yellow-400 transition-colors">Comedy</a></li>
              <li><a href="/genre/drama" className="text-white/80 hover:text-yellow-400 transition-colors">Drama</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-white/80 text-sm mb-4">Subscribe to our newsletter for updates and new releases.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-full bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-grow"
              />
              <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-r-full hover:bg-yellow-300 transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} OneKomiks. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-yellow-400" />
              <span>for Filipino Comics</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;