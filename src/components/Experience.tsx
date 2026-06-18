import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-orange-400">
              Background
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Experience
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="space-y-6">
          {experience.map((job, index) => (
            <AnimateOnScroll
              key={`${job.role}-${job.period}`}
              delay={index * 100}
            >
              <article className="relative rounded-2xl border border-white/8 bg-white/[0.03] p-6 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-orange-300">{job.company}</p>
                  </div>
                  <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400">
                    {job.period}
                  </span>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-zinc-400">
                  {job.description}
                </p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
