import { Lightbulb, Gauge, Workflow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefitItems = [
  {
    icon: Lightbulb,
    title: "Conversion room engineered for intent",
    description:
      "Dark-mode narrative, calibrated pacing, and interactive qualifiers keep homeowners engaged start to finish.",
    bullets: ["Average watch time: 89%", "Real-time drop-off alerts", "Qualifies roofing scope live"],
  },
  {
    icon: Gauge,
    title: "Calendar fill without overstaffing",
    description:
      "Dynamic scheduler respects crew capacity, territories, and storm windows so you only take profitable meetings.",
    bullets: ["Crew-balancing logic per zip", "Automatic travel buffers", "Owner alerts for VIP leads"],
  },
  {
    icon: Workflow,
    title: "Automation that feels human",
    description:
      "Sequences deliver weather-driven insights, financing frames, and testimonial proof the minute the VSL ends.",
    bullets: ["Hyper-personalized SMS & email", "CRM-ready tasking", "No-code tweaks for your team"],
  },
];

export function Benefits() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {benefitItems.map((benefit) => (
        <Card
          key={benefit.title}
          className="group flex flex-col justify-between rounded-2xl border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_-40px_rgba(76,119,255,0.6)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_-55px_rgba(76,119,255,0.7)]"
        >
          <CardHeader className="space-y-4">
            <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent/20 text-accent">
              <benefit.icon className="h-6 w-6" />
            </div>
            <CardTitle className="font-display text-[clamp(1.35rem,2vw+0.8rem,1.75rem)] text-white">
              {benefit.title}
            </CardTitle>
            <p className="text-sm text-white/70">{benefit.description}</p>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-white/65">
            {benefit.bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-2">
                <span className="mt-1 size-1 rounded-full bg-accent" />
                <span>{bullet}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Benefits;

