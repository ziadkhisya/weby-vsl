"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Jordan Ruiz",
    role: "COO, Skyline Roofing",
    quote:
      "RoofFlow let us treat every hail event like a controlled product launch. Consults booked in 15 minutes, adjuster prep delivered automatically, and crews always know what’s next.",
  },
  {
    name: "Sierra Chan",
    role: "VP of Growth, Helios Exteriors",
    quote:
      "We stopped debating whether leads watched the VSL. The anti-skip flow tells us—and the nurture fires the exact financing clip needed to close the loop.",
  },
  {
    name: "Marcus Allen",
    role: "Owner, NorthPeak Roofs",
    quote:
      "Board approvals used to take quarters. Now board presidents send the RoofFlow recap link to every resident, and we’re in contract within weeks.",
  },
  {
    name: "Ariana Gomez",
    role: "Sales Director, SummitShield Roofing",
    quote:
      "Our reps never chase ghosted homeowners anymore. If they hit 75%, RoofFlow texts them a checklist and drops them onto a fast-lane route straight into production.",
  },
];

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    const autoplay = window.setInterval(() => {
      if (!isPaused) {
        api.scrollNext();
      }
    }, 6000);

    return () => {
      window.clearInterval(autoplay);
    };
  }, [api, isPaused]);

  return (
    <div
      className="relative rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">
            Proof from the field
          </p>
          <h2 className="font-display text-[clamp(2rem,3vw+1rem,3rem)] text-white">
            Teams that live inside RoofFlow
          </h2>
        </div>
      </div>
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="lg:-mx-4"
      >
        <CarouselContent className="lg:-ml-4 py-8">
          {testimonials.map((item) => (
            <CarouselItem
              key={item.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="relative h-full rounded-2xl border-white/10 bg-ink/70 p-6 text-white/80 backdrop-blur transition-all duration-500 ease-out hover:scale-110 hover:bg-ink hover:shadow-2xl hover:border-accent/50 hover:z-50 transform">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-[clamp(1.2rem,1.3vw+0.9rem,1.6rem)] text-white">
                    {item.name}
                  </CardTitle>
                  <p className="text-xs uppercase tracking-[0.35em] text-accent/70">
                    {item.role}
                  </p>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-white/75">
                  “{item.quote}”
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-white/20 bg-white/10 text-white hover:border-accent/40 hover:bg-accent/20" />
        <CarouselNext className="border-white/20 bg-white/10 text-white hover:border-accent/40 hover:bg-accent/20" />
      </Carousel>
    </div>
  );
}

export default Testimonials;
