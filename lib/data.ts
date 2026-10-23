export type NavLink = {
  id: string;
  label: string;
};

export const profile = {
  initials: "JJ",
  name: "Juan David Jurado Paz",
  shortName: "Juan David",
  role: "Estudiante de Ingeniería de Software",
  tagline:
    "Estudiante de Ingeniería de Software con conocimientos en Java, Python, TypeScript, React Native y Expo, interesado en el desarrollo frontend, diseño UI/UX, estructuras de datos y patrones de diseño de software.",
  university: "Universidad Cooperativa de Colombia · Campus Pasto",
  semester: "4.º semestre",
  emailInstitutional: "juand.jurado@campusucc.edu.co",
  emailPersonal: "juandaju448@gmail.com",
  github: "https://github.com/juanda-11",
  cvUrl: "/cv.pdf",
  photo: "/yo.jpg" as string | undefined,
};

export const about = [
  "Soy estudiante de cuarto semestre de Ingeniería de Software en la Universidad Cooperativa de Colombia, campus Pasto. Me interesa el desarrollo de aplicaciones móviles y web, el diseño de interfaces modernas y la creación de soluciones tecnológicas que respondan a necesidades reales. He trabajado con lenguajes como Java, Python y TypeScript, además de tecnologías y frameworks como React Native y Expo, fortaleciendo mis conocimientos en programación, estructuras de datos, patrones de diseño y desarrollo de software.",
  "Me considero una persona creativa, curiosa y comprometida con mi aprendizaje, con iniciativa para proponer ideas y convertirlas en proyectos funcionales. Me gusta explorar nuevas tecnologías, mejorar la experiencia de usuario mediante interfaces intuitivas y trabajar en proyectos que integren innovación y utilidad, como aplicaciones orientadas a la agricultura inteligente y al impacto social. Mi objetivo es continuar fortaleciendo mis habilidades técnicas y crecer profesionalmente como desarrollador de software, participando en proyectos que aporten valor a las personas y a la sociedad.",
];

export const quickFacts = [
  { label: "Ubicación", value: "Pasto, Colombia" },
  { label: "Semestre", value: "4.º semestre" },
  { label: "Carrera", value: "Ingeniería de Software" },
  { label: "Universidad", value: "UCC · Campus Pasto" },
];

export const skillGroups = [
  { title: "Frameworks", items: ["Next.js", "React", "React Native", "Expo", "Tailwind CSS", "Express"] },
  { title: "Lenguajes", items: ["TypeScript", "Java", "Python"] },
  { title: "Intereses", items: ["Diseño UI/UX", "Estructuras de datos", "Patrones de diseño", "Agricultura inteligente", "Impacto social"] },
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
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "testimonios", label: "Testimonios" },
  { id: "experiencia", label: "Experiencia" },
  { id: "contacto", label: "Contacto" },
];
