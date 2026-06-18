import { site } from "@/lib/data";
import { ResumeButton } from "@/components/ResumeButton";
import { HeroStats } from "@/components/HeroStats";
import { TypewriterText } from "@/components/TypewriterText";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-24 pb-20 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="block">{site.name}</span>
          </h1>

          <div className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-orange-500/25 bg-orange-500/10 px-3.5 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
            <span className="relative flex h-2 w-2 shrink-0 items-center justify-center">
              <span className="hire-dot-core absolute h-2 w-2 rounded-full bg-orange-400" />
              <span className="hire-dot-ring absolute h-2 w-2 rounded-full bg-orange-400/70" />
            </span>
            <span className="text-[12px] font-medium tracking-wide text-zinc-400">
              Available for hire
            </span>
          </div>

          <TypewriterText />

          <p className="mt-4 bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl">
            {site.major}
          </p>
          <p className="mt-1 bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl">
            {site.minor}
          </p>

          <HeroStats />

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            {site.bio}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_rgba(249,115,22,0.25)] transition-all hover:shadow-[0_0_48px_rgba(251,146,60,0.35)]"
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-orange-500/30 hover:text-white"
            >
              Get in Touch
            </a>
            <ResumeButton />
          </div>
        </div>
      </div>
    </section>
  );
}
