import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Presidency University Bangladesh",
      degree: "Bachelor of Science",
      field: "Computer Science and Engineering",
      grade: "GPA: 3.54/4.0",
      period: "2021 - 2025",
      highlights: ["Data Structures", "Algorithms", "Machine Learning", "Computer Vision"],
    },
  ];

  const certifications = [
    {
      title: "Google Cloud Professional Data Engineer",
      provider: "Google Cloud",
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      provider: "Amazon Web Services",
    },
    {
      title: "Deep Learning Specialization",
      provider: "Coursera",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic background and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Main Institution Card */}
          {education.map((edu, index) => (
            <div
              key={index}
              className="tech-card group p-8 rounded-2xl animate-fade-in flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight">{edu.institution}</h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[hsl(196,100%,46%,0.15)] border border-[hsl(196,100%,46%,0.4)] text-[hsl(196,100%,46%)] text-xs font-black shadow-lg">
                    {edu.grade}
                  </div>
                </div>

                <div className="space-y-3 ml-2">
                  <p className="text-lg font-bold text-foreground/90">{edu.degree}</p>
                  <p className="text-foreground/50 text-base">{edu.field}</p>

                  <div className="pt-6">
                    <p className="text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-4">Relevant Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((hl, i) => (
                        <span key={i} className="skill-tag text-[11px] px-3 py-1">{hl}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground mt-10 pt-5 border-t border-border/20 self-end">
                <Calendar className="h-4 w-4" />
                <span className="font-bold text-xs uppercase tracking-widest">{edu.period}</span>
              </div>
            </div>
          ))}

          {/* Certifications Card matching design's right card */}
          <div className="tech-card p-8 rounded-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl sm:text-2xl font-bold mb-8">Other <span className="text-gradient">Certifications</span></h3>
            <div className="space-y-6">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="w-2 h-2 rounded-full bg-primary/40 group-hover/item:bg-primary transition-all duration-300 shadow-[0_0_10px_rgba(14,165,233,0)] group-hover/item:shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                  <div className="flex-1">
                    <p className="text-base font-bold text-foreground/90 group-hover/item:text-primary transition-colors">{cert.title}</p>
                    <p className="text-sm text-foreground/40 font-medium">{cert.provider}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-end">
              <div className="p-3 rounded-xl bg-accent/5">
                <Award className="h-8 w-8 text-accent/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
