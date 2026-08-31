import { motion, useReducedMotion } from "framer-motion";

import { FaBriefcase, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

import SectionHeading from "./SectionHeading";

// Mantém os dados profissionais fora do componente
// para evitar a recriação do conteúdo a cada renderização.
const experiences = [
  {
    id: "tcs",

    role: "Analista Desenvolvedor Júnior",

    company: "TCS Tata Consultancy Services",

    startDate: "2022-09",

    startLabel: "Set./2022",

    endDate: null,

    endLabel: "Atual",

    current: true,

    activities: [
      "Atuo na modernização de sistemas legados com OutSystems, contribuindo para a evolução de aplicações corporativas e para a melhoria da experiência do usuário.",

      "Desenvolvo e ajusto interfaces utilizando CSS e JavaScript, além de apoiar integrações entre front-end, back-end e operações de dados com SQL.",

      "Realizo análise de sistemas, correção de bugs, revisão de código produzido pela equipe e apoio à implementação de testes de unidade e integração.",

      "Utilizo Inteligência Artificial no processo de desenvolvimento, incluindo AI Mentor, como apoio à análise, revisão e melhoria da qualidade do código.",
    ],
  },

  {
    id: "social-media",

    role: "Social Media Freelancer",

    company: "Autônomo",

    startDate: "2020",

    startLabel: "2020",

    endDate: "2024",

    endLabel: "2024",

    current: false,

    activities: [
      "Atuei no planejamento e desenvolvimento de conteúdo digital para diferentes segmentos, com foco em posicionamento de marca, comunicação visual, engajamento e experiência do usuário.",

      "Criei posts, vídeos, banners, peças promocionais e materiais gráficos para redes sociais de negócios dos segmentos de turismo, ótica, joalheria, assistência técnica de celulares, eventos religiosos e comemorações.",

      "Desenvolvi materiais para campanha eleitoral de candidato a vereador, incluindo identidade visual, santinhos, peças impressas, conteúdos para redes sociais e materiais de comunicação direcionados ao público.",

      "Apliquei princípios de organização visual, hierarquia da informação, adequação da linguagem e clareza da comunicação, buscando melhorar o impacto visual, a conversão, a presença digital e a experiência do público com as marcas atendidas.",
    ],
  },

  {
    id: "atento",

    role: "Técnico de Telecomunicações III",

    company: "Atento Brasil",

    startDate: "2016-08",

    startLabel: "Ago./2016",

    endDate: "2021-12",

    endLabel: "Dez./2021",

    current: false,

    activities: [
      "Atuei em telecomunicações realizando análise de circuitos, aprovisionamento de switches e configuração de rotas em roteadores por meio do PuTTY.",

      "Realizei acompanhamento de serviços, agendamentos e tratativas relacionadas a PABX, DDR e troncos em sistemas SGDDR/SR-NC.",

      "Acompanhei atividades técnicas e operacionais relacionadas à infraestrutura de telecomunicações, contribuindo para a continuidade e qualidade dos serviços.",
    ],
  },

  {
    id: "servisystem",

    role: "Técnico Pleno em Telecomunicações",

    company: "ISS SERVISYSTEM DO BRASIL LTDA",

    startDate: "2008-10",

    startLabel: "Out./2008",

    endDate: "2016-07",

    endLabel: "Jul./2016",

    current: false,

    activities: [
      "Atuei em redes SDH realizando aprovisionamento em plataformas Marconi, Alcatel, Nortel (EGS), Siemens, Huawei e Fênix.",

      "Realizei análise de sistemas, cadastro de equipamentos e tratativas operacionais relacionadas a PABX, DDR e sistemas SGDDR/SPNC.",

      "Acompanhei processos técnicos de telecomunicações e atualizações de informações em sistemas operacionais, contribuindo para a organização e continuidade dos serviços.",
    ],
  },
];

// Apresenta a trajetória profissional em uma linha do tempo
// responsiva, semântica e otimizada para tecnologias assistivas.
export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-shell"
    >
      <div className="container-shell">
        {/* ==================================================
            CABEÇALHO
        ================================================== */}

        <SectionHeading
          id="experience-title"
          eyebrow="EXPERIÊNCIA"
          title="Minha trajetória"
          highlight="profissional"
          description="Experiências que contribuíram para minha evolução em desenvolvimento de software, tecnologia, comunicação visual e experiência do usuário."
        />

        {/* ==================================================
            LINHA DO TEMPO
        ================================================== */}

        {/*
          Utiliza uma lista ordenada porque as experiências
          são apresentadas em sequência cronológica.
        */}
        <ol
          aria-label="Experiências profissionais de Paulo Henrique"
          className="
            relative
            mt-10
            space-y-6

            before:absolute
            before:bottom-5
            before:left-[7px]
            before:top-5
            before:w-px
            before:bg-gradient-to-b
            before:from-brand-500
            before:via-brand-500/40
            before:to-transparent

            sm:before:left-[9px]
          "
        >
          {experiences.map((experience, index) => {
            // Define identificadores únicos para relacionar
            // semanticamente cada título e sua descrição.
            const titleId = `experience-${experience.id}-title`;

            const descriptionId = `experience-${experience.id}-description`;

            return (
              <motion.li
                key={experience.id}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 28,
                      }
                }
                whileInView={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.45,

                  delay: index * 0.06,

                  ease: "easeOut",
                }}
                className="
                    relative
                    pl-8

                    sm:pl-10
                  "
              >
                {/* Exibe o marcador visual da linha do tempo sem adicioná-lo à leitura assistiva. */}
                <span
                  aria-hidden="true"
                  className={`
                      absolute
                      left-0
                      top-7
                      z-10

                      h-[15px]
                      w-[15px]

                      rounded-full
                      border-2

                      sm:h-[19px]
                      sm:w-[19px]

                      ${
                        experience.current
                          ? `
                              border-brand-500
                              bg-brand-500

                              shadow-[0_0_18px_rgba(255,90,0,.75)]
                            `
                          : `
                              border-brand-500/70
                              bg-ink-950
                            `
                      }
                    `}
                />

                {/* Agrupa semanticamente todas as informações relacionadas à experiência. */}
                <article
                  aria-labelledby={titleId}
                  aria-describedby={descriptionId}
                  className="
                      surface-card
                      relative
                      overflow-hidden

                      p-5

                      sm:p-6

                      lg:p-7
                    "
                >
                  {/* Destaca visualmente a experiência profissional atual. */}
                  {experience.current && (
                    <div
                      aria-hidden="true"
                      className="
                          absolute
                          inset-y-0
                          left-0

                          w-[3px]

                          bg-brand-500
                        "
                    />
                  )}

                  {/* ==================================================
                        IDENTIFICAÇÃO
                    ================================================== */}

                  <header
                    className="
                        flex
                        flex-col
                        gap-4

                        md:flex-row
                        md:items-start
                        md:justify-between
                      "
                  >
                    <div>
                      {/* Exibe o cargo como título principal de cada experiência. */}
                      <h3
                        id={titleId}
                        className="
                            text-lg
                            font-extrabold
                            tracking-tight
                            text-white

                            sm:text-xl
                          "
                      >
                        {experience.role}
                      </h3>

                      {/* Identifica a empresa vinculada à experiência profissional. */}
                      <p
                        className="
                            mt-1

                            flex
                            items-center
                            gap-2

                            text-sm
                            font-semibold
                            text-brand-500
                          "
                      >
                        <FaBriefcase aria-hidden="true" className="shrink-0" />

                        {experience.company}
                      </p>
                    </div>

                    {/* ==================================================
                          PERÍODO
                      ================================================== */}

                    {/*
                        Apresenta o período da experiência utilizando
                        o elemento time sempre que existe uma data definida.
                      */}
                    <p
                      className="
                          flex
                          w-fit
                          shrink-0
                          items-center
                          gap-2

                          rounded-full

                          border
                          border-white/10

                          bg-white/[0.035]

                          px-3
                          py-1.5

                          text-[11px]
                          font-semibold
                          text-zinc-400
                        "
                      aria-label={`Período: ${experience.startLabel} até ${experience.endLabel}`}
                    >
                      <FaCalendarAlt
                        aria-hidden="true"
                        className="text-brand-500"
                      />

                      <time dateTime={experience.startDate}>
                        {experience.startLabel}
                      </time>

                      <span aria-hidden="true">—</span>

                      {experience.endDate ? (
                        <time dateTime={experience.endDate}>
                          {experience.endLabel}
                        </time>
                      ) : (
                        <span>{experience.endLabel}</span>
                      )}
                    </p>
                  </header>

                  {/* ==================================================
                        RESPONSABILIDADES
                    ================================================== */}

                  {/*
                      Organiza as principais responsabilidades
                      profissionais em uma lista semântica.
                    */}
                  <div id={descriptionId} className="mt-5">
                    <ul
                      aria-label={`Principais atividades exercidas como ${experience.role}`}
                      className="
                          space-y-3

                          text-sm
                          leading-7
                          text-zinc-400

                          sm:text-[15px]
                        "
                    >
                      {experience.activities.map((activity) => (
                        <li
                          key={activity}
                          className="
                                relative
                                pl-5

                                before:absolute
                                before:left-0
                                before:top-[11px]

                                before:h-1.5
                                before:w-1.5

                                before:rounded-full
                                before:bg-brand-500
                              "
                        >
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </ol>
        <div className="mt-10 flex justify-end">
          <a
            href="#contact"
            className="group/contact focus-ring inline-flex w-fit items-center gap-2 rounded-sm text-xs font-bold uppercase tracking-wider text-brand-500 transition-colors duration-300 hover:text-white"
          >
            Quer falar sobre experiência?
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
