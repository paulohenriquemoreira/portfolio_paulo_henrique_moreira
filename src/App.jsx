import BackgroundDecor from "./components/BackgroundDecor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Services from "./components/Services";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Organiza as seções principais e mantém a decoração separada do conteúdo semântico.
export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950 text-zinc-100">
      {/* Oferece um atalho para que usuários de teclado ignorem a navegação repetitiva. */}
      <a
        href="#conteudo-principal"
        className="sr-only z-[100] rounded-md bg-brand-500 px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Ir para o conteúdo principal
      </a>

      <BackgroundDecor />

      <div className="relative z-10">
        <Header />

        {/* Mantém uma única região principal e preserva a ordem narrativa do portfólio. */}
        <main id="conteudo-principal">
          <Hero />
          <About />
          <Education />
          <Experience />
          <Services />
          <Projects />
          <TechStack />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}