"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { SectionTag } from "@/components/ui/SectionTag";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { site } from "@/content/site";
import { fadeUp, reveal, stagger } from "@/lib/motion";

export function Contact() {
  const { t } = useI18n();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(form.get("subject") || ""));
    const body = encodeURIComponent(
      `${form.get("name")} <${form.get("email")}>\n\n${form.get("message")}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-surface/60 px-4 py-3 font-inter text-sm text-fg outline-none transition placeholder:text-muted focus:border-primary";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <motion.div
        variants={stagger}
        {...reveal}
        className="grid gap-10 lg:grid-cols-2"
      >
        <motion.div variants={fadeUp}>
          <SectionTag>{t.contact.tag}</SectionTag>
          <h2 className="mt-2 font-serif text-4xl text-fg sm:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-md font-inter text-lg text-muted">
            {t.contact.subtitle}
          </p>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </motion.div>

        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-2xl border border-border bg-surface/60 p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              required
              placeholder={t.contact.name}
              aria-label={t.contact.name}
              className={inputClass}
            />
            <input
              name="email"
              type="email"
              required
              placeholder={t.contact.email}
              aria-label={t.contact.email}
              className={inputClass}
            />
          </div>
          <input
            name="subject"
            required
            placeholder={t.contact.subject}
            aria-label={t.contact.subject}
            className={inputClass}
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder={t.contact.message}
            aria-label={t.contact.message}
            className={`${inputClass} resize-none`}
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-cabin text-base font-medium text-white shadow-glow transition hover:brightness-110"
          >
            {t.contact.send}
            <Send size={18} />
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
