import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/utils";
import { SocialLinks } from "@/components/ui/SocialLinks";

describe("SocialLinks", () => {
  it("renderiza todos os 4 links (GitHub, LinkedIn, E-mail, WhatsApp)", () => {
    renderWithProviders(<SocialLinks />);
    expect(screen.getByRole("link", { name: "GitHub" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "LinkedIn" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "E-mail" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "WhatsApp" })).toBeInTheDocument();
  });

  it("links têm hrefs corretos", () => {
    renderWithProviders(<SocialLinks />);
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/NikolasTesch",
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/nikolastesch/",
    );
    expect(screen.getByRole("link", { name: "E-mail" })).toHaveAttribute(
      "href",
      "mailto:nikolasditesch@gmail.com",
    );
    expect(screen.getByRole("link", { name: "WhatsApp" })).toHaveAttribute(
      "href",
      "https://wa.me/5573999760129",
    );
  });

  it("links abrem em nova aba com rel noopener", () => {
    renderWithProviders(<SocialLinks />);
    const links = screen.getAllByRole("link");
    for (const link of links) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link.getAttribute("rel")).toContain("noopener");
    }
  });
});
