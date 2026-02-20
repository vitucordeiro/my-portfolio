import { projects } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "./fade-in";

export function Projects() {
  return (
    <section id="projetos" className="relative py-24 md:py-32">
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
              Projetos
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              O que eu{" "}
              <span className="gradient-text">construí</span>
            </h2>
            <p className="max-w-2xl text-lg text-slate-400">
              De plataformas SaaS a apps desktop com criptografia — cada projeto
              resolve um problema real com engenharia de qualidade.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.1}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <article className="card-hover group flex h-full flex-col rounded-2xl border border-slate-800/60 bg-surface/30 transition-all hover:border-slate-700/60 hover:bg-surface/50">
                {/* Header with gradient accent */}
                <div className="relative overflow-hidden rounded-t-2xl border-b border-slate-800/40 px-6 pt-6 pb-4">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-5 transition-opacity group-hover:opacity-10"
                    style={{
                      background:
                        "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-white">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                            Destaque
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm font-medium text-slate-400">
                        {project.subtitle}
                      </p>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-800/50 text-slate-400 transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                      aria-label={`Ver ${project.title} no GitHub`}
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
                        aria-hidden="true"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-5 p-6">
                  <p className="text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-xs text-slate-400"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-800 bg-slate-800/40 px-2 py-0.5 font-mono text-[11px] text-slate-500 transition-colors group-hover:text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
