import { motion, useReducedMotion } from "framer-motion";

import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { useTypewriter } from "../hooks/useTypewriter";

// Mantém os links sociais fora do componente para evitar a recriação do array a cada renderização.
const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/paulohenriquemoreira",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/paulohenriquemoreira1986/",
    icon: FaLinkedinIn,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5511942331974",
    icon: FaWhatsapp,
  },
];

// Apresenta a identidade principal do portfólio e executa o efeito de digitação no nome.
export default function Hero() {
  const reduceMotion = useReducedMotion();

  // Produz o nome digitado sem anunciar cada caractere para leitores de tela.
  const typedName = useTypewriter(
    "PAULO HENRIQUE",
    90,
    250,
    reduceMotion,
  );

  const firstName = typedName.slice(
    0,
    Math.min(5, typedName.length),
  );

  const secondName =
    typedName.length > 6
      ? typedName.slice(6)
      : "";

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative min-h-screen overflow-hidden pt-28 sm:pt-32"
    >
      {/* Mantém o degradê de transição como elemento exclusivamente visual. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950/50"
      />

      <div className="container-shell relative grid min-h-[calc(100vh-8rem)] items-center gap-14 pb-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -48 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-4 font-mono text-sm font-semibold text-brand-500 sm:text-base">
            &lt; Olá, eu sou /&gt;
          </p>

          {/* Mantém o nome completo acessível enquanto a animação visual permanece oculta ao leitor de tela. */}
          <h1
            id="hero-title"
            aria-label="Paulo Henrique Moreira"
            className="min-h-[116px] text-5xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:min-h-[145px] sm:text-7xl lg:min-h-[168px] lg:text-8xl"
          >
            <span aria-hidden="true">
              <span className="block text-white">
                {firstName || "\u00A0"}
              </span>

              <span className="block text-brand-500">
                {secondName || "\u00A0"}

                {!reduceMotion && (
                  <span className="ml-1 inline-block h-[0.84em] w-[3px] animate-blink bg-brand-500 align-middle" />
                )}
              </span>
            </span>
          </h1>

          {/* Reforça palavras-chave profissionais relevantes sem exagerar a repetição para SEO. */}
          <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-zinc-100 sm:text-xl lg:text-xl">
            Desenvolvedor Front-End
            <span className="mx-2 text-brand-500" aria-hidden="true">
              |
            </span>
            OutSystems
            <span className="mx-2 text-brand-500" aria-hidden="true">
              |
            </span>
            Full Stack Jr
          </p>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            Desenvolvo interfaces responsivas e soluções digitais com React,
            JavaScript, OutSystems e integração com APIs REST, combinando
            qualidade de código, usabilidade e evolução contínua.
          </p>

          {/* Agrupa as principais ações disponíveis logo na primeira dobra da página. */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="focus-ring inline-flex items-center justify-center gap-3 rounded-lg bg-brand-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-glow transition hover:bg-brand-400"
            >
              Veja meus projetos
              <FaArrowRight aria-hidden="true" />
            </a>

            <a
              href="/PAULO_HENRIQUE_MOREIRA.pdf"
              download
              aria-label="Fazer o download do currículo de Paulo Henrique em formato PDF"
              className="focus-ring inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/[0.03] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:border-brand-500/70 hover:bg-brand-500/10"
            >
              Download CV
              <FaDownload aria-hidden="true" />
            </a>
          </div>

          {/* Oferece acesso direto aos perfis sociais em novas abas. */}
          <nav className="mt-8" aria-label="Redes sociais de Paulo Henrique">
            <ul className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-lg text-zinc-300 transition hover:border-brand-500/30 hover:bg-brand-500/10 hover:text-brand-500"
                    aria-label={`Abrir ${label} de Paulo Henrique em uma nova aba`}
                  >
                    <Icon
                      className="text-2xl sm:text-3xl"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

        {/* Exibe a composição visual principal usando apenas transform e opacity na animação de entrada. */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.94,
                }
          }
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  scale: 1,
                }
          }
          transition={{
            duration: 0.75,
            delay: 0.05,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-[620px] lg:translate-x-3"
        >
          <div className="hero-photo-stage relative aspect-[4/5]">
            {/* Mantém os elementos de halo e circuito ocultos da árvore de acessibilidade. */}
            <div
              aria-hidden="true"
              className="hero-halo absolute left-1/2 top-[38%] h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[38%] h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-500/30 shadow-glow"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[38%] h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-500/70 shadow-glow-strong"
            />

            <div
              aria-hidden="true"
              className="hero-circuit-lines absolute right-[-5%] top-[13%] h-[45%] w-[48%] opacity-75"
            />

            <div
              aria-hidden="true"
              className="absolute right-[9%] top-[11%] h-1.5 w-16 bg-brand-500 shadow-[0_0_18px_rgba(255,90,0,.8)]"
            />

            {/* Prioriza a imagem principal por ser uma forte candidata a elemento LCP. */}
            <img
              src="/paulo-hero.png"
              alt="Paulo Henrique, desenvolvedor Front-End e OutSystems, trabalhando em um notebook"
              width="1112"
              height="1386"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="hero-photo-mask relative z-10 h-full w-full object-cover object-center"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_62%_33%,rgba(255,90,0,.13),transparent_24%),linear-gradient(90deg,rgba(5,5,5,.52)_0%,transparent_34%,transparent_74%,rgba(5,5,5,.08)_100%)]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-ink-950 via-ink-950/45 to-transparent"
            />

            {/* Mantém o exemplo de código como conteúdo visual decorativo. */}
            <div
              aria-hidden="true"
              className="absolute bottom-[8%] right-[3%] z-30 hidden w-56 rounded-xl border border-brand-500/25 bg-black/80 p-4 font-mono text-xs leading-6 text-zinc-400 shadow-glow backdrop-blur-sm sm:block"
            >
              <span className="text-brand-500">if</span> (idea) {"{"}
              <br />
              &nbsp;
              <span className="text-orange-300">turnIntoCode()</span>;
              <br />
              &nbsp;
              <span className="text-brand-500">{"} else { "}</span>
              <br />
              &nbsp;
              <span className="text-orange-300">keepLearning()</span>;
              <br />
              {"}"}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}