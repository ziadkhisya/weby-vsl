import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <div className="flex w-full justify-center px-4 pb-12">
      <footer className="flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-[#050505] px-6 py-4 shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <Image
              src="/images/brand-logo.png"
              alt="RoofFlow"
              width={18}
              height={18}
              className="opacity-90"
            />
          </div>
          <span className="font-display text-sm font-semibold text-white">
            RoofFlow
          </span>
        </div>

        <p className="hidden text-xs text-white/30 sm:block">
          Copyright {new Date().getFullYear()}© Webyagency
        </p>

        <div className="flex items-center gap-5">
          <Link
            href="#"
            className="text-white/40 transition-colors hover:text-white"
          >
            <Facebook size={16} />
          </Link>
          <Link
            href="#"
            className="text-white/40 transition-colors hover:text-white"
          >
            <Twitter size={16} />
          </Link>
          <Link
            href="#"
            className="text-white/40 transition-colors hover:text-white"
          >
            <Linkedin size={16} />
          </Link>
          <Link
            href="#"
            className="text-white/40 transition-colors hover:text-white"
          >
            <Instagram size={16} />
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
