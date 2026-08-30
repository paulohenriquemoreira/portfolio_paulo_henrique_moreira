import { useEffect, useState } from "react";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

import { projects } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

// Retorna um projeto de acordo com uma posição relativa ao item selecionado.
function getProjectByOffset(currentIndex, offset) {
  const totalProjects = projects.length;

  return projects[
    (currentIndex + offset + totalProjects) % totalProjects
  ];
}

// Renderiza uma prévia lateral e diferencia os projetos próximos dos projetos mais distantes.
function SideProjectPreview({
  project,
  side,
  depth = 1,
  onClick,
}) {
  const isLeft = side === "left";
  const isNear = depth === 1;

  return (
    <motion.button
      type="button"
      onClick={isNear ? onClick : undefined}
      disabled={!isNear}
      tabIndex={isNear ? 0 : -1}
      aria-label={
        isNear
          ? `${
              isLeft
                ? "Exibir projeto anterior"
                : "Exibir próximo projeto"
            }: ${project.title}`
          : undefined
      }
      aria-hidden={!isNear}
      initial={false}
      animate={{
        opacity: isNear ? 0.5 : 0.16,
        scale: isNear ? 0.84 : 0.7,
        filter: isNear ? "blur(1.5px)" : "blur(4px)",
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className={`
        absolute
        top-1/2
        hidden
        -translate-y-1/2
        overflow-hidden
        rounded-xl
        border
        border-brand-500/20
        bg-zinc-950
        shadow-2xl
        lg:block

        ${
          isNear
            ? `
                z-10
                w-[36%]
                max-w-[430px]
                cursor-pointer
              `
            : `
                pointer-events-none
                z-0
                w-[30%]
                max-w-[360px]
              `
        }

        ${
          isLeft
            ? isNear
              ? "left-[-2%]"
              : "left-[-20%]"
            : isNear
              ? "right-[-2%]"
              : "right-[-20%]"
        }
      `}
    >
      <div className="relative aspect-video overflow-hidden">
        {/* Carrega as prévias com prioridade reduzida porque elas não são o conteúdo principal. */}
        <img
          src={project.image}
          alt=""
          width="1600"
          height="900"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="h-full w-full object-cover object-top"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/30"
        />

        {isNear && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-5 pb-5 pt-14 text-left">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-500">
              {isLeft ? "Projeto anterior" : "Próximo projeto"}
            </span>

            <p className="mt-1 truncate text-sm font-bold text-white">
              {project.title}
            </p>
          </div>
        )}
      </div>
    </motion.button>
  );
}

// Exibe os projetos em um carrossel manual com profundidade visual e controles acessíveis.
export default function Projects() {
  const reduceMotion = useReducedMotion();

  // Armazena o índice do projeto atualmente apresentado.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define a direção usada pela animação de troca.
  const [direction, setDirection] = useState(1);

  const currentProject = projects[currentIndex];

  const previousProject = getProjectByOffset(
    currentIndex,
    -1,
  );

  const nextProject = getProjectByOffset(
    currentIndex,
    1,
  );

  const previousFarProject = getProjectByOffset(
    currentIndex,
    -2,
  );

  const nextFarProject = getProjectByOffset(
    currentIndex,
    2,
  );

  // Pré-carrega somente os projetos adjacentes para reduzir concorrência de rede no carregamento inicial.
  useEffect(() => {
    [previousProject, nextProject].forEach((project) => {
      const image = new Image();
      image.decoding = "async";
      image.src = project.image;
    });
  }, [previousProject, nextProject]);

  // Seleciona o projeto imediatamente anterior e mantém o carrossel circular.
  function handlePreviousProject() {
    setDirection(-1);

    setCurrentIndex((current) =>
      current === 0
        ? projects.length - 1
        : current - 1,
    );
  }

  // Seleciona o projeto imediatamente seguinte e mantém o carrossel circular.
  function handleNextProject() {
    setDirection(1);

    setCurrentIndex((current) =>
      current === projects.length - 1
        ? 0
        : current + 1,
    );
  }

  // Seleciona diretamente um projeto a partir dos indicadores inferiores.
  function handleSelectProject(index) {
    if (index === currentIndex) {
      return;
    }

    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }

  // Permite o uso das setas somente quando o próprio carrossel recebe foco.
  function handleCarouselKeyDown(event) {
    if (event.currentTarget !== event.target) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      handlePreviousProject();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      handleNextProject();
    }
  }

  // Define o ícone do link principal conforme o tipo de destino.
  const ProjectLinkIcon =
    currentProject.linkType === "github"
      ? FaGithub
      : FaExternalLinkAlt;

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="section-shell overflow-hidden"
    >
      <div className="container-shell">
        {/* Apresenta o título da seção e a chamada para contato. */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="work-title"
            eyebrow="PROJETOS EM DESTAQUE"
            title="Projetos que transformam ideias em"
            highlight="soluções!"
          />

          <a
            href="#contact"
            className="group/contact focus-ring inline-flex w-fit items-center gap-2 rounded-sm text-xs font-bold uppercase tracking-wider text-brand-500 transition-colors duration-300 hover:text-white"
          >
            Vamos falar sobre o seu projeto

            <FaArrowRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/contact:translate-x-1"
            />
          </a>
        </div>

        {/* Identifica o conjunto como carrossel e oferece navegação por teclado quando recebe foco. */}
        <motion.div
          role="region"
          aria-roledescription="carrossel"
          aria-label="Projetos em destaque"
          tabIndex={0}
          onKeyDown={handleCarouselKeyDown}
          initial={reduceMotion ? false : { opacity: 0, y: 56 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="focus-ring relative mt-10 rounded-xl px-3 sm:px-10 lg:px-16 xl:px-20"
        >
          {/* Anuncia a mudança do projeto atual sem repetir o conteúdo inteiro. */}
          <p
            className="sr-only"
            aria-live="polite"
            aria-atomic="true"
          >
            Projeto {currentIndex + 1} de {projects.length}:{" "}
            {currentProject.title}
          </p>

          <SideProjectPreview
            project={previousFarProject}
            side="left"
            depth={2}
          />

          <SideProjectPreview
            project={nextFarProject}
            side="right"
            depth={2}
          />

          <SideProjectPreview
            project={previousProject}
            side="left"
            depth={1}
            onClick={handlePreviousProject}
          />

          <SideProjectPreview
            project={nextProject}
            side="right"
            depth={1}
            onClick={handleNextProject}
          />

          {/* Oferece controle explícito para avançar ao projeto anterior. */}
          <button
            type="button"
            onClick={handlePreviousProject}
            aria-label={`Exibir projeto anterior. Projeto atual: ${currentProject.title}`}
            aria-controls="project-carousel-current"
            className="focus-ring absolute left-0 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand-500/50 bg-black/95 text-brand-500 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-brand-500 hover:bg-brand-500 hover:text-black sm:h-12 sm:w-12 lg:left-[2%]"
          >
            <FaArrowLeft aria-hidden="true" />
          </button>

          {/* Mantém apenas o card atual no primeiro plano para preservar estabilidade de layout. */}
          <div className="relative z-30 mx-auto w-full max-w-[920px]">
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.article
                id="project-carousel-current"
                key={currentProject.title}
                aria-labelledby={`project-title-${currentIndex}`}
                aria-describedby={`project-description-${currentIndex}`}
                initial={
                  reduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 0,
                        x: direction > 0 ? 30 : -30,
                        scale: 0.99,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        x: direction > 0 ? -30 : 30,
                        scale: 0.99,
                      }
                }
                transition={{
                  duration: reduceMotion ? 0.08 : 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="surface-card group overflow-hidden border border-brand-500/35 shadow-[0_22px_80px_rgba(0,0,0,0.55)]"
              >
                <div className="grid items-stretch lg:grid-cols-[1.25fr_0.75fr]">
                  {/* Exibe a imagem e as tecnologias do projeto no primeiro bloco do card. */}
                  <div className="flex min-w-0 flex-col bg-black/80 lg:border-r lg:border-white/5">
                    <div className="relative aspect-video overflow-hidden border-b border-white/5 bg-zinc-950">
                      <img
                        src={currentProject.image}
                        alt={currentProject.alt}
                        width="1600"
                        height="900"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent"
                      />
                    </div>

                    {/* Lista as tecnologias como informação textual, sem criar elementos falsamente interativos. */}
                    <div className="flex flex-1 items-center justify-center px-5 py-5 sm:px-6">
                      <ul
                        aria-label={`Tecnologias utilizadas em ${currentProject.title}`}
                        className="flex w-full flex-wrap items-center justify-center gap-2"
                      >
                        {currentProject.technologies.map(
                          (technology) => (
                            <li
                              key={technology}
                              className="rounded-full border border-brand-500/30 bg-brand-500/[0.06] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-zinc-300"
                            >
                              {technology}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Exibe as informações textuais e o link principal do projeto. */}
                  <div className="flex flex-col justify-center bg-zinc-950/60 p-6 sm:p-7 lg:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-brand-500">
                        Projeto em destaque
                      </span>

                      <span
                        className="font-mono text-[10px] text-zinc-500"
                        aria-label={`Projeto ${currentIndex + 1} de ${projects.length}`}
                      >
                        {String(currentIndex + 1).padStart(2, "0")}
                        {" / "}
                        {String(projects.length).padStart(2, "0")}
                      </span>
                    </div>

                    <h3
                      id={`project-title-${currentIndex}`}
                      className="mt-5 text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl"
                    >
                      {currentProject.title}
                    </h3>

                    <p
                      id={`project-description-${currentIndex}`}
                      className="mt-4 text-sm leading-7 text-zinc-400"
                    >
                      {currentProject.description}
                    </p>

                    <div className="mt-7">
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${currentProject.linkLabel}: ${currentProject.title}. Abre em uma nova aba.`}
                        className="group/project-link focus-ring inline-flex items-center gap-3 rounded-sm border border-brand-500 bg-transparent px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-brand-500 transition-all duration-300 hover:bg-brand-500 hover:text-black"
                      >
                        <ProjectLinkIcon
                          aria-hidden="true"
                          className="text-sm"
                        />

                        {currentProject.linkLabel}

                        <FaArrowRight
                          aria-hidden="true"
                          className="text-[9px] transition-transform duration-300 group-hover/project-link:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Oferece controle explícito para avançar ao próximo projeto. */}
          <button
            type="button"
            onClick={handleNextProject}
            aria-label={`Exibir próximo projeto. Projeto atual: ${currentProject.title}`}
            aria-controls="project-carousel-current"
            className="focus-ring absolute right-0 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand-500/50 bg-black/95 text-brand-500 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-brand-500 hover:bg-brand-500 hover:text-black sm:h-12 sm:w-12 lg:right-[2%]"
          >
            <FaArrowRight aria-hidden="true" />
          </button>
        </motion.div>

        {/* Permite a seleção direta de qualquer projeto por indicadores nomeados. */}
        <div
          className="mt-7 flex items-center justify-center gap-2"
          role="group"
          aria-label="Selecionar projeto"
        >
          {projects.map((project, index) => {
            const isActive = index === currentIndex;

            return (
              <button
                key={project.title}
                type="button"
                onClick={() => handleSelectProject(index)}
                aria-label={`Exibir projeto ${index + 1}: ${project.title}`}
                aria-current={isActive ? "true" : undefined}
                aria-controls="project-carousel-current"
                className={`focus-ring h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-8 bg-brand-500"
                    : "w-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}