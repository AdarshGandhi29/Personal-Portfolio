
import React from 'react';
import { MapPin, Calendar, Coffee, Code2, Moon, Github, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-vibrant mb-4">About Me</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a mission to create impactful digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col h-full glass-card glass-card-hover p-8 rounded-2xl">
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-glow"></div>
              <img
                src="/Adarsh_Passport.jpg"
                alt="Adarsh Passport Photo"
                className="w-full h-full object-cover object-[center_20%] rounded-full relative z-10 border-4 border-white/20"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: 'Location', value: 'Nagpur, Maharashtra' },
                { icon: Calendar, label: 'Age', value: '21 years old' },
                { icon: Moon, label: 'Late Nights Survived', value: '320 nights' },
                { icon: Award, label: 'Competitive Coding Achievements', value: 'Earned Multiple Badges on Coding Platforms' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-xl">
                    <Icon className="mx-auto mb-2 text-purple-400" size={24} />
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="font-semibold text-white">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col h-full space-y-6">
            <div className="glass-card flex-1 flex flex-col p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
              I'm a data science enthusiast and budding full-stack developer with a strong interest in solving real-world problems using technology. 
              My passion lies in understanding data and building meaningful digital solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
              I work with AI/ML, data analysis, and modern web tools to bridge backend logic and user experience.
              I also use Power BI, Tableau, and Excel to extract insights and present them effectively.
              </p>
              <p className="text-gray-300 leading-relaxed">
              Outside of projects, I enjoy exploring new tech, learning frameworks, and engaging with the developer and data science community. 
              I’m driven by curiosity, creativity, and continuous learning.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-xl text-center">
                <h4 className="text-3xl font-bold gradient-text-vibrant">20+</h4>
                <p className="text-gray-400">GitHub Repositories</p>
              </div>
              <div className="glass-card p-6 rounded-xl text-center">
                <h4 className="text-3xl font-bold gradient-text-vibrant">15+</h4>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
