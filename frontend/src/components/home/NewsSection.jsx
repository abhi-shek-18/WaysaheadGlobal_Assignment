import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    title: 'WaysAhead Global Launches Revolutionary AI Shop Assistant',
    date: '2024-03-15',
    category: 'Product Launch',
    description: 'Transforming retail experiences with advanced AI technology.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Expanding Our Global Presence: New Office in Singapore',
    date: '2024-03-10',
    category: 'Company News',
    description: 'Strengthening our presence in the Asia-Pacific region.',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'WaysAhead Global Partners with Leading Retail Chain',
    date: '2024-03-05',
    category: 'Partnership',
    description: 'Implementing AI solutions across 500+ stores nationwide.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const NewsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <p className="mt-2 text-lg text-gray-600">Stay updated with our latest developments</p>
          </div>
          <a
            href="/news"
            className="hidden sm:inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            View all news
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary-100 text-secondary-800">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={`/news/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <a
            href="/news"
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            View all news
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;