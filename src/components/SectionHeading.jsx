// Padroniza a hierarquia visual e semântica dos títulos das seções.
export default function SectionHeading({
  id,
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}) {
  // Define o alinhamento sem alterar a hierarquia semântica do título.
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="eyebrow">{eyebrow}</p>

      <h2
        id={id}
        className="section-title"
      >
        {title}{" "}
        {highlight && (
          <span className="text-brand-500">
            {highlight}
          </span>
        )}
      </h2>

      {/* Renderiza a descrição somente quando o componente recebe conteúdo complementar. */}
      {description && (
        <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}