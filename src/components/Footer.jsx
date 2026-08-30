import { FaChevronUp } from "react-icons/fa";
import { navigation } from "../data/portfolioData";

// Finaliza a página com navegação auxiliar, direitos autorais e retorno ao topo.
export default function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-black/30 py-7"
      aria-label="Rodapé do portfólio"
    >
      <div className="container-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Exibe a assinatura do portfólio e informa a autoria do conteúdo. */}
        <div className="flex items-center gap-5">
          <a
            href="#home"
            className="focus-ring flex items-center gap-1 rounded-md text-xl font-black tracking-tighter"
            aria-label="Voltar ao início do portfólio de Paulo Henrique"
          >
            <span className="text-white">P</span>
            <span className="text-brand-500">H</span>
          </a>

          <p className="text-xs text-zinc-500">
            © 2026 Paulo Henrique. Todos os direitos reservados.
          </p>
        </div>

        {/* Repete a navegação principal como apoio para quem chegou ao final da página. */}
        <nav aria-label="Navegação do rodapé">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="focus-ring rounded-sm text-[10px] font-semibold uppercase tracking-wider text-zinc-500 transition hover:text-brand-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Oferece um atalho descritivo para retornar ao conteúdo inicial. */}
        <a
          href="#home"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center self-start rounded-full border border-white/10 text-zinc-300 transition hover:border-brand-500/50 hover:text-brand-500 lg:self-auto"
          aria-label="Voltar ao topo da página"
        >
          <FaChevronUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}