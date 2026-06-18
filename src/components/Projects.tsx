import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { ProjectCarousel } from "@/components/ProjectCarousel";

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-orange-400">
              Featured Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Projects
            </h2>
            <p className="mt-4 text-zinc-400">
              Full-stack applications, security tooling, and enterprise systems
              built through coursework and independent development.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <ProjectCarousel />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
