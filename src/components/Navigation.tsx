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
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Thesis", href: "#thesis" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Awards", href: "#awards" },
    { label: "Interests", href: "#interests" },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[60] transition-all duration-300 ${scrolled || isOpen
        ? "bg-[hsl(228,50%,8%,0.98)] backdrop-blur-xl border-b border-[hsl(196,100%,46%,0.1)]"
        : "bg-transparent"
        }`}>
        <div className="container mx-auto px-4 relative z-[60]">
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
              className="md:hidden p-2 rounded-lg hover:bg-[hsl(196,100%,46%,0.1)] transition-smooth touch-target"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6 text-[hsl(196,100%,46%)]" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Professional Full-Screen Solid Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 w-screen h-[100dvh] bg-[hsl(228,50%,6%)] z-[50] flex flex-col pt-24 px-6 gap-3 overflow-y-auto pb-8 backdrop-blur-3xl">
          <div className="flex-1 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="px-6 py-4 rounded-xl text-foreground/90 hover:text-[hsl(196,100%,46%)] hover:bg-[hsl(196,100%,46%,0.08)] transition-smooth text-lg font-semibold border border-transparent hover:border-[hsl(196,100%,46%,0.2)] touch-target w-full text-center"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-6 border-t border-[hsl(196,100%,46%,0.1)] mt-auto mb-4">
            <a href="#contact" onClick={handleNavClick}>
              <Button className="w-full rounded-full bg-[hsl(196,100%,46%)] text-[hsl(228,60%,6%)] hover:bg-[hsl(196,100%,40%)] transition-smooth font-extrabold py-6 text-base shadow-[0_0_20px_hsl(196,100%,46%,0.3)]">
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
