// Cria detalhes técnicos decorativos sem expor elementos irrelevantes às tecnologias assistivas.
export default function BackgroundDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Mantém a grade principal leve e disponível em todas as resoluções. */}
      <div className="absolute inset-0 bg-tech-grid opacity-[0.13]" />

      {/* Reduz a quantidade de grandes áreas com blur em telas pequenas para diminuir custo de pintura. */}
      <div className="absolute -right-40 top-20 hidden h-[620px] w-[620px] rounded-full bg-brand-500/[0.055] blur-[110px] sm:block" />
      <div className="absolute -left-48 top-[38%] hidden h-[420px] w-[420px] rounded-full bg-brand-500/[0.035] blur-[100px] md:block" />
      <div className="absolute -right-56 top-[68%] hidden h-[520px] w-[520px] rounded-full bg-brand-500/[0.035] blur-[110px] lg:block" />

      {/* Exibe os circuitos apenas quando existe espaço visual suficiente. */}
      <div className="circuit-cluster circuit-cluster-right absolute right-[2%] top-[8%] hidden h-56 w-72 opacity-45 sm:block" />
      <div className="circuit-cluster circuit-cluster-left absolute -left-20 top-[37%] hidden h-52 w-72 opacity-25 md:block" />
      <div className="circuit-cluster circuit-cluster-right absolute right-0 top-[68%] hidden h-52 w-72 opacity-20 lg:block" />

      {/* Mantém pequenos pontos luminosos com baixo custo de renderização. */}
      <div className="absolute left-[3%] top-[16%] h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_14px_rgba(255,90,0,.9)]" />
      <div className="absolute left-[4.2%] top-[18%] h-1 w-1 rounded-full bg-brand-500/60" />
      <div className="absolute right-[8%] top-[33%] h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_14px_rgba(255,90,0,.8)]" />
      <div className="absolute left-[9%] top-[62%] h-1 w-1 rounded-full bg-brand-500/60" />
      <div className="absolute right-[11%] top-[85%] h-1 w-1 rounded-full bg-brand-500/50" />
    </div>
  );
}