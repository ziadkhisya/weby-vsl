import { ExternalLink, Flag, CheckCircle2, TrendingUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

type CaseStudy = {
  company: string;
  person: string;
  role: string;
  quote: string;
  challenge: string;
  solution: string;
  result: string;
  readMoreUrl: string;
};

const caseStudies: CaseStudy[] = [
  {
    company: "Skyline Roofing",
    person: "Mark Stevens",
    role: "Owner",
    quote:
      "We were drowning in bad leads. RoofFlow didn't just bring us leads; it brought us educated homeowners ready to buy. The difference in quality is night and day.",
    challenge:
      "Storm leads were saturating the call center with unqualified renters, causing a massive bottleneck.",
    solution:
      "Deployed RoofFlow VSL with territory logic to filter and educate prospects before they ever booked a call.",
    result: "4.3x lift in consult-to-close rate",
    readMoreUrl: "#",
  },
  {
    company: "NorthPeak Roofs",
    person: "Sarah Jenkins",
    role: "VP of Sales",
    quote:
      "HOA boards are notoriously slow. The VSL recap modal helped us answer objections before we even met with the board, speeding up our sales cycle significantly.",
    challenge:
      "Sales cycles were stretching beyond 120 days due to slow HOA board responses and disjointed communication.",
    solution:
      "Implemented automated playbooks that assigned board champions and delivered curated testimonial reels.",
    result: "Net-new revenue up $1.2M in Q2",
    readMoreUrl: "#",
  },
  {
    company: "Helios Exteriors",
    person: "David Chen",
    role: "Operations Director",
    quote:
      "Our marketing stack was a mess of 6 different tools. RoofFlow consolidated everything and gave us visibility we never had before.",
    challenge:
      "Retail leads stalled at financing, and insurance clients ghosted after adjuster visits. Team was juggling too many tools.",
    solution:
      "Orchestrated finance explainers and adjuster follow-up tasks directly within the RoofFlow ecosystem.",
    result: "Production scheduled 2 weeks faster",
    readMoreUrl: "#",
  },
];

export function CaseStudies() {
  return (
    <div className="w-full py-10">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="mb-8 flex items-center justify-center px-4 sm:justify-end sm:px-0">
          <div className="flex gap-2">
            <CarouselPrevious className="static translate-y-0 border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white" />
            <CarouselNext className="static translate-y-0 border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white" />
          </div>
        </div>

        <CarouselContent className="-ml-4">
          {caseStudies.map((study, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-full lg:basis-full">
              <div className="p-1">
                <Card className="overflow-hidden rounded-[32px] border-white/10 bg-white/5 backdrop-blur-sm will-change-transform">
                  <CardContent className="flex flex-col gap-8 p-8 lg:flex-row lg:gap-12 lg:p-12">
                    {/* Left Column: Quote */}
                    <div className="flex flex-1 flex-col justify-between gap-8">
                      <div className="space-y-6">
                        <span className="font-display text-6xl text-accent">“</span>
                        <p className="font-display text-2xl leading-relaxed text-white sm:text-3xl lg:text-[2rem]">
                          {study.quote}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                          {study.company}
                        </h4>
                        <p className="text-sm text-white/50">
                          {study.person}, {study.role}
                        </p>
                      </div>
                    </div>

                    {/* Divider (Desktop only) */}
                    <div className="hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

                    {/* Right Column: Details */}
                    <div className="flex flex-1 flex-col gap-8">
                      <div className="flex justify-end">
                        <Link
                          href={study.readMoreUrl}
                          target="_blank"
                          className="group flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                        >
                          Read more
                          <ExternalLink className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                      </div>

                      <div className="grid gap-8">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-accent-2">
                            <Flag className="h-5 w-5" />
                            <h4 className="font-semibold">Challenge</h4>
                          </div>
                          <p className="text-base leading-relaxed text-white/70 text-left">
                            {study.challenge}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-accent-2">
                            <CheckCircle2 className="h-5 w-5" />
                            <h4 className="font-semibold">Solution</h4>
                          </div>
                          <p className="text-base leading-relaxed text-white/70 text-left">
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      <div className="mt-auto pt-8">
                        <div className="flex items-baseline gap-2">
                          <TrendingUp className="h-6 w-6 text-accent" />
                          <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                            {study.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}


