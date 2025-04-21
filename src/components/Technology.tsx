import React from 'react';
import { Database, Server, BrainCircuit, Bot, BarChart, ScanSearch, History, Shield } from 'lucide-react';

const Technology: React.FC = () => {
  const technologies = [
    {
      icon: <BrainCircuit size={28} className="text-indigo-400" />,
      title: 'Large Language Models',
      description: 'Utilizing state-of-the-art LLMs to enable sophisticated language understanding and generation capabilities.',
      gradient: 'from-indigo-600/30 to-purple-600/30',
      border: 'hover:border-indigo-500/50'
    },
    {
      icon: <ScanSearch size={28} className="text-purple-400" />,
      title: 'Retrieval-Augmented Generation',
      description: 'Combining search and generative AI to produce accurate, factual, and contextually relevant responses.',
      gradient: 'from-purple-600/30 to-pink-600/30',
      border: 'hover:border-purple-500/50'
    },
    {
      icon: <Database size={28} className="text-pink-400" />,
      title: 'Knowledge Base Integration',
      description: 'Connecting your chatbot to existing documentation, FAQs, and knowledge repositories.',
      gradient: 'from-pink-600/30 to-red-600/30',
      border: 'hover:border-pink-500/50'
    },
    {
      icon: <Bot size={28} className="text-blue-400" />,
      title: 'Conversational Design',
      description: 'Creating natural dialog flows that feel intuitive and helpful to your users.',
      gradient: 'from-blue-600/30 to-cyan-600/30',
      border: 'hover:border-blue-500/50'
    },
    {
      icon: <BarChart size={28} className="text-cyan-400" />,
      title: 'Analytics & Insights',
      description: 'Understanding user behavior and continuously improving your chatbot performance.',
      gradient: 'from-cyan-600/30 to-teal-600/30',
      border: 'hover:border-cyan-500/50'
    },
    {
      icon: <Server size={28} className="text-teal-400" />,
      title: 'Scalable Infrastructure',
      description: 'Building on robust cloud architecture that grows with your business needs.',
      gradient: 'from-teal-600/30 to-emerald-600/30',
      border: 'hover:border-teal-500/50'
    },
    {
      icon: <History size={28} className="text-emerald-400" />,
      title: 'Contextual Memory',
      description: 'Maintaining conversation context for more natural, helpful interactions.',
      gradient: 'from-emerald-600/30 to-green-600/30',
      border: 'hover:border-emerald-500/50'
    },
    {
      icon: <Shield size={28} className="text-green-400" />,
      title: 'Security & Compliance',
      description: 'Implementing robust safeguards to protect sensitive data and ensure compliance.',
      gradient: 'from-green-600/30 to-lime-600/30',
      border: 'hover:border-green-500/50'
    },
  ];

  return (
    <section id="technology" className="py-16 md:py-24 bg-gray-900/50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-purple-900/10 to-gray-900/0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cutting-Edge <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Technology Stack</span>
          </h2>
          <p className="text-lg text-gray-300">
            Our chatbot solutions leverage the most advanced AI technologies available today,
            combining them in innovative ways to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className={`bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-800 ${tech.border}`}
            >
              <div className={`p-3 rounded-lg bg-gradient-to-br ${tech.gradient} backdrop-blur-sm inline-block mb-4`}>
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{tech.title}</h3>
              <p className="text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Ready to Transform Your Customer Interactions?
              </h3>
              <p className="text-gray-300 max-w-xl">
                Discover how our cutting-edge AI chatbot solutions can elevate your business communication.
              </p>
            </div>
            <button className="whitespace-nowrap px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;