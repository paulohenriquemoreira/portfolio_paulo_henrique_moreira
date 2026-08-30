import { useEffect, useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { navigation } from "../data/portfolioData";

// Mantém o cabeçalho fixo e controla a navegação responsiva em telas menores.
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Atualiza a aparência do cabeçalho apenas quando a página ultrapassa o limite definido.
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fecha o menu mobile quando a tecla Escape é acionada.
  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  // Fecha o menu depois que o visitante seleciona uma opção de navegação.
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/90 shadow-2xl shadow-black/20 backdrop-blur-xl"
          : "bg-ink-950/75 backdrop-blur-md"
      }`}
    >
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        {/* Direciona a marca principal para o início do portfólio. */}
        <a
          href="#home"
          className="focus-ring flex items-center gap-1 rounded-md text-2xl font-black tracking-tighter"
          aria-label="Paulo Henrique — ir para o início do portfólio"
        >
          <span className="text-white">P</span>
          <span className="text-brand-500">H</span>
        </a>

        {/* Exibe a navegação horizontal somente em telas maiores. */}
        <nav
          className="hidden lg:block"
          aria-label="Navegação principal"
        >
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="focus-ring rounded-sm text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400 transition hover:text-brand-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mantém a chamada para contato visível no desktop. */}
        <a
          href="#contact"
          className="focus-ring hidden items-center gap-3 rounded-lg border border-brand-500/60 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-brand-500 lg:flex"
        >
          Vamos conversar?
          <FaArrowRight aria-hidden="true" />
        </a>

        {/* Informa o estado do menu mobile e associa o botão ao painel controlado. */}
        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-lg text-white lg:hidden"
          aria-label={
            menuOpen
              ? "Fechar menu de navegação"
              : "Abrir menu de navegação"
          }
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-haspopup="true"
          onClick={() => setMenuOpen((currentValue) => !currentValue)}
        >
          {menuOpen ? (
            <FaTimes aria-hidden="true" />
          ) : (
            <FaBars aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mantém os links fechados fora da ordem de tabulação enquanto o menu está recolhido. */}
      <nav
        id="menu-mobile"
        aria-label="Navegação mobile"
        aria-hidden={!menuOpen}
        className={`overflow-hidden border-t border-white/10 bg-ink-950/95 transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[520px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="container-shell grid gap-1 py-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className="focus-ring block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wider text-zinc-300 transition hover:bg-white/5 hover:text-brand-500"
              >
                {item.label}
              </a>
            </li>
          ))}

          <li className="pt-2">
            <a
              href="#contact"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className="focus-ring flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 font-bold text-white"
            >
              Vamos conversar?
              <FaArrowRight aria-hidden="true" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}