import React from 'react';
import { ArrowRight, Brain, Globe2, Database } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 pt-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            <span className="block">Transforming Business</span>
            <span className="block text-secondary-400">Through AI Innovation</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Empowering enterprises with cutting-edge AI solutions for smarter decision-making and enhanced operational efficiency.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary-600 hover:bg-secondary-700 transition-colors duration-200"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: 'Advanced AI Solutions',
              description: 'Cutting-edge artificial intelligence solutions tailored for your business needs.'
            },
            {
              icon: Globe2,
              title: 'Global Presence',
              description: 'Serving clients worldwide with localized expertise and global insights.'
            },
            {
              icon: Database,
              title: 'Data-Driven Insights',
              description: 'Transform your raw data into actionable business intelligence.'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-600/20 to-primary-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="relative">
                <feature.icon className="h-12 w-12 text-secondary-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;