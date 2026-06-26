import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { skillIconCategories, type SkillIcon } from "@/lib/data";

function SkillIconVisual({ skill }: { skill: SkillIcon }) {
  if (skill.imageUrl) {
    const invert = skill.imageInvert !== false;

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={skill.imageUrl}
        alt=""
        className={`h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110 ${
          invert ? "brightness-0 invert" : ""
        }`}
        aria-hidden="true"
      />
    );
  }

  if (skill.iconClass) {
    return (
      <i
        className={`${skill.iconClass} text-[56px] leading-none transition-transform duration-300 group-hover:scale-110`}
        aria-hidden="true"
      />
    );
  }

  if (skill.emoji) {
    return (
      <span
        className="flex h-14 w-14 items-center justify-center text-4xl leading-none text-orange-400 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      >
        {skill.emoji}
      </span>
    );
  }

  return (
    <div
      className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-bold text-orange-300 transition-transform duration-300 group-hover:scale-110"
      aria-hidden="true"
    >
      {skill.fallback ?? skill.name.slice(0, 2).toUpperCase()}
    </div>
  );
}

function SkillIconCard({ skill }: { skill: SkillIcon }) {
  if (skill.textOnly) {
    return (
      <div className="flex items-center justify-center p-2">
        <span className="rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-2 text-center text-xs font-medium leading-snug text-orange-300 transition-colors hover:border-orange-500/40 hover:bg-orange-500/15 hover:text-orange-200">
          {skill.name}
        </span>
      </div>
    );
  }

  return (
    <div className="group flex min-h-[120px] flex-col items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.02] p-4 transition-all duration-300 hover:border-orange-500/25 hover:bg-white/[0.04] hover:shadow-[0_0_24px_rgba(249,115,22,0.08)]">
      <SkillIconVisual skill={skill} />
      <span className="text-center text-xs font-medium leading-snug text-zinc-400 transition-colors group-hover:text-zinc-300">
        {skill.name}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-orange-400">
              Toolkit
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Skills & Tech Stack
            </h2>
            <p className="mt-4 text-zinc-400">
              Technologies and tools I use across development, cloud, and
              security work.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-10">
          {skillIconCategories.map((group, index) => (
            <AnimateOnScroll key={group.category} delay={index * 60}>
              <div>
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-orange-300">
                  {group.category}
                </h3>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
                  {group.skills.map((skill) => (
                    <SkillIconCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
