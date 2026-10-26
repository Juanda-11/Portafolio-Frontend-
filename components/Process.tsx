"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Accessibility, Code2, FlaskConical, PenTool, Search, Zap } from "lucide-react";
import { steps, type Step } from "@/data/process";
import { useT } from "@/lib/preferences";

const icons = { entender: Search, disenar: PenTool, construir: Code2, accesible: Accessibility, probar: FlaskConical };

const reveal = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

function Detail({ step, index }: { step: Step; index: number }) {
  const { t, l } = useT();
  const Icon = icons[step.id as keyof typeof icons];

  return (
    <motion.div
      key={step.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <div className="flex items-center gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-electric to-violet text-white shadow-lg shadow-electric/40">
          <Icon size={26} aria-hidden />
        </span>
        <p className="font-serif text-sm font-semibold uppercase tracking-[0.35em] text-bolt">
          {t("process.step")} {index + 1} {t("process.of")} {steps.length}
        </p>
      </div>

      <h3 className="mt-5 font-display text-4xl uppercase leading-tight tracking-wide text-fg sm:text-5xl">
        {l(step.title)}
      </h3>
      <p className="mt-4 text-lg leading-relaxed text-muted">{l(step.description)}</p>

      <p className="mt-8 font-serif text-sm font-semibold uppercase tracking-[0.35em] text-muted">
        {t("process.practice")}
      </p>
      <ul className="mt-4 grid gap-3">
        {step.evidence.map((e, i) => (
          <motion.li
            key={e.project}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12 + i * 0.1, duration: 0.45 }}
            className="rounded-2xl border border-fg/10 bg-fg/5 p-4 transition hover:border-electric/50 hover:bg-electric/10"
          >
            <span className="inline-block rounded-md bg-cta px-2.5 py-0.5 font-display text-sm uppercase tracking-wide text-cta-fg">
              {e.project}
            </span>
            <p className="mt-2 leading-relaxed text-fg/90">{l(e.text)}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Process() {
  const [current, setCurrent] = useState(0);
  const { t, l } = useT();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: KeyboardEvent) {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const next = (current + (e.key === "ArrowDown" ? 1 : steps.length - 1)) % steps.length;
    setCurrent(next);
    buttons.current[next]?.focus();
  }

  return (
    <section id="proceso" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.p
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="font-serif text-sm font-semibold uppercase tracking-[0.4em] text-bolt sm:text-base"
      >
        {t("process.eyebrow")}
      </motion.p>
      <motion.h2
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-3 font-display text-6xl uppercase leading-[0.95] sm:text-7xl"
      >
        <span className="chroma">{t("process.title1")}</span> <span className="text-outline">{t("process.title2")}</span>
      </motion.h2>
      <motion.p
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-5 max-w-2xl text-lg text-muted"
      >
        {t("process.intro")}
      </motion.p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.ol
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          aria-label={t("process.listAria")}
          onKeyDown={onKeyDown}
          className="relative"
        >
          <span aria-hidden className="absolute bottom-8 left-[1.65rem] top-8 w-px bg-fg/10" />
          <motion.span
            aria-hidden
            animate={{ height: `${(current / (steps.length - 1)) * 100}%` }}
            transition={{ type: "spring", stiffness: 140, damping: 22 }}
            className="absolute left-[1.65rem] top-8 max-h-[calc(100%-4rem)] w-[3px] -translate-x-px rounded-full bg-gradient-to-b from-electric via-bolt to-violet shadow-[0_0_14px_rgba(59,139,255,0.8)]"
          />

          {steps.map((step, i) => {
            const active = i === current;
            const Icon = icons[step.id as keyof typeof icons];
            return (
              <li key={step.id} className="relative">
                <button
                  ref={(el) => {
                    buttons.current[i] = el;
                  }}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-current={active ? "step" : undefined}
                  className={`group relative flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition duration-300 ${
                    active
                      ? "border-electric/60 bg-electric/10 shadow-[0_10px_40px_rgba(59,109,255,0.2)]"
                      : "border-transparent hover:border-fg/15 hover:bg-fg/5"
                  }`}
                >
                  <span
                    className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-xl font-display text-xl ring-4 ring-night transition duration-300 ${
                      active
                        ? "bg-gradient-to-br from-electric to-violet text-white shadow-lg shadow-electric/40"
                        : i < current
                          ? "bg-panel text-bolt shadow-[inset_0_0_0_2px_var(--bolt)]"
                          : "bg-panel text-muted group-hover:text-fg"
                    }`}
                  >
                    {active ? <Icon size={22} aria-hidden /> : String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-xl uppercase leading-tight tracking-wide transition-colors sm:text-2xl ${
                      active ? "text-fg" : "text-muted group-hover:text-fg"
                    }`}
                  >
                    {l(step.title)}
                  </span>
                  {active && (
                    <Zap
                      size={18}
                      fill="currentColor"
                      strokeWidth={0}
                      aria-hidden
                      className="ml-auto shrink-0 text-bolt drop-shadow-[0_0_8px_rgba(59,139,255,0.9)]"
                    />
                  )}
                </button>

                {/* En pantallas pequeñas el detalle aparece justo debajo del paso */}
                <div className="lg:hidden">
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="my-3 rounded-[1.5rem] border border-fg/10 bg-panel/70 p-5 backdrop-blur">
                          <Detail step={step} index={i} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            );
          })}
        </motion.ol>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          aria-live="polite"
          className="relative hidden self-start lg:sticky lg:top-12 lg:block"
        >
          <div aria-hidden className="absolute -inset-6 rounded-full bg-electric/15 blur-3xl" />
          <div className="relative min-h-[34rem] rounded-[2rem] border border-fg/10 bg-panel/70 p-8 shadow-xl shadow-black/30 backdrop-blur">
            <AnimatePresence mode="wait">
              <Detail key={steps[current].id} step={steps[current]} index={current} />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
