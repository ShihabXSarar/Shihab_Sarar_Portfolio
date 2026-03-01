import { Award, Trophy, Medal, Star } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      icon: Award,
      title: "Blockchain Olympiad Bangladesh 2025 Honorable Mention",
      category: "AI Category",
    },
    {
      icon: Trophy,
      title: "ICPC Asia Dhaka Regionalist-2023",
      category: "Competitive Programming",
    },
    {
      icon: Star,
      title: "Nominated for International Data Science Olympiad 2025",
      category: "Data Science",
    },
    {
      icon: Trophy,
      title: "Winner at the Presidency Intra-University Programming Contest Season-2",
      category: "Competitive Programming",
    },
    {
      icon: Medal,
      title: "2nd Runners-up of Presidency University AI Contest",
      category: "AI",
    },
  ];

  const positions = [
    {
      title: "President",
      organization: "Presidency University AI Club",
      icon: Star,
    },
    {
      title: "Former Head of Promotion",
      organization: "Presidency University Programming Club",
      icon: Award,
    },
  ];

  return (
    <section id="awards" className="py-20 px-4 circuit-bg relative">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading">
            <span className="text-gradient">Awards</span> & Certifications
          </h2>
          <p className="text-muted-foreground text-lg">
            Recognition and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {awards.map((award, index) => (
            <div
              key={index}
              className="tech-card group p-5 rounded-2xl animate-fade-in flex flex-col items-center text-center justify-center border-[hsl(196,100%,46%,0.1)] hover:border-[hsl(196,100%,46%,0.4)] transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-smooth">
                <award.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xs font-black mb-1 leading-snug uppercase tracking-tight line-clamp-2 h-8">{award.title}</h3>
              <p className="text-[10px] text-muted-foreground font-bold">{award.category}</p>
            </div>
          ))}
        </div>

        {/* Leadership Positions */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-base font-bold mb-8 text-center text-foreground/30 uppercase tracking-[0.3em]">
            Leadership <span className="text-foreground/80">Positions</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="tech-card p-6 rounded-2xl border-primary/10 animate-fade-in group flex items-center gap-5"
                style={{ animationDelay: `${(awards.length + index) * 0.1}s` }}
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <position.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">{position.title}</h4>
                  <p className="text-foreground/40 text-sm font-medium uppercase tracking-wider">{position.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
