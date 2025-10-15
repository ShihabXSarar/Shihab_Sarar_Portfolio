const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "C#", "Python", "Java", "JavaScript"],
    },
    {
      title: "Frontend",
      skills: ["HTML/CSS", "React", "Tailwind CSS"],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "MySQL", "SQL", "Database Design"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "VS Code", "PyCharm", "OpenCV"],
    },
    {
      title: "Core Competencies",
      skills: [
        "Problem Solving",
        "Algorithm Design",
        "Machine Learning",
        "Computer Vision",
        "Competitive Programming",
        "Team Leadership",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills</span> & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Technical proficiencies and core competencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-smooth hover:glow-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 text-sm font-medium hover:bg-primary/20 transition-smooth"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted achievements */}
        <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold mb-6 text-center">Key Highlights</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <p className="text-foreground/80">Participated in ICPC, hackathons, and coding competitions</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <p className="text-foreground/80">Strong foundation in machine learning and model evaluation</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <p className="text-foreground/80">Experience with C# framework and application development</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <p className="text-foreground/80">Proven leadership and teamwork abilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
