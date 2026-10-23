"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(navLinks[0].id);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Navegación principal"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-sky-100 bg-white/80 shadow-lg shadow-sky-900/5 backdrop-blur-xl"
            : "border-transparent bg-white/50 backdrop-blur-md"
        }`}
      >
        <a
          href="#inicio"
          className="flex items-center gap-3"
          aria-label={`${profile.name} - ir al inicio`}
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 font-heading text-sm font-bold text-white shadow-md shadow-blue-500/30">
            {profile.initials}
          </span>
          <span className="hidden font-heading text-lg font-bold text-ink sm:block">
            {profile.shortName}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "page" : undefined}
                className="relative rounded-xl px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:text-blue-700 aria-[current=page]:text-blue-700"
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-xl bg-sky-100/80"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.cvUrl}
            download
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-transform hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
          >
            <Download size={16} aria-hidden /> CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid h-10 w-10 place-items-center rounded-xl bg-sky-100/80 text-blue-700 transition-colors hover:bg-sky-200 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-sky-100 bg-white/95 p-3 shadow-xl shadow-sky-900/10 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ id, label }, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === id ? "page" : undefined}
                    className="block rounded-xl px-4 py-3 font-semibold text-ink-soft transition-colors hover:bg-sky-50 aria-[current=page]:bg-sky-100 aria-[current=page]:text-blue-700"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-1">
                <a
                  href={profile.cvUrl}
                  download
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-3 font-bold text-white"
                >
                  <Download size={18} aria-hidden /> Descargar CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
