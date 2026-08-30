import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import { services } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

// Apresenta os serviços em uma grade responsiva com animações baseadas em transform e opacity.
export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="section-shell"
    >
      <div className="container-shell">
        <SectionHeading
          id="services-title"
          eyebrow="Serviços"
          title="Soluções que transformo em"
          highlight="Código!"
        />

        {/* Aplica animação progressiva somente quando o visitante permite movimento. */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {services.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.94,
                  y: 24,
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                  },
                },
              }}
              className="surface-card group flex min-h-[280px] flex-col p-6"
            >
              <Icon
                className="mb-7 text-4xl text-brand-500"
                aria-hidden="true"
              />

              <h3 className="text-lg font-bold text-white">
                {title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">
                {description}
              </p>

              {/* Direciona o visitante para contato com uma descrição em português. */}
              <a
                href="#contact"
                className="focus-ring mt-6 inline-flex w-fit items-center gap-2 rounded-sm text-xs font-bold uppercase tracking-wider text-brand-500"
                aria-label={`Saber mais sobre o serviço ${title}`}
              >
                Quer saber mais?

                <FaArrowRight
                  className="transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}