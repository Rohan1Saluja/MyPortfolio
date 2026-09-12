import useReplayAnimation from "../../../../../hooks/useReplayAnimation";
import { ANIMATION_DURATION } from "./constants";
import { Difficulty } from "./types";

interface DifficultyRowProps {
  difficulty: Difficulty;
  animationKey: number;
  shouldAnimate: boolean;
}

const DifficultyRow: React.FC<DifficultyRowProps> = ({
  difficulty,
  animationKey,
  shouldAnimate,
}) => {
  const animated = useReplayAnimation({
    animationKey,
    shouldAnimate,
  });

  const completion = difficulty.total
    ? (difficulty.solved / difficulty.total) * 100
    : 0;

  return (
    <div className="group/item rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-neutral-900/60">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full transition-transform duration-200 group-hover/item:scale-125"
            style={{
              backgroundColor: difficulty.color,
            }}
          />

          <span className="text-sm text-neutral-400">{difficulty.label}</span>
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
          className="h-full rounded-full"
          style={{
            backgroundColor: difficulty.color,
            width: animated ? `${Math.min(completion, 100)}%` : "0%",
            transitionProperty: animated ? "width" : "none",
            transitionDuration: animated ? `${ANIMATION_DURATION}ms` : "0ms",
            transitionTimingFunction: "ease-in-out",
            transitionDelay: animated ? "300ms" : "0ms",
          }}
        />
      </div>
    </div>
  );
};

export default DifficultyRow;
