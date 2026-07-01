"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";
import { SectionTag } from "@/components/ui/SectionTag";
import { TechIcon } from "@/components/ui/TechIcon";
import { skills } from "@/content/skills";
import { fadeUp, reveal, stagger } from "@/lib/motion";

function SkillCard({ name, category }: { name: string; category: string }) {
  return (
    <div className="mx-3 flex w-44 shrink-0 items-center gap-3 rounded-2xl border border-border bg-surface/70 px-5 py-4 backdrop-blur transition hover:border-primary hover:shadow-glow">
      <TechIcon name={name} size={34} />
      <div className="min-w-0">
        <p className="truncate font-manrope text-sm font-semibold text-fg">
          {name}
        </p>
        <p className="truncate font-inter text-xs text-muted">{category}</p>
      </div>
    </div>
  );
}

function Marquee({
  items,
  reverse = false,
}: {
  items: { name: string; category: string }[];
  reverse?: boolean;
}) {
  // Duplica a lista para o loop contínuo (translateX -50%).
  const loop = [...items, ...items];
  return (
    <div className="group relative overflow-hidden">
      {/* fades nas bordas */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent" />
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {loop.map((item, i) => (
          <SkillCard key={`${item.name}-${i}`} {...item} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { t, locale } = useI18n();
  const items = skills.map((s) => ({
    name: s.name,
    category: s.category[locale],
  }));
  const firstRow = items.slice(0, Math.ceil(items.length / 2));
  const secondRow = items.slice(Math.ceil(items.length / 2));

  return (
    <section id="skills" className="overflow-hidden py-24">
      <motion.div
        variants={stagger}
        {...reveal}
        className="mx-auto max-w-6xl px-6 lg:px-10"
      >
        <motion.div variants={fadeUp}>
          <SectionTag>{t.skills.tag}</SectionTag>
          <h2 className="mt-2 font-serif text-4xl text-fg sm:text-5xl">
            {t.skills.title}
          </h2>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        {...reveal}
        className="mt-10 flex flex-col gap-5"
      >
        <Marquee items={firstRow} />
        <Marquee items={secondRow} reverse />
      </motion.div>
    </section>
  );
}
