const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
            I'm a motivated and detail-oriented <span className="text-primary font-semibold">Diploma in Computer Technology</span> student from Nashik, Maharashtra, with a strong foundation in programming, web development, and database management.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
            Skilled in <span className="text-primary font-semibold">C, C++, Python, Java</span>, and web technologies, I have hands-on experience developing academic projects and working with cutting-edge technologies in <span className="text-primary font-semibold">AI, IoT, and automation</span>.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            I possess strong problem-solving abilities, effective communication skills, and a quick learning attitude. I'm actively seeking opportunities to apply my technical knowledge and contribute to innovative projects in the IT industry while continuously enhancing my skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
