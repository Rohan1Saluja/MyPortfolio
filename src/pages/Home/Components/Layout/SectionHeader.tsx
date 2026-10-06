import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

interface SectionHeaderProps {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  typewriterEyebrow?: boolean;
}

const SectionHeader = ({
  index,
  eyebrow,
  title,
  description,
  className = "",
  typewriterEyebrow = false,
}: SectionHeaderProps) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`grid gap-6 lg:grid-cols-[11rem_1fr] ${className}`}
    >
      <div className="flex items-start gap-3 pt-1 text-ink-muted">
        {index && <span className="text-xs tabular-nums">{index}</span>}
        <span className="eyebrow min-h-[0.8rem] text-primary">
          {typewriterEyebrow ? (
            <TypewriterText text={eyebrow} speedMs={42} />
          ) : (
            eyebrow
          )}
        </span>
      </div>

      <div className="max-w-4xl">
        <h2 className="section-title text-balance text-ink">{title}</h2>

        {description && (
          <p className="body-large mt-6 max-w-2xl text-ink-secondary">
            {description}
          </p>
        )}
      </div>
    </motion.header>
  );
};

export default SectionHeader;
