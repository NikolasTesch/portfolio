"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { site } from "@/content/site";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-8 text-center lg:px-10">
        <p className="font-manrope text-sm text-muted">
          © {year} {site.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
