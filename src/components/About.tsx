import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Cpu, LineChart, Layout, CheckCircle2, Users } from "lucide-react";

const capabilities = [
  {
    icon: LineChart,
    label: "Data Science & Analytics",
    value: "Turning raw variables into actionable intelligence and strategic foresight.",
  },
  {
    icon: Cpu,
    label: "Autonomous AI Agents",
    value: "Intelligent systems designed to execute complex tasks, not just process text.",
  },
  {
    icon: Layout,
    label: "Custom Application Development",
    value: "Bespoke digital architecture built for high-velocity performance and scale.",
  },
  {
    icon: Users,
    label: "Core Composition",
    value: "Multi-disciplinary team with agnostic stack flexibility and deep-level execution.",
  },
];

const values = [
  "Predictable Performance",
  "Strategic Implementation",
  "Future-Proof Systems",
  "Efficiency by Design",
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/10">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              The Zelij Philosophy
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              In traditional <span className="font-bold text-foreground">Zellige tilework</span>, intricate beauty is born from the meticulous placement of hand-cut pieces. We bring that same <span className="font-bold text-foreground">deterministic rigor</span> to the digital world. At Zelij Labs, we don't just write code—we engineer systems where every component serves a larger, high-performance purpose.
            </p>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              We specialize in bridging the gap between cutting-edge complexity and seamless business outcomes. Our mission is to architect environments where data, automation, and infrastructure converge with <span className="font-bold text-foreground">architectural precision</span>.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-accent/70 group-hover:text-accent transition-colors" />
                  <span className="text-foreground/90 font-medium tracking-tight italic">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Zelij Manifest (Terminal) */}
          <Card className="border-accent/15 bg-[#0a0a0b] overflow-hidden shadow-2xl rounded-xl">
            <div className="bg-muted/10 px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <span className="text-[11px] text-muted-foreground font-mono tracking-widest uppercase">zelij_manifest.sys</span>
            </div>
            <CardContent className="p-10">
              <div className="space-y-10 font-mono">
                {capabilities.map((item, i) => (
                  <div key={i} className="space-y-3 group">
                    <div className="flex items-center gap-3 text-accent/90">
                      <item.icon className="w-5 h-5" />
                      <span className="text-xs uppercase tracking-[0.2em] font-bold">
                        {item.label}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground/80 pl-8 border-l border-accent/20 leading-relaxed group-hover:text-muted-foreground transition-colors">
                      {item.value}
                    </div>
                  </div>
                ))}

                <div className="pt-6 mt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-green-500/50" />
                    <span className="text-[10px] uppercase text-muted-foreground tracking-widest font-bold">
                      System Status
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] text-green-500/80 font-bold uppercase tracking-tighter">
                      Ready for Deployment
                    </span>
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