import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      toast({
        variant: "destructive",
        title: "Setup Error",
        description: "Web3Forms Access Key is missing. Check your .env file.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Message from ${formData.name}`,
          from_name: "Portfolio Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Something went wrong. Please try again later.",
      });
      console.error("Form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-muted-foreground text-lg">Let's collaborate on your next project</p>
        </div>

        <div className="tech-card p-6 sm:p-12 rounded-3xl animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-foreground/40 uppercase tracking-widest ml-1">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full bg-[hsl(228,45%,8%)] border border-border/30 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-foreground/40 uppercase tracking-widest ml-1">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Your@email.com"
                      className="w-full bg-[hsl(228,45%,8%)] border border-border/30 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-foreground/40 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    id="message"
                    required
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="w-full bg-[hsl(228,45%,8%)] border border-border/30 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-fit px-8 py-6 rounded-full bg-[hsl(196,100%,46%)] hover:bg-[hsl(196,100%,40%)] text-[hsl(228,60%,6%)] font-extrabold shadow-lg hover:scale-105 transition-all disabled:opacity-70 disabled:hover:scale-100"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-between">
              <div className="space-y-8 sm:space-y-10">
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-start gap-4 sm:gap-5 group">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-foreground/30 uppercase tracking-widest mb-1">Email</p>
                      <p className="text-sm sm:text-lg font-bold text-foreground/90 break-all">shihabsarar312417@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 sm:gap-5 group">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth shrink-0">
                      <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-foreground/30 uppercase tracking-widest mb-1">LinkedIn</p>
                      <p className="text-sm sm:text-lg font-bold text-foreground/90 break-all">linkedin.com/in/shihab312417</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 sm:gap-5 group">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth shrink-0">
                      <Github className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-foreground/30 uppercase tracking-widest mb-1">GitHub</p>
                      <p className="text-sm sm:text-lg font-bold text-foreground/90 break-all">github.com/ShihabXSarar</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 sm:gap-5 group">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-foreground/30 uppercase tracking-widest mb-1">Location</p>
                      <p className="text-sm sm:text-lg font-bold text-foreground/90">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border/20">
                  {[Linkedin, Github, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-card/50 border border-border/30 text-foreground/40 hover:text-primary hover:border-primary/50 transition-all">
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
