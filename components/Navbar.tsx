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
  Moon,
  Sun,
  User,
  Workflow,
} from "lucide-react";
import Logo from "@/components/Logo";
import { navLinks, profile } from "@/lib/data";
import { useLocale, useT, useTheme } from "@/lib/preferences";

type Icon = ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;

const icons: Record<string, Icon> = {
  inicio: Home,
  "sobre-mi": User,
  proyectos: FolderKanban,
  testimonios: MessageSquareQuote,
  experiencia: Briefcase,
  proceso: Workflow,
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
  const { t, l } = useT();
  const { theme, toggleTheme } = useTheme();
  const { locale, toggleLocale } = useLocale();

  return (
    <motion.nav
      aria-label={t("nav.aria")}
      onHoverStart={() => setExpanded(true)}
      onHoverEnd={() => setExpanded(false)}
      onFocus={() => setExpanded(true)}
      onBlur={() => setExpanded(false)}
      initial={false}
      animate={{ width: expanded ? 232 : 72 }}
      transition={{ type: "spring", stiffness: 320, damping: 32 }}
      className="fixed bottom-4 left-4 top-4 z-50 hidden flex-col overflow-hidden rounded-[28px] border border-fg/10 bg-panel/95 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl lg:flex"
    >
      <a
        href="#inicio"
        aria-label={profile.name}
        className="flex h-12 items-center gap-3 rounded-2xl"
      >
        <Logo
          size={48}
          className="shrink-0 rounded-2xl shadow-lg shadow-electric/40 transition-transform duration-300 hover:rotate-[-6deg] hover:scale-105"
        />
        <span
          className={`flex flex-col whitespace-nowrap leading-none transition-opacity duration-200 ${
            expanded ? "opacity-100 delay-100" : "opacity-0"
          }`}
        >
          <span className="font-display text-xl uppercase tracking-wide text-fg">{profile.shortName}</span>
          <span className="mt-1 font-serif text-xs font-semibold uppercase tracking-[0.3em] text-bolt">Jurado Paz</span>
        </span>
      </a>

      <ul className="my-auto flex flex-col gap-2 rounded-3xl bg-fg/5 p-0 py-2">
        {navLinks.map(({ id, label }) => {
          const Icon = icons[id];
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "page" : undefined}
                title={l(label)}
                className="group relative flex h-12 items-center gap-3 rounded-2xl"
              >
                {isActive && (
                  <motion.span
                    layoutId="rail-active"
                    className="absolute left-0 top-0 h-12 w-12 rounded-2xl bg-gradient-to-br from-electric to-violet shadow-lg shadow-electric/50"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`relative grid h-12 w-12 shrink-0 place-items-center transition-colors ${
                    isActive ? "text-white" : "text-muted group-hover:text-fg"
                  }`}
                >
                  <Icon size={22} aria-hidden />
                </span>
                <span
                  className={`whitespace-nowrap text-sm font-bold transition-opacity duration-200 ${
                    isActive ? "text-fg" : "text-muted group-hover:text-fg"
                  } ${expanded ? "opacity-100 delay-100" : "opacity-0"}`}
                >
                  {l(label)}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mb-2 flex flex-col gap-1">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={t("nav.theme.aria")}
          className="group flex h-12 items-center gap-3 rounded-2xl text-muted transition-colors hover:text-fg"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center">
            {theme === "dark" ? <Sun size={20} aria-hidden /> : <Moon size={20} aria-hidden />}
          </span>
          <span
            className={`whitespace-nowrap text-sm font-bold transition-opacity duration-200 ${
              expanded ? "opacity-100 delay-100" : "opacity-0"
            }`}
          >
            {theme === "dark" ? t("nav.theme.toLight") : t("nav.theme.toDark")}
          </span>
        </button>
        <button
          type="button"
          onClick={toggleLocale}
          aria-label={t("nav.lang.aria")}
          className="group flex h-12 items-center gap-3 rounded-2xl text-muted transition-colors hover:text-fg"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center font-display text-lg tracking-wide">
            {locale.toUpperCase()}
          </span>
          <span
            className={`whitespace-nowrap text-sm font-bold transition-opacity duration-200 ${
              expanded ? "opacity-100 delay-100" : "opacity-0"
            }`}
          >
            {t("nav.lang")}
          </span>
        </button>
      </div>

      <a
        href={l(profile.cvUrl)}
        download
        aria-label={t("nav.cv")}
        className="flex h-12 items-center gap-3 rounded-2xl bg-cta text-cta-fg shadow-lg shadow-electric/30 transition-shadow hover:shadow-electric/60"
      >
        <span className="grid h-12 w-12 shrink-0 place-items-center">
          <Download size={20} aria-hidden />
        </span>
        <span
          className={`whitespace-nowrap text-sm font-bold transition-opacity duration-200 ${
            expanded ? "opacity-100 delay-100" : "opacity-0"
          }`}
        >
          {t("nav.cv")}
        </span>
      </a>
    </motion.nav>
  );
}

/** Móvil: barra inferior con círculo flotante sobre la sección activa. */
function BottomBar({ active }: { active: string }) {
  const { t, l } = useT();
  const index = Math.max(0, navLinks.findIndex((l) => l.id === active));
  const count = navLinks.length;
  const x = `${((index + 0.5) / count) * 100}%`;

  return (
    <nav
      aria-label={t("nav.aria")}
      className="fixed inset-x-3 bottom-3 z-50 h-16 drop-shadow-[0_10px_24px_rgba(0,0,0,0.6)] lg:hidden"
    >
      <div
        aria-hidden
        className="bottom-bar-bg absolute inset-0 rounded-3xl border border-fg/10 bg-panel"
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
                aria-label={l(label)}
                aria-current={isActive ? "page" : undefined}
                className="flex h-full flex-col items-center justify-center"
              >
                {isActive ? (
                  <>
                    <motion.span
                      layoutId="bar-active"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      className="absolute left-1/2 top-[-20px] grid h-[52px] w-[52px] -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-electric to-violet text-white shadow-lg shadow-electric/50"
                    >
                      <Icon size={22} aria-hidden />
                    </motion.span>
                    <AnimatePresence>
                      <motion.span
                        key={id}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-2 text-[11px] font-bold text-bolt"
                      >
                        {l(label)}
                      </motion.span>
                    </AnimatePresence>
                  </>
                ) : (
                  <Icon size={22} className="text-muted" aria-hidden />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** Móvil: botones flotantes de tema e idioma (la barra inferior no tiene espacio). */
function FloatingControls() {
  const { t } = useT();
  const { theme, toggleTheme } = useTheme();
  const { locale, toggleLocale } = useLocale();
  const button =
    "grid h-10 w-10 place-items-center rounded-full border border-fg/10 bg-panel/90 text-fg shadow-lg shadow-black/30 backdrop-blur transition active:scale-95";

  return (
    <div className="fixed right-3 top-3 z-50 flex gap-2 lg:hidden">
      <button type="button" onClick={toggleLocale} aria-label={t("nav.lang.aria")} className={`${button} font-display text-sm`}>
        {locale.toUpperCase()}
      </button>
      <button type="button" onClick={toggleTheme} aria-label={t("nav.theme.aria")} className={button}>
        {theme === "dark" ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
      </button>
    </div>
  );
}

export default function Navbar() {
  const active = useActiveSection();
  return (
    <>
      <SideRail active={active} />
      <BottomBar active={active} />
      <FloatingControls />
    </>
  );
}
