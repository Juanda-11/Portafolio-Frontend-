"use client";

import { useEffect, useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Download,
  FolderKanban,
  Home,
  Mail,
  MessageSquareQuote,
  User,
} from "lucide-react";
import { navLinks, profile } from "@/lib/data";

type Icon = ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;

const icons: Record<string, Icon> = {
  inicio: Home,
  "sobre-mi": User,
  proyectos: FolderKanban,
  testimonios: MessageSquareQuote,
  experiencia: Briefcase,
  contacto: Mail,
};

function useActiveSection() {
  const [active, setActive] = useState(navLinks[0].id);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

/** Escritorio: riel vertical de iconos que se expande al acercar el mouse. */
function SideRail({ active }: { active: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.nav
      aria-label="Navegación principal"
      onHoverStart={() => setExpanded(true)}
      onHoverEnd={() => setExpanded(false)}
      onFocus={() => setExpanded(true)}
      onBlur={() => setExpanded(false)}
      initial={false}
      animate={{ width: expanded ? 232 : 72 }}
      transition={{ type: "spring", stiffness: 320, damping: 32 }}
      className="fixed bottom-4 left-4 top-4 z-50 hidden flex-col overflow-hidden rounded-[28px] border border-white bg-white/80 p-3 shadow-xl shadow-blue-900/10 backdrop-blur-xl lg:flex"
    >
      <a
        href="#inicio"
        aria-label={`${profile.name} - ir al inicio`}
        className="flex h-12 items-center gap-3 rounded-2xl"
      >
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 font-heading text-base font-extrabold text-white shadow-md shadow-blue-500/30">
          {profile.initials}
        </span>
        <span
          className={`whitespace-nowrap font-heading text-base font-bold text-ink transition-opacity duration-200 ${
            expanded ? "opacity-100 delay-100" : "opacity-0"
          }`}
        >
          {profile.shortName}
        </span>
      </a>

      <ul className="my-auto flex flex-col gap-2 rounded-3xl bg-sky-50/70 p-0 py-2">
        {navLinks.map(({ id, label }) => {
          const Icon = icons[id];
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "page" : undefined}
                title={label}
                className="group relative flex h-12 items-center gap-3 rounded-2xl"
              >
                {isActive && (
                  <motion.span
                    layoutId="rail-active"
                    className="absolute left-0 top-0 h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg shadow-blue-500/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`relative grid h-12 w-12 shrink-0 place-items-center transition-colors ${
                    isActive ? "text-white" : "text-ink-soft group-hover:text-blue-600"
                  }`}
                >
                  <Icon size={22} aria-hidden />
                </span>
                <span
                  className={`whitespace-nowrap text-sm font-bold transition-opacity duration-200 ${
                    isActive ? "text-blue-700" : "text-ink-soft group-hover:text-blue-600"
                  } ${expanded ? "opacity-100 delay-100" : "opacity-0"}`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <a
        href={profile.cvUrl}
        download
        aria-label="Descargar CV"
        className="flex h-12 items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/30 transition-shadow hover:shadow-lg"
      >
        <span className="grid h-12 w-12 shrink-0 place-items-center">
          <Download size={20} aria-hidden />
        </span>
        <span
          className={`whitespace-nowrap text-sm font-bold transition-opacity duration-200 ${
            expanded ? "opacity-100 delay-100" : "opacity-0"
          }`}
        >
          Descargar CV
        </span>
      </a>
    </motion.nav>
  );
}

/** Móvil: barra inferior con círculo flotante sobre la sección activa. */
function BottomBar({ active }: { active: string }) {
  const index = Math.max(0, navLinks.findIndex((l) => l.id === active));
  const count = navLinks.length;
  const x = `${((index + 0.5) / count) * 100}%`;

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-x-3 bottom-3 z-50 h-16 drop-shadow-[0_10px_24px_rgba(30,64,175,0.18)] lg:hidden"
    >
      <div
        aria-hidden
        className="bottom-bar-bg absolute inset-0 rounded-3xl bg-white"
        style={{ "--notch-x": x } as React.CSSProperties}
      />
      <ul
        className="relative grid h-full"
        style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
      >
        {navLinks.map(({ id, label }) => {
          const Icon = icons[id];
          const isActive = active === id;
          return (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                aria-label={label}
                aria-current={isActive ? "page" : undefined}
                className="flex h-full flex-col items-center justify-center"
              >
                {isActive ? (
                  <>
                    <motion.span
                      layoutId="bar-active"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      className="absolute left-1/2 top-[-20px] grid h-[52px] w-[52px] -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-lg shadow-blue-500/40"
                    >
                      <Icon size={22} aria-hidden />
                    </motion.span>
                    <AnimatePresence>
                      <motion.span
                        key={id}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-2 text-[11px] font-bold text-blue-700"
                      >
                        {label}
                      </motion.span>
                    </AnimatePresence>
                  </>
                ) : (
                  <Icon size={22} className="text-ink-soft" aria-hidden />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function Navbar() {
  const active = useActiveSection();
  return (
    <>
      <SideRail active={active} />
      <BottomBar active={active} />
    </>
  );
}
