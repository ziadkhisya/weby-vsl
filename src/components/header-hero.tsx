import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeaderHero() {
  return (
    <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center">
      <div className="flex-1 space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent/80">
          Webyagency presents
        </p>
        <h1 className="max-w-3xl font-display text-[clamp(2.75rem,4vw+1.5rem,4.5rem)] leading-[1.05] text-balance">
          The{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-10">
              RoofFlow Roofing Acquisition System
            </span>
            <span className="absolute inset-x-2 bottom-1 top-auto -z-10 block h-3 rounded-full bg-accent/30 blur-xl" />
          </span>{" "}
          engineered to flood your calendar with premium roof replacements.
        </h1>
        <p className="max-w-2xl text-[clamp(1.1rem,1.8vw+0.7rem,1.35rem)] text-white/75 text-balance">
          A dark-room VSL experience built to keep prospects watching, qualify
          them in real-time, and route the right homeowners straight into your
          consult pipeline—no media-buying gymnastics required.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            asChild
            size="lg"
            className="group rounded-2xl bg-accent px-6 py-6 text-base font-semibold text-ink shadow-[0_20px_40px_-25px_rgba(76,119,255,0.8)] transition hover:bg-accent-2 hover:text-ink"
          >
            <Link href="#vsl" aria-label="Jump to the RoofFlow VSL video player">
              Watch the VSL
              <Play className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="rounded-2xl border border-white/20 bg-white/5 px-6 py-6 text-base font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/10"
          >
            <Link href="#cta" aria-label="Book the strategic consult now">
              Book the consult
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <dl className="grid gap-6 text-sm text-white/70 sm:grid-cols-3">
          <div>
            <dt className="font-semibold text-white/80">Avg. close time</dt>
            <dd>48h after VSL completion</dd>
          </div>
          <div>
            <dt className="font-semibold text-white/80">Homeowner drop-off</dt>
            <dd>&lt; 6% across the full video</dd>
          </div>
          <div>
            <dt className="font-semibold text-white/80">Pipeline lift</dt>
            <dd>3.2x consult volume in 60 days</dd>
          </div>
        </dl>
      </div>

      <div className="flex w-full flex-1 flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8 lg:max-w-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent/70">
          Trusted by
        </p>
        <div className="grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-3">
          {["Skyline Roofing", "Helios Exteriors", "NorthPeak Roofs"].map(
            (label) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center text-[13px] font-semibold text-white/70 backdrop-blur"
              >
                {label}
              </div>
            ),
          )}
        </div>
        <p className="text-sm text-white/60">
          RoofFlow slots leaders directly into a 4-step deal-closing cadence—
          gated watch page, dynamic nurture, pre-call qualification, and sales
          automation hand-off.
        </p>
      </div>
    </div>
  );
}

export default HeaderHero;
