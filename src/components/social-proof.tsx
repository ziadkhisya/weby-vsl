const partnerLogos = [
  { name: "Atlas Roofing Alliance", initials: "ARA" },
  { name: "StormShield Pros", initials: "SSP" },
  { name: "BluePeak Capital", initials: "BPC" },
  { name: "Halo Insurance Partners", initials: "HIP" },
  { name: "Copper Ridge Supply", initials: "CRS" },
];

export function SocialProof() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <p className="text-xs uppercase tracking-[0.4em] text-white/40">
        Backed by partners who scale home exteriors
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-5">
        {partnerLogos.map((logo) => (
          <div
            key={logo.name}
            className="flex h-16 flex-col items-center justify-center rounded-xl border border-white/10 bg-ink-2/50 text-center text-sm font-semibold text-white/70 ring-1 ring-inset ring-white/5 transition hover:border-accent/40 hover:text-accent-2"
          >
            <span className="text-lg font-display text-white">{logo.initials}</span>
            <span className="text-[11px] uppercase tracking-wide text-white/50">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialProof;
