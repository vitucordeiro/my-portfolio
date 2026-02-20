import { FadeIn, StaggerContainer, StaggerItem } from "./fade-in";

const highlights = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m10 8 4 4-4 4" />
      </svg>
    ),
    title: "SaaS & Microsserviços",
    description:
      "Plataformas multi-tenant com isolamento de dados, RBAC e billing integrado — arquitetura pronta para escalar.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
    title: "Automação & RPA",
    description:
      "Robôs que eliminam trabalho manual em escala: scraping, processamento de documentos e integração com sistemas governamentais.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: "Integrações de IA",
    description:
      "GPT-4, Gemini, Cloud Vision — camadas de abstração com fallback entre providers garantindo 99.5%+ de disponibilidade.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
    title: "Cloud & Performance",
    description:
      "Pipelines AWS com tolerância a falhas, workers paralelos e otimizações que reduziram tempo de processamento em 60%+.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-sm font-medium tracking-wider text-accent uppercase">
              Sobre mim
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Engenharia de software com{" "}
              <span className="gradient-text">impacto real</span>
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          {/* Text column */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-slate-400">
                Sou engenheiro backend baseado em Recife, PE, focado em
                construir sistemas que{" "}
                <span className="text-slate-200">
                  resolvem problemas reais
                </span>{" "}
                — não apenas código bonito, mas software que reduz custos,
                automatiza processos e escala sem dor.
              </p>
              <p className="text-lg leading-relaxed text-slate-400">
                Minha abordagem é end-to-end: da arquitetura de APIs e pipelines
                assíncronos ao deploy containerizado com CI/CD. Atualmente
                cursando{" "}
                <span className="text-slate-200">
                  Análise e Desenvolvimento de Sistemas
                </span>{" "}
                na Wyden.
              </p>
              <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-surface/50 px-5 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-400"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-300">
                    Recife, PE — Brasil
                  </p>
                  <p className="text-xs text-slate-500">
                    Remoto ou presencial
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Highlights grid */}
          <StaggerContainer
            staggerDelay={0.08}
            className="grid gap-4 sm:grid-cols-2 lg:col-span-3"
          >
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="card-hover group h-full rounded-xl border border-slate-800/60 bg-surface/40 p-6 transition-colors hover:border-slate-700/60 hover:bg-surface/70">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
