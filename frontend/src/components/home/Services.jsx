import React from 'react';
import { ShoppingCart, Map, Store, TrendingUp, Video, Notebook as Robot } from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: 'AI Shop Assist',
    description: 'Intelligent shopping assistance powered by AI for enhanced customer experience.',
    href: '/services/ai-shop-assist'
  },
  {
    icon: Map,
    title: 'Geo-Spatial Analytics',
    description: 'Location-based insights for strategic decision making and market analysis.',
    href: '/services/geo-spatial-analytics'
  },
  {
    icon: Store,
    title: 'In-Store Analytics',
    description: 'Real-time retail analytics for optimizing store performance and customer satisfaction.',
    href: '/services/in-store-analytics'
  },
  {
    icon: TrendingUp,
    title: 'SCM Analytics',
    description: 'Supply chain optimization through advanced analytics and AI.',
    href: '/services/scm-analytics'
  },
  {
    icon: Video,
    title: 'Video Analytics',
    description: 'Intelligent video analysis for security and business insights.',
    href: '/services/video-analytics'
  },
  {
    icon: Robot,
    title: 'Robotics',
    description: 'Advanced robotics solutions for automation and efficiency.',
    href: '/services/robotics'
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-secondary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="relative">
                <service.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <div className="mt-4 flex items-center text-primary-600">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg
                    className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;