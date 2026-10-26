"use client";

import { useState, type ComponentType, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Loader2, Mail, Send, TriangleAlert } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";
import { dictionary, type DictKey, type Localized } from "@/lib/i18n";
import { useT } from "@/lib/preferences";

const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000").trim().replace(/\/+$/, "");

type Status = "idle" | "sending" | "success" | "error";

const channels: { label: Localized; value: string; href: string; icon: ComponentType<{ size?: number }> }[] = [
  { label: { es: "Correo", en: "Email" }, value: profile.emailPersonal, href: `mailto:${profile.emailPersonal}`, icon: Mail },
  { label: { es: "LinkedIn", en: "LinkedIn" }, value: "Juan David Jurado Paz", href: profile.linkedin, icon: LinkedinIcon },
  { label: { es: "GitHub", en: "GitHub" }, value: "Juanda-11", href: profile.github, icon: GithubIcon },
];

const reveal = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" as const },
  }),
};

const field =
  "w-full rounded-2xl border border-fg/10 bg-fg/5 px-4 py-3.5 text-fg placeholder:text-muted/70 outline-none transition focus:border-electric focus:bg-electric/10 focus:shadow-[0_0_0_4px_rgba(59,109,255,0.2)]";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorKey, setErrorKey] = useState<DictKey>("contact.err.generic");
  const { t, l } = useT();
  const [draft, setDraft] = useState({ name: "", message: "" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setDraft({ name: data.name ?? "", message: data.message ?? "" });
    setStatus("sending");
    setErrorKey("contact.err.generic");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        const key = `contact.err.${body?.error ?? "generic"}` as DictKey;
        setErrorKey(key in dictionary.es ? key : "contact.err.generic");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setErrorKey("contact.err.network");
      setStatus("error");
    }
  }

  const mailto = `mailto:${profile.emailPersonal}?subject=${encodeURIComponent(
    `${t("contact.mailtoSubject")}${draft.name ? ` · ${draft.name}` : ""}`,
  )}&body=${encodeURIComponent(draft.message)}`;

  return (
    <section id="contacto" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.p
        custom={0}
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="font-serif text-sm font-semibold uppercase tracking-[0.4em] text-bolt sm:text-base"
      >
        {t("contact.eyebrow")}
      </motion.p>
      <motion.h2
        custom={1}
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-3 font-display text-6xl uppercase leading-[0.95] sm:text-7xl"
      >
        <span className="chroma">{t("contact.title1")}</span> <span className="text-outline">{t("contact.title2")}</span>
      </motion.h2>
      <motion.p
        custom={2}
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-5 max-w-2xl text-lg text-muted"
      >
        {t("contact.intro")}
      </motion.p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <ul className="space-y-4">
          {channels.map(({ label, value, href, icon: Icon }, i) => (
            <motion.li
              key={l(label)}
              custom={i}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-fg/10 bg-panel/70 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-electric/60 hover:shadow-[0_16px_40px_rgba(59,109,255,0.22)]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric to-violet text-white shadow-lg shadow-electric/30">
                  <Icon size={22} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-serif text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                    {l(label)}
                  </span>
                  <span className="block truncate font-bold text-fg">{value}</span>
                </span>
                <ArrowUpRight
                  size={20}
                  aria-hidden
                  className="text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-bolt"
                />
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.div
          custom={1}
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="relative overflow-hidden rounded-[1.75rem] border border-fg/10 bg-panel/70 p-6 shadow-xl shadow-black/40 backdrop-blur sm:p-8"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                role="status"
                className="flex min-h-80 flex-col items-center justify-center text-center"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
                  className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-electric to-violet text-white shadow-[0_0_40px_rgba(59,139,255,0.7)]"
                >
                  <Check size={40} strokeWidth={3} />
                </motion.span>
                <h3 className="mt-6 font-display text-4xl uppercase">{t("contact.okTitle")}</h3>
                <p className="mt-2 text-muted">{t("contact.okText")}</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 font-display text-lg uppercase tracking-wide text-bolt transition hover:text-fg"
                >
                  {t("contact.another")}
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-4"
              >
                <label className="grid gap-2">
                  <span className="font-serif text-xs font-semibold uppercase tracking-[0.3em] text-muted">{t("contact.name")}</span>
                  <input name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder={t("contact.namePh")} className={field} />
                </label>
                <label className="grid gap-2">
                  <span className="font-serif text-xs font-semibold uppercase tracking-[0.3em] text-muted">{t("contact.email")}</span>
                  <input name="email" type="email" required maxLength={120} autoComplete="email" placeholder={t("contact.emailPh")} className={field} />
                </label>
                <label className="grid gap-2">
                  <span className="font-serif text-xs font-semibold uppercase tracking-[0.3em] text-muted">{t("contact.message")}</span>
                  <textarea name="message" required minLength={10} maxLength={2000} rows={5} placeholder={t("contact.messagePh")} className={`${field} resize-y`} />
                </label>

                {/* Campo trampa anti-spam: invisible para personas */}
                <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />

                {status === "error" && (
                  <div role="alert" className="flex items-start gap-3 rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-sm">
                    <TriangleAlert size={18} className="mt-0.5 shrink-0 text-red-300" aria-hidden />
                    <p className="text-red-100">
                      {t(errorKey)}{" "}
                      <a href={mailto} className="font-bold underline underline-offset-4 hover:text-fg">
                        {t("contact.errorDirect")}
                      </a>
                      .
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cta px-7 py-4 font-display text-lg uppercase tracking-wide text-cta-fg shadow-[0_0_30px_rgba(124,200,255,0.4)] transition hover:-translate-y-1 hover:shadow-[0_0_44px_rgba(124,200,255,0.8)] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={20} className="animate-spin" aria-hidden /> {t("contact.sending")}
                    </>
                  ) : (
                    <>
                      {t("contact.send")}
                      <Send size={18} aria-hidden className="transition group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
