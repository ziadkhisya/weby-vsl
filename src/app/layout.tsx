import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roofflow.webyagency.com"),
  title: "RoofFlow | Roofing Acquisition VSL by Webyagency",
  description:
    "RoofFlow is the Webyagency growth system that floods your roofing calendar with pre-qualified consults using an unskippable VSL and elite nurture automation.",
  openGraph: {
    type: "website",
    url: "/",
    title: "RoofFlow | Roofing Acquisition VSL",
    description:
      "Elite roofing acquisition engine that combines a conversion-obsessed VSL with a bulletproof nurture system.",
    siteName: "RoofFlow by Webyagency",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "RoofFlow premium VSL landing page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RoofFlow | Roofing Acquisition VSL",
    description:
      "Close premium roofing projects with the Webyagency RoofFlow acquisition engine and conversion-led VSL.",
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
      <body
        suppressHydrationWarning
        className={cn(
          poppins.className,
          "bg-[#040507] text-white antialiased",
          "relative min-h-screen font-sans",
          poppins.variable,
        )}
      >
        <div className="relative min-h-screen overflow-hidden">

          <main className="flex min-h-screen flex-col items-stretch justify-center overflow-hidden pt-12">
            {children}
            <SpeedInsights />
          </main>
        </div>
      </body>
    </html>
  );
}
