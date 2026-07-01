import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/utils";
import { Navbar } from "@/components/layout/Navbar";

describe("Navbar", () => {
  it("renderiza todos os itens de navegação", () => {
    renderWithProviders(<Navbar />);
    const navItems = ["Início", "Sobre", "Skills", "Projetos", "Contato"];
    for (const item of navItems) {
      expect(screen.getByRole("link", { name: item })).toBeInTheDocument();
    }
  });

  it("renderiza o botão CTA com link para contato", () => {
    renderWithProviders(<Navbar />);
    const cta = screen.getByRole("link", { name: "Vamos conversar" });
    expect(cta).toHaveAttribute("href", "#contact");
  });

  it("abre o menu mobile ao clicar no hamburger e fecha ao clicar em um link", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Navbar />);

    // Apenas links do desktop visíveis inicialmente
    expect(screen.getAllByRole("link", { name: "Início" })).toHaveLength(1);

    // Abre menu mobile
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    expect(screen.getAllByRole("link", { name: "Início" })).toHaveLength(2);

    // Clica no link do overlay mobile (o segundo na ordem do DOM) para fechar
    const links = screen.getAllByRole("link", { name: "Início" });
    await user.click(links[1]);

    expect(screen.getAllByRole("link", { name: "Início" })).toHaveLength(1);
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = renderWithProviders(<Navbar />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
