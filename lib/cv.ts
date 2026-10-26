import type { Locale } from "@/lib/i18n";

/**
 * ┌─ CÓMO ACTUALIZAR TU CV ─────────────────────────────────────────────────────────┐
 * │ 1. Escribe tu CV en Google Docs (o sube el PDF a Google Drive).                  │
 * │ 2. Compartir → "Cualquier persona con el enlace" → Lector. Copia el enlace.      │
 * │ 3. Pégalo abajo, entre las comillas. Sirve cualquier enlace de Docs o de Drive.  │
 * │                                                                                  │
 * │ Cada vez que edites el documento, el portafolio entrega la versión nueva sin     │
 * │ tocar el código:                                                                 │
 * │  • Google Docs: el botón descarga siempre el PDF más reciente.                   │
 * │  • PDF en Drive: para cambiarlo sin perder el enlace, clic derecho → "Administrar│
 * │    versiones" → "Subir una versión nueva". (Si borras y subes otro, el enlace    │
 * │    cambia.)                                                                      │
 * │ Si solo tienes un CV, deja la versión en inglés vacía y usará el mismo.          │
 * └──────────────────────────────────────────────────────────────────────────────────┘
 */
const CV_SOURCE: Record<Locale, string> = {
  es: "",
  en: "",
};

/** Mientras no haya enlace de Drive, se usa el CV básico que viene en el proyecto. */
const CV_FALLBACK: Record<Locale, string> = { es: "/cv.pdf", en: "/cv-en.pdf" };

/** Convierte un enlace de Google Docs o Drive en uno de descarga directa. */
export function normalizeDriveLink(link: string): string {
  const url = link.trim();
  if (!url) return "";

  const doc = url.match(/docs\.google\.com\/document\/d\/([\w-]+)/);
  if (doc) return `https://docs.google.com/document/d/${doc[1]}/export?format=pdf`;

  const file = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/) ?? url.match(/drive\.google\.com\/(?:open|uc)\?(?:.*&)?id=([\w-]+)/);
  if (file) return `https://drive.google.com/uc?export=download&id=${file[1]}`;

  return url;
}

export function cvUrl(locale: Locale): string {
  const source = CV_SOURCE[locale] || CV_SOURCE.es;
  return normalizeDriveLink(source) || CV_FALLBACK[locale];
}

/** Propiedades del enlace: los archivos locales se descargan; los de Drive abren en otra pestaña. */
export function cvLinkProps(locale: Locale) {
  const href = cvUrl(locale);
  const external = href.startsWith("http");
  return external
    ? ({ href, target: "_blank", rel: "noopener noreferrer" } as const)
    : ({ href, download: true } as const);
}
