import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/utils";
import { Skills } from "@/components/sections/Skills";
import { skills } from "@/content/skills";

describe("Skills", () => {
  it("renderiza tag e título", () => {
    renderWithProviders(<Skills />);
    expect(screen.getByText("Minhas skills")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Tecnologias que utilizo" }),
    ).toBeInTheDocument();
  });

  it("renderiza todos os skill cards (cada nome aparece pelo menos 2x — marquee dup)", () => {
    renderWithProviders(<Skills />);
    for (const skill of skills) {
      const elements = screen.getAllByText(skill.name);
      expect(elements.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = renderWithProviders(<Skills />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
