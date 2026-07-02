"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Code2, Download } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { useTheme } from "@/components/providers/ThemeProvider";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { site } from "@/content/site";
import { fadeUp, stagger } from "@/lib/motion";

export function Hero() {
  const { t, locale } = useI18n();
  const { theme } = useTheme();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Fundo: vídeo no dark, gradiente no light */}
      <div className="absolute inset-0 -z-10">
        {theme === "dark" ? (
          <>
            <video
              key="hero-video"
              aria-hidden="true"
              className="h-full w-full object-cover opacity-25"
              autoPlay
              loop
              muted
              playsInline
              poster=""
            >
              <source src={site.heroVideo} type="video/mp4" />
            </video>
            {/* Escurece o lado do texto para garantir contraste sobre o branco do vídeo */}
            <div className="absolute inset-0 bg-gradient-to-r from-bg/95 via-bg/70 to-bg/30" />
            {/* Fade vertical para integrar com o resto da página */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-transparent to-bg" />
            {/* Escurecimento geral leve */}
            <div className="absolute inset-0 bg-bg/20" />
          </>
        ) : (
          <div className="h-full w-full bg-[radial-gradient(60%_60%_at_20%_10%,rgba(123,57,252,0.18),transparent),radial-gradient(50%_50%_at_90%_20%,rgba(164,132,215,0.18),transparent)]" />
        )}
      </div>

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-12 px-6 pb-16 pt-32 lg:flex-row lg:justify-between lg:px-10 lg:pt-28">
        {/* Coluna de texto */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex max-w-xl flex-col items-start text-left"
        >
          <motion.span
            variants={fadeUp}
            className="rounded-[10px] border border-[rgba(164,132,215,0.5)] bg-[rgba(85,80,110,0.35)] px-4 py-1.5 font-cabin text-sm font-medium text-fg backdrop-blur-md"
          >
            {t.hero.role}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-serif text-5xl leading-[1.05] text-fg sm:text-6xl lg:text-7xl"
          >
            {site.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-serif text-2xl leading-tight text-fg/90 sm:text-3xl"
          >
            {t.hero.headlinePre}
            <em className="headline-accent not-italic">{t.hero.headlineEm}</em>
            {t.hero.headlinePost}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-md font-inter text-base text-fg/70 sm:text-lg"
          >
            {t.hero.intro}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-[10px] bg-primary px-5 py-3 font-cabin text-base font-medium text-white shadow-glow transition hover:brightness-110"
            >
              {t.hero.ctaWork}
              <ArrowUpRight size={18} />
            </a>
            <a
              href={locale === "pt" ? site.cv.pt : site.cv.en}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] bg-primary-dark px-5 py-3 font-cabin text-base font-medium text-[#f6f7f9] transition hover:brightness-125"
            >
              {t.hero.ctaCv}
              <Download size={18} />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Coluna do card/foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative w-full max-w-sm shrink-0"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/10 via-surface to-primary-dark/20 shadow-glow">
            {/* Efeito de iluminação circulando (Border Beam) */}
            <div className="absolute inset-[-50%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_240deg,#7b39fc_300deg,#a484d7_360deg)]" />
            
            {/* Container interno da foto de perfil */}
            <div className="absolute inset-[2px] overflow-hidden rounded-[22px] bg-surface">
              {/* Foto de perfil preenchendo o retângulo */}
              <Image
                src="/profile.jpg"
                alt={site.name}
                fill
                priority
                unoptimized
                className="object-cover -scale-x-100"
              />
              {/* Efeito de brilho sutil por cima da imagem */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,rgba(123,57,252,0.15),transparent)]" />
            </div>
          </div>


          {/* Badge de código */}
          <div className="absolute -right-3 top-6 grid h-12 w-12 animate-float place-items-center rounded-xl border border-border bg-surface/90 text-primary shadow-glow backdrop-blur">
            <Code2 size={22} />
          </div>
        </motion.div>
      </div>

      {/* Indicador de rolagem (desktop) */}
      <a
        href="#about"
        aria-label="Rolar para a próxima seção"
        tabIndex={-1}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/50 text-fg/70 backdrop-blur transition hover:text-primary"
        >
          <ChevronDown size={20} />
        </motion.span>
      </a>
    </section>
  );
}
