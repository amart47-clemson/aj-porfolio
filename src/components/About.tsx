import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { about } from "@/lib/data";

function AvatarPlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-800/80">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-20 w-20 text-zinc-600"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-orange-400">
              Introduction
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              About Me
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="flex flex-col items-center gap-10 rounded-2xl border border-white/8 bg-white/[0.03] p-8 sm:p-10 lg:flex-row lg:items-start lg:gap-14">
            <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full border-2 border-orange-500/20 shadow-[0_0_40px_rgba(249,115,22,0.08)] sm:h-56 sm:w-56">
              {about.headshotSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={about.headshotSrc}
                  alt="Anthony Joseph Martino Jr. headshot"
                  className="h-full w-full object-cover object-[center_20%]"
                />
              ) : (
                <AvatarPlaceholder />
              )}
            </div>

            <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
              {about.text}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
