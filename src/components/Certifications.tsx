import { Award } from "lucide-react";

const certifications = [
  {
    title: "Java Training",
    issuer: "IIT Bombay Spoken Tutorial",
    badge: "java"
  },
  {
    title: "Linux Training",
    issuer: "IIT Bombay Spoken Tutorial",
    badge: "linux"
  },
  {
    title: "Bash Training",
    issuer: "IIT Bombay Spoken Tutorial",
    badge: "bash"
  },
  {
    title: "Computer Typing (40 WPM)",
    issuer: "Government Certificate (GCC-TBC)",
    badge: "typing"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="gradient-text">Certifications</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300 text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:animate-glow">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
