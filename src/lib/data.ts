export const siteConfig = {
  name: "Victor Cordeiro",
  title: "Engenheiro de Software Backend",
  description:
    "Engenheiro de Software Backend com 3+ anos de experiência construindo plataformas SaaS escaláveis, microsserviços e sistemas de automação que reduziram esforço operacional em até 80%.",
  email: "victorcordeiro.devops@gmail.com",
  phone: "+55 (81) 9 9423-0214",
  location: "Recife, PE",
  github: "https://github.com/vitucordeiro",
  linkedin: "https://linkedin.com/in/vitucordeiro",
};

export const stats = [
  { value: "3+", label: "Anos de experiência" },
  { value: "80%", label: "Redução operacional" },
  { value: "10K+", label: "Docs processados/mês" },
  { value: "99.5%", label: "Uptime de serviços" },
];

export const experiences = [
  {
    company: "E3 Digital",
    role: "Desenvolvedor de Software",
    period: "Jun 2025 – Atual",
    current: true,
    description:
      "Arquitetando plataformas SaaS multi-tenant, sistemas de automação RPA e integrações de IA para o setor jurídico.",
    achievements: [
      "Arquitetei CRM SaaS multi-tenant com 15+ módulos, RBAC em 3 níveis e isolamento completo de dados — monorepo Turborepo (Next.js + Fastify)",
      "Projetei bot WhatsApp com IA (GPT-4o-mini) que reduziu triagem de leads em ~70%, eliminando etapa de pré-atendimento humano",
      "Automatizei processos em sistemas governamentais (PGFN, Receita Federal) com RPA, eliminando 80% do esforço operacional (~40h/semana economizadas)",
      "Projetei pipelines AWS (S3, Lambda, SQS) com retry exponencial e dead-letter queues processando 10K+ documentos/mês com zero perda",
    ],
    tech: [
      "Node.js",
      "NestJS",
      "Fastify",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "Prisma",
      "OpenAI",
    ],
  },
  {
    company: "Growly Group",
    role: "Desenvolvedor Node.js",
    period: "Fev 2024 – Jan 2025",
    current: false,
    description:
      "Desenvolvendo robôs de scraping de alta performance e sistemas de automação para coleta e análise de dados de e-commerces.",
    achievements: [
      "Construí 10+ robôs de scraping para Amazon, Mercado Livre e Shopee, coletando ~500K registros/mês de 15+ plataformas",
      "Aumentei taxa de sucesso de coleta de ~70% para 95%+ com paralelismo, retry exponencial e rotação de proxies",
      "Desenvolvi sistema RPA para TikTok processando 1K+ operações/dia com taxa de sucesso de 92%+",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "Puppeteer",
      "Cheerio",
      "Axios",
      "Redis",
    ],
  },
  {
    company: "Nearline",
    role: "Desenvolvedor Back-end",
    period: "Jul 2023 – Jan 2024",
    current: false,
    description:
      "Desenvolvendo APIs RESTful e integrando provedores de IA para plataformas de software.",
    achievements: [
      "Desenvolvi 3 APIs RESTful com 20+ endpoints cada, latência p95 < 200ms, com OAuth2, JWT e rate limiting",
      "Integrei 4 provedores de IA (OpenAI, Gemini, Cloud Vision, Copilot API) com interface unificada e 99.5%+ de disponibilidade",
      "Implementei 80+ testes (Jest + Postman) atingindo 85%+ de cobertura com documentação Swagger/OpenAPI completa",
    ],
    tech: [
      "Node.js",
      "Express",
      "TypeScript",
      "Jest",
      "OpenAI",
      "PostgreSQL",
      "Zod",
    ],
  },
];

