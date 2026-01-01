import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Cpu, Database, Network } from "lucide-react";

const capabilities = [
  {
    icon: Cpu,
    label: "Intelligence",
    value: "Agentic Workflows / LLM Orchestration",
  },
  {
    icon: Database,
    label: "Data Pipeline",
    value: "High-Throughput / Real-time Streams",
  },
  {
    icon: Network,
    label: "Infrastructure",
    value: "Infrastructure as Code / Edge Compute",
  },
];

const values = [
  "Deterministic execution",
  "Architectural observability",
  "Resilient automation",
  "Computational efficiency",
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/10">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Philosophy</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              In traditional **Zellige tilework**, complex geometry is achieved through the meticulous arrangement of hand-cut pieces. We apply this same rigor to modern engineering.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Born from a background in high-stakes algorithmic environments, we don&apos;t just build software—we engineer systems where data, autonomous agents, and infrastructure converge with mathematical certainty.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <Terminal className="w-4 h-4 text-accent/60 group-hover:text-accent transition-colors" />
                  <span className="text-foreground/80 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-accent/10 bg-[#0a0a0a] overflow-hidden shadow-2xl">
            <div className="bg-muted/20 px-4 py-2 border-b border-white/5 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
              <span className="text-[10px] text-muted-foreground font-mono ml-2">zelij_manifest.sys</span>
            </div>
            <CardContent className="p-8">
              <div className="space-y-8 font-mono">
                {capabilities.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2 text-accent">
                      <item.icon className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-tighter font-bold">{item.label}</span>
                    </div>
                    <div className="text-sm text-gray-300 pl-6 border-l border-white/10 italic">
                      {item.value}
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 mt-4 border-t border-white/5">
                  <div className="flex items-center justify-between text-[10px] uppercase text-muted-foreground">
                    <span>System Status</span>
                    <span className="text-green-500 animate-pulse">● Nominal</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}