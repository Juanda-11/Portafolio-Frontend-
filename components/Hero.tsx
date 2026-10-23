"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownToLine, Code2, GraduationCap, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const chips = [
  { icon: GraduationCap, text: profile.semester, className: "-left-2 top-6 sm:-left-8", delay: 0 },
  { icon: Code2, text: "Ing. de Software", className: "-right-2 top-1/2 sm:-right-10", delay: 1.2 },
  { icon: Sparkles, text: "UCC Pasto", className: "bottom-4 left-0 sm:-left-6", delay: 2.2 },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2"
    >
      <div className="text-center md:text-left">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/70 px-4 py-1.5 text-sm font-bold text-blue-700 shadow-sm backdrop-blur"
        >
          <span aria-hidden>👋</span> Hola, soy
        </motion.span>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-5 font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
        >
          Juan David{" "}
          <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent">
            Jurado Paz
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-4 font-heading text-xl font-semibold text-blue-800 sm:text-2xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-ink-soft md:mx-0"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
        >
          <a
            href={profile.cvUrl}
            download
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40"
          >
            <ArrowDownToLine
              size={18}
              aria-hidden
              className="transition-transform group-hover:translate-y-0.5"
            />
            Descargar CV
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-sky-200 bg-white/70 px-6 py-3.5 font-bold text-blue-700 backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-400 hover:bg-white"
          >
            Ver proyectos
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto aspect-square w-full max-w-sm sm:max-w-md"
      >
        <div
          aria-hidden
          className="absolute -inset-6 rounded-full bg-gradient-to-br from-sky-200/70 via-blue-100/60 to-amber-100/70 blur-2xl"
        />
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300/70"
        />
        <div className="absolute inset-6 overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-sky-400 via-blue-500 to-blue-800 shadow-2xl shadow-blue-900/20">
          {profile.photo ? (
            <Image src={profile.photo} alt={`Foto de ${profile.shortName}`} fill sizes="(min-width: 640px) 28rem, 90vw" className="object-cover" style={{ objectPosition: "50% 28%" }} priority />
          ) : (
            <div className="grid h-full w-full place-items-center">
              <span className="font-heading text-8xl font-extrabold text-white/95 drop-shadow-lg sm:text-9xl">
                {profile.initials}
              </span>
            </div>
          )}
        </div>

        {chips.map(({ icon: Icon, text, className, delay }) => (
          <motion.div
            key={text}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
            className={`absolute ${className} flex items-center gap-2 rounded-2xl border border-white bg-white/90 px-3.5 py-2 text-sm font-bold text-ink shadow-lg shadow-blue-900/10 backdrop-blur`}
          >
            <Icon size={16} className="text-blue-600" aria-hidden />
            {text}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
