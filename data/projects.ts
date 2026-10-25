export type Platform = "Web" | "Móvil" | "Escritorio" | "Smartwatch";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  platform: Platform;
  /** Repositorio del frontend (o del proyecto, si no está dividido). */
  github: string;
  /** Repositorio del backend, si el proyecto está dividido en dos. */
  githubBackend?: string;
  /** Despliegue en Vercel / demo en vivo. */
  demo?: string;
  /** Enlace de descarga del APK. Cuando lo tengas, agrégalo y aparece el botón solo. */
  apk?: string;
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
    description:
      "App para reducir el desperdicio de alimentos: conecta a donantes con quienes los necesitan. Analiza fotos con IA, muestra un mapa real y cierra cada entrega con código y QR.",
    tags: ["React Native", "Expo", "Serverless", "Redis", "IA"],
    platform: "Móvil",
    github: "https://github.com/Juanda-11/Proyectos-de-interfaces",
    githubBackend: "https://github.com/Juanda-11/Proyectos-de-interfaces-MB",
    demo: "https://foodlink-ashen.vercel.app/",
    image: "/projects/foodlink.webp",
    imageFit: "cover",
    imagePosition: "50% 0%",
  },
  {
    title: "HydroGraph AI",
    description:
      "Editor visual para diseñar, simular y auditar redes de suministro de agua. Calcula presiones y pérdidas, y un copiloto de IA diseña y optimiza la red. Exporta a EPANET.",
    tags: ["React", "Electron", "Node.js", "Express", "IA"],
    platform: "Escritorio",
    github: "https://github.com/Juanda-11/Proyectos-de-interfaces-E",
    githubBackend: "https://github.com/Juanda-11/Proyectos-de-interfaces-EB",
    demo: "https://hydrographia.vercel.app/",
    image: "/projects/hydrograph.webp",
  },
  {
    title: "WorkerWatch",
    description:
      "App solo para smartwatch pensada para trabajadores de planta: muestra el turno, avisa con alertas y vibración cuando falla un equipo y un asistente de IA guía la reparación por voz.",
    tags: ["React Native", "Expo", "Wear OS", "Node.js", "IA"],
    platform: "Smartwatch",
    github: "https://github.com/Juanda-11/Proyectos-de-interfaces-S",
    githubBackend: "https://github.com/Juanda-11/Proyectos-de-interfaces-SB",
    demo: "https://smartwatch-drab-gamma.vercel.app/",
    image: "/projects/workerwatch.webp",
    imageFit: "contain",
    imageBg: "#000",
  },
  {
    title: "Reproductor de música",
    description:
      "Reproductor cuya lista de reproducción es una lista doblemente enlazada hecha desde cero, sin arreglos. Arrastra canciones para reordenarlas, busca con iTunes o Spotify y sube tus propios archivos.",
    tags: ["TypeScript", "Vite", "Estructuras de datos", "Spotify API"],
    platform: "Web",
    github: "https://github.com/Juanda-11/Music-player---double-list",
    demo: "https://music-player-double-list.vercel.app/",
    image: "/projects/music-player.webp",
  },
];
