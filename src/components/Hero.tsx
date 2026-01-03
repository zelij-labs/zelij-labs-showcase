import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";
import heroBg from "@/assets/hero-chicago-dark.jpg";
import circuitOverlay from "@/assets/hero-circuit-minimal.jpg";

export function Hero() {
  const { theme } = useTheme();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      {/* Digital Circuit Pattern Overlay with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ 
          backgroundImage: `url(${circuitOverlay})`,
          transform: `translateY(${scrollY * 0.15}px)`,
          mixBlendMode: 'lighten',
        }}
      />
      {/* Gradient Mesh Overlay - black/blue tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center items-center gap-6">
          <img 
            src={isDark ? logoDark : logoLight} 
            alt="Zelij Labs Logo" 
            className="w-20 h-20 md:w-24 md:h-24" 
          />
          <h1 className="text-5xl md:text-7xl font-semibold font-montserrat text-foreground uppercase tracking-wide">
            Zelij Labs
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Engineering Intelligence into the Modern Stack.
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          We build autonomous AI agents, high-frequency data architectures, and the cloud infrastructure that powers them. Precision-crafted software for the frontier of automation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="group bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Start a Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            Core Specialization
          </Button>
        </div>
      </div>
    </section>
  );
}
