import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Terminal, Mail, Cpu, Send } from "lucide-react";
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
      title: "Intake Received",
      description: "Our engineering team will review your technical scope.",
    });
    setFormData({ name: "", email: "", technicalScope: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Technical Intake</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Have a complex data challenge or an AI agent workflow in mind? Let’s discuss the architectural requirements.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-muted/20">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Direct Access</div>
                  <div className="font-mono text-sm">hello@zelijlabs.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-muted/20">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground">System Status</div>
                  <div className="text-sm font-medium">Accepting new specialized builds</div>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-accent/10 shadow-2xl shadow-accent/5 bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent" />
                Project Parameters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Name"
                    className="bg-muted/30 border-none focus-visible:ring-1 focus-visible:ring-accent"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-muted/30 border-none focus-visible:ring-1 focus-visible:ring-accent"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Describe the technical scope (AI, Data, Scale)..."
                    className="min-h-[160px] bg-muted/30 border-none focus-visible:ring-1 focus-visible:ring-accent resize-none"
                    value={formData.technicalScope}
                    onChange={(e) => setFormData({ ...formData, technicalScope: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 transition-all">
                  Submit for Review
                  <Send className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-tighter">
                  Encrypted transmission focus. Response within 1-2 business cycles.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}