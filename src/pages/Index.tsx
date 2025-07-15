
import React from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import BackToTop from '../components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <LoadingScreen />
      <Navbar />
      <main className="space-y-0">
        <Hero />
        <div className="pt-10">
          <About />
        </div>
        <div className="pt-10">
          <Services />
        </div>
        <div className="pt-10">
          <Projects />
        </div>
        <div className="pt-10">
          <Skills />
        </div>
        <div className="pt-10">
          <Contact />
        </div>
      </main>
      <BackToTop />
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Adarsh Gandhi. Made with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
