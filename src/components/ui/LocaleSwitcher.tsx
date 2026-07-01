"use client";

import { useI18n } from "@/i18n/I18nProvider";

export function LocaleSwitcher() {
  const { locale, toggleLocale } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label="Trocar idioma"
      className="flex h-9 items-center gap-1 rounded-lg border border-border bg-surface/60 px-2.5 font-manrope text-xs font-semibold text-fg transition hover:border-primary hover:text-primary"
    >
      <span className={locale === "pt" ? "text-primary" : "opacity-60"}>PT</span>
      <span className="opacity-30">/</span>
      <span className={locale === "en" ? "text-primary" : "opacity-60"}>EN</span>
    </button>
  );
}
