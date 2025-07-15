
import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Projects = () => {
  const { toast } = useToast();
  const projects = [
    {
      id: 1,
      title: 'MedCare-Pro-HMS',
      description: 'Hospital Management System: A modern full-stack solution for efficient hospital operations including patients, doctors, appointments, billing, inventory, and analytics.',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['React - Frontend', 'Node.js - Backend', 'MySQL - Database','JWT - Authentication'],
      github: 'https://github.com/AdarshGandhi29/MedCare-Pro-HMS',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'AI Doctor with Voice and Vision ',
      description: 'AI Doctor 2.0: A multimodal AI chatbot enabling real-time doctor-like consultations through voice, text, and medical image analysis.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      tags: ['Python', 'Gradio', 'LLM', 'LLaMA 3 Vision via GROQ API'],
      github: 'https://github.com/AdarshGandhi29/AI-Doctor-with-voice-and-vision',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Myntra-Analysis-Dashboard',
      description: 'A comprehensive Power BI solution that uncovers insights into customer behavior, brand performance, and evolving sales trends within the online fashion retail industry.',
      image: 'https://pimwp.s3-accelerate.amazonaws.com/2023/09/Untitled-design-2023-09-21T174041.903.png',
      tags: ['Power BI', 'Data Visualization Techniques', 'Sample Retail Dataset (Myntra-based)'],
      github: 'https://github.com/AdarshGandhi29/Myntra-Analysis-Dashboard',
      demo: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Pizza Sales Data Analysis',
      description: 'A SQL-based project uncovering sales trends, top pizzas, and order patterns to optimize business decisions.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['SQL (Structured Query Language)', 'RDBMS – MySQL', 'Data Analysis'],
      github: 'https://github.com/AdarshGandhi29/Pizza-Sales-Data-Analysis',
      demo: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Blinkit Sales Analysis',
      description: 'A Power BI solution analyzing outlet performance, item categories, and customer behavior to uncover e-commerce sales trends.',
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202501/blinkit--bistro-103522467-16x9_0.jpg?VersionId=xitd1Cnf3bX.2AQnewD2FCMDZSCHA5_l&size=690:388',
      tags: ['Power BI', 'Excel', 'DAX (Data Analysis Expressions)'],
      github: 'https://github.com/AdarshGandhi29/Blinkit-Sales-Analysis',
      demo: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Heart Disease Prediction',
      description: 'ML system predicting heart disease risk from clinical data for early detection and informed medical decisions.',
      image: 'https://www.dramitabhasaha.com/wp-content/uploads/2020/12/CHEST-PAIN-DUE-TO-VARIOUS-REASONS.webp',
      tags: ['Python', 'Machine Learning','Model building & evaluation'],
      github: 'https://github.com/AdarshGandhi29/Amazon-Sales-Analysis-Dashboard',
      demo: '#',
      featured: false
    },
    {
      id: 9,
      title: 'Stroke Prediction',
      description: 'A machine learning project comparing classification models to predict stroke likelihood based on patient health and demographic data.',
      image: 'https://plus.unsplash.com/premium_photo-1717779726225-b458cdb40588?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Python', 'Pandas, NumPy – Data preprocessing', 'Matplotlib, Seaborn - EDA', 'Model building & evaluation'],
      github: 'https://github.com/AdarshGandhi29/Stroke_Prediction',
      demo: '#',
      featured: false
    },
    {
      id: 7,
      title: 'Responsive Landing Page',
      description: 'A modern, mobile-friendly website showcasing clean design, smooth interactions, and responsive layout using HTML, CSS, JS, and Bootstrap.',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['HTML', 'CSS', 'JavaScript – Interactivity and smooth scrolling', 'Bootstrap'],
      github: 'https://github.com/AdarshGandhi29/Landing-Page',
      demo: 'https://adarshgandhi29.github.io/Landing-Page/',
      featured: false
    },
    {
      id: 8,
      title: 'Tic-Tac-Toe Game',
      description: 'A responsive browser-based game featuring Two-Player and AI modes, built with HTML, CSS, JavaScript, and styled using Bootstrap for an interactive experience.',
      image: 'https://plus.unsplash.com/premium_photo-1689245691969-995fea0c4061?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['HTML', 'CSS', 'JavaScript – Interactivity and smooth scrolling', 'Bootstrap'],
      github: 'https://github.com/AdarshGandhi29/TIC-TAC-TOE',
      demo: 'https://adarshgandhi29.github.io/TIC-TAC-TOE/',
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-vibrant mb-4">Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my latest work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="glass-card glass-card-hover rounded-2xl overflow-hidden group">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      <Star size={14} />
                      Featured
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 text-purple-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 items-center mt-2">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  {project.demo && project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 focus:outline-none"
                      onClick={() =>
                        toast({
                          title: "Demo Not Available",
                          description: "A live demo is not available for this project. Please visit the GitHub repository to view the code and details.",
                        })
                      }
                    >
                      <ExternalLink size={18} />
                      Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
