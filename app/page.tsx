import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="lg:pl-24">
        <Hero />
        <About />
        <Projects />
        {/* Provisional: se reemplaza por la sección de testimonios cuando estén listos */}
        <section id="testimonios" className="grid min-h-[50vh] place-items-center px-6">
          <h2 className="font-display text-5xl uppercase text-fg">Testimonios</h2>
        </section>
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
