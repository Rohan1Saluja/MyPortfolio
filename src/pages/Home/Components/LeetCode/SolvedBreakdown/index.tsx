import { useEffect, useMemo, useRef, useState } from "react";

import DifficultyRow from "./DifficultyRow";
import ProgressRing from "./ProgressRing";

import { DIFFICULTY_COLORS } from "./constants";
import { Difficulty, SolvedBreakdownProps } from "./types";

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

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const difficulties = useMemo<Difficulty[]>(() => {
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
        color: DIFFICULTY_COLORS.easy,
      },
      {
        label: "Medium",
        solved: mediumSolved,
        total: totalMedium,
        percentage: mediumPercent,
        offset: easyPercent,
        color: DIFFICULTY_COLORS.medium,
      },
      {
        label: "Hard",
        solved: hardSolved,
        total: totalHard,
        percentage: hardPercent,
        offset: easyPercent + mediumPercent,
        color: DIFFICULTY_COLORS.hard,
      },
    ];
  }, [easySolved, totalEasy, mediumSolved, totalMedium, hardSolved, totalHard]);

  const replayAnimation = () => {
    if (!shouldAnimate) {
      return;
    }

    setAnimationKey((previous) => previous + 1);
  };

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setShouldAnimate(true);
        setAnimationKey((previous) => previous + 1);

        observer.disconnect();
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={replayAnimation}
      className="group cursor-pointer rounded-2xl border border-neutral-800/80 bg-neutral-950/40 p-5 transition-all duration-300 hover:border-neutral-700"
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
        <ProgressRing
          totalSolved={totalSolved}
          totalProblems={totalProblems}
          difficulties={difficulties}
          animationKey={animationKey}
          shouldAnimate={shouldAnimate}
        />

        <div className="w-full max-w-[220px] space-y-2">
          {difficulties.map((difficulty) => (
            <DifficultyRow
              key={difficulty.label}
              difficulty={difficulty}
              animationKey={animationKey}
              shouldAnimate={shouldAnimate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolvedBreakdown;
