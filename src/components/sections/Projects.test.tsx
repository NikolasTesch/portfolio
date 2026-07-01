import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/utils";
import { Projects } from "@/components/sections/Projects";
import { projects } from "@/content/projects";

describe("Projects", () => {
  it("renderiza todos os projetos", () => {
    renderWithProviders(<Projects />);
    for (const p of projects) {
      expect(
        screen.getByRole("heading", { name: p.name }),
      ).toBeInTheDocument();
    }
  });

  it("links externos abrem em nova aba com rel seguro", () => {
    renderWithProviders(<Projects />);
    const externalLinks = screen
      .getAllByRole("link")
      .filter((a) => a.getAttribute("href")?.startsWith("http"));
    expect(externalLinks.length).toBeGreaterThan(0);
    for (const link of externalLinks) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link.getAttribute("rel")).toContain("noopener");
    }
  });

  it("toda imagem de projeto tem alt", () => {
    renderWithProviders(<Projects />);
    for (const img of screen.getAllByRole("img")) {
      expect(img).toHaveAccessibleName();
    }
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = renderWithProviders(<Projects />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
