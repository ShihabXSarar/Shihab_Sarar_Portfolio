const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "Java", "JavaScript", "C#", "SQL"],
    },
    {
      title: "Frameworks & Tools",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "React", "Node.js", "Docker", "Git"],
    },
    {
      title: "Core Competencies",
      skills: [
        "Data Structures",
        "Algorithms",
        "Deep Learning",
        "Natural Language Processing",
        "System Design",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Technical Communication",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 circuit-bg relative">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading">
            <span className="text-gradient">Skills</span> & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Technical proficiencies and core competencies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xs font-bold mb-6 text-foreground/40 uppercase tracking-[0.2em] px-1">{category.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag text-[11px] font-bold px-3 py-1.5 rounded-lg border-[hsl(196,100%,46%,0.2)] bg-[hsl(196,100%,46%,0.04)] text-foreground/80 hover:border-[hsl(196,100%,46%,0.5)] hover:bg-[hsl(196,100%,46%,0.1)] transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
