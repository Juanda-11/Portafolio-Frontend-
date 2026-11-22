import type { Localized } from "@/lib/i18n";

export type Testimonial = {
  name: string;
  /** Foto en /public/testimonials (opcional). Si no hay, se muestra un avatar ilustrado. */
  photo?: string;
  role: Localized;
  /** Empresa o institución (si la hay). */
  organization?: string;
  quote: Localized;
  /** En qué destaca según quien lo cuenta. */
  focus: Localized[];
};

export const testimonials: Testimonial[] = [
  {
    name: "Deisy Paz",
    role: { es: "Dueña", en: "Owner" },
    organization: "Equimed de Nariño",
    quote: {
      es: "Antes llevábamos el control de los productos ortopédicos de forma muy manual y se nos dificultaba saber qué teníamos disponible al instante. El sistema web que desarrolló nos cambió por completo la dinámica: es rápido, fácil de entender para todo el equipo y nos ha ahorrado muchísimo tiempo en la gestión diaria del inventario. Supo captar exactamente lo que necesitaba el negocio desde el principio.",
      en: "Before, we managed our orthopedic products in a very manual way and it was hard to know what we had available at any moment. The web system he developed completely changed our routine: it is fast, easy for the whole team to understand and has saved us a great deal of time in day-to-day inventory management. He captured exactly what the business needed from the start.",
    },
    focus: [
      { es: "Practicidad", en: "Practicality" },
      { es: "Entendimiento del negocio", en: "Business understanding" },
      { es: "Ahorro de tiempo", en: "Time saving" },
    ],
  },
  {
    name: "Milton Jurado",
    role: { es: "Docente", en: "Teacher" },
    quote: {
      es: "Entre clases, reuniones y conferencias, organizar mi semana solía ser un dolor de cabeza. La aplicación que creó me permite visualizar toda mi carga académica y compromisos en un solo lugar de manera súper clara e intuitiva. Se nota el cuidado que pone en el diseño y en la experiencia de usuario; realmente hizo una herramienta pensada para facilitarme el día a día.",
      en: "Between classes, meetings and conferences, organizing my week used to be a headache. The application he created lets me see my entire academic workload and commitments in one place in a very clear and intuitive way. You can tell the care he puts into design and user experience; he really built a tool meant to make my day-to-day easier.",
    },
    focus: [
      { es: "Orden", en: "Organization" },
      { es: "Diseño intuitivo (UX)", en: "Intuitive design (UX)" },
      { es: "Empatía con el usuario", en: "User empathy" },
    ],
  },
  {
    name: "Alexander Paz",
    role: { es: "Dueño", en: "Owner" },
    organization: "Hidrotech Nariño",
    quote: {
      es: "Necesitábamos una forma más técnica pero visualmente comprensible de gestionar nuestro sistema de purificación de agua. La aplicación con diagramas interactivos que desarrolló superó nuestras expectativas; ahora podemos monitorear y entender cada parte del proceso de manera mucho más eficiente. Es un desarrollador muy resolutivo, atento a los detalles y comprometido con entregar soluciones funcionales.",
      en: "We needed a more technical but visually understandable way to manage our water purification system. The application with interactive diagrams he developed exceeded our expectations; now we can monitor and understand every part of the process much more efficiently. He is a very resourceful developer, attentive to detail and committed to delivering functional solutions.",
    },
    focus: [
      { es: "Capacidad técnica", en: "Technical skill" },
      { es: "Resolución de problemas complejos", en: "Complex problem solving" },
      { es: "Compromiso", en: "Commitment" },
    ],
  },
];
