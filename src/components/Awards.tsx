import { Award, Trophy, Medal, Star } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: "ICPC Asia Dhaka Regionalist 2023",
      category: "Competitive Programming",
    },
    {
      icon: Award,
      title: "Honorable Mention - Blockchain Olympiad Bangladesh",
      category: "AI Category",
    },
    {
      icon: Star,
      title: "Nominated for International Data Science Olympiad",
      category: "Data Science",
    },
    {
      icon: Trophy,
      title: "Winner - Intra University Programming Contest Season 2",
      category: "Presidency University",
    },
    {
      icon: Medal,
      title: "1st Runner Up - Intra University Programming Contest Season 1",
      category: "Presidency University",
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
    <section id="awards" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Awards</span> & Certifications
          </h2>
          <p className="text-muted-foreground text-lg">
            Recognition and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary transition-smooth hover:glow-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <award.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">{award.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Positions */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Leadership <span className="text-gradient">Positions</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 animate-fade-in"
                style={{ animationDelay: `${(awards.length + index) * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <position.icon className="h-6 w-6 text-primary" />
                  <h4 className="text-xl font-bold">{position.title}</h4>
                </div>
                <p className="text-foreground/70">{position.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
