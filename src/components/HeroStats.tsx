import { heroStats } from "@/lib/data";

export function HeroStats() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {heroStats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-center transition-colors hover:border-orange-500/15 hover:bg-white/[0.04]"
        >
          <p className="bg-gradient-to-r from-orange-300 to-amber-400 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
            {stat.value}
          </p>
          <p className="mt-1 text-[11px] leading-tight text-zinc-500 sm:text-xs">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
