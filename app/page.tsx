import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido" tabIndex={-1} className="outline-none lg:pl-24">
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Experience />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
