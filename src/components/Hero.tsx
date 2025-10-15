import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-pulse" style={{ animationDuration: '8s' }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                SHIHAB <span className="text-gradient">SARAR</span>
              </h1>
            </div>
            
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground">
                Competitive Programmer | ML Enthusiast | Software Developer
              </p>
              <p className="text-foreground/80 leading-relaxed">
                As a competitive programmer with a strong passion for problem-solving, I specialize in machine learning, computer vision, and software development. Driven by the pursuit of excellence in both coding and innovative technology applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="glow-primary" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/cv.pdf" download="Shihab_Sarar_CV.pdf">
                  <FileText className="mr-2 h-5 w-5" />
                  View Resume
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/ShihabXSarar" target="_blank" rel="noopener noreferrer" 
                 className="p-3 rounded-lg bg-card hover:bg-primary transition-smooth hover:glow-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/shihab312417/" target="_blank" rel="noopener noreferrer"
                 className="p-3 rounded-lg bg-card hover:bg-primary transition-smooth hover:glow-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right content - Profile image placeholder */}
          <div className="flex justify-center animate-float">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1 glow-primary">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Shihab Sarar - Competitive Programmer and ML Enthusiast" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur">
            <div className="text-3xl font-bold text-gradient">1341</div>
            <p className="text-sm text-muted-foreground mt-1">Max Codeforces</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur">
            <div className="text-3xl font-bold text-gradient">3.54</div>
            <p className="text-sm text-muted-foreground mt-1">CGPA</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur">
            <div className="text-3xl font-bold text-gradient">10+</div>
            <p className="text-sm text-muted-foreground mt-1">Projects</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur">
            <div className="text-3xl font-bold text-gradient">5+</div>
            <p className="text-sm text-muted-foreground mt-1">Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
