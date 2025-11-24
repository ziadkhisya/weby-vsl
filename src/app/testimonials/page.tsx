import Link from "next/link";
import { ArrowLeft, ArrowRight, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { TopBar } from "@/components/top-bar";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        name: "Michael Torres",
        company: "Summit Roofing Solutions",
        quote: "The RoofFlow Acquisition System completely transformed our business. We went from chasing bad leads to having a calendar full of qualified appointments. The predictability is unmatched.",
        rating: 5,
    },
    {
        name: "David Chen",
        company: "Apex Roofers",
        quote: "I was skeptical at first, but the results speak for themselves. We secured 3 major projects in the first month alone. The VSL does all the heavy lifting for us.",
        rating: 5,
    },
    {
        name: "Sarah Jenkins",
        company: "Jenkins & Sons Roofing",
        quote: "Finally, a system that actually delivers. No more tire kickers, just serious homeowners ready to move forward. It's been a game changer for our sales team.",
        rating: 5,
    },
    {
        name: "Robert Alverez",
        company: "Elite Roofing Co.",
        quote: "The quality of leads we get through RoofFlow is superior to anything else we've tried. The exclusive territory model gives us a huge advantage in our market.",
        rating: 5,
    },
    {
        name: "James Wilson",
        company: "Wilson Roofing",
        quote: "Implementation was smooth, and the support team is fantastic. They really understand the roofing industry and what it takes to close high-ticket jobs.",
        rating: 5,
    },
    {
        name: "Emily Davis",
        company: "Secure Roof Systems",
        quote: "We've doubled our closing rate since partnering with Webyagency. The pre-educated leads are ready to buy, making our job so much easier.",
        rating: 5,
    },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="group relative flex w-[350px] flex-shrink-0 flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1 will-change-transform">
        <div className="space-y-4">
            <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                        key={i}
                        className="h-4 w-4 fill-blue-500 text-blue-500"
                    />
                ))}
            </div>
            <p className="text-sm leading-relaxed text-white/80">
                &quot;{testimonial.quote}&quot;
            </p>
        </div>
        <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 text-white font-semibold text-sm">
                {testimonial.name.charAt(0)}
            </div>
            <div className="text-left">
                <p className="text-sm font-semibold text-white">
                    {testimonial.name}
                </p>
                <p className="text-xs text-white/50">{testimonial.company}</p>
            </div>
        </div>
    </div>
);

export default function TestimonialsPage() {
    return (
        <section className="relative flex w-full min-h-screen flex-col items-center justify-start self-stretch text-center pt-16 overflow-hidden">
            <TopBar />
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-6 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(48,57,70,0.65)_0%,_rgba(4,6,8,0)_65%)] blur-3xl" />
                <div className="absolute -left-44 top-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(37,43,54,0.72)_0%,_rgba(6,7,9,0)_72%)] blur-2xl" />
                <div className="absolute -right-44 top-56 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(30,35,44,0.7)_0%,_rgba(5,6,8,0)_72%)] blur-2xl" />
                <div className="absolute inset-x-[-12%] bottom-[-240px] h-[420px] bg-[radial-gradient(circle,_rgba(12,14,18,0.9)_0%,_rgba(5,6,8,0)_75%)] blur-2xl" />
                <div
                    className="absolute inset-0"
                    style={{
                        opacity: 0.3,
                        backgroundImage:
                            "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                        backgroundSize: "90px 90px",
                        backgroundPosition: "0 0",
                    }}
                />
            </div>

            <div className="flex w-full flex-col items-center gap-12 pb-20">
                <div className="w-full max-w-[68rem] px-4 space-y-6 sm:space-y-5 lg:space-y-4 mt-8 sm:mt-12 sm:px-6 lg:px-12 text-center">
                    <div className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm mb-6 w-fit mx-auto">
                        <MessageCircle className="h-4 w-4" />
                        <span>Testimonials</span>
                    </div>
                    <h1 className="mx-auto max-w-none font-display text-[clamp(2.5rem,4vw,4rem)] font-bold leading-tight text-white text-balance lg:whitespace-nowrap">
                        Here&apos;s what others are saying.
                    </h1>
                    <p className="mx-auto max-w-[48rem] text-[15px] text-white/50 sm:text-lg">
                        Real results from real roofing businesses. See how we&apos;re changing the game one city at a time with our RoofFlow Acquisition System.
                    </p>
                </div>

                {/* Mobile Grid Layout */}
                <div className="grid grid-cols-1 gap-6 w-full px-4 sm:hidden">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1"
                        >
                            <div className="space-y-4">
                                <div className="flex gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-blue-500 text-blue-500"
                                        />
                                    ))}
                                </div>
                                <p className="text-sm leading-relaxed text-white/80">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                            </div>
                            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 text-white font-semibold text-sm">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div className="text-left">
                                    <p className="text-sm font-semibold text-white">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-xs text-white/50">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop Marquee Layout */}
                <div className="hidden sm:flex w-full flex-col gap-8 relative">
                    {/* Foggy Edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#040507] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#040507] to-transparent z-10 pointer-events-none" />

                    {/* Row 1 - Left */}
                    <div className="flex w-full overflow-hidden gap-6 py-4 pause-on-hover">
                        <div className="flex animate-marquee gap-6 min-w-full shrink-0 items-stretch">
                            {[...testimonials, ...testimonials].map((testimonial, index) => (
                                <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
                            ))}
                        </div>
                        <div className="flex animate-marquee gap-6 min-w-full shrink-0 items-stretch">
                            {[...testimonials, ...testimonials].map((testimonial, index) => (
                                <TestimonialCard key={`row1-dup-${index}`} testimonial={testimonial} />
                            ))}
                        </div>
                    </div>

                    {/* Row 2 - Right */}
                    <div className="flex w-full overflow-hidden gap-6 py-4 pause-on-hover">
                        <div className="flex animate-marquee-reverse gap-6 min-w-full shrink-0 items-stretch">
                            {[...testimonials, ...testimonials].reverse().map((testimonial, index) => (
                                <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
                            ))}
                        </div>
                        <div className="flex animate-marquee-reverse gap-6 min-w-full shrink-0 items-stretch">
                            {[...testimonials, ...testimonials].reverse().map((testimonial, index) => (
                                <TestimonialCard key={`row2-dup-${index}`} testimonial={testimonial} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-3 mt-8">
                    <Button
                        asChild
                        variant="ghost"
                        className="rounded-full px-8 py-6 text-sm font-semibold bg-white/10 text-white border border-white/10 transition-all duration-300 hover:!bg-white/15 hover:!backdrop-blur-md hover:!border-white/20 active:scale-[0.98]"
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to Home</span>
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="ghost"
                        className="group rounded-full px-6 py-6 text-sm font-semibold bg-white text-black border border-transparent shadow-[0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-300 hover:!bg-white/25 hover:!text-white hover:!backdrop-blur-md hover:!border-white/20 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] active:scale-[0.98]"
                    >
                        <Link href="/case-studies" className="flex items-center gap-2">
                            <span className="relative z-[1]">View Case Studies</span>
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="w-full mt-auto">
                <Footer />
            </div>
        </section>
    );
}
