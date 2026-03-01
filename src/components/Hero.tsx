import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Eye } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { useState } from "react";
import ResumeModal from "./ResumeModal";

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 circuit-bg">
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Background ambient glow - matching the design's subtle blue haze */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[hsl(196,100%,46%,0.04)] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[hsl(262,83%,58%,0.03)] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 pt-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in order-2 md:order-1">
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight">
                SHIHAB <span className="text-gradient">SARAR</span>
              </h1>
              <p className="text-xl sm:text-2xl text-foreground font-bold tracking-tight">
                CS Student | <span className="text-[hsl(196,100%,46%)]">Competitive Programmer & ML Specialist</span>
              </p>
            </div>

            <p className="text-foreground/60 leading-relaxed text-sm sm:text-base max-w-xl">
              Specializing in data structures, algorithms, and developing scalable machine learning models. Passionate about solving complex problems and building intelligent systems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 bg-[hsl(196,100%,46%)] hover:bg-[hsl(196,100%,40%)] text-[hsl(228,60%,6%)] font-extrabold text-base shadow-[0_0_20px_hsl(196,100%,46%,0.3)] touch-target transition-all hover:scale-105"
                asChild
              >
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsResumeOpen(true)}
                className="rounded-full px-8 py-6 border-[hsl(196,100%,46%,0.4)] text-[hsl(196,100%,46%)] hover:bg-[hsl(196,100%,46%,0.08)] hover:border-[hsl(196,100%,46%,0.7)] font-bold text-base bg-[hsl(228,50%,10%,0.5)] backdrop-blur-sm touch-target transition-all hover:scale-105"
              >
                View Resume
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/ShihabXSarar" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-[hsl(228,45%,11%)] border border-[hsl(196,100%,46%,0.15)] hover:border-[hsl(196,100%,46%,0.6)] hover:bg-[hsl(196,100%,46%,0.1)] transition-smooth touch-target shadow-lg"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 text-foreground/80" />
              </a>
              <a href="https://www.linkedin.com/in/shihab312417/" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-[hsl(228,45%,11%)] border border-[hsl(196,100%,46%,0.15)] hover:border-[hsl(196,100%,46%,0.6)] hover:bg-[hsl(196,100%,46%,0.1)] transition-smooth touch-target shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-foreground/80" />
              </a>
            </div>
          </div>

          {/* Right content - Profile image with tech frame matching design */}
          <div className="flex justify-center animate-fade-in order-1 md:order-2" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-[2rem] shadow-[0_0_50px_hsl(196,100%,46%,0.3),0_0_100px_hsl(196,100%,46%,0.1)] animate-glow-pulse" />

              {/* Profile container with visible cyan border */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] rounded-[2rem] border-2 border-[hsl(196,100%,46%,0.4)] p-1.5 overflow-hidden ring-1 ring-[hsl(196,100%,46%,0.2)] ring-offset-4 ring-offset-[hsl(228,60%,6%)]">
                <div className="w-full h-full rounded-[1.6rem] overflow-hidden bg-card">
                  <img
                    src={profileImage}
                    alt="Shihab Sarar - Competitive Programmer and ML Enthusiast"
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    loading="eager"
                  />
                </div>
                {/* Corner accents matching design's tech overlay */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-[3px] border-r-[3px] border-[hsl(196,100%,46%,0.8)] rounded-tr-[2rem] shadow-[inset_-5px_5px_10px_rgba(14,165,233,0.3)]" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-[3px] border-l-[3px] border-[hsl(196,100%,46%,0.8)] rounded-bl-[2rem] shadow-[inset_5px_-5px_10px_rgba(14,165,233,0.3)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats badges matching the design's outlined pill style */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {[
            { label: "Codeforces:", value: "1341 (Pupil)" },
            { label: "GPA:", value: "3.55" },
            { label: "Projects:", value: "20+" },
            { label: "Awards:", value: "5+" },
          ].map((stat, i) => (
            <div key={i} className="px-5 py-2.5 rounded-lg border border-[hsl(196,100%,46%,0.25)] bg-[hsl(196,100%,46%,0.05)] flex items-center gap-2.5 transition-all hover:border-[hsl(196,100%,46%,0.5)] group">
              <span className="text-[hsl(196,100%,46%)] font-bold text-xs uppercase tracking-widest">{stat.label}</span>
              <span className="text-foreground font-black text-sm">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
