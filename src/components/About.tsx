import React from 'react';
import { Award, Users, Code, MessageSquare } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-900/50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-indigo-900/10 to-gray-900/0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image/Illustration side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AI Developer working on chatbot" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/40 to-purple-600/40"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-900/30 rounded-lg z-0 animate-float"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-900/30 rounded-lg z-0 animate-float animation-delay-2000"></div>
          </div>
          
          {/* Content side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <Award size={16} className="mr-1" /> Industry Expert
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Crafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Intelligent Conversations</span> with Advanced AI
            </h2>
            
            <p className="text-gray-300 mb-8">
              With over a decade of experience in AI and machine learning, I specialize in building 
              sophisticated chatbot solutions that transform how businesses interact with their customers. 
              My expertise spans from traditional rule-based systems to cutting-edge large language models, 
              always with a focus on practical, results-driven implementations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start p-4 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
                <div className="p-2 rounded-lg bg-indigo-900/50 mr-4">
                  <Users size={20} className="text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Client-Focused</h3>
                  <p className="text-gray-400">Tailored solutions based on your specific business needs</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="p-2 rounded-lg bg-purple-900/50 mr-4">
                  <Code size={20} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Technical Expertise</h3>
                  <p className="text-gray-400">Deep knowledge of AI, ML, and NLP technologies</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <div className="p-2 rounded-lg bg-blue-900/50 mr-4">
                  <MessageSquare size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Conversational Design</h3>
                  <p className="text-gray-400">Creating natural, engaging dialog flows</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
                <div className="p-2 rounded-lg bg-cyan-900/50 mr-4">
                  <Award size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Proven Results</h3>
                  <p className="text-gray-400">Track record of successful implementations</p>
                </div>
              </div>
            </div>
            
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group">
              Learn More About My Approach
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;