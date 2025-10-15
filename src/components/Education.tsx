import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Presidency University Bangladesh",
      degree: "Bachelor of Science",
      field: "Computer Science and Engineering",
      grade: "CGPA: 3.54",
      period: "2021 - 2025",
    },
    {
      institution: "Mirpur College, Dhaka",
      degree: "Higher Secondary Certificate",
      field: "Science",
      grade: "GPA: 4.65",
      period: "2019",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic background and achievements
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary transition-smooth hover:glow-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{edu.institution}</h3>
                  </div>
                  <div className="space-y-2 ml-14">
                    <p className="text-lg font-semibold text-foreground/90">{edu.degree}</p>
                    <p className="text-foreground/70">{edu.field}</p>
                    <p className="text-primary font-bold">{edu.grade}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground ml-14 md:ml-0">
                  <Calendar className="h-4 w-4" />
                  <span className="font-semibold">{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
