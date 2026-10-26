"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ChevronDown, GraduationCap, MapPin, School, Zap } from "lucide-react";
import { about, profile, quickFacts, skillGroups } from "@/lib/data";
import { useT } from "@/lib/preferences";

const factIcons = [MapPin, GraduationCap, Briefcase, School];

const reveal = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function About() {
  const [more, setMore] = useState(false);
  const { t, l } = useT();

  return (
    <section id="sobre-mi" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          custom={0}
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mx-auto w-full max-w-sm lg:sticky lg:top-12"
        >
          <div aria-hidden className="absolute -inset-8 rounded-full bg-electric/25 blur-3xl" />
          <div className="relative -rotate-2 rounded-[2rem] bg-gradient-to-br from-electric via-bolt to-violet p-[3px] shadow-2xl shadow-black/60 transition-transform duration-500 hover:rotate-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.85rem] bg-panel">
              {profile.photo && (
                <Image
                  src={profile.photo}
                  alt={t("about.photoAlt")}
                  fill
                  sizes="(min-width: 1024px) 24rem, 90vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 62%" }}
                />
              )}
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
          <span className="absolute -right-3 top-6 flex items-center gap-1.5 rounded-lg bg-cta px-3 py-1.5 font-display text-lg uppercase tracking-wide text-cta-fg shadow-xl sm:-right-6">
            <Zap size={16} fill="currentColor" strokeWidth={0} aria-hidden /> {t("about.sticker")}
          </span>
        </motion.div>

        <div>
          <motion.p
            custom={0}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="font-serif text-sm font-semibold uppercase tracking-[0.4em] text-bolt sm:text-base"
          >
            {t("about.eyebrow")}
          </motion.p>

          <motion.h2
            custom={1}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-3 font-display text-6xl uppercase leading-[0.95] sm:text-7xl"
          >
            <span className="chroma">{t("about.title1")}</span> <span className="text-outline">{t("about.title2")}</span>
          </motion.h2>

          <motion.div
            custom={2}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg"
          >
            <p>{l(about[0])}</p>
            <AnimatePresence initial={false}>
              {more && (
                <motion.p
                  key="more"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  {l(about[1])}
                </motion.p>
              )}
            </AnimatePresence>
            <button
              type="button"
              onClick={() => setMore((v) => !v)}
              aria-expanded={more}
              className="inline-flex items-center gap-2 py-2 font-display text-lg uppercase tracking-wide text-bolt transition hover:text-fg"
            >
              {more ? t("about.less") : t("about.more")}
              <ChevronDown size={18} aria-hidden className={`transition-transform ${more ? "rotate-180" : ""}`} />
            </button>
          </motion.div>

          <motion.dl
            custom={3}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 grid gap-3 sm:grid-cols-2"
          >
            {quickFacts.map(({ label, value }, i) => {
              const Icon = factIcons[i];
              return (
                <div
                  key={l(label)}
                  className="group flex items-center gap-4 rounded-2xl border border-fg/10 bg-fg/5 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-electric/60 hover:bg-electric/10"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric to-violet text-white shadow-lg shadow-electric/30">
                    <Icon size={20} aria-hidden />
                  </span>
                  <div>
                    <dt className="font-serif text-sm font-semibold uppercase tracking-[0.3em] text-muted">{l(label)}</dt>
                    <dd className="font-bold text-fg">{l(value)}</dd>
                  </div>
                </div>
              );
            })}
          </motion.dl>

          <div className="mt-10 space-y-6">
            {skillGroups.map(({ title, items }, g) => (
              <motion.div
                key={l(title)}
                custom={g}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
              >
                <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.35em] text-bolt">{l(title)}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={l(item)}
                      className="rounded-full border border-fg/15 bg-fg/5 px-4 py-2 text-sm font-bold text-fg transition hover:-translate-y-0.5 hover:border-bolt hover:bg-bolt/10 hover:shadow-[0_0_20px_rgba(124,200,255,0.3)]"
                    >
                      {l(item)}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
