import type { Text } from "@/lib/i18n";

export type ExperienceType = "academica" | "laboral";

export type ExperienceItem = {
  type: ExperienceType;
  /** Fecha o rango tal como se muestra. */
  date: Text;
  /** true si sigue en curso: muestra la etiqueta "Actual". */
  current?: boolean;
  title: Text;
  /** Institución o empresa. */
  place: Text;
  description: Text;
  highlights?: Text[];
};

/** Orden: de lo más reciente a lo más antiguo. */
export const experience: ExperienceItem[] = [
  {
    type: "laboral",
    date: { es: "Oct 2026 – Hoy", en: "Oct 2026 – Present" },
    current: true,
    title: { es: "Desarrollador de aplicaciones multiplataforma", en: "Cross-platform app developer" },
    place: { es: "Proyectos independientes", en: "Independent projects" },
    description:
      { es: "Diseño y desarrollo apps pensadas para la vida diaria en tres plataformas: móvil, escritorio y smartwatch.", en: "I design and build apps for everyday life across three platforms: mobile, desktop and smartwatch." },
    highlights: [{ es: "FoodLink (móvil)", en: "FoodLink (mobile)" }, { es: "HydroGraph AI (escritorio)", en: "HydroGraph AI (desktop)" }, "WorkerWatch (smartwatch)"],
  },
  {
    type: "laboral",
    date: "May 2026",
    title: { es: "Desarrollador frontend", en: "Frontend developer" },
    place: "Equimed de Nariño · Pasto",
    description: { es: "Creé la página web de la empresa de equipos médicos, encargándome de toda la interfaz (frontend).", en: "I built the website for a medical equipment company, taking care of the entire interface (frontend)." },
  },
  {
    type: "academica",
    date: { es: "2025 – Hoy", en: "2025 – Present" },
    current: true,
    title: { es: "Ingeniería de Software", en: "Software Engineering" },
    place: { es: "Universidad Cooperativa de Colombia · Campus Pasto", en: "Universidad Cooperativa de Colombia · Pasto Campus" },
    description:
      { es: "Cursando 4.º semestre. Desde el primer año construyo proyectos que combinan hardware y software.", en: "Currently in my 4th semester. Since my first year I have built projects that combine hardware and software." },
    highlights: ["Arduino", { es: "Frontend y backend", en: "Frontend & backend" }, { es: "Programación orientada a objetos", en: "Object-oriented programming" }],
  },
  {
    type: "academica",
    date: { es: "2023 – Ago 2024", en: "2023 – Aug 2024" },
    title: { es: "Modalidad en sistemas · Diplomado en saberes informáticos", en: "Systems track · Diploma in computing knowledge" },
    place: { es: "Colegio", en: "High school" },
    description: { es: "Cursé la modalidad de sistemas en el colegio y terminé en agosto de 2024 con el diplomado.", en: "I took the systems track at school and finished in August 2024 with the diploma." },
  },
  {
    type: "academica",
    date: "Mar – Jun 2023",
    title: { es: "Curso de informática y desarrollo de páginas web", en: "Computing and web development course" },
    place: { es: "Curso de informática", en: "Computing course" },
    description: { es: "Primer acercamiento a la programación. Me gradué en junio de 2023 con diploma.", en: "My first step into programming. I graduated in June 2023 with a diploma." },
  },
];
