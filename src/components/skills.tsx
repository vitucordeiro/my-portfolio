import { skillCategories } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "./fade-in";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(148, 163, 184, 0.1) 50%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-sm font-medium tracking-wider text-accent uppercase">
              Skills
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Stack{" "}
              <span className="gradient-text">técnica</span>
            </h2>
            <p className="max-w-2xl text-lg text-slate-400">
              As tecnologias e ferramentas que uso diariamente para construir
              sistemas robustos e escaláveis.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.08}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="group h-full rounded-xl border border-slate-800/60 bg-surface/30 p-6 transition-all hover:border-slate-700/60 hover:bg-surface/50">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-wider text-slate-300 uppercase">
                  <span className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
                  {category.title}
                  <span className="h-px flex-1 bg-gradient-to-l from-accent/40 to-transparent" />
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-800 bg-slate-800/50 px-3 py-1.5 text-sm text-slate-400 transition-all hover:border-accent/30 hover:bg-accent/5 hover:text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
