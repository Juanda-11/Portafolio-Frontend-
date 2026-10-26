"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight, Zap } from "lucide-react";
import Lightning from "@/components/Lightning";
import { profile, stack } from "@/lib/data";
import { useT } from "@/lib/preferences";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

function PhotoCard() {
  const { t } = useT();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 18 });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ perspective: 1000 }}
      className="relative mx-auto w-full max-w-sm"
    >
      <div aria-hidden className="absolute -inset-10 rounded-full bg-gradient-to-br from-electric/60 via-violet/30 to-bolt/20 blur-3xl" />
      <div aria-hidden className="dots absolute -right-6 -top-6 h-40 w-40 opacity-60 sm:-right-10" />

      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-electric via-bolt to-violet p-[3px] shadow-2xl shadow-black/60">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.35rem] bg-panel">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={t("hero.photoAlt")}
                fill
                sizes="(min-width: 640px) 24rem, 90vw"
                className="object-cover"
                style={{ objectPosition: "50% 30%" }}
                priority
              />
            ) : (
              <div className="grid h-full place-items-center font-display text-9xl text-fg/90">
                {profile.initials}
              </div>
            )}
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-electric/10" />
            <div
              aria-hidden
              className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-[conic-gradient(from_90deg,#ff3b6b,#ffd23f,#3bff9c,#3bb7ff,#9b5cff,#ff3b6b)] opacity-40 mix-blend-screen blur-2xl"
            />
            <p className="absolute bottom-4 left-5 font-mono text-xs uppercase tracking-[0.2em] text-fg/80">
              ● {t("hero.caption")}
            </p>
          </div>
        </div>

        <motion.span
          animate={{ rotate: [-8, -4, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ translateZ: 60 }}
          className="absolute -left-4 top-8 rounded-lg bg-cta px-3 py-1.5 font-display text-lg uppercase tracking-wide text-cta-fg shadow-xl sm:-left-10"
        >
          {t("hero.sticker.semester")}
        </motion.span>
        <motion.span
          animate={{ rotate: [6, 10, 6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ translateZ: 60 }}
          className="absolute -right-3 bottom-16 rounded-lg border border-fg/20 bg-panel/90 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-fg shadow-xl backdrop-blur sm:-right-8"
        >
          {t("hero.sticker.career")}
        </motion.span>
        <motion.span
          aria-hidden
          animate={{ scale: [1, 1.2, 1], rotate: [-8, 8, -8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ translateZ: 80 }}
          className="absolute -bottom-6 -left-4 text-bolt drop-shadow-[0_0_12px_rgba(59,139,255,0.9)] sm:-left-8"
        >
          <Zap size={54} fill="currentColor" strokeWidth={0} />
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

function Tape() {
  const items = [...stack, ...stack];
  return (
    <div className="marquee pointer-events-auto absolute inset-x-0 bottom-8 -rotate-2 overflow-hidden bg-electric py-3 shadow-[0_0_40px_rgba(59,139,255,0.45)] lg:bottom-12">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {[0, 1].map((dup) => (
          <ul key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center">
            {items.slice(0, stack.length).map((t, i) => (
              <li key={`${t}-${i}`} className="flex items-center font-display text-xl uppercase tracking-wide text-white sm:text-2xl">
                <span className="px-6">{t}</span>
                <Zap size={16} fill="currentColor" strokeWidth={0} aria-hidden />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const { t, l } = useT();
  return (
    <section id="inicio" className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-6 left-0 select-none whitespace-nowrap font-display text-[22vw] uppercase leading-none text-fg/[0.04]"
      >
        {l({ es: "Portafolio", en: "Portfolio" })}
      </div>

      <Lightning className="absolute right-[34%] top-0 hidden h-[88%] w-56 md:block" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-44 pt-16 md:grid-cols-[1.15fr_0.85fr] lg:pb-48">
        <div className="text-center md:text-left">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-serif text-sm font-semibold uppercase tracking-[0.4em] text-bolt sm:text-base"
          >
            {t("hero.eyebrow")}
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4 font-display text-[clamp(3.6rem,11vw,8.5rem)] uppercase leading-[0.9] tracking-tight"
          >
            <span className="chroma block text-fg">Juan David</span>
            <span className="block bg-gradient-to-r from-electric via-cyan to-violet bg-clip-text text-transparent">
              Jurado Paz
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 inline-block -rotate-1 rounded-md bg-fg/10 px-3 py-1 font-mono text-sm font-bold uppercase tracking-wider text-fg backdrop-blur"
          >
            {l(profile.role)}
          </motion.p>

          <motion.p
            custom={2.5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 flex items-center justify-center gap-3 md:justify-start"
          >
            <span className="neon rounded-full border-2 border-fg px-4 py-0.5 font-display text-lg uppercase tracking-widest">
              {t("hero.open")}
            </span>
            <span className="font-serif text-lg font-semibold uppercase tracking-[0.2em] text-fg/80">
              {t("hero.openFor")}
            </span>
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg md:mx-0"
          >
            {l(profile.tagline)}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <a
              href={l(profile.cvUrl)}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-cta px-7 py-4 font-display text-lg uppercase tracking-wide text-cta-fg shadow-[0_0_30px_rgba(124,200,255,0.45)] transition hover:-translate-y-1 hover:shadow-[0_0_44px_rgba(124,200,255,0.8)]"
            >
              <ArrowDownToLine size={20} aria-hidden className="transition-transform group-hover:translate-y-0.5" />
              {t("hero.cv")}
            </a>
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-fg/25 px-7 py-4 font-display text-lg uppercase tracking-wide text-fg transition hover:-translate-y-1 hover:border-electric hover:bg-electric/15"
            >
              {t("hero.projects")}
              <ArrowUpRight size={20} aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <PhotoCard />
      </div>

      <Tape />
    </section>
  );
}
