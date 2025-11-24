import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { TopBar } from "@/components/top-bar";
import { VslPlayer } from "@/components/vsl-player";


export default function Home() {

  return (
    <section className="relative flex w-full min-h-screen flex-col items-center justify-center self-stretch text-center pt-16">
      <TopBar />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-6 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(48,57,70,0.65)_0%,_rgba(4,6,8,0)_65%)] blur-3xl" />
        <div className="absolute -left-44 top-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(37,43,54,0.72)_0%,_rgba(6,7,9,0)_72%)] blur-2xl" />
        <div className="absolute -right-44 top-56 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(30,35,44,0.7)_0%,_rgba(5,6,8,0)_72%)] blur-2xl" />
        <div className="absolute inset-x-0 bottom-[-100px] h-[600px] bg-[radial-gradient(ellipse_at_bottom,_rgba(56,189,248,0.15)_0%,_rgba(255,255,255,0.03)_40%,_transparent_70%)] blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.3,
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
            backgroundPosition: "0 0",
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="flex w-full max-w-6xl flex-col items-center gap-12 px-4 sm:gap-14 sm:px-6 lg:gap-16 lg:px-12">
        <div className="w-full max-w-[68rem] space-y-6 sm:space-y-5 lg:space-y-4">
          <h1 className="mx-auto max-w-none font-display text-[clamp(2.25rem,4vw,3.6rem)] font-semibold leading-tight text-white text-balance">
            From Random Shitty Leads to Predictable, Qualified, High-Intent Jobs Year Around.
          </h1>
          <p className="mx-auto max-w-[48rem] text-[15px] text-white/50 sm:text-lg">
            <span className="block sm:hidden">
              Most roofers rely on luck. Here&apos;s the system that
            </span>
            <span className="block sm:hidden">
              puts job flow on autopilot. One Roofer
            </span>
            <span className="block sm:hidden">
              Per City Gets This Advantage.
            </span>
            <span className="hidden sm:inline">
              Most roofers rely on luck. Here&apos;s the system that puts job flow
            </span>
            <span className="hidden sm:block">
              on autopilot. One Roofer Per City Gets This Advantage.
            </span>
          </p>
        </div>

        <div className="flex w-full max-w-3xl flex-col items-center gap-16 self-center sm:gap-20">
          <div className="relative w-full rounded-[26px] border border-white/10 bg-white/10 p-1.5 shadow-[0_0_40px_-10px_rgba(76,119,255,0.1)] backdrop-blur-xl ring-1 ring-white/10">
            <VslPlayer />
          </div>

          <div className="flex w-full flex-col items-center px-6 text-center sm:px-0">
            <h2 className="w-full whitespace-nowrap font-display text-[clamp(1rem,4.8vw,2.05rem)] font-semibold text-white sm:w-auto sm:text-[clamp(1.7rem,2.4vw,2.25rem)]">
              Case Studies &amp; Testimonials.
            </h2>
            <p className="mt-2 max-w-[22rem] text-sm leading-relaxed text-white/50 sm:mt-1.5 sm:max-w-2xl sm:text-base">
              Take a look at our case studies and see what other roofers
              <span className="sm:hidden">
                {" "}
                say about Rooflow System &trade;.
              </span>
              <span className="hidden sm:inline">
                <br />
                say about Rooflow Aqcuisition System &trade;.
              </span>
            </p>
            <div className="mt-4 flex flex-col items-center gap-3 sm:mt-5 sm:flex-row">
              <Button
                asChild
                variant="ghost"
                className="group rounded-full px-8 py-5 text-sm font-semibold bg-white text-black border border-transparent shadow-[0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-300 hover:!bg-white/25 hover:!text-white hover:!backdrop-blur-md hover:!border-white/20 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] active:scale-[0.98]"
              >
                <Link href="/testimonials" className="flex items-center gap-2">
                  <span className="relative z-[1]">View Testimonials</span>
                  <ArrowRight className="h-4 w-4 text-ink/70 transition-colors duration-300 group-hover:!text-white" strokeWidth={2} />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="rounded-full px-4 py-5 text-sm font-semibold bg-white/10 text-white border border-white/10 transition-all duration-300 hover:!bg-white/15 hover:!backdrop-blur-md hover:!border-white/20 active:scale-[0.98]"
              >
                <Link href="/case-studies" className="flex items-center justify-center">
                  <span className="relative z-[1]">View Case Studies</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-[72px] sm:mt-[144px]">
        <Footer />
      </div>
    </section >
  );
}
