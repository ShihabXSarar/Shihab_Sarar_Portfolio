import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import shipmentImg from "@/assets/projects/shipment.png";
import falconImg from "@/assets/projects/falcon.png";
import movieImg from "@/assets/projects/movie.png";
import libraryImg from "@/assets/projects/library.png";
import foodImg from "@/assets/projects/food.png";

const Projects = () => {
  const projects = [
    {
      title: "Falcon AI - Real-Time Border Threat Detection",
      description: "Built a real-time computer vision system to detect person/fence interactions and infer push-in/push-out events. Implemented YOLOv11 and ByteTrack for object detection and multi-object tracking. Integrated Twilio and WhatsApp APIs for automated alert notifications.",
      tech: ["Computer Vision", "YOLOv11", "ByteTrack"],
      github: "https://github.com/ShihabXSarar/AI-Based-Threat-Detection-for-Border-Surveillance",
      image: falconImg,
    },
    {
      title: "Movie-Recommendation-System",
      description: "Developed a personalized movie recommendation system based on user similarity and viewing history.",
      tech: ["Machine Learning", "Collaborative Filtering"],
      github: "https://github.com/ShihabXSarar/Movie-Recommendation-System-using-Collaborative-filtering",
      image: movieImg,
    },
    {
      title: "Library Management System",
      description: "Comprehensive library management system with book tracking, membership management, and student photo management.",
      tech: ["C#", "SQL", ".NET"],
      github: "https://github.com/ShihabXSarar/Library-System-Managment-with-photo-adding-of-students",
      image: libraryImg,
    },
    {
      title: "AI Based Food-Management-Sustainability-Platform",
      description: "Developed a smart platform to optimize inventory tracking and reduce food waste.",
      tech: ["AI", "Smart Food Management System"],
      github: "https://github.com/ShihabXSarar/Food-Management-Sustainability-Platform",
      image: foodImg, // using as placeholder
    },
    {
      title: "Real Time Shipment Tracking Project",
      description: "Real-time shipment tracking solution supporting USPS and FedEx using Playwright for browser automation and BeautifulSoup for parsing.",
      tech: ["Python", "Playwright", "Web Scraping"],
      github: "https://github.com/ShihabXSarar/Real_Time_Shipment_Tracking_Project",
      image: shipmentImg,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Innovative solutions and technical implementations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="tech-card group rounded-xl overflow-hidden flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video w-full relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-smooth" />
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex-1 mb-4">
                  <h3 className="text-sm font-bold mb-2 group-hover:text-primary transition-smooth leading-tight h-10 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 text-[11px] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-tag text-[9px] px-1.5 py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-3 border-t border-border/30">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild className="flex-1 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 text-[10px] h-8 rounded-lg">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="flex-1 border-border/50 text-foreground/60 hover:text-foreground hover:border-border text-[10px] h-8 rounded-lg">
                    Live Demo
                  </Button>
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
