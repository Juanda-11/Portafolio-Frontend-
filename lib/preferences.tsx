"use client";

import { useCallback, useSyncExternalStore } from "react";
import { dictionary, pick, type DictKey, type Locale, type Text } from "@/lib/i18n";

export type Theme = "dark" | "light";

type Store<T extends string> = {
  get: () => T;
  set: (value: T) => void;
  subscribe: (listener: () => void) => () => void;
};

/** Pequeño almacén persistente: guarda en localStorage y avisa a los componentes que lo usan. */
function createStore<T extends string>(key: string, fallback: T, valid: readonly T[], apply: (v: T) => void): Store<T> {
  const listeners = new Set<() => void>();
  const read = (): T => {
    try {
      const saved = window.localStorage.getItem(key) as T | null;
      if (saved && valid.includes(saved)) return saved;
    } catch {
      /* sin acceso a localStorage: usamos el valor por defecto */
    }
    return fallback;
  };
  return {
    get: read,
    set(value) {
      try {
        window.localStorage.setItem(key, value);
      } catch {
        /* ignorado */
      }
      apply(value);
      listeners.forEach((l) => l());
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

const themeStore = createStore<Theme>("theme", "dark", ["dark", "light"], (v) => {
  document.documentElement.dataset.theme = v;
});

const localeStore = createStore<Locale>("locale", "es", ["es", "en"], (v) => {
  document.documentElement.lang = v;
});

export function useTheme() {
  const theme = useSyncExternalStore(themeStore.subscribe, themeStore.get, () => "dark" as Theme);
  return { theme, setTheme: themeStore.set, toggleTheme: () => themeStore.set(theme === "dark" ? "light" : "dark") };
}

export function useLocale() {
  const locale = useSyncExternalStore(localeStore.subscribe, localeStore.get, () => "es" as Locale);
  return { locale, setLocale: localeStore.set, toggleLocale: () => localeStore.set(locale === "es" ? "en" : "es") };
}

/** t("clave") traduce un texto de la interfaz; l(texto) elige el idioma de un dato. */
export function useT() {
  const { locale } = useLocale();
  const t = useCallback((key: DictKey) => dictionary[locale][key], [locale]);
  const l = useCallback((text: Text) => pick(text, locale), [locale]);
  return { t, l, locale };
}

/** Script que se ejecuta antes de pintar para aplicar tema e idioma guardados (evita parpadeos). */
export const preferencesScript = `try{var d=document.documentElement;var t=localStorage.getItem("theme");d.dataset.theme=t==="light"?"light":"dark";var l=localStorage.getItem("locale");d.lang=l==="en"?"en":"es"}catch(e){}`;
