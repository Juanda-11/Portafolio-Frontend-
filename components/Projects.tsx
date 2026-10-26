"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Download, Monitor, Server } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects, type Platform, type Project } from "@/data/projects";
import { useT } from "@/lib/preferences";

const filters: ("Todos" | Platform)[] = ["Todos", "Web", "Móvil", "Escritorio", "Smartwatch"];

const reveal = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

function LinkButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        primary
          ? "inline-flex items-center gap-2 rounded-full bg-cta px-5 py-2.5 font-display text-base uppercase tracking-wide text-cta-fg shadow-[0_0_24px_rgba(124,200,255,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(124,200,255,0.7)]"
          : "inline-flex items-center gap-2 rounded-full border border-fg/20 px-4 py-2.5 text-sm font-bold text-fg transition hover:-translate-y-0.5 hover:border-electric hover:bg-electric/15"
      }
    >
      {children}
    </a>
  );
}

function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  const contain = p.imageFit === "contain";
  const { t, l } = useT();
  return (
    <motion.article
      layout
      variants={reveal}
      initial="hidden"
      whileInView="show"
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, margin: "-60px" }}
      className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-fg/10 bg-panel/70 shadow-xl shadow-black/40 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-electric/60 hover:shadow-[0_20px_60px_rgba(59,109,255,0.25)]"
    >
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{ background: contain ? p.imageBg : undefined }}
      >
        <Image
          src={p.image}
          alt={`${t("projects.shot")} ${p.title}`}
          fill
          sizes="(min-width: 768px) 28rem, 90vw"
          className={`transition-transform duration-700 group-hover:scale-105 ${contain ? "object-contain p-3" : "object-cover"}`}
          style={{ objectPosition: p.imagePosition }}
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-80" />
        <span className="absolute left-4 top-4 rounded-md bg-cta px-2.5 py-1 font-display text-sm uppercase tracking-wide text-cta-fg shadow-lg">
          {t(`platform.${p.platform}`)}
        </span>
        {p.demo && (
          <span className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-fg/15 bg-night/80 px-3 py-1 font-serif text-xs font-bold uppercase tracking-[0.2em] text-fg backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t("projects.live")}
          </span>
        )}
        <span className="absolute bottom-3 right-5 font-display text-5xl text-fg/10">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-3xl uppercase tracking-wide text-fg">{p.title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-muted">{l(p.description)}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((tag) => (
            <li key={l(tag)} className="rounded-full border border-fg/15 bg-fg/5 px-3 py-1 text-xs font-bold text-fg">
              {l(tag)}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {p.demo && (
            <LinkButton href={p.demo} primary>
              {t("projects.viewLive")} <ArrowUpRight size={18} aria-hidden />
            </LinkButton>
          )}
          <LinkButton href={p.github}>
            <GithubIcon size={16} /> {p.githubBackend ? t("projects.frontend") : t("projects.code")}
          </LinkButton>
          {p.githubBackend && (
            <LinkButton href={p.githubBackend}>
              <Server size={16} aria-hidden /> {t("projects.backend")}
            </LinkButton>
          )}
          {p.apk && (
            <LinkButton href={p.apk}>
              <Download size={16} aria-hidden /> {t("projects.apk")}
            </LinkButton>
          )}
          {p.exe && (
            <LinkButton href={p.exe}>
              <Monitor size={16} aria-hidden /> {t("projects.exe")}
            </LinkButton>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const { t } = useT();
  const shown = projects.filter((p) => filter === "Todos" || p.platform === filter);
  const available = new Set(projects.map((p) => p.platform));

  return (
    <section id="proyectos" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.p
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="font-serif text-sm font-semibold uppercase tracking-[0.4em] text-bolt sm:text-base"
      >
        {t("projects.eyebrow")}
      </motion.p>
      <motion.h2
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-3 font-display text-6xl uppercase leading-[0.95] sm:text-7xl"
      >
        <span className="chroma">{t("projects.title1")}</span> <span className="text-outline">{t("projects.title2")}</span>
      </motion.h2>
      <motion.p
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-5 max-w-2xl text-lg text-muted"
      >
        {t("projects.intro")}
      </motion.p>

      <div role="tablist" aria-label={t("projects.filterAria")} className="mt-8 flex flex-wrap gap-2">
        {filters
          .filter((f) => f === "Todos" || available.has(f))
          .map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-5 py-2 font-display text-base uppercase tracking-wide transition ${
                filter === f
                  ? "border-transparent bg-gradient-to-r from-electric to-violet text-white shadow-lg shadow-electric/40"
                  : "border-fg/15 text-muted hover:border-fg/40 hover:text-fg"
              }`}
            >
              {f === "Todos" ? t("projects.all") : t(`platform.${f}`)}
            </button>
          ))}
      </div>

      <motion.div layout className="mt-10 grid gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
