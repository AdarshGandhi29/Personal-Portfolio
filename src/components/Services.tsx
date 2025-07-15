
import React from 'react';
import { Globe, Brain, BarChart3, Smartphone, Database, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Full-Stack Web App Development',
      description: 'Full-stack web applications using React, Node.js, and modern frameworks',
      features: ['React & Node.js', 'Performance Optimization', 'SEO Friendly']
    },
    {
      icon: Brain,
      title: 'Machine Learning & AI Solutions',
      description: 'Intelligent applications powered by machine learning and AI',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']
    },
    {
      icon: BarChart3,
      title: 'Data Analysis & Visualization',
      description: 'Transform your data into actionable insights and visualizations',
      features: ['Data Visualization', 'Statistical Analysis', 'Business Intelligence']
    },
    {
      icon: Smartphone,
      title: 'AI Chatbot Development',
      description: 'Build intelligent AI chatbots for websites, healthcare, and customer support.',
      features: ['NLP & LLMs', 'Voice & Text Interface', 'Multimodal Interaction']
    },
    {
      icon: Database,
      title: 'Exploratory Data Analysis',
      description: 'Uncover patterns, anomalies, and insights through deep data exploration.',
      features: ['Outlier Detection', 'Summary Statistics', 'Visual Analysis']
    },
    {
      icon: Palette,
      title: 'Data Science Solutions',
      description: 'Deliver complete data science pipelines from raw data to deployment.',
      features: ['Data Cleaning', 'Model Training', 'Deployment']
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-vibrant mb-4">Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="glass-card glass-card-hover p-8 rounded-2xl group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
