import type { Text } from "@/lib/i18n";

export type Evidence = {
  /** Proyecto de donde sale el ejemplo. */
  project: string;
  text: Text;
};

export type Step = {
  id: string;
  title: Text;
  description: Text;
  evidence: Evidence[];
};

/** Cada ejemplo sale de lo documentado en los repositorios de los proyectos. */
export const steps: Step[] = [
  {
    id: "entender",
    title: { es: "Entender el problema", en: "Understand the problem" },
    description: {
      es: "Antes de dibujar una pantalla, defino quién usará la app, en qué situación y qué necesita resolver.",
      en: "Before drawing a screen, I define who will use the app, in what situation and what they need to solve.",
    },
    evidence: [
      {
        project: "FoodLink",
        text: {
          es: "Parte de un problema real, el desperdicio de alimentos, y de dos perfiles distintos: quien dona y quien recibe.",
          en: "It starts from a real problem, food waste, and two different profiles: who donates and who receives.",
        },
      },
      {
        project: "WorkerWatch",
        text: {
          es: "Pensada para trabajadores de planta con las manos ocupadas: alertas con vibración, botones enormes y un asistente que habla.",
          en: "Designed for plant workers with busy hands: vibrating alerts, huge buttons and an assistant that speaks.",
        },
      },
      {
        project: "HydroGraph AI",
        text: {
          es: "Reúne en un solo editor visual lo que normalmente son varias tareas: dibujar, simular y auditar la red.",
          en: "It brings into a single visual editor what are usually several tasks: drawing, simulating and auditing the network.",
        },
      },
    ],
  },
  {
    id: "disenar",
    title: { es: "Diseñar la interfaz", en: "Design the interface" },
    description: {
      es: "Defino una jerarquía clara, un sistema visual coherente y el flujo de cada pantalla, pensando en cómo se siente usarla.",
      en: "I set a clear hierarchy, a consistent visual system and the flow of each screen, thinking about how it feels to use it.",
    },
    evidence: [
      {
        project: "FoodLink",
        text: {
          es: "Flujos distintos según el perfil (Recibir o Donar), seguimiento de la entrega en cuatro etapas y tema claro, oscuro o del sistema.",
          en: "Different flows depending on the profile (Receive or Donate), delivery tracking in four stages and a light, dark or system theme.",
        },
      },
      {
        project: "HydroGraph AI",
        text: {
          es: "Barra de herramientas, lienzo e inspector, con leyenda plegable y tuberías coloreadas según la velocidad del agua.",
          en: "Toolbar, canvas and inspector, with a collapsible legend and pipes colored by water velocity.",
        },
      },
      {
        project: "Reproductor",
        text: {
          es: "Tres zonas claras (disco y controles, lista de reproducción y álbumes) con arrastrar y soltar para reordenar.",
          en: "Three clear zones (disc and controls, playlist and albums) with drag and drop to reorder.",
        },
      },
    ],
  },
  {
    id: "construir",
    title: { es: "Construir con componentes", en: "Build with components" },
    description: {
      es: "Divido la interfaz en piezas reutilizables y separo la lógica del servidor para cambiar cada parte sin romper el resto.",
      en: "I split the interface into reusable pieces and keep the server logic separate so I can change each part without breaking the rest.",
    },
    evidence: [
      {
        project: "FoodLink",
        text: {
          es: "Una sola base de código en React Native y Expo para web, iPhone y Android, con la API en un repositorio aparte.",
          en: "A single React Native and Expo codebase for web, iPhone and Android, with the API in a separate repository.",
        },
      },
      {
        project: "HydroGraph AI · WorkerWatch",
        text: {
          es: "Frontend y backend en repositorios separados, con la API documentada en OpenAPI.",
          en: "Frontend and backend in separate repositories, with the API documented in OpenAPI.",
        },
      },
      {
        project: "Reproductor",
        text: {
          es: "La lista de reproducción es una lista doblemente enlazada hecha desde cero, separada de la interfaz.",
          en: "The playlist is a doubly linked list built from scratch, kept separate from the interface.",
        },
      },
    ],
  },
  {
    id: "accesible",
    title: { es: "Hacerla accesible y resistente", en: "Make it accessible and resilient" },
    description: {
      es: "Una buena interfaz funciona para todos y sigue funcionando cuando algo falla: teclado, etiquetas para lectores de pantalla y modo sin conexión.",
      en: "A good interface works for everyone and keeps working when something fails: keyboard, screen-reader labels and offline mode.",
    },
    evidence: [
      {
        project: "HydroGraph AI",
        text: {
          es: "Todo el lienzo se maneja con el teclado, con foco visible, etiquetas ARIA y respeto a la preferencia de reducir animaciones.",
          en: "The whole canvas can be used with the keyboard, with visible focus, ARIA labels and respect for the reduced-motion preference.",
        },
      },
      {
        project: "WorkerWatch",
        text: {
          es: "Si no hay red o el servidor falla, el asistente sigue funcionando con los planes locales del catálogo.",
          en: "If there is no network or the server fails, the assistant keeps working with the local plans from the catalog.",
        },
      },
      {
        project: "Este portafolio",
        text: {
          es: "Tema claro y oscuro, español e inglés, y animaciones que se reducen cuando el sistema lo pide.",
          en: "Light and dark theme, Spanish and English, and animations that tone down when the system asks for it.",
        },
      },
    ],
  },
  {
    id: "probar",
    title: { es: "Probar y mejorar", en: "Test and improve" },
    description: {
      es: "Pruebo con casos reales, automatizo lo repetible y publico para que cualquiera pueda verlo funcionando.",
      en: "I test with real cases, automate what repeats and publish so anyone can see it working.",
    },
    evidence: [
      {
        project: "FoodLink",
        text: {
          es: "Cuentas de prueba para donante y receptor, y más de 80 pruebas automáticas en el backend.",
          en: "Test accounts for donor and receiver, and more than 80 automated tests in the backend.",
        },
      },
      {
        project: "WorkerWatch",
        text: {
          es: "Simulación de fallas de equipos para probar las alertas y el asistente sin una máquina conectada.",
          en: "Equipment-fault simulation to test the alerts and the assistant without a connected machine.",
        },
      },
      {
        project: "HydroGraph AI",
        text: {
          es: "Pruebas automáticas, registro de cambios (CHANGELOG) y despliegue en Vercel.",
          en: "Automated tests, a changelog (CHANGELOG) and deployment on Vercel.",
        },
      },
    ],
  },
];
