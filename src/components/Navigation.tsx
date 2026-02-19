import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Awards", href: "#awards" },
    { label: "Interests", href: "#interests" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-smooth ${scrolled
        ? "bg-[hsl(228,50%,8%)] backdrop-blur-xl border-b border-[hsl(196,100%,46%,0.1)]"
        : "bg-transparent"
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo matching "AP Portfolio" style from design */}
          <a href="#about" className="flex items-center gap-2 text-xl font-bold group">
            <span className="text-gradient text-2xl font-extrabold">SS</span>
            <span className="text-foreground/90 hidden sm:inline">Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm text-foreground/70 hover:text-[hsl(196,100%,46%)] transition-smooth relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[hsl(196,100%,46%)] group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
            <a href="#contact" className="ml-3">
              <Button
                size="sm"
                className="rounded-full px-5 border border-[hsl(196,100%,46%,0.5)] bg-transparent text-[hsl(196,100%,46%)] hover:bg-[hsl(196,100%,46%)] hover:text-[hsl(228,60%,6%)] transition-smooth text-sm font-semibold"
              >
                Contact
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-card transition-smooth touch-target"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-[hsl(228,50%,6%,0.98)] backdrop-blur-xl animate-fade-in z-40">
            <div className="flex flex-col p-6 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="px-4 py-3.5 rounded-lg text-foreground/80 hover:text-[hsl(196,100%,46%)] hover:bg-[hsl(228,45%,12%)] transition-smooth text-base font-medium touch-target"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[hsl(196,100%,46%,0.1)] mt-2">
                <a href="#contact" onClick={handleNavClick}>
                  <Button className="w-full rounded-full border border-[hsl(196,100%,46%,0.5)] bg-transparent text-[hsl(196,100%,46%)] hover:bg-[hsl(196,100%,46%)] hover:text-[hsl(228,60%,6%)] transition-smooth font-semibold py-3">
                    Contact
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
