import useReplayAnimation from "../../../../../hooks/useReplayAnimation";
import { ANIMATION_DURATION, RING_GAP } from "./constants";
import { Difficulty } from "./types";

interface SolvedProgressRingProps {
  totalSolved: number;
  totalProblems: number;
  difficulties: Difficulty[];
  animationKey: number;
  shouldAnimate: boolean;
}

const ProgressRing: React.FC<SolvedProgressRingProps> = ({
  totalSolved,
  totalProblems,
  difficulties,
  animationKey,
  shouldAnimate,
}) => {
  const animated = useReplayAnimation({
    animationKey,
    shouldAnimate,
  });

  return (
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
          const visibleLength = Math.max(difficulty.percentage - RING_GAP, 0);

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
                animated ? `${visibleLength} ${100 - visibleLength}` : "0 100"
              }
              strokeDashoffset={-difficulty.offset}
              style={{
                transitionProperty: animated ? "stroke-dasharray" : "none",
                transitionDuration: animated
                  ? `${ANIMATION_DURATION}ms`
                  : "0ms",
                transitionTimingFunction: "ease-in-out",
                transitionDelay: animated ? `${index * 140}ms` : "0ms",
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
  );
};

export default ProgressRing;
