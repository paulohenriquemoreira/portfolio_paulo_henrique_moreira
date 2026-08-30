import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import SectionHeading from "./SectionHeading";

// Define o endereço utilizado pelo FormSubmit para receber as mensagens.
const CONTACT_EMAIL = "paulo.henrick.moreira@hotmail.com";

// Mantém os canais de contato fora do componente para evitar recriação a cada renderização.
const CONTACT_ITEMS = [
  {
    label: "Email",
    value: "paulo.henrick.moreira@hotmail.com",
    href: "mailto:paulo.henrick.moreira@hotmail.com",
    icon: FaEnvelope,
    ariaLabel: "Enviar um e-mail para Paulo Henrique",
    external: false,
  },
  {
    label: "Whatsapp",
    value: "+55(11) 942331974",
    href: "https://wa.me/5511942331974",
    icon: FaWhatsapp,
    ariaLabel: "Abrir conversa com Paulo Henrique no WhatsApp em uma nova aba",
    external: true,
  },
  {
    label: "Localização",
    value: "Osasco, SP, Brasil",
    icon: FaMapMarkerAlt,
  },
  {
    label: "Disponibilidade",
    value: "Aberto para novos projetos",
    icon: FaClock,
  },
];

// Reúne o formulário e os canais de contato em uma composição responsiva e acessível.
export default function Contact() {
  const reduceMotion = useReducedMotion();

  // Armazena a mensagem que informa o resultado do envio ao visitante.
  const [status, setStatus] = useState("");

  // Controla o bloqueio temporário dos campos durante o envio.
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Envia os dados preenchidos para o FormSubmit por uma requisição AJAX.
  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const honey = String(formData.get("_honey") || "").trim();

    // Interrompe o fluxo quando o campo invisível identifica preenchimento automatizado.
    if (honey) {
      return;
    }

    setIsSubmitting(true);
    setStatus("Enviando mensagem...");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Nome: name,
            Email: email,
            Assunto: subject,
            Mensagem: message,
            _replyto: email,
            _subject: `Portfólio | ${subject}`,
            _template: "table",
          }),
        },
      );

      // Interrompe o processamento quando o serviço retorna um status HTTP de erro.
      if (!response.ok) {
        throw new Error("Não foi possível enviar a mensagem.");
      }

      const data = await response.json();

      // Trata respostas em que o FormSubmit retorna success como booleano ou string.
      if (data.success === false || data.success === "false") {
        throw new Error(data.message || "Não foi possível enviar a mensagem.");
      }

      // Limpa o formulário apenas depois da confirmação do envio.
      form.reset();

      setStatus("Mensagem enviada com sucesso! Obrigado pelo contato.");
    } catch (error) {
      // Registra o erro para facilitar a análise pelo console durante o desenvolvimento.
      console.error("Erro ao enviar formulário:", error);

      setStatus(
        "Não foi possível enviar a mensagem. Tente novamente em alguns instantes.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-shell relative"
    >
      <div className="container-shell">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 48 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-10 lg:grid-cols-[.8fr_1.35fr]"
        >
          {/* Apresenta o convite de contato e mantém o título associado à seção. */}
          <div>
            <SectionHeading
              id="contact-title"
              eyebrow="VAMOS CONVERSAR!"
              title="Transformando ideias em"
              highlight="experiências digitais!"
            />

            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
              Tem algum projeto em mente? Adoraria ouvir de você.
            </p>
          </div>

          {/* Organiza o formulário e os canais de contato sem alterar a ordem de leitura. */}
          <div className="grid gap-5 xl:grid-cols-[1fr_290px]">
            <form
              className="surface-card grid gap-4 p-5 sm:p-6"
              onSubmit={handleSubmit}
              aria-describedby="form-status"
              aria-busy={isSubmitting}
            >
              {/* Mantém um honeypot invisível para reduzir submissões automatizadas. */}
              <input
                type="text"
                name="_honey"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* Agrupa nome e e-mail em duas colunas quando existe espaço disponível. */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Seu Nome
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={80}
                    placeholder="Seu Nome"
                    disabled={isSubmitting}
                    className="focus-ring w-full rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-500 hover:border-brand-500/30 focus:border-brand-500/60 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Seu Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    maxLength={120}
                    placeholder="Seu Email"
                    disabled={isSubmitting}
                    className="focus-ring w-full rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-500 hover:border-brand-500/30 focus:border-brand-500/60 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Solicita um assunto para facilitar a identificação do e-mail recebido. */}
              <div>
                <label htmlFor="subject" className="sr-only">
                  Assunto
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  minLength={3}
                  maxLength={120}
                  placeholder="Assunto"
                  disabled={isSubmitting}
                  className="focus-ring w-full rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-500 hover:border-brand-500/30 focus:border-brand-500/60 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* Recebe a mensagem principal e limita o tamanho para reduzir abuso do formulário. */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Escreva sua mensagem
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows="7"
                  placeholder="Escreva sua mensagem..."
                  disabled={isSubmitting}
                  className="focus-ring min-h-40 w-full resize-y rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-500 hover:border-brand-500/30 focus:border-brand-500/60 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* Informa visualmente o estado de envio e impede submissões duplicadas. */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="focus-ring w-full rounded-lg bg-brand-500 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-glow transition-all duration-300 hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit sm:min-w-48"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem →"}
              </button>

              {/* Anuncia mudanças de status sem interromper a navegação do leitor de tela. */}
              <p
                id="form-status"
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="min-h-4 text-xs text-zinc-400"
              >
                {status}
              </p>
            </form>

            {/* Identifica semanticamente os canais diretos de contato. */}
            <address
              aria-label="Canais de contato de Paulo Henrique"
              className="surface-card p-5 not-italic sm:p-6"
            >
              <ul className="space-y-5">
                {CONTACT_ITEMS.map(
                  ({ label, value, href, icon: Icon, ariaLabel, external }) => (
                    <li key={label} className="flex gap-3">
                      <Icon
                        className="mt-0.5 shrink-0 text-xl text-brand-500"
                        aria-hidden="true"
                      />

                      <span>
                        <strong className="block text-xs text-white">
                          {label}
                        </strong>

                        {href ? (
                          <a
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            aria-label={ariaLabel}
                            className="focus-ring mt-1 inline-block rounded-sm text-xs text-zinc-400 transition duration-300 hover:text-brand-500"
                          >
                            {value}
                          </a>
                        ) : (
                          <span className="mt-1 block text-xs text-zinc-400">
                            {value}
                          </span>
                        )}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </address>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
