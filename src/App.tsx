import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technology from './components/Technology';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="fixed inset-0 bg-gradient-radial from-indigo-900/20 via-gray-900/50 to-gray-900 -z-10"></div>
      <div className="fixed inset-0 bg-[url('https://images.pexels.com/photos/7130469/pexels-photo-7130469.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5 -z-20"></div>
      <Navbar />
      <Hero />
      <About />
      <Technology />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;