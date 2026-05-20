type HeroTickerProps = {
  phrases: readonly string[];
};

export function HeroTicker({ phrases }: HeroTickerProps) {
  const ribbon = phrases.join("   ·   ");

  return (
    <div
      aria-hidden
      className="motion-safe-marquee shrink-0 border-t border-almond/25 bg-forest-slab/90 shadow-[inset_0_1px_0_rgba(249,248,235,0.12)]"
    >
      <div className="relative overflow-hidden py-4">
        <div className="motion-safe-marquee-track flex w-max animate-marquee items-center gap-32 px-10">
          <p className="font-tag font-body whitespace-nowrap text-[0.62rem] uppercase tracking-[0.34em] text-almond/80">
            {ribbon}
          </p>
          <p className="font-tag font-body whitespace-nowrap text-[0.62rem] uppercase tracking-[0.34em] text-almond/80">
            {ribbon}
          </p>
        </div>
      </div>
    </div>
  );
}
