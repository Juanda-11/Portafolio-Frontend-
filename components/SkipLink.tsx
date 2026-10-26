"use client";

import { useT } from "@/lib/preferences";

/** Primer elemento al navegar con teclado: permite saltar directo al contenido. */
export default function SkipLink() {
  const { t } = useT();
  return (
    <a
      href="#contenido"
      className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-xl bg-cta px-5 py-3 font-display text-lg uppercase tracking-wide text-cta-fg shadow-xl transition-transform focus:translate-y-0"
    >
      {t("skip")}
    </a>
  );
}
