import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Terminal, Mail, Cpu, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    technicalScope: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Authenticated",
      description: "Our lead architect will review your project parameters shortly.",
    });
    setFormData({ name: "", email: "", technicalScope: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Strategic Intake
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Have a complex data challenge or an AI workflow in mind? Let’s define the 
              <span className="text-foreground italic"> architectural parameters</span> of your next build.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-[#0a0a0b]">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Secure Channel</div>
                  <div className="font-mono text-sm text-accent/90 underline decoration-accent/20">build@zelijlabs.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-[#0a0a0b]">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">System Capacity</div>
                  <div className="text-sm font-medium text-foreground/80">Available for specialized builds Q1 2026</div>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-accent/15 shadow-2xl shadow-accent/5 bg-[#0a0a0b] backdrop-blur-md">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-sm uppercase tracking-widest font-mono text-accent/80">
                <Terminal className="w-4 h-4" />
                Project_Parameters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Principal Name"
                    className="bg-muted/10 border-white/5 focus-visible:ring-1 focus-visible:ring-accent h-12"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-muted/10 border-white/5 focus-visible:ring-1 focus-visible:ring-accent h-12"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Briefly outline your vision or technical requirements (e.g., AI Agents, Data Pipelines, Custom Infrastructure)..."
                    className="min-h-[160px] bg-muted/10 border-white/5 focus-visible:ring-1 focus-visible:ring-accent resize-none p-4"
                    value={formData.technicalScope}
                    onChange={(e) => setFormData({ ...formData, technicalScope: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/80 text-accent-foreground font-bold py-7 transition-all group">
                  Initiate Review
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                <div className="flex items-center justify-center gap-2 text-[9px] text-muted-foreground uppercase tracking-widest">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Encrypted Transmission | Response within 48h</span>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// For your Footer (ensure same tracking/weight as Hero)
export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter uppercase">
          Zelij <span className="text-accent">Labs</span>
        </div>
        <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
          © 2026 Architectural Integrity
        </p>
      </div>
    </footer>
  );
}