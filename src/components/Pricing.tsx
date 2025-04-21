import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'For small businesses starting with AI',
      price: isAnnual ? 99 : 129,
      gradient: 'from-blue-600 to-cyan-600',
      features: [
        'Basic RAG implementation',
        'Up to 1,000 messages per month',
        'Web integration',
        'Standard documentation',
        'Email support',
      ],
      notIncluded: [
        'Advanced LLM models',
        'Custom knowledge base',
        'Multi-channel integration',
      ]
    },
    {
      name: 'Professional',
      description: 'For growing businesses with specific needs',
      price: isAnnual ? 249 : 299,
      gradient: 'from-indigo-600 to-purple-600',
      popular: true,
      features: [
        'Advanced RAG implementation',
        'Up to 10,000 messages per month',
        'Web & mobile integration',
        'Custom knowledge base',
        'Priority email & chat support',
        'User analytics dashboard',
      ],
      notIncluded: [
        'Enterprise LLM models',
        'Human handoff capabilities',
      ]
    },
    {
      name: 'Enterprise',
      description: 'For organizations with complex requirements',
      price: isAnnual ? 599 : 699,
      gradient: 'from-purple-600 to-pink-600',
      features: [
        'Enterprise RAG & LLM implementation',
        'Unlimited messages',
        'Multi-channel integration',
        'Advanced analytics & reporting',
        'Dedicated account manager',
        'Custom training & onboarding',
        'Human handoff capabilities',
        'SLA guarantees',
      ],
      notIncluded: []
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-900/50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-indigo-900/10 to-gray-900/0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Pricing</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Choose the plan that works best for your business needs.
            All plans include our core AI technologies with different levels of customization.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${isAnnual ? 'text-indigo-400 font-medium' : 'text-gray-400'}`}>
              Annual Billing <span className="text-green-400 text-sm font-medium">(Save 20%)</span>
            </span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-indigo-600' : 'bg-gray-700'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${!isAnnual ? 'text-indigo-400 font-medium' : 'text-gray-400'}`}>
              Monthly Billing
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] ${
                tier.popular 
                  ? 'shadow-xl scale-105 border-2 border-indigo-500 z-10' 
                  : 'shadow-lg border border-gray-800'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 inset-x-0 flex justify-center">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold py-1 px-4 rounded-b-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`p-1 bg-gradient-to-r ${tier.gradient}`}>
                <div className="bg-dark-800/95 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{tier.name}</h3>
                  <p className="text-gray-400 mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${tier.price}</span>
                    <span className="text-gray-400 ml-1">/month</span>
                  </div>
                  
                  <button 
                    className={`w-full py-3 mb-6 rounded-lg font-medium transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white' 
                        : 'bg-dark-700 hover:bg-dark-600 text-white border border-gray-700 hover:border-indigo-500'
                    }`}
                  >
                    Get Started
                  </button>
                  
                  <div className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check size={18} className="text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                    
                    {tier.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-start text-gray-500">
                        <span className="w-[18px] mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">Need a Custom Solution?</h3>
          <p className="text-gray-300 mb-6">
            Contact us for a tailored chatbot solution designed specifically for your unique business requirements.
          </p>
          <button className="px-6 py-3 bg-dark-800 border-2 border-indigo-500 text-indigo-400 hover:bg-dark-700 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            Contact for Custom Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;