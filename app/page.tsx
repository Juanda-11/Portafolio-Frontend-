import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { navLinks } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Secciones provisionales: se reemplazan una a una en las siguientes etapas */}
        <Hero />
        {navLinks.filter(({ id }) => id !== "inicio").map(({ id, label }) => (
          <section
            key={id}
            id={id}
            className="grid min-h-screen place-items-center px-6"
          >
            <h2 className="font-heading text-4xl font-bold text-ink">{label}</h2>
          </section>
        ))}
      </main>
    </>
  );
}
