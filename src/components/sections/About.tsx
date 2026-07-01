"use client";

import { motion } from "framer-motion";
import { Download, Mail, MapPin, User, Wifi } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { SectionTag } from "@/components/ui/SectionTag";
import { site } from "@/content/site";
import { fadeUp, reveal, stagger } from "@/lib/motion";

export function About() {
  const { t, locale } = useI18n();

  const facts = [
    { Icon: User, label: t.about.labelName, value: site.name },
    { Icon: Mail, label: t.about.labelEmail, value: site.email },
    { Icon: MapPin, label: t.about.labelLocation, value: t.about.location },
    {
      Icon: Wifi,
      label: t.about.labelAvailability,
      value: t.about.availability,
    },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <motion.div variants={stagger} {...reveal}>
        <motion.div variants={fadeUp}>
          <SectionTag>{t.about.tag}</SectionTag>
          <h2 className="mt-2 font-serif text-4xl text-fg sm:text-5xl">
            {t.about.title}
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <motion.p
            variants={fadeUp}
            className="font-inter text-lg leading-relaxed text-muted"
          >
            {t.about.body}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="grid gap-4 rounded-2xl border border-border bg-surface/60 p-6 sm:grid-cols-2"
          >
            {facts.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="font-manrope text-xs uppercase tracking-wide text-muted">
                    {label}
                  </p>
                  <p className="truncate font-inter text-sm text-fg">{value}</p>
                </div>
              </div>
            ))}
            <a
              href={locale === "pt" ? site.cv.pt : site.cv.en}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-full mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-4 py-2.5 font-cabin text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
            >
              <Download size={16} />
              {t.about.downloadCv}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