export const projects = [
  {
    title: "CRM Jurídico",
    subtitle: "SaaS para Escritórios de Advocacia",
    description:
      "Plataforma CRM multi-tenant com bot WhatsApp para qualificação automática de leads e geração de briefings com IA. Dashboard analítico com métricas de conversão, pipeline Kanban de 6 estágios e gestão de equipe com RBAC.",
    tech: [
      "Next.js 14",
      "Fastify",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "OpenAI",
      "WAHA",
      "Docker",
    ],
    github: "https://github.com/vitucordeiro",
    featured: true,
    highlights: [
      "15+ módulos de API",
      "Multi-tenant com RBAC",
      "Bot WhatsApp + GPT-4o",
      "Billing com Stripe",
    ],
  },
  {
    title: "Hype Atlas",
    subtitle: "Visualização Histórica em Globo 3D",
    description:
      "Plataforma full-stack com globo interativo usando Cesium.js para explorar eventos históricos geolocalizados. Deploy automatizado via GitHub Actions para VPS DigitalOcean com Docker multi-stage.",
    tech: [
      "Express.js",
      "React",
      "Cesium.js",
      "PostGIS",
      "Supabase",
      "Stripe",
      "Docker",
    ],
    github: "https://github.com/vitucordeiro",
    featured: true,
    highlights: [
      "Globo 3D interativo",
      "PostGIS geoespacial",
      "Stripe + PIX",
      "CI/CD automatizado",
    ],
  },
  {
    title: "Pixorld",
    subtitle: "Análise de Hooks de Vídeo com IA",
    description:
      "Aplicação Next.js que analisa hooks de vídeo com scoring 0-100 usando sinais ponderados (contraste, movimento, OCR, áudio, fala). Pipeline de vídeo com FFmpeg, tesseract.js e OpenAI GPT-4o-mini.",
    tech: [
      "Next.js 14",
      "Prisma",
      "Neon",
      "Clerk",
      "Stripe",
      "OpenAI",
      "FFmpeg",
    ],
    github: "https://github.com/vitucordeiro",
    featured: false,
    highlights: [
      "Scoring 0-100 com IA",
      "Pipeline FFmpeg",
      "i18n (PT/EN)",
      "Testes com Vitest",
    ],
  },
  {
    title: "Plateu",
    subtitle: "Arsenal de Prompts IA — Desktop App",
    description:
      "Aplicação Electron com arquitetura security-first: SQLite criptografado (AES-256-GCM + scrypt), 2FA opcional (TOTP), CSP rigorosa. Zero dependência de frameworks no renderer.",
    tech: ["Electron", "Vanilla JS", "SQLite", "AES-256-GCM", "TOTP"],
    github: "https://github.com/vitucordeiro",
    featured: false,
    highlights: [
      "Security-first",
      "AES-256-GCM",
      "2FA opcional",
      "Zero frameworks",
    ],
  },
];

export const skillCategories = [
  {
    title: "Back-end",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "Fastify",
      "TypeScript",
      "GraphQL",
      "Prisma ORM",
      "Zod",
    ],
  },
  {
    title: "Arquitetura",
    skills: [
      "Microsserviços",
      "RPA",
      "Event-driven",
      "Filas (SQS/Redis)",
      "REST/GraphQL",
      "Multi-tenant",
      "RBAC",
      "Webhooks",
    ],
  },
  {
    title: "Banco de Dados",
    skills: ["PostgreSQL", "PostGIS", "MongoDB", "Redis", "Supabase"],
  },
  {
    title: "Cloud & Infra",
    skills: [
      "AWS S3",
      "AWS Lambda",
      "AWS SQS",
      "Docker",
      "Docker Compose",
      "Nginx",
      "GitHub Actions",
      "CI/CD",
      "Linux",
    ],
  },
  {
    title: "Front-end",
    skills: ["React", "Next.js", "Vue.js", "TailwindCSS"],
  },
  {
    title: "Integrações & Ferramentas",
    skills: [
      "OpenAI GPT-4",
      "Stripe",
      "WhatsApp API",
      "Clerk",
      "Puppeteer",
      "FFmpeg",
      "Git",
      "Bash",
    ],
  },
];

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Contato", href: "#contato" },
];
