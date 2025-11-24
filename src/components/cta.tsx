import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <div
      id="cta"
      className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/20 via-ink-2/90 to-ink p-8 shadow-[0_35px_120px_-65px_rgba(76,119,255,0.9)] sm:p-12"
    >
      <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-accent-2/20 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            Book the strategic consult
          </p>
          <h2 className="font-display text-[clamp(2.25rem,3vw+1.5rem,3.5rem)] text-white">
            Build your RoofFlow acquisition engine in 45–90 minutes.
          </h2>
          <p className="max-w-2xl text-sm text-white/75">
            Walk through the exact dark-room funnel, automation stack, and KPI
            dashboard we deploy for high-ticket roofing partners. Leave with a
            tailored plan, timelines, and pricing locked.
          </p>
          <ul className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-accent" />
              Capacity analysis + revenue forecast
            </li>
            <li className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-accent" />
              Automation + CRM wiring roadmap
            </li>
            <li className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-accent" />
              Creative + VSL scripting alignment
            </li>
            <li className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-accent" />
              Deployment timeline & team training
            </li>
          </ul>
        </div>
        <div className="flex w-full max-w-md flex-col gap-4 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur">
          <p className="text-sm font-semibold text-white">Next steps</p>
          <ol className="space-y-3 text-sm text-white/70">
            <li>1. Submit the consult request below.</li>
            <li>2. We send pre-call homework + access to the asset list.</li>
            <li>3. Strategy session on Zoom with Webyagency partners.</li>
          </ol>
          <Button
            asChild
            size="lg"
            className="rounded-2xl bg-accent px-6 py-5 text-base font-semibold text-ink hover:bg-accent-2"
          >
            <a href="mailto:intake@webyagency.com">
              Reserve my consult
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="rounded-2xl border border-white/20 bg-white/10 text-white hover:border-accent/40 hover:bg-accent/20"
          >
            <a href="#vsl">Rewatch the VSL</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cta;

