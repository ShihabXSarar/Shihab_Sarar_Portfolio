import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Thesis from "@/components/Thesis";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Fixed Background GIF */}
      <div
        className="fixed inset-0 z-[-1] opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: 'url("/Background.gif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <Navigation />
      <Hero />
      <Experience />
      <Education />
      <Thesis />
      <Skills />
      <Projects />
      <Awards />
      <Interests />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
