import { useState } from "react";
import { Brain, Shield, Globe, Rocket, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const features = [
  {
    icon: Brain,
    title: "AI-Driven Logistics",
    desc: "Optimize routes, manage stock, and predict demand with real-time intelligence.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Role-based access, encrypted logs, and industrial-grade security as standard.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    desc: "Built for massive distribution networks across regional and urban centers.",
  },
];

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [overviewOpen, setOverviewOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Panel */}
      <section className="flex flex-1 flex-col justify-between bg-gradient-to-br from-[hsl(270,60%,28%)] via-[hsl(260,55%,22%)] to-[hsl(245,50%,18%)] p-8 md:p-12 lg:p-16 text-white">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
              <Brain className="h-6 w-6 text-purple-300" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-wide">MindFleet</h2>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-300">
                Distributor OS
              </p>
            </div>
          </div>

          <h1 className="mt-10 max-w-md text-3xl font-bold leading-tight md:text-4xl lg:text-[2.6rem]">
            The future of supply chain AI is here.
          </h1>

          <ul className="mt-10 space-y-6">
            {features.map((f) => (
              <li key={f.title} className="flex gap-4">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <f.icon className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <p className="font-semibold">{f.title}</p>
                  <p className="text-sm leading-relaxed text-purple-200/80">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-xs text-purple-300/60">© 2026 MindFleet AI</p>
      </section>

      {/* Right Panel */}
      <section className="flex flex-1 flex-col items-center justify-center gap-6 bg-background p-8 md:p-12 lg:p-16">
        <div className="w-full max-w-sm space-y-5">
          <h2 className="text-center text-2xl font-bold text-foreground">Get Started</h2>
          <p className="text-center text-sm text-muted-foreground">
            Explore what MindFleet Distributor OS can do for your operations.
          </p>

          <Button
            className="w-full gap-2 h-14 text-base bg-[hsl(270,60%,38%)] hover:bg-[hsl(270,60%,32%)] text-white"
            onClick={() => setDemoOpen(true)}
          >
            <Monitor className="h-5 w-5" />
            Demo of the Product
          </Button>

          <Button
            variant="outline"
            className="w-full gap-2 h-14 text-base border-[hsl(270,60%,38%)] text-[hsl(270,60%,38%)] hover:bg-[hsl(270,60%,38%)]/10"
            onClick={() => setOverviewOpen(true)}
          >
            <Rocket className="h-5 w-5" />
            Product Overview
          </Button>
        </div>

        <footer className="mt-auto flex w-full items-center justify-between pt-8">
          <span className="text-xs font-semibold tracking-widest text-muted-foreground">
            MINDFLEET AI
          </span>
          <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            SECURE
          </span>
        </footer>
      </section>

      {/* Demo Dialog */}
      <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
        <DialogContent className="text-center">
          <DialogHeader>
            <DialogTitle className="text-xl">🚀 Launching Soon!</DialogTitle>
            <DialogDescription className="pt-2 text-base">
              We're putting the finishing touches on our interactive demo. Stay tuned!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Overview Dialog */}
      <Dialog open={overviewOpen} onOpenChange={setOverviewOpen}>
        <DialogContent className="text-center">
          <DialogHeader>
            <DialogTitle className="text-xl">🚀 Launching Soon!</DialogTitle>
            <DialogDescription className="pt-2 text-base">
              Our comprehensive product overview is on its way. Check back soon!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Index;
