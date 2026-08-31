import { motion, useReducedMotion } from "framer-motion";

import { FaCalendarAlt, FaGraduationCap,FaArrowRight } from "react-icons/fa";

import SectionHeading from "./SectionHeading";

// Mantém os dados acadêmicos fora do componente
// para evitar a recriação do conteúdo durante novas renderizações.
const education = [
  {
    id: "ia-generativa",

    course: "IA Generativa Aplicada e Arquiteturas Inteligentes",

    institution: "Universidade Anhembi Morumbi",

    level: "Pós-graduação",

    startDate: "2026-08",

    startLabel: "Ago./2026",

    endDate: null,

    endLabel: "Atual",

    current: true,
  },

  {
    id: "ux-ui",

    course: "Experiência do Usuário (UX) e Interface do Usuário (UI)",

    institution: "Instituto Passo 1",

    level: "Pós-graduação",

    startDate: "2026-05",

    startLabel: "Mai./2026",

    endDate: null,

    endLabel: "Atual",

    current: true,
  },

  {
    id: "ads",

    course: "Análise e Desenvolvimento de Sistemas",

    institution: "FASUL Educacional - Faculdade Sul Mineira",

    level: "Graduação",

    startDate: "2025-02",

    startLabel: "Fev./2025",

    endDate: null,

    endLabel: "Atual",

    current: true,
  },

  {
    id: "blockchain",

    course: "Blockchain e Criptografia Digital",

    institution: "Universidade Anhembi Morumbi",

    level: "Graduação Tecnológica",

    startDate: "2022-02",

    startLabel: "Fev./2022",

    endDate: "2024-06",

    endLabel: "Jun./2024",

    current: false,
  },
];

// Apresenta a formação acadêmica em cards responsivos,
// semânticos e visualmente consistentes com o restante do portfólio.
export default function Education() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="section-shell"
    >
      <div className="container-shell">
        {/* ==================================================
            CABEÇALHO
        ================================================== */}

        <SectionHeading
          id="education-title"
          eyebrow="FORMAÇÃO"
          title="Conhecimento em constante"
          highlight="evolução"
          description="Formação acadêmica direcionada a desenvolvimento de software, experiência do usuário e novas tecnologias."
        />

        {/* ==================================================
            FORMAÇÕES
        ================================================== */}

        {/*
          Utiliza uma lista semântica para representar
          cada etapa da formação acadêmica.
        */}
        <motion.ul
          aria-label="Formação acadêmica de Paulo Henrique"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.07,
              },
            },
          }}
          className="
            mt-10
            grid
            gap-5

            md:grid-cols-2
          "
        >
          {education.map((item) => {
            // Define um identificador único para relacionar
            // semanticamente o card ao título da formação.
            const titleId = `education-${item.id}-title`;

            return (
              <motion.li
                key={item.id}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 24,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,

                    transition: {
                      duration: 0.45,

                      ease: "easeOut",
                    },
                  },
                }}
              >
                {/* Agrupa semanticamente as informações de cada formação acadêmica. */}
                <article
                  aria-labelledby={titleId}
                  className="
                      surface-card
                      group
                      relative
                      flex
                      h-full
                      min-h-[235px]
                      flex-col
                      overflow-hidden

                      p-5

                      sm:p-6
                    "
                >
                  {/* Exibe a linha de destaque lateral utilizando a identidade visual do portfólio. */}
                  <div
                    aria-hidden="true"
                    className="
                        absolute
                        inset-y-0
                        left-0

                        w-[3px]

                        bg-gradient-to-b
                        from-brand-500
                        via-brand-500/70
                        to-transparent
                      "
                  />

                  {/* ==================================================
                        ÍCONE + STATUS
                    ================================================== */}

                  <div
                    className="
                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                  >
                    {/* Exibe o ícone acadêmico como elemento exclusivamente visual. */}
                    <div
                      aria-hidden="true"
                      className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center

                          rounded-lg

                          border
                          border-brand-500/30

                          bg-brand-500/[0.08]

                          text-xl
                          text-brand-500

                          transition-transform
                          duration-300

                          group-hover:-translate-y-1
                        "
                    >
                      <FaGraduationCap />
                    </div>

                    {/* ==================================================
                          BADGE DE STATUS
                      ================================================== */}

                    {/*
                        Exibe um badge para todas as formações.

                        Mantém "Em andamento" na identidade laranja
                        e hover para amarelo quando o card está ativo.
                        Além de utiliza uma transição para verde no badge
                        "Concluída" quando o card recebe hover.
                      */}
                    <span
                      className={`
                          rounded-full

                          border

                          px-3
                          py-1

                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.16em]

                          transition-all
                          duration-300

                          ${
                            item.current
                              ? `
                                  border-brand-500/30
                                  bg-brand-500/[0.08]
                                  text-brand-500

                                  group-hover:border-yellow-500/50
                                  group-hover:bg-yellow-500/[0.10]
                                  group-hover:text-yellow-400
                                `
                              : `
                                  border-brand-500/40
                                  bg-brand-500/[0.08]
                                  text-brand-500

                                  group-hover:border-green-500/50
                                  group-hover:bg-green-500/[0.10]
                                  group-hover:text-green-400
                                `
                          }
                        `}
                      aria-label={
                        item.current
                          ? "Formação em andamento"
                          : "Formação concluída"
                      }
                    >
                      {item.current ? "Em andamento" : "Concluída"}
                    </span>
                  </div>

                  {/* ==================================================
                        CURSO
                    ================================================== */}

                  {/* Exibe o nome do curso como título principal do card. */}
                  <h3
                    id={titleId}
                    className="
                        mt-5

                        text-lg
                        font-extrabold
                        leading-snug
                        tracking-tight
                        text-white

                        sm:text-xl
                      "
                  >
                    {item.course}
                  </h3>

                  {/* ==================================================
                        INSTITUIÇÃO
                    ================================================== */}

                  {/* Identifica a instituição responsável pela formação. */}
                  <p
                    className="
                        mt-3

                        text-sm
                        font-semibold
                        text-zinc-300
                      "
                  >
                    {item.institution}
                  </p>

                  {/* Exibe o nível acadêmico associado ao curso. */}
                  <p
                    className="
                        mt-1

                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-brand-500
                      "
                  >
                    {item.level}
                  </p>

                  {/* ==================================================
                        PERÍODO
                    ================================================== */}

                  {/*
                      Mantém o período na base do card para
                      garantir alinhamento visual entre os itens.
                    */}
                  <div className="mt-auto pt-5">
                    <p
                      aria-label={`Período: ${item.startLabel} até ${item.endLabel}`}
                      className="
                          flex
                          items-center
                          gap-2

                          border-t
                          border-white/5

                          pt-4

                          text-xs
                          text-zinc-500
                        "
                    >
                      <FaCalendarAlt
                        aria-hidden="true"
                        className="text-brand-500"
                      />

                      <time dateTime={item.startDate}>{item.startLabel}</time>

                      <span aria-hidden="true">—</span>

                      {item.endDate ? (
                        <time dateTime={item.endDate}>{item.endLabel}</time>
                      ) : (
                        <span>{item.endLabel}</span>
                      )}
                    </p>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </motion.ul>
        <div className="mt-10 flex justify-end">
          <a
            href="#contact"
            className="group/contact focus-ring inline-flex w-fit items-center gap-2 rounded-sm text-xs font-bold uppercase tracking-wider text-brand-500 transition-colors duration-300 hover:text-white"
          >
            Quer saber mais sobre minha formação?
            <FaArrowRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/contact:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
