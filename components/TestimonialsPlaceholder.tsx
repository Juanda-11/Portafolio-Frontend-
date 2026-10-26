"use client";

import { useT } from "@/lib/preferences";

/** Provisional: se reemplaza por la sección de testimonios cuando estén listos. */
export default function TestimonialsPlaceholder() {
  const { t } = useT();
  return (
    <section id="testimonios" className="grid min-h-[50vh] place-items-center px-6">
      <h2 className="font-display text-5xl uppercase text-fg">{t("testimonials.title")}</h2>
    </section>
  );
}
