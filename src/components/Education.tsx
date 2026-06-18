import Image from "next/image";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { certifications, education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-orange-400">
              Academics
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Education
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 lg:grid-cols-5">
          <AnimateOnScroll className="lg:col-span-3">
            <article className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {education.degree}
                  </h3>
                  <p className="mt-1 text-orange-300">{education.school}</p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {education.minor}
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:items-end">
                  <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400">
                    {education.graduation}
                  </span>
                  <span className="inline-flex w-fit rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-xs text-orange-300">
                    GPA: {education.gpa}
                  </span>
                </div>
              </div>
            </article>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100} className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-6 sm:p-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-amber-300">
                Certifications
              </h3>
              <ul className="space-y-5">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex gap-4 border-b border-white/5 pb-5 last:border-0 last:pb-0"
                  >
                    {cert.badgeUrl ? (
                      <Image
                        src={cert.badgeUrl}
                        alt={`${cert.name} badge`}
                        width={80}
                        height={80}
                        className="h-20 w-20 shrink-0 rounded-lg object-contain"
                      />
                    ) : (
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                        <span className="text-lg font-bold text-orange-300">
                          JS
                        </span>
                      </div>
                    )}
                    <div className="min-w-0 pt-1">
                      <p className="text-sm font-medium leading-snug text-white">
                        {cert.name}
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">{cert.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
