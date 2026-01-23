import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";
import { GradientMesh } from "./GradientMesh";
import neuralBg from "@/assets/hero-neural-bg.jpg";

export function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-background">
      {/* Gradient Mesh Background - works in both light and dark mode */}
      <GradientMesh />

      {/* Subtle Neural Network Background */}
      <div
        className="absolute inset-0 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url(${neuralBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: isDark
            ? 'grayscale(100%) contrast(1.4)'
            : 'grayscale(100%) contrast(1.4) invert(1)',
          opacity: isDark ? 0.12 : 0.10,
        }}
      />

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
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Engineering Intelligence into the Modern Stack.
        </p>
        
        <p className="text-base md:text-lg text-foreground/70 mb-12 max-w-xl mx-auto">
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
