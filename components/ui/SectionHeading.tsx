type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  const alignClass = centered ? "text-center mx-auto" : "";

  return (
    <div className={alignClass}>
      {eyebrow ? (
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-champagne/40 bg-brand-champagne/[0.08] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-wood">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-champagne" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-brand-dark sm:text-4xl md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-brand-wood/80 sm:text-base">{description}</p>
      ) : null}
      <div className="mt-6 h-px w-16 bg-gradient-to-r from-brand-champagne/60 to-transparent" />
    </div>
  );
}
