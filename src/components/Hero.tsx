import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-foreground rounded-full animate-pulse" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-midnight-light to-accent bg-clip-text text-transparent">
          Zelij Labs
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Crafting elegant technical solutions for complex challenges
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          We build scalable software, architect cloud infrastructure, and deliver strategic technology consulting
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
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
