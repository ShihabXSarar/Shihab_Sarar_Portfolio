import { Music, BookOpen, Coffee, Plane, Gamepad2, Laptop } from "lucide-react";

const Interests = () => {
  const interests = [
    {
      icon: Laptop,
      title: "Open Source",
      description: "Contributing to software projects",
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Competitive gaming and strategy",
    },
    {
      icon: Coffee,
      title: "Productivity",
      description: "Exploring tech and workflows",
    },
    {
      icon: Music,
      title: "Music",
      description: "Lo-fi and coding playlists",
    },
    {
      icon: BookOpen,
      title: "Reading books",
      description: "Exploring new worlds and knowledge",
    },
    {
      icon: Plane,
      title: "Travel",
      description: "Exploring new cultures",
    },
  ];

  return (
    <section id="interests" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading">My <span className="text-gradient">Interests</span></h2>
          <p className="text-muted-foreground text-lg">Beyond the code</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="tech-card group p-6 rounded-2xl animate-fade-in flex flex-col items-center text-center hover:border-primary/40 transition-all border-border/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-smooth">
                <interest.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-bold mb-1">{interest.title}</h3>
              <p className="text-[10px] text-muted-foreground font-medium leading-tight">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
