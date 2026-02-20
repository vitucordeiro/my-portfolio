"use client";

import { motion } from "framer-motion";
import { siteConfig, stats } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="dot-pattern relative flex min-h-screen items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div
        className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full opacity-20 blur-[128px]"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full opacity-10 blur-[128px]"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Disponível para oportunidades
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h1 className="text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {siteConfig.name}
              <span className="gradient-text block text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
                {siteConfig.title}
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl"
          >
            Construindo plataformas SaaS escaláveis, microsserviços e sistemas
            de automação com{" "}
            <span className="text-slate-200">
              Node.js, TypeScript e AWS
            </span>{" "}
            — do design de APIs ao deploy em produção.
          </motion.p>

          {/* Terminal snippet */}
          <motion.div
            variants={itemVariants}
            className="glow w-full max-w-lg overflow-hidden rounded-xl border border-slate-800 bg-[#0c1222]"
          >
            <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/60" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <span className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-2 font-mono text-xs text-slate-500">
                terminal
              </span>
            </div>
            <div className="p-4 font-mono text-sm leading-relaxed">
              <div className="text-slate-500">
                <span className="text-emerald-400">~</span>{" "}
                <span className="text-slate-300">npx victor-cordeiro</span>
              </div>
              <div className="mt-2 text-slate-400">
                <span className="text-cyan-400">{">"}</span> Backend Engineer @
                Recife, PE
              </div>
              <div className="text-slate-400">
                <span className="text-cyan-400">{">"}</span> Stack: Node.js ·
                NestJS · TypeScript · AWS
              </div>
              <div className="text-slate-400">
                <span className="text-cyan-400">{">"}</span> Foco: SaaS · RPA ·
                Microsserviços · IA
              </div>
              <div className="mt-2 text-slate-500">
                <span className="text-emerald-400">~</span>{" "}
                <span className="inline-block h-4 w-2 animate-pulse bg-slate-400" />
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-base font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
            >
              Ver projetos
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
                <path d="m6 17 5-5-5-5" />
                <path d="m13 17 5-5-5-5" />
              </svg>
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-3 text-base font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-4 grid grid-cols-2 gap-6 border-t border-slate-800/60 pt-8 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {stat.value}
                </span>
                <span className="text-sm text-slate-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
