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
        <p className="mb-3 inline-flex rounded-full border border-brand-champagne/40 bg-brand-champagne/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-champagne">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-brand-parchment sm:text-4xl md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 max-w-3xl text-sm leading-relaxed text-brand-parchment/72 sm:text-base">{description}</p> : null}
    </div>
  );
}
