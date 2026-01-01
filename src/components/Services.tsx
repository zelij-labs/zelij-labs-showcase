import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Cloud, Terminal, Database, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "AI & Autonomous Agents",
    description: "Designing agentic workflows and LLM-integrated systems that move beyond chat into autonomous execution.",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    description: "Production-grade pipelines and analytics infrastructure designed for high-velocity data environments.",
  },
  {
    icon: Terminal,
    title: "Custom Engineering",
    description: "Building resilient, specialized software where reliability and architectural integrity are non-negotiable.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Automated, scalable cloud deployments optimized for high-compute workloads and data residency.",
  },
  {
    icon: Zap,
    title: "System Optimization",
    description: "Deep-level performance tuning to reduce latency and maximize computational efficiency.",
  },
  {
    icon: Shield,
    title: "Security & Hardening",
    description: "Applying rigorous security protocols to protect proprietary data models and automated workflows.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Technical Domain</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We bridge the gap between experimental AI and production-ready systems.
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