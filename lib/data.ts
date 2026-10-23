export type NavLink = {
  id: string;
  label: string;
};

export const profile = {
  initials: "JD",
  name: "Tu Nombre",
  cvUrl: "/cv.pdf",
};

export const navLinks: NavLink[] = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "testimonios", label: "Testimonios" },
  { id: "experiencia", label: "Experiencia" },
  { id: "contacto", label: "Contacto" },
];
