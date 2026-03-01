import { Code2, Cpu, Layers, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Python", "C", "C++", "SQL", "C Sharp"],
    },
    {
      icon: Brain,
      title: "AI / ML",
      skills: ["Machine Learning", "Computer Vision", "Multimodal Learning", "Explainable AI (SHAP, Grad-CAM)"],
    },
    {
      icon: Layers,
      title: "Libraries / Frameworks",
      skills: ["OpenCV", "scikit-learn", "TensorFlow"],
    },
    {
      icon: Cpu,
      title: "Developer Tools",
      skills: ["VS Code", "Visual Studio", "Kaggle", "PyCharm", "Jupyter Notebook"],
    },
    {
      icon: Code2,
      title: "Technologies / Frameworks",
      skills: ["Git", "GitHub"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 circuit-bg relative">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Core competencies and professional skill set
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="tech-card p-8 rounded-2xl animate-fade-in group hover:border-primary/40 transition-all border-border/10 bg-card/30 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/10 group-hover:bg-primary/10 transition-smooth">
                  <category.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-4 group-hover:text-primary transition-smooth">{category.title}</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="skill-tag text-[12px] font-bold px-3.5 py-1.5 rounded-lg border-[hsl(196,100%,46%,0.2)] bg-[hsl(196,100%,46%,0.04)] text-foreground/80 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
