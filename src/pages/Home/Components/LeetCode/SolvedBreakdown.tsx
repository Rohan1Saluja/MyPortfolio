import { useEffect, useMemo, useRef, useState } from "react";

interface SolvedBreakdownProps {
  totalSolved: number;
  totalProblems: number;

  easySolved: number;
  totalEasy: number;

  mediumSolved: number;
  totalMedium: number;

  hardSolved: number;
  totalHard: number;
}

const SolvedBreakdown: React.FC<SolvedBreakdownProps> = ({
  totalSolved,
  totalProblems,
  easySolved,
  totalEasy,
  mediumSolved,
  totalMedium,
  hardSolved,
  totalHard,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const difficulties = useMemo(() => {
    const solvedTotal = Math.max(easySolved + mediumSolved + hardSolved, 1);

    const easyPercent = (easySolved / solvedTotal) * 100;
    const mediumPercent = (mediumSolved / solvedTotal) * 100;
    const hardPercent = (hardSolved / solvedTotal) * 100;

    return [
      {
        label: "Easy",
        solved: easySolved,
        total: totalEasy,
        percentage: easyPercent,
        offset: 0,
        color: "#00b8a3",
      },
      {
        label: "Medium",
        solved: mediumSolved,
        total: totalMedium,
        percentage: mediumPercent,
        offset: easyPercent,
        color: "#ffc01e",
      },
      {
        label: "Hard",
        solved: hardSolved,
        total: totalHard,
        percentage: hardPercent,
        offset: easyPercent + mediumPercent,
        color: "#ff375f",
      },
    ];
  }, [easySolved, mediumSolved, hardSolved, totalEasy, totalMedium, totalHard]);

  return (
    <div
      ref={containerRef}
      className="group rounded-2xl border border-neutral-800/80 bg-neutral-950/40 p-5 transition-all duration-300 hover:border-neutral-700"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-neutral-200">
            Solved Problems
          </h3>

          <p className="mt-1 text-xs text-neutral-500">Difficulty breakdown</p>
        </div>

        <span className="text-xs text-neutral-600">
          {totalSolved.toLocaleString()} / {totalProblems.toLocaleString()}
        </span>
      </div>

      <div className="flex flex-col items-center gap-7 sm:flex-row sm:justify-center">
        <div className="relative h-44 w-44 shrink-0">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              strokeWidth="7"
              pathLength="100"
              className="stroke-neutral-900"
            />

            {difficulties.map((difficulty, index) => {
              const gap = 1.5;

              const visibleLength = Math.max(difficulty.percentage - gap, 0);

              return (
                <circle
                  key={difficulty.label}
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke={difficulty.color}
                  strokeWidth="7"
                  strokeLinecap="round"
                  pathLength="100"
                  strokeDasharray={
                    animated
                      ? `${visibleLength} ${100 - visibleLength}`
                      : "0 100"
                  }
                  strokeDashoffset={-difficulty.offset}
                  style={{
                    transition:
                      "stroke-dasharray 900ms cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: `${index * 140}ms`,
                  }}
                />
              );
            })}
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-semibold tabular-nums text-neutral-100">
              {totalSolved.toLocaleString()}
            </span>

            <span className="mt-0.5 text-xs text-neutral-500">
              / {totalProblems.toLocaleString()}
            </span>

            <span className="mt-1 text-xs text-neutral-600">Solved</span>
          </div>
        </div>

        <div className="w-full max-w-[220px] space-y-2">
          {difficulties.map((difficulty) => {
            const completion = difficulty.total
              ? (difficulty.solved / difficulty.total) * 100
              : 0;

            return (
              <div
                key={difficulty.label}
                className="group/item rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-neutral-900/60"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full transition-transform duration-200 group-hover/item:scale-125"
                      style={{
                        backgroundColor: difficulty.color,
                      }}
                    />

                    <span className="text-sm text-neutral-400">
                      {difficulty.label}
                    </span>
                  </div>

                  <div className="text-sm tabular-nums">
                    <span className="font-medium text-neutral-200">
                      {difficulty.solved.toLocaleString()}
                    </span>

                    <span className="text-neutral-600">
                      {" "}
                      / {difficulty.total.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="mt-2 h-1 overflow-hidden rounded-full bg-neutral-900">
                  <div
                    className="h-full rounded-full transition-[width] duration-1000 ease-out"
                    style={{
                      backgroundColor: difficulty.color,
                      width: animated ? `${Math.min(completion, 100)}%` : "0%",
                      transitionDelay: "300ms",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SolvedBreakdown;
