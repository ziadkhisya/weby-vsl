import { Clock } from "lucide-react";

export function TopBar() {
    return (
        <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[95%] max-w-md rounded-xl border border-white/10 bg-[#050505]/80 backdrop-blur-md px-4 py-3 shadow-2xl sm:top-0 sm:left-0 sm:w-full sm:max-w-none sm:translate-x-0 sm:rounded-none sm:border-b sm:border-t-0 sm:border-x-0 sm:py-3">
            <div className="flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-wider text-white/80 sm:gap-3 sm:text-xs text-center leading-relaxed">
                <Clock className="h-3.5 w-3.5 text-blue-400 sm:h-4 sm:w-4 shrink-0" />
                <span><span className="hidden sm:inline">Limited Spots Available. </span>We&apos;re Only Partnering Up With One Roofer Per City<span className="hidden sm:inline">. Take Action Now</span></span>
            </div>
        </div>
    );
}
