import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight, FaCode } from "react-icons/fa";
import { aboutFeatures } from "../data/portfolioData";

// Apresenta o posicionamento profissional e destaca os diferenciais em cards reutilizáveis.
export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-shell"
    >
      <div className="container-shell grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -56 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          {/* Exibe uma linha decorativa sem adicioná-la à árvore de acessibilidade. */}
          <div
            aria-hidden="true"
            className="absolute -left-4 top-0 hidden h-full w-px bg-gradient-to-b from-brand-500 via-brand-500/30 to-transparent md:block"
          />

          <p className="eyebrow">Sobre Mim</p>

          <h2 id="about-title" className="section-title">
            Código, Interface, Experiência,{" "}
            <span className="text-brand-500">Evolução!</span>
          </h2>

          {/* Apresenta o resumo profissional em conteúdo textual indexável pelos mecanismos de busca. */}
          <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-400 sm:text-base">
            <p>
              Sou Desenvolvedor Front-End com experiência na criação, manutenção
              e modernização de aplicações corporativas, atuando com React,
              JavaScript, OutSystems e integração com APIs REST. Busco transformar
              necessidades de negócio em interfaces responsivas, funcionais e
              intuitivas, combinando desenvolvimento, usabilidade e atenção aos
              detalhes.
            </p>

            <p>
              Minha atuação também envolve análise de sistemas, correção de bugs,
              revisão de código, testes, integração com back-end e melhoria
              contínua, sempre com foco em qualidade, performance e experiência
              do usuário. Atualmente, amplio meus conhecimentos em Full Stack,
              UX/UI, TypeScript, bancos de dados e Inteligência Artificial,
              utilizando tecnologia para desenvolver soluções eficientes,
              acessíveis e relevantes para quem as utiliza.
            </p>
          </div>

          {/* Direciona o visitante para a área de contato sem depender apenas do ícone visual. */}
          <a
            href="#contact"
            className="focus-ring mt-7 inline-flex items-center gap-3 rounded-lg border border-brand-500/50 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-500"
          >
            Quer saber mais sobre mim?
            <FaArrowRight aria-hidden="true" />
          </a>

          {/* Mantém o detalhe gráfico fora da leitura de tecnologias assistivas. */}
          <div
            aria-hidden="true"
            className="pointer-events-none mt-10 hidden items-center gap-4 text-brand-500/70 sm:flex"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-500/60" />
            <FaCode className="text-4xl" />
            <div className="h-px w-16 bg-gradient-to-r from-brand-500/60 to-transparent" />
          </div>
        </motion.div>

        {/* Exibe os diferenciais em uma grade que mantém a ordem lógica de leitura. */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 56 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.05, ease: "easeOut" }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {aboutFeatures.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="surface-card p-6"
            >
              <Icon
                className="mb-4 text-3xl text-brand-500"
                aria-hidden="true"
              />

              <h3 className="font-bold text-white">{title}</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}