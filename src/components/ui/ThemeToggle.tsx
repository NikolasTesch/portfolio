"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface/60 text-fg transition hover:border-primary hover:text-primary"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
