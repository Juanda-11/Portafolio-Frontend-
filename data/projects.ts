import type { Localized, Text } from "@/lib/i18n";

export type Platform = "Web" | "Móvil" | "Escritorio" | "Smartwatch";

export type Project = {
  title: string;
  /** Qué hice yo en el proyecto. */
  role?: Localized;
  description: Localized;
  /** Pista breve para probar el proyecto (por ejemplo, cuentas demo). */
  hint?: Localized;
  tags: Text[];
  platform: Platform;
  /** Repositorio del frontend (o del proyecto, si no está dividido). */
  github: string;
  /** Repositorio del backend, si el proyecto está dividido en dos. */
  githubBackend?: string;
  /** Despliegue en Vercel / demo en vivo. */
  demo?: string;
  /** Enlace de descarga del APK (Android). Si lo defines, aparece el botón solo. */
  apk?: string;
  /** Enlace de descarga del instalador de escritorio (.exe). Si lo defines, aparece el botón solo. */
  exe?: string;
  /** Imagen en /public/projects (recomendado .webp). */
  image: string;
  /** "cover" recorta para llenar; "contain" muestra la imagen completa (capturas verticales). */
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  /** Color de fondo detrás de la imagen cuando es "contain". */
  imageBg?: string;
};

export const projects: Project[] = [
  {
    title: "FoodLink",
    role: { es: "Diseño y desarrollo · frontend + backend", en: "Design & development · frontend + backend" },
    description:
      {
      es: "App para reducir el desperdicio de alimentos: conecta a donantes con quienes los necesitan. Analiza fotos con IA, muestra un mapa real y cierra cada entrega con código y QR.",
      en: "App to reduce food waste: it connects donors with the people who need food. It analyzes photos with AI, shows a real map and closes every delivery with a code and QR.",
    },
    hint: {
      es: "Para probarla sin registrarte, usa «Demo receptor» o «Demo donante» en la pantalla de inicio.",
      en: "To try it without signing up, use «Receiver demo» or «Donor demo» on the home screen.",
    },
    tags: ["React Native", "Expo", "Serverless", "Redis", { es: "IA", en: "AI" }],
    platform: "Móvil",
    github: "https://github.com/Juanda-11/Proyectos-de-interfaces",
    githubBackend: "https://github.com/Juanda-11/Proyectos-de-interfaces-MB",
    demo: "https://foodlink-ashen.vercel.app/",
    apk: "https://github.com/Juanda-11/Proyectos-de-interfaces/releases/download/v1.0.0/application-20d32248-bd76-44bf-a26c-ff21f181ba23.apk",
    image: "/projects/foodlink-es.webp",
    imageFit: "cover",
    imagePosition: "50% 0%",
  },
  {
    title: "HydroGraph AI",
    role: { es: "Diseño y desarrollo · frontend + backend", en: "Design & development · frontend + backend" },
    description:
      {
      es: "Editor visual para diseñar, simular y auditar redes de suministro de agua. Calcula presiones y pérdidas, y un copiloto de IA diseña y optimiza la red. Exporta a EPANET.",
      en: "Visual editor to design, simulate and audit water supply networks. It calculates pressures and losses, and an AI copilot designs and optimizes the network. Exports to EPANET.",
    },
    tags: ["React", "Electron", "Node.js", "Express", { es: "IA", en: "AI" }],
    platform: "Escritorio",
    github: "https://github.com/Juanda-11/Proyectos-de-interfaces-E",
    githubBackend: "https://github.com/Juanda-11/Proyectos-de-interfaces-EB",
    demo: "https://hydrographia.vercel.app/",
    exe: "https://github.com/Juanda-11/Proyectos-de-interfaces-E/releases/download/v1.0.0/HydroGraph-AI-1.0.0-win-x64.exe",
    image: "/projects/hydrograph.webp",
  },
  {
    title: "WorkerWatch",
    role: { es: "Diseño y desarrollo · frontend + backend", en: "Design & development · frontend + backend" },
    description:
      {
      es: "App solo para smartwatch pensada para trabajadores de planta: muestra el turno, avisa con alertas y vibración cuando falla un equipo y un asistente de IA guía la reparación por voz.",
      en: "Smartwatch-only app for plant workers: it shows the shift, warns with alerts and vibration when equipment fails, and an AI assistant guides the repair by voice.",
    },
    tags: ["React Native", "Expo", "Wear OS", "Node.js", { es: "IA", en: "AI" }],
    platform: "Smartwatch",
    github: "https://github.com/Juanda-11/Proyectos-de-interfaces-S",
    githubBackend: "https://github.com/Juanda-11/Proyectos-de-interfaces-SB",
    demo: "https://smartwatch-drab-gamma.vercel.app/",
    apk: "https://github.com/Juanda-11/Proyectos-de-interfaces-S/releases/download/v1.0.0/WorkerWatch.apk.apk",
    image: "/projects/workerwatch.webp",
    imageFit: "contain",
    imageBg: "#000",
  },
  {
    title: "Reproductor de música",
    role: { es: "Diseño y desarrollo", en: "Design & development" },
    description:
      {
      es: "Reproductor cuya lista de reproducción es una lista doblemente enlazada hecha desde cero, sin arreglos. Arrastra canciones para reordenarlas, busca con iTunes o Spotify y sube tus propios archivos.",
      en: "Music player whose playlist is a doubly linked list built from scratch, without arrays. Drag songs to reorder them, search with iTunes or Spotify and upload your own files.",
    },
    tags: ["TypeScript", "Vite", { es: "Estructuras de datos", en: "Data structures" }, "Spotify API"],
    platform: "Web",
    github: "https://github.com/Juanda-11/Music-player---double-list",
    demo: "https://music-player-double-list.vercel.app/",
    image: "/projects/music-player.webp",
  },
];
