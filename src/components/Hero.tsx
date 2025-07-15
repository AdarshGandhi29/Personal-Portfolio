
import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer & Data Science Enthusiast';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="glass-card glass-card-hover p-8 md:p-12 rounded-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">Hi, I'm</span>
            <span className="gradient-text-vibrant">Adarsh Gandhi</span>
          </h1>
          
          <div className="h-8 md:h-10 mb-8">
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Exploring data-driven solutions with modern tools. Skilled in AI/ML, data analysis, full-stack development, and visualization using Power BI, Tableau, and Excel.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="https://wa.me/919145245849"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-4 rounded-full text-white font-semibold flex items-center gap-3 min-w-[200px] justify-center"
            >
              <Mail size={20} />
              Hire Me
            </a>
          </div>

          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: 'https://github.com/AdarshGandhi29', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/adarsh-gandhi-a91069244/', label: 'LinkedIn' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="glass-card glass-card-hover p-4 rounded-full text-gray-300 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
