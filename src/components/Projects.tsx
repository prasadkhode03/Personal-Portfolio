import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "AI Agent for Project Deadline Notification",
    description: "Developed an intelligent notification workflow using n8n to automate task updates and deadline alerts for employees across multiple communication channels.",
    technologies: ["n8n", "Google Sheets", "WhatsApp API", "Gmail", "Telegram", "AI"],
    features: [
      "Automated task updates and deadline alerts",
      "Multi-channel notifications (WhatsApp, Gmail, Telegram)",
      "AI-generated personalized messages",
      "Real-time tracking and delivery logging"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "IoT-Based Smart Guide for Blind People",
    description: "An assistive wearable device that helps visually impaired individuals navigate safely using AI, IoT, and sensor fusion technologies.",
    technologies: ["Raspberry Pi", "YOLOv5", "OpenCV", "Python", "GPS", "IoT"],
    features: [
      "Real-time object and obstacle detection",
      "Audio and vibration alerts",
      "SOS button for emergency support",
      "Live location tracking via mobile app",
      "Edge-based AI for offline performance"
    ],
    gradient: "from-purple-500 to-pink-500"
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500"
              style={{
                transform: hoveredIndex === index ? 'perspective(1000px) rotateX(2deg) rotateY(2deg)' : 'none',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
