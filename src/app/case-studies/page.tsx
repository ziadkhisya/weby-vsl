import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { TopBar } from "@/components/top-bar";
import dynamic from "next/dynamic";

const CaseStudies = dynamic(() => import("@/components/case-studies").then((mod) => mod.CaseStudies), {
    loading: () => <div className="h-96 w-full animate-pulse rounded-2xl bg-white/5" />,
});

export default function CaseStudiesPage() {
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
                        <FileText className="h-4 w-4" />
                        <span>Case Studies</span>
                    </div>
                    <h1 className="mx-auto max-w-none font-display text-[clamp(2rem,4vw,4rem)] font-bold leading-tight text-white text-balance">
                        Predictable Growth. Real Revenue.
                    </h1>
                    <p className="mx-auto max-w-[48rem] text-[15px] text-white/50 sm:text-lg">
                        Deep dives into how we&apos;ve helped roofing businesses scale their operations and dominate their local markets.
                    </p>
                </div>

                <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <CaseStudies />
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
                        <Link href="/testimonials" className="flex items-center gap-2">
                            <span className="relative z-[1]">View Testimonials</span>
                            <ArrowRight className="h-4 w-4 text-ink/70 transition-colors duration-300 group-hover:!text-white" strokeWidth={2} />
                        </Link>
                    </Button>
                </div>
            </div >
            <div className="w-full mt-auto">
                <Footer />
            </div>
        </section >
    );
}
