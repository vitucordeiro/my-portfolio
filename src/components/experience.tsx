import { experiences } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "./fade-in";

export function Experience() {
  return (
    <section id="experiencia" className="relative py-24 md:py-32">
      {/* Subtle divider gradient */}
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
              Experiência
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Onde construí{" "}
              <span className="gradient-text">impacto</span>
            </h2>
            <p className="max-w-2xl text-lg text-slate-400">
              3+ anos transformando complexidade técnica em soluções que geram
              resultados mensuráveis.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="mt-12 flex flex-col gap-8">
          {experiences.map((exp) => (
            <StaggerItem key={exp.company}>
              <article className="card-hover group relative rounded-2xl border border-slate-800/60 bg-surface/30 p-6 transition-all hover:border-slate-700/60 hover:bg-surface/50 md:p-8">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                          Atual
                        </span>
                      )}
                    </div>
                    <p className="text-base font-medium text-accent">
                      {exp.company}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-sm text-slate-500">
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-slate-400">{exp.description}</p>

                {/* Achievements */}
                <ul className="mt-6 flex flex-col gap-3" role="list">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-slate-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0 text-accent/60"
                        aria-hidden="true"
                      >
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                      {achievement}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-800 bg-slate-800/40 px-2.5 py-1 font-mono text-xs text-slate-400 transition-colors group-hover:border-slate-700 group-hover:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
