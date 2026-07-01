import { describe, expect, it, vi, beforeEach } from "vitest";
import { axe } from "vitest-axe";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/utils";
import { Contact } from "@/components/sections/Contact";

describe("Contact", () => {
  beforeEach(() => {
    // jsdom não navega; espionamos window.location.href
    Object.defineProperty(window, "location", {
      writable: true,
      value: { href: "" } as Location,
    });
  });

  it("renderiza os campos do formulário com rótulos acessíveis", () => {
    renderWithProviders(<Contact />);
    expect(screen.getByLabelText("Seu nome")).toBeInTheDocument();
    expect(screen.getByLabelText("Seu e-mail")).toBeInTheDocument();
    expect(screen.getByLabelText("Assunto")).toBeInTheDocument();
    expect(screen.getByLabelText("Sua mensagem")).toBeInTheDocument();
  });

  it("monta um mailto ao enviar", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Contact />);
    await user.type(screen.getByLabelText("Seu nome"), "Recrutador");
    await user.type(screen.getByLabelText("Seu e-mail"), "rh@empresa.com");
    await user.type(screen.getByLabelText("Assunto"), "Vaga");
    await user.type(screen.getByLabelText("Sua mensagem"), "Olá Nikolas");
    await user.click(screen.getByRole("button", { name: /enviar mensagem/i }));

    expect(window.location.href).toContain("mailto:nikolasditesch@gmail.com");
    expect(window.location.href).toContain("Vaga");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = renderWithProviders(<Contact />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
