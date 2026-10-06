interface SectionHeaderProps {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader = ({
  index,
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeaderProps) => {
  return (
    <header className={`grid gap-6 lg:grid-cols-[11rem_1fr] ${className}`}>
      <div className="flex items-start gap-3 pt-1 text-ink-muted">
        {index && <span className="text-xs tabular-nums">{index}</span>}
        <span className="eyebrow text-primary">{eyebrow}</span>
      </div>

      <div className="max-w-4xl">
        <h2 className="section-title text-balance text-ink">{title}</h2>

        {description && (
          <p className="body-large mt-6 max-w-2xl text-ink-secondary">
            {description}
          </p>
        )}
      </div>
    </header>
  );
};

export default SectionHeader;
