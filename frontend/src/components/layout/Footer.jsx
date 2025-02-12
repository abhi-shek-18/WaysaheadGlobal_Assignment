import React from 'react';
import { Brain, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold text-white">WaysAhead Global</span>
            </div>
            <p className="text-sm">
              Empowering enterprises with cutting-edge AI solutions for smarter decision-making.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-primary-400">About Us</a></li>
              <li><a href="/services" className="hover:text-primary-400">Services</a></li>
              <li><a href="/use-cases" className="hover:text-primary-400">Use Cases</a></li>
              <li><a href="/careers" className="hover:text-primary-400">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/ai-shop-assist" className="hover:text-primary-400">AI Shop Assist</a></li>
              <li><a href="/services/geo-spatial-analytics" className="hover:text-primary-400">Geo-Spatial Analytics</a></li>
              <li><a href="/services/in-store-analytics" className="hover:text-primary-400">In-Store Analytics</a></li>
              <li><a href="/services/video-analytics" className="hover:text-primary-400">Video Analytics</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary-400" />
                <span>contact@waysahead.global</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span>123 Innovation Drive, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} WaysAhead Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;