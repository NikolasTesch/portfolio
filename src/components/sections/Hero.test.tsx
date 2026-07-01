import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/utils";
import { Hero } from "@/components/sections/Hero";

describe("Hero", () => {
  it("mostra nome, cargo e CTAs", () => {
    renderWithProviders(<Hero />);
    expect(
      screen.getByRole("heading", { name: "Nikolas Tesch" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Desenvolvedor Fullstack")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /ver projetos/i }),
    ).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", { name: /baixar cv/i })).toHaveAttribute(
      "href",
      "/cv/curriculo-nikolas-tesch-pt.pdf",
    );
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = renderWithProviders(<Hero />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
