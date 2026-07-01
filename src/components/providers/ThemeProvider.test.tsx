import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider, useTheme } from "@/components/providers/ThemeProvider";

function Probe() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
}

describe("ThemeProvider", () => {
  it("usa dark por padrão e aplica a classe na html", async () => {
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    );
    await waitFor(() => {
      expect(document.documentElement).toHaveClass("dark");
    });
    expect(screen.getByTestId("theme")).toHaveTextContent("dark");
  });

  it("alterna para light e persiste", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    );
    await user.click(screen.getByText("toggle"));
    await waitFor(() => {
      expect(screen.getByTestId("theme")).toHaveTextContent("light");
    });
    expect(document.documentElement).not.toHaveClass("dark");
    expect(window.localStorage.getItem("theme")).toBe("light");
  });
});
