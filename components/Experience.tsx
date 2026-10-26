"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, Zap } from "lucide-react";
import { experience, type ExperienceItem, type ExperienceType } from "@/data/experience";
import { useT } from "@/lib/preferences";

type Filter = "todo" | ExperienceType;

const filters: { id: Filter; key: "exp.all" | "exp.academica" | "exp.laboral" }[] = [
  { id: "todo", key: "exp.all" },
  { id: "academica", key: "exp.academica" },
  { id: "laboral", key: "exp.laboral" },
];

const style = {
  academica: {
    key: "exp.academica",
    icon: GraduationCap,
    badge: "bg-gradient-to-r from-electric to-violet text-white",
    dot: "from-electric to-violet shadow-electric/60",
    hover: "hover:border-electric/60 hover:shadow-[0_20px_60px_rgba(59,109,255,0.25)]",
  },
  laboral: {
    key: "exp.laboral",
    icon: Briefcase,
    badge: "bg-cta text-cta-fg",
    dot: "from-bolt to-cyan shadow-bolt/60",
    hover: "hover:border-bolt/60 hover:shadow-[0_20px_60px_rgba(124,200,255,0.22)]",
  },
} as const;

function Card({ item, index }: { item: ExperienceItem; index: number }) {
  const s = style[item.type];
  const { t, l } = useT();
  const Icon = s.icon;
  const right = item.type === "academica";

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 40, x: right ? -30 : 30 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index === 0 ? 0 : 0.05 }}
      className="relative pb-10 pl-14 md:grid md:grid-cols-[1fr_4rem_1fr] md:pb-14 md:pl-0"
    >
      <span
        aria-hidden
        className={`absolute left-4 top-6 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br text-white shadow-lg ring-4 ring-night md:static md:col-start-2 md:row-start-1 md:mt-6 md:justify-self-center ${s.dot}`}
      >
        <Icon size={15} />
      </span>

      <article
        className={`rounded-[1.5rem] border border-fg/10 bg-panel/70 p-6 shadow-xl shadow-black/40 backdrop-blur transition duration-300 hover:-translate-y-1 md:row-start-1 ${s.hover} ${
          right ? "md:col-start-1 md:text-right" : "md:col-start-3"
        }`}
      >
        <div className={`flex flex-wrap items-center gap-2 ${right ? "md:justify-end" : ""}`}>
          <span className={`rounded-md px-2.5 py-1 font-display text-sm uppercase tracking-wide ${s.badge}`}>
            {t(s.key)}
          </span>
          <span className="rounded-md border border-fg/15 px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-fg">
            {l(item.date)}
          </span>
          {item.current && (
            <span className="flex items-center gap-1.5 font-serif text-xs font-bold uppercase tracking-[0.2em] text-bolt">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bolt opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-bolt" />
              </span>
              {t("exp.current")}
            </span>
          )}
        </div>

        <h3 className="mt-4 font-display text-2xl uppercase leading-tight tracking-wide text-fg sm:text-3xl">
          {l(item.title)}
        </h3>
        <p className="mt-1 font-serif text-base font-semibold uppercase tracking-[0.18em] text-bolt">{l(item.place)}</p>
        <p className="mt-3 leading-relaxed text-muted">{l(item.description)}</p>

        {item.highlights && (
          <ul className={`mt-4 flex flex-wrap gap-2 ${right ? "md:justify-end" : ""}`}>
            {item.highlights.map((h) => (
              <li key={l(h)} className="rounded-full border border-fg/15 bg-fg/5 px-3 py-1 text-xs font-bold text-fg">
                {l(h)}
              </li>
            ))}
          </ul>
        )}
      </article>
    </motion.li>
  );
}

export default function Experience() {
  const [filter, setFilter] = useState<Filter>("todo");
  const { t, l } = useT();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const top = useTransform(progress, [0, 1], ["0%", "100%"]);

  const shown = experience.filter((e) => filter === "todo" || e.type === filter);

  return (
    <section id="experiencia" className="relative mx-auto max-w-5xl px-6 py-28">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-sm font-semibold uppercase tracking-[0.4em] text-bolt sm:text-base"
      >
        {t("exp.eyebrow")}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-3 font-display text-6xl uppercase leading-[0.95] sm:text-7xl"
      >
        <span className="chroma">{t("exp.title1")}</span> <span className="text-outline">{t("exp.title2")}</span>
      </motion.h2>
      <p className="mt-5 max-w-2xl text-lg text-muted">
        {t("exp.intro")}
      </p>

      <div role="tablist" aria-label={t("exp.filterAria")} className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full border px-5 py-2 font-display text-base uppercase tracking-wide transition ${
              filter === f.id
                ? "border-transparent bg-gradient-to-r from-electric to-violet text-white shadow-lg shadow-electric/40"
                : "border-fg/15 text-muted hover:border-fg/40 hover:text-fg"
            }`}
          >
            {t(f.key)}
          </button>
        ))}
      </div>

      <ol ref={ref} className="relative mt-14">
        <span aria-hidden className="absolute bottom-0 left-4 top-0 w-px -translate-x-1/2 bg-fg/10 md:left-1/2" />
        <motion.span
          aria-hidden
          style={{ scaleY: progress }}
          className="absolute bottom-0 left-4 top-0 w-[3px] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-electric via-bolt to-violet shadow-[0_0_14px_rgba(59,139,255,0.8)] md:left-1/2"
        />
        <motion.span
          aria-hidden
          style={{ top }}
          className="absolute left-4 z-10 -translate-x-1/2 -translate-y-1/2 text-bolt drop-shadow-[0_0_12px_rgba(59,139,255,1)] md:left-1/2"
        >
          <Zap size={26} fill="currentColor" strokeWidth={0} />
        </motion.span>

        <AnimatePresence mode="popLayout">
          {shown.map((item, i) => (
            <Card key={`${l(item.title)}-${l(item.date)}`} item={item} index={i} />
          ))}
        </AnimatePresence>
      </ol>
    </section>
  );
}
