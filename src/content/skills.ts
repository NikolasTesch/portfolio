export type Skill = {
  name: string;
  category: { pt: string; en: string };
};

export const skills: Skill[] = [
  { name: "React", category: { pt: "Frontend", en: "Frontend" } },
  { name: "Next.js", category: { pt: "Framework", en: "Framework" } },
  { name: "Svelte", category: { pt: "Framework", en: "Framework" } },
  { name: "TypeScript", category: { pt: "Linguagem", en: "Language" } },
  { name: "JavaScript", category: { pt: "Linguagem", en: "Language" } },
  { name: "Node.js", category: { pt: "Backend", en: "Backend" } },
  { name: "Express", category: { pt: "Backend", en: "Backend" } },
  { name: "PostgreSQL", category: { pt: "Banco de dados", en: "Database" } },
  { name: "Python", category: { pt: "Linguagem", en: "Language" } },
  { name: "Flutter", category: { pt: "Mobile", en: "Mobile" } },
  { name: "Tailwind CSS", category: { pt: "Estilização", en: "Styling" } },
  { name: "Git", category: { pt: "Versionamento", en: "Version control" } },
  { name: "Docker", category: { pt: "DevOps", en: "DevOps" } },
];
