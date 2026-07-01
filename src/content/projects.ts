export type Project = {
  slug: string;
  name: string;
  description: { pt: string; en: string };
  stack: string[];
  demo: string;
  repo: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "databolsa",
    name: "DataBolsa",
    description: {
      pt: "Plataforma de análise de investimentos e acompanhamento de carteira para o mercado brasileiro — ações da B3, FIIs, ETFs, BDRs, cripto e ações dos EUA. Inclui conversores de moeda/cripto, análise de índices e conteúdo educacional.",
      en: "Investment-analysis and portfolio-tracking platform for the Brazilian market — B3 stocks, REITs, ETFs, BDRs, crypto and US stocks. Includes currency/crypto converters, market-index analysis and educational content.",
    },
    stack: ["React", "APIs financeiras", "Finnhub"],
    demo: "https://databolsa.vercel.app/",
    repo: "https://github.com/NikolasTesch/databolsa",
    image: "/projects/databolsa.png",
    featured: true,
  },
  {
    slug: "nksart",
    name: "NKS Art",
    description: {
      pt: "SaaS de biblioteca digital de artes para a indústria têxtil: catálogo de vetores e estampas em formatos profissionais, com acesso restrito e download seguro via Cloudflare R2 (links pré-assinados).",
      en: "Digital-library SaaS of artwork for the textile industry: a catalog of vectors and prints in professional formats, with restricted access and secure downloads via Cloudflare R2 (pre-signed links).",
    },
    stack: ["React", "Next.js", "Cloudflare R2"],
    demo: "https://nksmark.vercel.app/",
    repo: "https://github.com/NikolasTesch/nksmark",
    image: "/projects/nksart.png",
    featured: false,
  },
  {
    slug: "fasesport",
    name: "Fase Sport",
    description: {
      pt: "E-commerce de uniformes esportivos personalizados, com catálogo por modalidade, personalização de uniformes, orçamento em múltiplas etapas e integração com WhatsApp.",
      en: "E-commerce for custom sports uniforms, with a catalog by sport, uniform customization, a multi-step quotation flow and WhatsApp integration.",
    },
    stack: ["React", "Next.js", "Cloudflare R2"],
    demo: "https://fasesport.vercel.app/",
    repo: "https://github.com/NikolasTesch/fase",
    image: "/projects/fasesport.png",
    featured: false,
  },
];
