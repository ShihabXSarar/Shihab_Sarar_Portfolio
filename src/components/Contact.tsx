import { Mail, MapPin, Linkedin, Github, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Shihab312417@gmail.com",
      href: "mailto:Shihab312417@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shihab312417/",
      color: "hover:text-[#0A66C2]",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ShihabXSarar",
      color: "hover:text-white",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/Shihab312417",
      color: "hover:text-[#1DA1F2]",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/shihab31241",
      color: "hover:text-[#1877F2]",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and collaborate on exciting projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-semibold hover:text-primary transition-smooth"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-semibold">{info.value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl bg-card border border-border hover:border-primary transition-smooth hover:glow-primary ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg mb-6">
            Interested in collaborating or have a project in mind?
          </p>
          <Button size="lg" className="glow-primary">
            <Mail className="mr-2 h-5 w-5" />
            Send Me an Email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
