import { motion, useReducedMotion } from "framer-motion";

import { learningTechnologies, technologies } from "../data/portfolioData";

import SectionHeading from "./SectionHeading";

// Renderiza uma tecnologia como item semântico de lista.
// A propriedade compact permite utilizar uma versão menor
// do ícone sem duplicar a estrutura do componente.
function TechnologyItem({ technology, compact = false }) {
  const { name, icon, color } = technology;

  // Define tamanhos diferentes para os dois grupos.
  // O grupo "Em Evolução" utiliza ícones menores.
  const iconSize = compact
    ? `
        h-8
        w-8

        sm:h-9
        sm:w-9

        lg:h-10
        lg:w-10
      `
    : `
        h-10
        w-10

        sm:h-11
        sm:w-11

        lg:h-12
        lg:w-12
      `;

  return (
    <li
      className="
        group
        flex
        min-h-28
        flex-col
        items-center
        justify-center
        gap-3
        rounded-lg
        border
        border-transparent
        px-2
        py-4
        text-center
        transition-all
        duration-300

        hover:border-brand-500/20
        hover:bg-brand-500/[0.035]
      "
      style={{
        "--technology-color": color,
      }}
    >
      {/*
        Utiliza o arquivo SVG como máscara.

        Mantém o ícone laranja no estado inicial e
        utiliza a cor correspondente à tecnologia
        durante a interação por hover.

        A URL permanece entre aspas para garantir
        compatibilidade com os data URLs gerados
        pelo build de produção do Vite.
      */}
      <span
        aria-hidden="true"
        className={`
          ${iconSize}

          block
          shrink-0
          bg-brand-500

          transition-all
          duration-300

          group-hover:-translate-y-1
          group-hover:scale-110
          group-hover:bg-[var(--technology-color)]
        `}
        style={{
          WebkitMaskImage: `url("${icon}")`,

          maskImage: `url("${icon}")`,

          WebkitMaskRepeat: "no-repeat",

          maskRepeat: "no-repeat",

          WebkitMaskPosition: "center",

          maskPosition: "center",

          WebkitMaskSize: "contain",

          maskSize: "contain",
        }}
      />

      {/* Exibe o nome da tecnologia como conteúdo textual acessível. */}
      <span
        className="
          text-[11px]
          font-semibold
          text-zinc-300
          transition-colors
          duration-300

          group-hover:text-white

          sm:text-xs
        "
      >
        {name}
      </span>
    </li>
  );
}

// Exibe as tecnologias utilizadas e o grupo
// que está atualmente em processo de aprofundamento.
export default function TechStack() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-shell"
    >
      <div className="container-shell">
        {/* Aplica animação leve utilizando opacity e scale. */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.97,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  scale: 1,
                }
          }
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
        >
          {/* ==================================================
              TÍTULO
          ================================================== */}

          <SectionHeading
            id="skills-title"
            eyebrow="SKILLS"
            title="Tecnologias &"
            highlight="Ferramentas"
          />

          {/* ==================================================
              TECNOLOGIAS & FERRAMENTAS
          ================================================== */}

          <div
            className="
              surface-card
              mt-8
              p-5

              sm:p-7
            "
          >
            <ul
              className="
                grid
                grid-cols-2
                gap-3

                sm:grid-cols-3

                md:grid-cols-4

                lg:grid-cols-7
              "
              aria-label="Tecnologias e ferramentas utilizadas"
            >
              {technologies.map((technology) => (
                <TechnologyItem key={technology.name} technology={technology} />
              ))}
            </ul>
          </div>

          {/* ==================================================
              TECNOLOGIAS EM EVOLUÇÃO
          ================================================== */}

          <div className="mt-12">
            <div className="mb-6">
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-brand-500
                "
              >
                EM EVOLUÇÃO
              </p>

              <h3
                className="
                  mt-2
                  text-xl
                  font-bold
                  tracking-tight
                  text-white

                  sm:text-2xl
                "
              >
                Tecnologias que estou{" "}
                <span className="text-brand-500">aprofundando</span>
              </h3>

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-6
                  text-zinc-400
                "
              >
                Tecnologias que fazem parte do meu processo atual de aprendizado
                e evolução profissional.
              </p>
            </div>

            {/* Distribui as tecnologias em evolução em até oito colunas no desktop. */}
            <div
              className="
                surface-card
                p-5

                sm:p-7
              "
            >
              <ul
                className="
                  grid
                  grid-cols-2
                  gap-3

                  sm:grid-cols-4

                  lg:grid-cols-8
                "
                aria-label="Tecnologias em processo de aprofundamento"
              >
                {learningTechnologies.map((technology) => (
                  <TechnologyItem
                    key={technology.name}
                    technology={technology}
                    compact
                  />
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
