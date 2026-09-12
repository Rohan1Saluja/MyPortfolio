import { useEffect, useRef, useState } from "react";
import type { LeetCodeStats } from "../../../../interfaces/leetcode.model";

interface StatsProps {
  stats: LeetCodeStats;
  year: number;
}

const Stats: React.FC<StatsProps> = ({ stats, year }) => {
  return (
    <div className="mt-8 grid grid-cols-2 border-y border-secondary-500/20 lg:grid-cols-4">
      <Stat
        value={stats.totalSolved}
        label="Problems solved"
        className="pr-5 lg:pr-8"
      />

      <Stat
        value={stats.totalSubmissions}
        label={`Submissions in ${year}`}
        className="border-l border-secondary-500/20 pl-5 lg:px-8"
      />

      <Stat
        value={stats.totalActiveDays}
        label={`Active days in ${year}`}
        className="border-t border-secondary-500/20 pr-5 lg:border-l lg:border-t-0 lg:px-8"
      />

      <Stat
        value={stats.streak}
        label="Day streak"
        className="border-l border-t border-secondary-500/20 pl-5 lg:border-t-0 lg:pl-8"
      />
    </div>
  );
};

interface StatProps {
  value: number;
  label: string;
  className?: string;
}

const Stat: React.FC<StatProps> = ({ value, label, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const duration = 700;
    const startTime = performance.now();
    const startValue = displayValue;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      const nextValue = Math.round(startValue + (value - startValue) * eased);

      setDisplayValue(nextValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [value, visible]);

  return (
    <div
      ref={ref}
      className={`
        group
        py-5
        transition-colors
        duration-300
        md:py-6
        ${className}
      `}
    >
      <p
        className={`
          text-2xl
          font-semibold
          tracking-tight
          text-text-200
          transition-all
          duration-500
          md:text-3xl
          ${visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}
        `}
      >
        <span className="tabular-nums">{displayValue.toLocaleString()}</span>
      </p>

      <p
        className={`
          mt-1
          text-sm
          text-text-300
          transition-all
          delay-75
          duration-500
          ${visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}
        `}
      >
        {label}
      </p>
    </div>
  );
};

export default Stats;
