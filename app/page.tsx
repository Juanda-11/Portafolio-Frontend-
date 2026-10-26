import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { navLinks } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-28 lg:pb-0 lg:pl-24">
        {/* Secciones provisionales: se reemplazan una a una en las siguientes etapas */}
        <Hero />
        <About />
        <Projects />
        <Experience />
        {navLinks.filter(({ id }) => id !== "inicio" && id !== "sobre-mi" && id !== "proyectos" && id !== "experiencia").map(({ id, label }) => (
          <section
            key={id}
            id={id}
            className="grid min-h-screen place-items-center px-6"
          >
            <h2 className="font-display text-5xl uppercase text-fg">{label}</h2>
          </section>
        ))}
      </main>
    </>
  );
}
