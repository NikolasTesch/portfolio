import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "@/test/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

describe("ThemeToggle", () => {
  it("renderiza ícone de sol (modo escuro) com aria-label correto", () => {
    const { container } = renderWithProviders(<ThemeToggle />);
    const btn = screen.getByRole("button", { name: "Ativar modo claro" });
    expect(btn).toBeInTheDocument();
    // Sun icon do Lucide contém <circle>, Moon não
    expect(btn.querySelector("circle")).toBeInTheDocument();
  });

  it("alterna para modo claro ao clicar: moon + aria-label + localStorage", async () => {
    const user = userEvent.setup();
    const { container } = renderWithProviders(<ThemeToggle />);

    await user.click(screen.getByRole("button", { name: "Ativar modo claro" }));

    await waitFor(() => {
      const btn = screen.getByRole("button", { name: "Ativar modo escuro" });
      expect(btn).toBeInTheDocument();
      // Moon icon não tem <circle>
      expect(btn.querySelector("circle")).not.toBeInTheDocument();
    });
    expect(window.localStorage.getItem("theme")).toBe("light");
  });
});
