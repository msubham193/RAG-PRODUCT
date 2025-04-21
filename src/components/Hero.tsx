import React, { useEffect, useRef } from 'react';
import { Bot, Brain, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const typingTextRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const phrases = [
      "intelligent chatbots",
      "AI conversation agents",
      "customer service bots",
      "sales assistants"
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        if (typingTextRef.current) {
          typingTextRef.current.textContent = currentPhrase.substring(0, charIndex - 1);
        }
        charIndex--;
        typingSpeed = 50;
      } else {
        if (typingTextRef.current) {
          typingTextRef.current.textContent = currentPhrase.substring(0, charIndex + 1);
        }
        charIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const typingTimeout = setTimeout(type, 1000);
    return () => clearTimeout(typingTimeout);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36">
      {/* Animated shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Zap size={16} className="mr-1" /> Advanced AI Chatbot Solutions
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Building Next-Generation<br />
            <span className="relative">
              <span ref={typingTextRef} className="text-white ">intelligent chatbots</span>
              <span className="absolute -right-1 top-0 h-full w-1 bg-white animate-blink"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-lg text-gray-300 max-w-2xl mb-8">
            Leverage the power of RAG, LLMs, and Generative AI to create chatbots 
            that understand context, provide accurate information, and deliver 
            exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-3 bg-dark-800/50 backdrop-blur-sm text-white font-medium rounded-lg border border-gray-700 hover:border-indigo-500 shadow-md hover:shadow-lg transition-all duration-300">
              View Demo
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="flex flex-col items-center p-6 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-indigo-500/50">
              <div className="p-3 rounded-full bg-indigo-900/50 mb-4">
                <Bot size={24} className="text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">AI Chatbots</h3>
              <p className="text-gray-400 text-center">Smart conversational agents that understand natural language</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/50">
              <div className="p-3 rounded-full bg-purple-900/50 mb-4">
                <Brain size={24} className="text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">RAG Technology</h3>
              <p className="text-gray-400 text-center">Retrieval-Augmented Generation for accurate, contextual responses</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/50">
              <div className="p-3 rounded-full bg-blue-900/50 mb-4">
                <Zap size={24} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">LLM Integration</h3>
              <p className="text-gray-400 text-center">Cutting-edge language models for human-like interactions</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-indigo-400 rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;