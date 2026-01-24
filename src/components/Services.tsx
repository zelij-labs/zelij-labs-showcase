import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Cloud, Terminal, Database, LineChart, Zap } from "lucide-react";

const services = [
  {
    icon: LineChart,
    title: "Data Science & Analytics",
    description: "Transforming complex datasets into actionable foresight. We build the models that empower leadership to make evidence-based strategic decisions.",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    description: "Architecting high-velocity pipelines and enterprise storage. We turn raw information into a secure, production-ready asset at any scale.",
  },
  {
    icon: Cpu,
    title: "Autonomous AI Agents",
    description: "Intelligent systems that move beyond chat into execution. We deploy agents that automate complex workflows with mathematical precision.",
  },
  {
    icon: Cloud,
    title: "System Orchestration",
    description: "Designing scalable cloud and edge environments for high-compute workloads, ensuring global performance and strict data sovereignty.",
  },
  {
    icon: Zap, // THIS IS WHERE YOUR EMBEDDED LIVES
    title: "Full-Stack Optimization",
    description: "From silicon-level embedded logic to high-level software tuning. We eliminate bottlenecks to ensure your code extracts maximum value from the hardware.",
  },
  {
    icon: Terminal,
    title: "Bespoke Engineering",
    description: "Custom application development where deep technical rigor meets intuitive design. We build tools that are as powerful as they are usable.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Technical Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We bridge the gap between experimental technology and production-ready business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-border/40 bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-lg bg-accent/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <service.icon className="w-6 h-6 text-accent/80" />
                </div>
                <CardTitle className="text-xl font-semibold tracking-wide">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}