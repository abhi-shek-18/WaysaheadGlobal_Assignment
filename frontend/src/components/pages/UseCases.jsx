import React from 'react';
import { Building2, ShoppingBag, Utensils, Car, Tv, ArrowRight } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Fintech',
    description: 'Transforming financial services with AI-powered solutions.',
    cases: [
      {
        title: 'AI-Powered Risk Assessment',
        description: 'Implemented machine learning models for credit risk evaluation, reducing default rates by 35%.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    icon: ShoppingBag,
    title: 'Retail',
    description: 'Revolutionizing shopping experiences through intelligent automation.',
    cases: [
      {
        title: 'Smart Inventory Management',
        description: 'Deployed AI-driven inventory optimization system, reducing stockouts by 45%.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    icon: Utensils,
    title: 'F&B',
    description: 'Enhancing food service operations with smart solutions.',
    cases: [
      {
        title: 'Demand Forecasting System',
        description: 'Implemented AI forecasting, reducing food waste by 30% and improving inventory turnover.',
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    icon: Car,
    title: 'Mobility',
    description: 'Advancing transportation with intelligent systems.',
    cases: [
      {
        title: 'Fleet Optimization Platform',
        description: 'Developed AI-powered route optimization, reducing fuel consumption by 25%.',
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    icon: Tv,
    title: 'Entertainment',
    description: 'Creating immersive experiences through AI innovation.',
    cases: [
      {
        title: 'Personalized Content Delivery',
        description: 'Built recommendation engine increasing user engagement by 40%.',
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

const UseCases = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-blue-900 py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Industry Use Cases
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Discover how our AI solutions are transforming industries
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {industries.map((industry, index) => (
            <div key={index} className="mb-24 last:mb-0">
              <div className="flex items-center mb-8">
                <industry.icon className="h-12 w-12 text-blue-600 mr-4" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{industry.title}</h2>
                  <p className="text-xl text-gray-600 mt-2">{industry.description}</p>
                </div>
              </div>

              {industry.cases.map((case_, caseIndex) => (
                <div key={caseIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="order-2 lg:order-1 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{case_.title}</h3>
                      <p className="text-gray-600 mb-6">{case_.description}</p>
                      <div className="space-y-4">
                        <div className="flex items-center text-gray-700">
                          <ArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                          <span>Improved operational efficiency</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <ArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                          <span>Reduced costs</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <ArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                          <span>Enhanced customer satisfaction</span>
                        </div>
                      </div>
                      <button className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                    <div className="order-1 lg:order-2">
                      <img
                        src={case_.image}
                        alt={case_.title}
                        className="w-full h-96 object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UseCases;