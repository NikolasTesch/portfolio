"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";

const SECTION_IDS = ["home", "about", "skills", "projects", "contact"];

export function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const toggleRef = useRef<HTMLButtonElement>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll spy: destaca a seção visível.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Focus trap / body lock / Escape key for mobile menu
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const firstLink = document.querySelector<HTMLAnchorElement>(
        "#mobile-menu a",
      );
      firstLink?.focus();
    } else {
      document.body.style.overflow = "";
      toggleRef.current?.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const items = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between border-b border-border/40 bg-bg/60 px-6 py-4 backdrop-blur-lg lg:px-10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <a
          href="#home"
          className="font-serif text-2xl font-semibold tracking-tight text-fg"
        >
          Nikolas<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                className={`font-manrope text-sm font-medium transition hover:text-primary ${
                  active === item.id ? "text-primary" : "text-fg/80"
                }`}
              >
                {item.label}
              </a>
              {active === item.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-primary"
                />
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <LocaleSwitcher />
          <ThemeToggle />
          <a
            href="#contact"
            className="ml-1 rounded-lg bg-primary px-4 py-2 font-cabin text-sm font-medium text-white shadow-glow transition hover:brightness-110"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <LocaleSwitcher />
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t.nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface/60 text-fg"
          >
            <Menu size={20} />
          </button>
        </div>
        </div>
      </nav>

      {/* Barra de progresso de rolagem */}
      <motion.div
        style={{ scaleX: progress }}
        className="h-0.5 origin-left bg-gradient-to-r from-primary to-[#a484d7]"
      />

      {/* Mobile overlay menu */}
      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-50 flex flex-col bg-bg/95 backdrop-blur-md md:hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <span className="font-serif text-2xl font-semibold text-fg">
              Nikolas<span className="text-primary">.</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.nav.closeMenu}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border text-fg"
            >
              <X size={20} />
            </button>
          </div>
          <ul className="flex flex-1 flex-col items-center justify-center gap-8">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="font-serif text-3xl text-fg transition hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
