import { Code, Brain, BookOpen } from "lucide-react";

const Interests = () => {
  const interests = [
    {
      icon: Code,
      title: "Competitive Programming",
      description: "I love solving algorithmic problems on platforms like Codeforces and Leetcode, constantly challenging myself with complex problems.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Exploring AI and ML techniques to solve real-world problems, with a focus on innovative applications and emerging technologies.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: BookOpen,
      title: "Reading Books",
      description: "I enjoy reading books, especially those related to technology, crime thrillers, and detective novels that challenge the mind.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="interests" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Interests</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            What drives and inspires me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary transition-smooth overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} opacity-0 group-hover:opacity-10 transition-smooth`} />
              
              <div className="relative z-10">
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-smooth">
                  <interest.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{interest.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
