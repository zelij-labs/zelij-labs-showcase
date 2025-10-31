import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Cloud, Briefcase, Database, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom web and mobile applications built with modern frameworks and best practices.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Scalable infrastructure design and implementation on AWS, Azure, and GCP.",
  },
  {
    icon: Briefcase,
    title: "Technical Consulting",
    description: "Strategic guidance to align technology decisions with business objectives.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Efficient data pipelines, warehousing solutions, and analytics infrastructure.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Comprehensive security audits and implementation of industry standards.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "System analysis and optimization for speed, reliability, and cost efficiency.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive technology services tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
