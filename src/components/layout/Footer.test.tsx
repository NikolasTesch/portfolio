import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/utils";
import { Footer } from "@/components/layout/Footer";

describe("Footer", () => {
  it("renderiza o copyright com o ano atual, nome do site e texto de direitos", () => {
    renderWithProviders(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument();
    expect(screen.getByText(/nikolas tesch/i)).toBeInTheDocument();
    expect(screen.getByText(/todos os direitos reservados/i)).toBeInTheDocument();
  });
});
