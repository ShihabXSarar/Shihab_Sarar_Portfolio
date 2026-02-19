import { Code2, Brain, Eye, Trophy } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Code2,
      title: "Competitive Programming",
      description: "Demonstrated proficiency in problem-solving and algorithm design. Skilled in dissecting complex issues and developing efficient, scalable solutions.",
      highlight: "Codeforces Rating: 1207 (max. pupil, 1341)",
      tags: ["C++", "Python", "Java"],
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Possesses foundational knowledge of machine learning, encompassing both supervised and unsupervised learning techniques. Familiar with core concepts.",
      highlight: "Supervised & Unsupervised Learning",
      tags: ["Python", "TensorFlow", "PyTorch"],
    },
    {
      icon: Eye,
      title: "Computer Vision Engineering",
      description: "Familiar with fundamental concepts in Computer Vision. Understands image processing, object detection, and image classification principles.",
      highlight: "OpenCV & Image Processing",
      tags: ["Python", "OpenCV", "Deep Learning"],
    },
    {
      icon: Trophy,
      title: "AI Challenges & Hackathons",
      description: "Active participant in AI challenges and hackathons, applying innovative solutions to real-world problems. Experienced in rapid prototyping.",
      highlight: "Innovation & Problem Solving",
      tags: ["AI", "Teamwork", "Prototyping"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 circuit-bg relative">
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-[hsl(196,100%,46%,0.03)] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading">
            My <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Expertise across multiple domains
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="tech-card group p-6 rounded-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-2.5 rounded-lg bg-[hsl(196,100%,46%,0.08)] w-fit group-hover:bg-[hsl(196,100%,46%,0.15)] transition-smooth">
                <exp.icon className="h-6 w-6 text-[hsl(196,100%,46%)]" />
              </div>
              <h3 className="text-lg font-bold mb-3">{exp.title}</h3>
              <p className="text-foreground/60 text-[13px] mb-5 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-3">
                <p className="text-[11px] font-bold text-foreground/40 uppercase tracking-widest">Tech-stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="skill-tag text-[10px] px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
