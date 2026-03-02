import { useState } from "react";
import { Brain, Shield, Globe, Monitor, Rocket } from "lucide-react";
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
    <main className="min-h-screen bg-gradient-to-br from-[hsl(270,60%,28%)] via-[hsl(260,55%,22%)] to-[hsl(245,50%,18%)] text-white">
      {/* Nav */}
      <header className="flex items-center gap-3 px-8 py-6 md:px-16">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
          <Brain className="h-6 w-6 text-purple-300" />
        </div>
        <div>
          <h2 className="text-lg font-bold tracking-wide">MindFleet</h2>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-300">
            Distributor OS
          </p>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-8 py-20 text-center md:py-32">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          The future of supply chain AI is here.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg text-purple-200/80">
          Explore what MindFleet Distributor OS can do for your operations.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            className="h-14 w-full gap-2 rounded-xl bg-white text-base font-semibold text-[hsl(270,60%,28%)] hover:bg-white/90 sm:w-auto sm:px-8"
            onClick={() => setDemoOpen(true)}
          >
            <Monitor className="h-5 w-5" />
            Demo of the Product
          </Button>

          <Button
            variant="outline"
            className="h-14 w-full gap-2 rounded-xl border-white/30 text-base text-white hover:bg-white/10 sm:w-auto sm:px-8"
          >
            <Rocket className="h-5 w-5" />
            Product Overview
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-4xl gap-8 px-8 pb-24 md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
              <f.icon className="h-6 w-6 text-purple-300" />
            </div>
            <p className="text-lg font-semibold">{f.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-purple-200/70">
              {f.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between border-t border-white/10 px-8 py-6 md:px-16">
        <span className="text-xs font-semibold tracking-widest text-purple-300/60">
          © 2026 MINDFLEET AI
        </span>
        <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          SECURE
        </span>
      </footer>

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
    </main>
  );
};

export default Index;
