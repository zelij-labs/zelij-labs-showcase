import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Precision in execution",
  "Transparent communication",
  "Scalable solutions",
  "Continuous innovation",
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Zelij Labs</h2>
            <p className="text-muted-foreground text-lg mb-6">
              We're a boutique technology consultancy dedicated to delivering exceptional solutions 
              that drive real business value. Our team combines deep technical expertise with 
              strategic thinking to solve complex challenges.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Like the intricate patterns of Zellige tilework, we believe in precision, 
              craftsmanship, and attention to detail in every project we undertake.
            </p>
            
            <div className="space-y-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-accent/20">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold text-accent mb-2">10+</div>
                  <div className="text-muted-foreground">Years Combined Experience</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-accent mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-accent mb-2">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
