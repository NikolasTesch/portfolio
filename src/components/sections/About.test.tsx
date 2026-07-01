import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/utils";
import { About } from "@/components/sections/About";

describe("About", () => {
  it("renderiza tag e título", () => {
    renderWithProviders(<About />);
    expect(screen.getByText("Sobre mim")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Quem é o Nikolas" }),
    ).toBeInTheDocument();
  });

  it("renderiza os cards de informação (nome, email, localização, disponibilidade)", () => {
    renderWithProviders(<About />);
    expect(screen.getByText("Nome")).toBeInTheDocument();
    expect(screen.getByText("Nikolas Tesch")).toBeInTheDocument();
    expect(screen.getByText("E-mail")).toBeInTheDocument();
    expect(screen.getByText("nikolasditesch@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("Localização")).toBeInTheDocument();
    expect(screen.getByText("Disponibilidade")).toBeInTheDocument();
  });

  it("renderiza botão de download do CV com link correto", () => {
    renderWithProviders(<About />);
    const cvLink = screen.getByRole("link", { name: /baixar cv/i });
    expect(cvLink).toHaveAttribute(
      "href",
      "/cv/curriculo-nikolas-tesch-pt.pdf",
    );
    expect(cvLink).toHaveAttribute("target", "_blank");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = renderWithProviders(<About />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
