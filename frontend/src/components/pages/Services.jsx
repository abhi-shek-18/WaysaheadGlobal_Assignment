import React from 'react';
import { ShoppingCart, Map, Store, TrendingUp, Video, Notebook as Robot, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: 'AI Shop Assist',
    description: 'Revolutionize retail with AI-powered shopping assistance that enhances customer experience and drives sales.',
    features: [
      'Real-time product recommendations',
      'Virtual shopping assistance',
      'Personalized shopping experience',
      'Customer behavior analytics'
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Map,
    title: 'Geo-Spatial Analytics',
    description: 'Leverage location-based insights for strategic decision making and market analysis.',
    features: [
      'Location intelligence',
      'Market penetration analysis',
      'Territory optimization',
      'Site selection analytics'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Store,
    title: 'In-Store Analytics',
    description: 'Optimize store performance with real-time analytics and customer insights.',
    features: [
      'Foot traffic analysis',
      'Heat mapping',
      'Queue management',
      'Store layout optimization'
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: TrendingUp,
    title: 'SCM Analytics',
    description: 'Transform your supply chain with advanced analytics and AI-driven insights.',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier analytics'
    ],
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Video,
    title: 'Video Analytics',
    description: 'Gain valuable insights from video data with our advanced analytics solutions.',
    features: [
      'Object detection',
      'Behavior analysis',
      'Security monitoring',
      'Customer journey tracking'
    ],
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Robot,
    title: 'Robotics',
    description: 'Automate operations with our cutting-edge robotics solutions.',
    features: [
      'Warehouse automation',
      'Quality control',
      'Assembly line robotics',
      'Collaborative robots'
    ],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-blue-900 py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Comprehensive AI solutions tailored to transform your business operations
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-12 w-12 text-blue-600 mr-4" />
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-8">{service.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <ArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;