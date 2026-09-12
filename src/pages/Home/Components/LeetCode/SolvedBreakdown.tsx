import { useEffect, useMemo, useState } from "react";

interface SolvedBreakdownProps {
  easy: number;
  medium: number;
  hard: number;
}

const SolvedBreakdown: React.FC<SolvedBreakdownProps> = ({
  easy,
  medium,
  hard,
}) => {
  const [animated, setAnimated] = useState(false);

  const total = easy + medium + hard;

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setAnimated(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const difficulties = useMemo(() => {
    if (!total) {
      return [];
    }

    const easyPercentage = (easy / total) * 100;
    const mediumPercentage = (medium / total) * 100;
    const hardPercentage = (hard / total) * 100;

    return [
      {
        label: "Easy",
        value: easy,
        percentage: easyPercentage,
        offset: 0,
        color: "#00b8a3",
      },
      {
        label: "Medium",
        value: medium,
        percentage: mediumPercentage,
        offset: easyPercentage,
        color: "#ffc01e",
      },
      {
        label: "Hard",
        value: hard,
        percentage: hardPercentage,
        offset: easyPercentage + mediumPercentage,
        color: "#ff375f",
      },
    ];
  }, [easy, medium, hard, total]);

  return (
    <div className="flex h-full items-center justify-center gap-8 rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
      <div className="relative h-40 w-40 shrink-0">
        <svg viewBox="0 0 120 120" className="-rotate-90 h-full w-full">
          {/* Background ring */}
          <circle
            cx="60"
            cy="60"
            r="50"
            pathLength="100"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            className="text-neutral-900"
          />

          {difficulties.map((difficulty, index) => {
            const gap = 1.2;

            const visiblePercentage = Math.max(difficulty.percentage - gap, 0);

            return (
              <circle
                key={difficulty.label}
                cx="60"
                cy="60"
                r="50"
                pathLength="100"
                fill="none"
                stroke={difficulty.color}
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={
                  animated
                    ? `${visiblePercentage} ${100 - visiblePercentage}`
                    : "0 100"
                }
                strokeDashoffset={-difficulty.offset}
                style={{
                  transition:
                    "stroke-dasharray 900ms cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${index * 120}ms`,
                }}
              />
            );
          })}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-semibold tabular-nums text-white">
            {total}
          </span>

          <span className="text-xs text-neutral-500">Solved</span>
        </div>
      </div>

      <div className="min-w-[130px] space-y-3">
        {difficulties.map((difficulty) => (
          <div
            key={difficulty.label}
            className="group flex items-center justify-between gap-6 rounded-lg px-2 py-1.5 transition-colors duration-200 hover:bg-neutral-900/70"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full transition-transform duration-200 group-hover:scale-125"
                style={{
                  backgroundColor: difficulty.color,
                }}
              />

              <span className="text-sm text-neutral-500">
                {difficulty.label}
              </span>
            </div>

            <span className="text-sm font-medium tabular-nums text-neutral-200">
              {difficulty.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolvedBreakdown;
