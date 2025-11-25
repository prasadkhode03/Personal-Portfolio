import { Code2, Database, Brain, Wifi, Server, Terminal } from "lucide-react";

const skills = [
  { name: "C / C++", icon: Code2, color: "from-blue-500 to-cyan-500" },
  { name: "Python", icon: Terminal, color: "from-yellow-500 to-green-500" },
  { name: "Java", icon: Code2, color: "from-red-500 to-orange-500" },
  { name: "MySQL", icon: Database, color: "from-blue-600 to-blue-400" },
  { name: "AI & ML", icon: Brain, color: "from-purple-500 to-pink-500" },
  { name: "IoT", icon: Wifi, color: "from-teal-500 to-cyan-500" },
  { name: "Linux", icon: Server, color: "from-gray-700 to-gray-500" },
  { name: "Web Dev", icon: Code2, color: "from-indigo-500 to-purple-500" },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:animate-glow`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-center font-semibold text-lg">{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
