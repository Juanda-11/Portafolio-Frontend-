export type ExperienceType = "academica" | "laboral";

export type ExperienceItem = {
  type: ExperienceType;
  /** Fecha o rango tal como se muestra. */
  date: string;
  /** true si sigue en curso: muestra la etiqueta "Actual". */
  current?: boolean;
  title: string;
  /** Institución o empresa. */
  place: string;
  description: string;
  highlights?: string[];
};

/** Orden: de lo más reciente a lo más antiguo. */
export const experience: ExperienceItem[] = [
  {
    type: "laboral",
    date: "Oct 2026 – Hoy",
    current: true,
    title: "Desarrollador de aplicaciones multiplataforma",
    place: "Proyectos independientes",
    description:
      "Diseño y desarrollo apps pensadas para la vida diaria en tres plataformas: móvil, escritorio y smartwatch.",
    highlights: ["FoodLink (móvil)", "HydroGraph AI (escritorio)", "WorkerWatch (smartwatch)"],
  },
  {
    type: "laboral",
    date: "May 2026",
    title: "Desarrollador frontend",
    place: "Equimed de Nariño · Pasto",
    description: "Creé la página web de la empresa de equipos médicos, encargándome de toda la interfaz (frontend).",
  },
  {
    type: "academica",
    date: "2025 – Hoy",
    current: true,
    title: "Ingeniería de Software",
    place: "Universidad Cooperativa de Colombia · Campus Pasto",
    description:
      "Cursando 4.º semestre. Desde el primer año construyo proyectos que combinan hardware y software.",
    highlights: ["Arduino", "Frontend y backend", "Programación orientada a objetos"],
  },
  {
    type: "academica",
    date: "2023 – Ago 2024",
    title: "Modalidad en sistemas · Diplomado en saberes informáticos",
    place: "Colegio",
    description: "Cursé la modalidad de sistemas en el colegio y terminé en agosto de 2024 con el diplomado.",
  },
  {
    type: "academica",
    date: "Mar – Jun 2023",
    title: "Curso de informática y desarrollo de páginas web",
    place: "Curso de informática",
    description: "Primer acercamiento a la programación. Me gradué en junio de 2023 con diploma.",
  },
];
