import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Turning code into meaningful solutions.";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Centered wrapper for profile image and content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-4">
        {/* Profile Image */}
        <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative group">
            {/* Animated glow background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
            
            {/* Avatar with gradient border */}
            <div className="relative h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-full bg-gradient-to-r from-primary to-accent p-[3px] group-hover:scale-105 transition-transform duration-300">
              <Avatar className="h-full w-full">
                <AvatarImage 
                  src="https://i.postimg.cc/tJZ9qMfW/Gemini-Generated-Image-gqg9u1gqg9u1gqg9.png" 
                  alt="Prasad Khode - Aspiring Software & AI Developer"
                  className="rounded-full object-cover"
                />
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-4xl md:text-5xl font-bold">
                  PK
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
          Prasad Khode
        </h1>
        <h2 className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
          Aspiring Software & AI Developer
        </h2>
        <div className="min-h-[40px] mb-12">
          <p className="text-xl md:text-2xl text-white/80 font-light">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-medium px-8"
          >
            View Projects
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 font-medium px-8"
          >
            Get in Touch
          </Button>
        </div>
      </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
