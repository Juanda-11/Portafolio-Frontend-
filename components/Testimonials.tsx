"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { useT } from "@/lib/preferences";

const reveal = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export default function Testimonials() {
  const { t, l } = useT();

  return (
    <section id="testimonios" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.p
        custom={0}
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="font-serif text-sm font-semibold uppercase tracking-[0.4em] text-bolt sm:text-base"
      >
        {t("testimonials.eyebrow")}
      </motion.p>
      <motion.h2
        custom={1}
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-3 font-display text-6xl uppercase leading-[0.95] sm:text-7xl"
      >
        <span className="chroma">{t("testimonials.title1")}</span>{" "}
        <span className="text-outline">{t("testimonials.title2")}</span>
      </motion.h2>
      <motion.p
        custom={2}
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-5 max-w-2xl text-lg text-muted"
      >
        {t("testimonials.intro")}
      </motion.p>

      <ul className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <motion.li
            key={item.name}
            custom={i}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex"
          >
            <figure className="group relative flex w-full flex-col rounded-[1.75rem] border border-fg/10 bg-panel/70 p-7 shadow-xl shadow-black/30 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-electric/60 hover:shadow-[0_20px_60px_rgba(59,109,255,0.25)]">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-electric to-violet text-white shadow-lg shadow-electric/40">
                <Quote size={22} fill="currentColor" strokeWidth={0} aria-hidden />
              </span>

              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-fg/90">
                <p>{l(item.quote)}</p>
              </blockquote>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label={t("testimonials.focus")}>
                {item.focus.map((f) => (
                  <li
                    key={l(f)}
                    className="rounded-full border border-fg/15 bg-fg/5 px-3 py-1 text-[13px] font-bold text-fg"
                  >
                    {l(f)}
                  </li>
                ))}
              </ul>

              <figcaption className="mt-6 flex items-center gap-4 border-t border-fg/10 pt-5">
                <span
                  aria-hidden
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-bolt to-violet font-display text-lg text-white"
                >
                  {initials(item.name)}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-xl uppercase tracking-wide text-fg">{item.name}</span>
                  <span className="block font-serif text-sm font-semibold uppercase tracking-[0.18em] text-bolt">
                    {l(item.role)}
                    {item.organization ? ` · ${item.organization}` : ""}
                  </span>
                </span>
              </figcaption>
            </figure>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
