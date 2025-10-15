import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Real Time Shipment Tracking Project",
      description: "Real-time shipment tracking solution supporting USPS and FedEx using Playwright for browser automation and BeautifulSoup for parsing. Features automated tracking number entry with human-like behavior, detailed status extraction, and structured JSON output without paid APIs.",
      tech: ["Python", "Playwright", "BeautifulSoup", "Automation", "Web Scraping"],
      github: "https://github.com/ShihabXSarar/Real_Time_Shipment_Tracking_Project",
    },
    {
      title: "AI-Based Threat Detection for Border Surveillance (Falcon AI)",
      description: "Drone-based autonomous surveillance system using onboard AI for real-time threat detection and classification. Features directional context analysis, edge computing with NVIDIA Jetson, and instant verified alerts via Twilio API for border security operations.",
      tech: ["Python", "Computer Vision", "Deep Learning", "NVIDIA Jetson", "Twilio API"],
      github: "https://github.com/ShihabXSarar/AI-Based-Threat-Detection-for-Border-Surveillance",
    },
    {
      title: "Movie Recommendation System",
      description: "Dynamic recommendation system using collaborative filtering and TMDB API integration. Provides personalized movie suggestions based on user preferences and behavior patterns. Features real-time movie data, user ratings, genre support, and an intuitive interface for discovering trending content.",
      tech: ["Python", "Machine Learning", "TMDB API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ShihabXSarar/Movie-Recommendation-System-using-Collaborative-filtering",
    },
    {
      title: "Library Management System",
      description: "Comprehensive library management system with book tracking, membership management, lending functions, and student photo management capabilities. Built using C# framework with SQL database integration and Windows Forms interface.",
      tech: ["C#", "SQL", ".NET", "Windows Forms"],
      github: "https://github.com/ShihabXSarar/Library-System-Managment-with-photo-adding-of-students",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Innovative solutions and technical implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary transition-smooth hover:glow-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-smooth">
                  {project.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-lg bg-primary/10 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
