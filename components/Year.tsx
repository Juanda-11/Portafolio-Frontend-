"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Año actual calculado en el navegador (el servidor muestra 2026 mientras tanto). */
export default function Year() {
  const year = useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => 2026);
  return <>{year}</>;
}
