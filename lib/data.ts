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
    "Construyo interfaces claras y cuidadas, pensando siempre en quien las va a usar.",
  university: "Universidad Cooperativa de Colombia · Campus Pasto",
  semester: "8.º semestre",
  emailInstitutional: "juand.jurado@campusucc.edu.co",
  emailPersonal: "juandaju448@gmail.com",
  github: "https://github.com/juanda-11",
  cvUrl: "/cv.pdf",
  /** Cuando tengas una foto, ponla en public/yo.png y descomenta esta línea. */
  // photo: "/yo.png",
  photo: undefined as string | undefined,
};

export const navLinks: NavLink[] = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "testimonios", label: "Testimonios" },
  { id: "experiencia", label: "Experiencia" },
  { id: "contacto", label: "Contacto" },
];
