import type { Localized, Text } from "@/lib/i18n";

export type NavLink = {
  id: string;
  label: Localized;
};

export const profile = {
  initials: "JJ",
  name: "Juan David Jurado Paz",
  shortName: "Juan David",
  role: {
    es: "Estudiante de Ingeniería de Software",
    en: "Software Engineering student",
  } satisfies Localized,
  tagline: {
    es: "Diseño y desarrollo interfaces web y apps para móvil, escritorio y smartwatch.",
    en: "I design and build web interfaces and apps for mobile, desktop and smartwatch.",
  } satisfies Localized,
  location: "Pasto, Colombia",
  university: {
    es: "Universidad Cooperativa de Colombia · Campus Pasto",
    en: "Universidad Cooperativa de Colombia · Pasto Campus",
  } satisfies Localized,
  emailInstitutional: "juand.jurado@campusucc.edu.co",
  emailPersonal: "juandaju448@gmail.com",
  github: "https://github.com/Juanda-11",
  linkedin: "https://www.linkedin.com/in/juan-david-jurado-paz-4900a7447",
  photo: "/yo.jpg" as string | undefined,
};

export const about: Localized[] = [
  {
    es: "Soy estudiante de cuarto semestre de Ingeniería de Software en la Universidad Cooperativa de Colombia, campus Pasto. Me interesa el desarrollo de aplicaciones móviles y web, el diseño de interfaces modernas y la creación de soluciones tecnológicas que respondan a necesidades reales. He trabajado con lenguajes como Java, Python y TypeScript, además de tecnologías y frameworks como React Native y Expo, fortaleciendo mis conocimientos en programación, estructuras de datos, patrones de diseño y desarrollo de software.",
    en: "I am a fourth-semester Software Engineering student at the Universidad Cooperativa de Colombia, Pasto campus. I am interested in mobile and web application development, modern interface design and building technology solutions that answer real needs. I have worked with languages such as Java, Python and TypeScript, as well as technologies and frameworks like React Native and Expo, strengthening my knowledge of programming, data structures, design patterns and software development.",
  },
  {
    es: "Me considero una persona creativa, curiosa y comprometida con mi aprendizaje, con iniciativa para proponer ideas y convertirlas en proyectos funcionales. Me gusta explorar nuevas tecnologías, mejorar la experiencia de usuario mediante interfaces intuitivas y trabajar en proyectos que integren innovación y utilidad, como aplicaciones orientadas a la agricultura inteligente y al impacto social. Mi objetivo es continuar fortaleciendo mis habilidades técnicas y crecer profesionalmente como desarrollador de software, participando en proyectos que aporten valor a las personas y a la sociedad.",
    en: "I consider myself a creative, curious person committed to my learning, with the initiative to propose ideas and turn them into working projects. I enjoy exploring new technologies, improving user experience through intuitive interfaces and working on projects that combine innovation and usefulness, such as applications aimed at smart farming and social impact. My goal is to keep strengthening my technical skills and grow professionally as a software developer, taking part in projects that bring value to people and society.",
  },
];

export const quickFacts: { label: Localized; value: Text }[] = [
  { label: { es: "Ubicación", en: "Location" }, value: "Pasto, Colombia" },
  { label: { es: "Semestre", en: "Semester" }, value: { es: "4.º semestre", en: "4th semester" } },
  { label: { es: "Carrera", en: "Degree" }, value: { es: "Ingeniería de Software", en: "Software Engineering" } },
  { label: { es: "Universidad", en: "University" }, value: { es: "UCC · Campus Pasto", en: "UCC · Pasto Campus" } },
];

export const skillGroups: { title: Localized; items: Text[] }[] = [
  {
    title: { es: "Frameworks", en: "Frameworks" },
    items: ["Next.js", "React", "React Native", "Expo", "Tailwind CSS", "Express"],
  },
  { title: { es: "Lenguajes", en: "Languages" }, items: ["TypeScript", "Java", "Python"] },
  {
    title: { es: "Intereses", en: "Interests" },
    items: [
      { es: "Diseño UI/UX", en: "UI/UX design" },
      { es: "Estructuras de datos", en: "Data structures" },
      { es: "Patrones de diseño", en: "Design patterns" },
      { es: "Agricultura inteligente", en: "Smart farming" },
      { es: "Impacto social", en: "Social impact" },
    ],
  },
];

/** Frameworks y tecnologías que se muestran en la cinta del Hero. */
export const stack = [
  "Next.js",
  "React",
  "React Native",
  "Expo",
  "Tailwind CSS",
  "TypeScript",
  "Node.js · Express",
  "Java",
  "Python",
  "UI / UX",
];

export const navLinks: NavLink[] = [
  { id: "inicio", label: { es: "Inicio", en: "Home" } },
  { id: "sobre-mi", label: { es: "Sobre mí", en: "About" } },
  { id: "proyectos", label: { es: "Proyectos", en: "Projects" } },
  { id: "experiencia", label: { es: "Experiencia", en: "Experience" } },
  { id: "proceso", label: { es: "Proceso", en: "Process" } },
  { id: "contacto", label: { es: "Contacto", en: "Contact" } },
];
