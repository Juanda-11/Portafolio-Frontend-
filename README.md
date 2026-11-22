# Portafolio · Juan David Jurado Paz

Portafolio personal para el curso de **Diseño de Interfaces**: presenta quién soy, mis proyectos, mi experiencia y cómo contactarme.

| | |
|---|---|
| 🌐 **Sitio en vivo** | https://portafolio-frontend-lime.vercel.app |
| 💻 **Código (este repositorio)** | https://github.com/Juanda-11/Portafolio-Frontend- |
| ⚙️ **Backend (formulario de contacto)** | https://github.com/Juanda-11/Portafolio-Backend |

## Tecnologías
**Next.js 16** (App Router) · **TypeScript** · **Tailwind CSS 4** · **Vercel**, con Framer Motion para las animaciones y Lucide para los íconos.

## Secciones
1. **Menú de navegación**: riel lateral que se expande al pasar el mouse (escritorio) y barra inferior con círculo flotante (celular).
2. **Hero con CV**: nombre, rol, foto y botón de descarga del CV.
3. **Acerca de mí**: resumen corto, datos rápidos y tecnologías.
4. **Mis proyectos**: tarjetas con filtros, etiquetas, GitHub, demo en vivo y descargas (APK y .exe).
5. **Testimonios**: tres opiniones de personas para las que desarrollé aplicaciones.
6. **Experiencia académica y laboral**: línea de tiempo, de lo más reciente a lo más antiguo.
7. **Cómo trabajo** (sección adicional): mi proceso de diseño con ejemplos reales de mis proyectos.
8. **Contactos**: correo, LinkedIn, GitHub y formulario con validación y confirmación.
9. **Pie de página**: enlaces rápidos, redes y botón de volver arriba.

También incluye **tema claro y oscuro**, **español e inglés** (se recuerdan en el navegador) y buenas prácticas de accesibilidad: enlace para saltar al contenido, foco visible, navegación completa con teclado, `prefers-reduced-motion` y `prefers-contrast`.

## Estructura
```
app/
├─ layout.tsx          Estructura global, fuentes y metadatos (SEO)
├─ page.tsx            Une todas las secciones en orden
├─ globals.css         Tailwind, temas claro/oscuro y estilos globales
├─ icon.svg            Favicon (logo)
├─ robots.ts · sitemap.ts
components/
├─ Navbar.tsx          Menú de navegación
├─ Hero.tsx            Bienvenida + CV
├─ About.tsx           Acerca de mí
├─ Projects.tsx        Mis proyectos
├─ Testimonials.tsx    Testimonios
├─ Experience.tsx      Experiencia académica y laboral
├─ Process.tsx         Sección adicional: cómo trabajo
├─ Contact.tsx         Contactos y formulario
├─ Footer.tsx          Pie de página
└─ Logo.tsx · Lightning.tsx · SkipLink.tsx · Providers.tsx · …
data/
├─ projects.ts         Mis proyectos (tipados)
├─ testimonials.ts     Testimonios
├─ experience.ts       Experiencia
└─ process.ts          Pasos de «Cómo trabajo»
lib/
├─ data.ts             Perfil, habilidades y menú
├─ i18n.ts             Textos de la interfaz en español e inglés
├─ preferences.tsx     Tema e idioma guardados en el navegador
└─ cv.ts               Enlace del CV (Google Drive)
public/
├─ cv.pdf · cv-en.pdf  CV de respaldo
├─ og.jpg              Imagen al compartir el enlace
└─ images/             Foto y capturas de proyectos
```

## Cómo ejecutarlo
Requiere Node.js 20 o superior.

```bash
npm install
cp .env.example .env     # opcional en local
npm run dev              # http://localhost:3000
```

```bash
npm run build            # compila para producción
npm run lint             # revisa el código
```

### Variables de entorno
| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_API_URL` | URL del backend del formulario de contacto (`http://localhost:4000` en local). |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio, para el enlace canónico y la imagen al compartir (opcional). |

## Cómo actualizar el contenido
- **Un proyecto nuevo:** agrega un bloque en `data/projects.ts` y su imagen en `public/images/projects/`.
- **Testimonios:** edita `data/testimonials.ts`; si hay foto, ponla en `public/images/testimonials/` y agrega el campo `photo`.
- **Experiencia:** edita `data/experience.ts`.
- **CV:** pega el enlace de Google Drive en `lib/cv.ts`. Cada vez que edites el documento, el botón entrega la versión nueva.
- **Textos en inglés:** los datos tienen versión `es` y `en`; los textos de la interfaz están en `lib/i18n.ts`.

## Publicación
Cada `git push` a `main` se despliega solo en **Vercel**. El formulario de contacto usa el backend de [Portafolio-Backend](https://github.com/Juanda-11/Portafolio-Backend), también desplegado en Vercel.
