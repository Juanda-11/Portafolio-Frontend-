"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight, Sparkle } from "lucide-react";
import { profile, stack } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

function PhotoCard() {
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
      <div aria-hidden className="absolute -inset-10 rounded-full bg-gradient-to-br from-electric/50 via-violet/40 to-gold/20 blur-3xl" />
      <div aria-hidden className="dots absolute -right-6 -top-6 h-40 w-40 opacity-60 sm:-right-10" />

      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-electric via-violet to-gold p-[3px] shadow-2xl shadow-black/60">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.35rem] bg-panel">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={`Foto de ${profile.shortName}`}
                fill
                sizes="(min-width: 640px) 24rem, 90vw"
                className="object-cover"
                style={{ objectPosition: "50% 30%" }}
                priority
              />
            ) : (
              <div className="grid h-full place-items-center font-display text-9xl text-white/90">
                {profile.initials}
              </div>
            )}
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-electric/10" />
            <p className="absolute bottom-4 left-5 font-mono text-xs uppercase tracking-[0.2em] text-white/80">
              ● UCC · Pasto
            </p>
          </div>
        </div>

        <motion.span
          animate={{ rotate: [-8, -4, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ translateZ: 60 }}
          className="absolute -left-4 top-8 rounded-lg bg-gold px-3 py-1.5 font-display text-lg uppercase tracking-wide text-black shadow-xl sm:-left-10"
        >
          4.º semestre
        </motion.span>
        <motion.span
          animate={{ rotate: [6, 10, 6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ translateZ: 60 }}
          className="absolute -right-3 bottom-16 rounded-lg border border-white/20 bg-night/80 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-xl backdrop-blur sm:-right-8"
        >
          Ing. de Software
        </motion.span>
        <motion.span
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          style={{ translateZ: 80 }}
          className="absolute -bottom-6 -left-4 text-gold sm:-left-8"
        >
          <Sparkle size={54} fill="currentColor" strokeWidth={0} />
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

function Tape() {
  const items = [...stack, ...stack];
  return (
    <div className="marquee pointer-events-auto absolute inset-x-0 bottom-8 -rotate-2 overflow-hidden bg-gold py-3 shadow-2xl shadow-black/50 lg:bottom-12">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {[0, 1].map((dup) => (
          <ul key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center">
            {items.slice(0, stack.length).map((t, i) => (
              <li key={`${t}-${i}`} className="flex items-center font-display text-xl uppercase tracking-wide text-black sm:text-2xl">
                <span className="px-6">{t}</span>
                <Sparkle size={16} fill="currentColor" strokeWidth={0} aria-hidden />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-6 left-0 select-none whitespace-nowrap font-display text-[22vw] uppercase leading-none text-white/[0.03]"
      >
        Portafolio
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-44 pt-16 md:grid-cols-[1.15fr_0.85fr] lg:pb-48">
        <div className="text-center md:text-left">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-mono text-xs uppercase tracking-[0.25em] text-gold sm:text-sm"
          >
            {"// Portafolio · Diseño de Interfaces"}
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4 font-display text-[clamp(3.6rem,11vw,8.5rem)] uppercase leading-[0.9] tracking-tight"
          >
            <span className="block text-fg">Juan David</span>
            <span className="block bg-gradient-to-r from-electric via-cyan to-violet bg-clip-text text-transparent">
              Jurado Paz
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 inline-block -rotate-1 rounded-md bg-white/10 px-3 py-1 font-mono text-sm font-bold uppercase tracking-wider text-fg backdrop-blur"
          >
            {profile.role}
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg md:mx-0"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <a
              href={profile.cvUrl}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 font-display text-lg uppercase tracking-wide text-black shadow-lg shadow-gold/25 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/40"
            >
              <ArrowDownToLine size={20} aria-hidden className="transition-transform group-hover:translate-y-0.5" />
              Descargar CV
            </a>
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-7 py-4 font-display text-lg uppercase tracking-wide text-fg transition hover:-translate-y-1 hover:border-electric hover:bg-electric/15"
            >
              Ver proyectos
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
