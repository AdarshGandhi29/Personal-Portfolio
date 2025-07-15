
import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Data science core skills should be prominent
  const skills = [
    { name: 'Python', level: 95, color: 'from-blue-500 to-cyan-500', image: 'https://www.python.org/static/community_logos/python-logo.png', description: 'A versatile programming language for web, data science, and automation.', tech: 'Pandas, NumPy, Flask, Django, ML' },
    { name: 'JavaScript', level: 95, color: 'from-pink-500 to-rose-500' },
    { name: 'Power BI', level: 78, color: 'from-green-600 to-teal-600' },
    { name: 'SQL', level: 88, color: 'from-green-500 to-emerald-500' },
    { name: 'DBMS', level: 72, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', level: 90, color: 'from-green-500 to-emerald-500' },
    { name: 'Machine Learning', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'React', level: 88, color: 'from-yellow-500 to-orange-500', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', description: 'A JavaScript library for building user interfaces.', tech: 'JSX, Hooks, Context API, React Router' },
    { name: 'AI', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'Excel', level: 82, color: 'from-orange-500 to-red-500' },
    { name: 'Java', level: 80, color: 'from-blue-600 to-indigo-600' },
    { name: 'Tableau', level: 75, color: 'from-blue-500 to-purple-500' },
  ];

  const technologies = [
    { name: 'Python', icon: '🐍', image: 'https://www.python.org/static/community_logos/python-logo.png', description: 'A versatile programming language for web, data science, and automation.', tech: 'Pandas, NumPy, Flask, Django, ML' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'React', icon: '⚛️', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', description: 'A JavaScript library for building user interfaces.', tech: 'JSX, Hooks, Context API, React Router' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'AI', icon: '🧠' },
    { name: 'Java', icon: '☕' },
    { name: 'Power BI', icon: '📊' },
    { name: 'Tableau', icon: '📈' },
    { name: 'Excel', icon: '📗' },
    { name: 'DBMS', icon: '💾' },
    { name: 'JavaScript', icon: '✨' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-vibrant mb-4">Skills</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill bars */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-8">Technical Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-medium">{skill.name}</h4>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} skill-bar ${
                        isVisible ? 'animate' : ''
                      }`}
                      style={{ '--skill-width': `${skill.level}%` } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology icons */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">Technologies</h3>
              <div className="grid grid-cols-3 gap-6">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="glass-card glass-card-hover p-4 rounded-xl text-center group"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <p className="text-sm text-gray-300">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">What I Do Best</h3>
              <div className="space-y-4">
                {[
                  'Full-Stack Web Development',
                  'AI & Machine Learning Integration',
                  'Database Design & Optimization',
                  'Transforming raw data into insightful dashboards',
                  'AI-Powered Applications',
                  'Performance Optimization'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
