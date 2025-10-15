import { Code2, Brain, Eye, Trophy } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Code2,
      title: "Competitive Programming",
      description: "Demonstrated proficiency in problem-solving and algorithm design. Skilled in dissecting complex issues and developing efficient, scalable solutions.",
      highlight: "Codeforces Rating: 1207 (max. pupil, 1341)",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Possesses foundational knowledge of machine learning, encompassing both supervised and unsupervised learning techniques. Familiar with core concepts of model evaluation.",
      highlight: "Supervised & Unsupervised Learning",
    },
    {
      icon: Eye,
      title: "Computer Vision Engineering",
      description: "Familiar with fundamental concepts in Computer Vision Engineering. Understands basic image processing techniques, object detection, and image classification principles.",
      highlight: "OpenCV & Image Processing",
    },
    {
      icon: Trophy,
      title: "AI Challenges & Hackathons",
      description: "Active participant in AI challenges and hackathons, applying innovative solutions to real-world problems. Experienced in collaborative development and rapid prototyping.",
      highlight: "Innovation & Problem Solving",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Expertise across multiple domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary transition-smooth hover:glow-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-smooth">
                <exp.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                {exp.description}
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-primary font-semibold">{exp.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
