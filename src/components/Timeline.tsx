import { GraduationCap, Briefcase, School } from "lucide-react";

const timelineItems = [
  {
    type: "education",
    icon: GraduationCap,
    title: "Diploma in Computer Technology",
    organization: "K. K. Wagh Polytechnic, Nashik",
    period: "Pursuing",
    description: "Currently pursuing Diploma in Computer Technology with focus on programming, web development, and emerging technologies."
  },
  {
    type: "internship",
    icon: Briefcase,
    title: "AI and Automation Internship",
    organization: "Rich System Solutions Pvt. Ltd.",
    period: "June 2025 – August 2025",
    description: "Gained practical experience in AI, data analysis, and automation using Python. Worked on datasets like Titanic, Iris, Netflix, and Boston Housing applying ML algorithms such as Linear Regression and Chi-Square Tests."
  },
  {
    type: "education",
    icon: School,
    title: "Secondary Education",
    organization: "G.E.S, H.A.L High School (M.M), Ozar, Nashik",
    period: "2022-2023",
    description: "Completed secondary education with 91.40% from Maharashtra State Board."
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Education & <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />
          
          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
                }`}
              >
                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center z-10 glow-effect">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className={`ml-24 md:ml-0 ${index % 2 === 0 ? 'md:mr-24' : 'md:ml-24'}`}>
                  <div className="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                    <span className="text-sm text-primary font-semibold uppercase tracking-wide">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-1">{item.title}</h3>
                    <p className="text-muted-foreground font-medium mb-3">{item.organization}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
