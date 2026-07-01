"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { SectionTag } from "@/components/ui/SectionTag";
import { projects } from "@/content/projects";
import { fadeUp, reveal, stagger } from "@/lib/motion";

export function Projects() {
  const { t, locale } = useI18n();
  const ordered = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured),
  );

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <motion.div variants={stagger} {...reveal}>
        <motion.div variants={fadeUp}>
          <SectionTag>{t.projects.tag}</SectionTag>
          <h2 className="mt-2 font-serif text-4xl text-fg sm:text-5xl">
            {t.projects.title}
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {ordered.map((project) => (
            <motion.article
              key={project.slug}
              variants={fadeUp}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 transition hover:-translate-y-1 hover:border-primary hover:shadow-glow ${
                project.featured ? "lg:col-span-1" : ""
              }`}
            >
              {/* Preview do deploy (screenshot real) */}
              <div className="relative aspect-video overflow-hidden border-b border-border">
                <Image
                  src={project.image}
                  alt={`Screenshot do projeto ${project.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
                {project.featured && (
                  <span className="absolute left-3 top-3 rounded-md bg-primary px-2 py-1 font-cabin text-xs font-medium text-white">
                    {t.projects.featured}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-manrope text-xl font-semibold text-fg">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 font-inter text-sm leading-relaxed text-muted">
                  {project.description[locale]}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-primary/10 px-2 py-0.5 font-cabin text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 font-cabin text-sm font-medium text-white transition hover:brightness-110"
                  >
                    {t.projects.demo}
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 font-cabin text-sm font-medium text-fg transition hover:border-primary hover:text-primary"
                  >
                    <Github size={16} />
                    {t.projects.repo}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
