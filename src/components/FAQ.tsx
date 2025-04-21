import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems = [
    {
      question: 'What is RAG in the context of chatbots?',
      answer: 'Retrieval-Augmented Generation (RAG) is an AI framework that combines information retrieval with text generation. In chatbots, RAG allows the AI to search through a knowledge base for relevant information and use that information to generate accurate, contextually appropriate responses. This approach significantly improves factuality and reduces hallucinations compared to standard language models.',
    },
    {
      question: 'How long does it take to implement a custom chatbot solution?',
      answer: 'The implementation timeline varies depending on the complexity of your requirements, the state of your existing knowledge base, and the level of customization needed. A basic implementation can be completed in 2-4 weeks, while more complex enterprise solutions may take 2-3 months. During our initial consultation, we\'ll provide a detailed timeline based on your specific needs.',
    },
    {
      question: 'Can your chatbots integrate with our existing systems?',
      answer: 'Yes, our chatbot solutions are designed to integrate seamlessly with a wide range of existing systems including CRMs, help desks, e-commerce platforms, and custom databases. We offer standard integrations with popular platforms like Salesforce, Zendesk, and Shopify, and can develop custom integrations for proprietary systems.',
    },
    {
      question: 'How do you handle data privacy and security?',
      answer: 'Data privacy and security are top priorities in our implementation. We follow industry best practices including data encryption, secure API connections, and compliance with regulations like GDPR and CCPA. For sensitive industries, we can implement solutions that keep your data within your infrastructure, ensuring maximum security and compliance.',
    },
    {
      question: 'What languages do your chatbots support?',
      answer: 'Our chatbot solutions support multiple languages, with full functionality in English and varying degrees of support for over 50 additional languages. The exact language capabilities depend on the underlying models and your specific requirements. We can help determine the best approach for your target languages during consultation.',
    },
    {
      question: 'How do you measure the success of a chatbot implementation?',
      answer: 'We establish clear KPIs at the beginning of each project, which may include metrics like resolution rate, customer satisfaction scores, response accuracy, conversation completion rates, and operational cost savings. Our analytics dashboard provides real-time visibility into these metrics, allowing continuous optimization of your chatbot\'s performance.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-900/50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-purple-900/10 to-gray-900/0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Questions</span>
          </h2>
          <p className="text-lg text-gray-300">
            Get answers to common questions about our AI chatbot solutions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="mb-4 border-b border-gray-800 pb-4 last:border-0"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full text-left font-semibold py-4 text-white hover:text-indigo-400 transition-colors"
              >
                <span className="text-lg">{item.question}</span>
                {openIndex === index ? (
                  <Minus size={20} className="text-indigo-400 flex-shrink-0" />
                ) : (
                  <Plus size={20} className="text-indigo-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-400 pb-4">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Still have questions? We're here to help.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;