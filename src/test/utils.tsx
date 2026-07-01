import type { ReactElement } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { I18nProvider } from "@/i18n/I18nProvider";

/** Renderiza um componente com os providers de tema e i18n. */
export function renderWithProviders(ui: ReactElement) {
  return render(
    <ThemeProvider>
      <I18nProvider>{ui}</I18nProvider>
    </ThemeProvider>,
  );
}

export * from "@testing-library/react";
