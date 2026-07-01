import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "@/test/utils";
import { useI18n } from "@/i18n/I18nProvider";

function Probe() {
  const { locale, toggleLocale, t } = useI18n();
  return (
    <div>
      <span data-testid="locale">{locale}</span>
      <span data-testid="role">{t.hero.role}</span>
      <button onClick={toggleLocale}>toggle</button>
    </div>
  );
}

describe("I18nProvider", () => {
  it("usa PT por padrão", () => {
    renderWithProviders(<Probe />);
    expect(screen.getByTestId("locale")).toHaveTextContent("pt");
    expect(screen.getByTestId("role")).toHaveTextContent("Desenvolvedor Fullstack");
  });

  it("alterna para EN e persiste no localStorage", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Probe />);
    await user.click(screen.getByText("toggle"));
    await waitFor(() => {
      expect(screen.getByTestId("locale")).toHaveTextContent("en");
    });
    expect(screen.getByTestId("role")).toHaveTextContent("Fullstack Developer");
    expect(window.localStorage.getItem("locale")).toBe("en");
  });
});
