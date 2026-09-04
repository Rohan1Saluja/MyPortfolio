import { useMemo } from "react";
import YearToggle from "./YearToggle";
import { Submission } from "../../../../interfaces/leetcode.model";
import {
  createCalendarDays,
  formatDate,
  getIntensityClass,
} from "../../../../utils/dateAndTime";

interface LeetCodeHeatmapProps {
  submissions: Submission[];
  selectedYear: number;
  years: number[];
  loading: boolean;
  onYearChange: (year: number) => void;
}

const LeetCodeHeatmap: React.FC<LeetCodeHeatmapProps> = ({
  submissions,
  selectedYear,
  years,
  loading,
  onYearChange,
}) => {
  const calendarDays = useMemo(
    () => createCalendarDays(submissions, selectedYear),
    [submissions, selectedYear],
  );

  const weekCount = Math.ceil(calendarDays.length / 7);

  return (
    <div className="mt-8">
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <YearToggle
          years={years}
          selectedYear={selectedYear}
          loading={loading}
          onChange={onYearChange}
        />

        <Legend />
      </div>

      <div
        className={`
          transition-opacity
          duration-200
          ${loading ? "opacity-40" : "opacity-100"}
        `}
      >
        <div className="overflow-x-auto pb-2">
          <div className="flex w-full min-w-[760px] gap-2">
            <WeekdayLabels />

            <div
              className="grid min-w-0 flex-1 gap-1"
              style={{
                gridTemplateRows: "repeat(7, minmax(0, 1fr))",
                gridTemplateColumns: `repeat(${weekCount}, minmax(10px, 1fr))`,
                gridAutoFlow: "column",
              }}
            >
              {calendarDays.map((day, index) => {
                if (!day.visible) {
                  return (
                    <span
                      key={`empty-${index}`}
                      className="aspect-square w-full"
                    />
                  );
                }

                return (
                  <span
                    key={day.dateString}
                    title={`${formatDate(day.date)} — ${day.count} ${
                      day.count === 1 ? "submission" : "submissions"
                    }`}
                    className={`
                        aspect-square
                        w-full
                        rounded-[2px]
                        transition-transform
                        duration-150
                        hover:z-10
                        hover:scale-125
                        ${getIntensityClass(day.count)}
                      `}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WeekdayLabels = () => {
  return (
    <div className="grid w-7 shrink-0 grid-rows-7 gap-1 text-[10px] leading-none text-text-300">
      <span />
      <span className="flex items-center">Mon</span>
      <span />
      <span className="flex items-center">Wed</span>
      <span />
      <span className="flex items-center">Fri</span>
      <span />
    </div>
  );
};

const Legend = () => {
  return (
    <div className="ml-auto flex shrink-0 items-center gap-1.5 text-xs text-text-300">
      <span>Less</span>

      {[0, 1, 2, 4, 7].map((count) => (
        <span
          key={count}
          className={`h-2.5 w-2.5 rounded-[2px] ${getIntensityClass(count)}`}
        />
      ))}

      <span>More</span>
    </div>
  );
};

export default LeetCodeHeatmap;
