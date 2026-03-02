import { useState } from "react";
import { Brain, Shield, Globe, Monitor } from "lucide-react";
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

  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Panel */}
      <section className="relative flex flex-1 flex-col justify-between overflow-hidden bg-gradient-to-br from-[hsl(270,65%,30%)] via-[hsl(258,58%,22%)] to-[hsl(240,50%,14%)] p-10 md:p-14 lg:p-20 text-white">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-indigo-400/10 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/10">
              <Brain className="h-6 w-6 text-purple-300" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-wide">MindFleet</h2>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-purple-300/80">
                Distributor OS
              </p>
            </div>
          </div>

          <h1 className="mt-12 max-w-md text-3xl font-extrabold leading-[1.15] md:text-4xl lg:text-[2.75rem]">
            The future of
            <br />
            supply chain AI
            <br />
            <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
              is here.
            </span>
          </h1>

          <ul className="mt-12 space-y-7">
            {features.map((f) => (
              <li key={f.title} className="flex gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] ring-1 ring-white/10">
                  <f.icon className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <p className="font-semibold tracking-tight">{f.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-purple-200/60">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="relative z-10 mt-14 text-[11px] font-medium tracking-wider text-purple-400/40">
          © 2026 MindFleet AI · All rights reserved
        </p>
      </section>

      {/* Right Panel */}
      <section className="flex flex-1 flex-col items-center justify-center bg-background p-10 md:p-14 lg:p-20">
        <div className="w-full max-w-sm space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
              Get Started
            </h2>
            <p className="text-sm text-muted-foreground">
              Explore what MindFleet Distributor OS can do for your operations.
            </p>
          </div>

          <div className="space-y-4">
            <Button
              className="w-full gap-2.5 h-14 text-[15px] font-semibold rounded-xl shadow-lg shadow-purple-500/20 bg-gradient-to-r from-[hsl(270,60%,40%)] to-[hsl(255,55%,35%)] hover:from-[hsl(270,60%,35%)] hover:to-[hsl(255,55%,30%)] text-white transition-all duration-200 hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => setDemoOpen(true)}
            >
              <Monitor className="h-5 w-5" />
              Demo of the Product
            </Button>

            <Button
              variant="outline"
              className="w-full gap-2.5 h-14 text-[15px] font-semibold rounded-xl border-2 border-border text-foreground hover:bg-muted transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <a href="#product-overview">
                <Globe className="h-5 w-5" />
                Product Overview
              </a>
            </Button>
          </div>
        </div>

        <footer className="mt-auto flex w-full items-center justify-between pt-10">
          <span className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground/60">
            MINDFLEET AI
          </span>
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
            SECURE
          </span>
        </footer>
      </section>

      {/* Demo Dialog */}
      <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
        <DialogContent className="text-center rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl">🚀 Launching Soon!</DialogTitle>
            <DialogDescription className="pt-2 text-base">
              We're putting the finishing touches on our interactive demo. Stay tuned!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Index;
