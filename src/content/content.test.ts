import { describe, expect, it } from "vitest";
import { projects } from "@/content/projects";
import { skills } from "@/content/skills";
import { techIcons } from "@/content/techIcons";

describe("projects", () => {
  it("tem ao menos 3 projetos", () => {
    expect(projects.length).toBeGreaterThanOrEqual(3);
  });

  it("cada projeto tem campos obrigatórios em PT e EN", () => {
    for (const p of projects) {
      expect(p.name).toBeTruthy();
      expect(p.description.pt).toBeTruthy();
      expect(p.description.en).toBeTruthy();
      expect(p.demo).toMatch(/^https?:\/\//);
      expect(p.repo).toMatch(/^https?:\/\//);
      expect(p.image).toMatch(/^\/projects\//);
      expect(p.stack.length).toBeGreaterThan(0);
    }
  });

  it("tem exatamente um projeto em destaque", () => {
    expect(projects.filter((p) => p.featured)).toHaveLength(1);
  });
});

describe("skills", () => {
  it("não inclui Vercel e inclui Docker", () => {
    const names = skills.map((s) => s.name);
    expect(names).not.toContain("Vercel");
    expect(names).toContain("Docker");
  });

  it("toda skill tem um ícone correspondente em techIcons", () => {
    for (const s of skills) {
      expect(techIcons[s.name], `falta ícone para ${s.name}`).toBeDefined();
      expect(techIcons[s.name].path.length).toBeGreaterThan(10);
    }
  });

  it("toda skill tem categoria em PT e EN", () => {
    for (const s of skills) {
      expect(s.category.pt).toBeTruthy();
      expect(s.category.en).toBeTruthy();
    }
  });
});
