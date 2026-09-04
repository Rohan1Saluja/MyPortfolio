import { useState } from "react";
import LeetCodeHeatmap from "./Heatmap";
import LeetCodeStats from "./Stats";
import useLeetCodeActivity from "../../../../hooks/useLeetCodeActivity";

const LeetCodeActivity: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const [selectedYear, setSelectedYear] = useState(currentYear);

  const { data, submissions, loading, error } =
    useLeetCodeActivity(selectedYear);

  if (loading && !data) {
    return (
      <div className="border-x border-b border-secondary-500/20 p-7 md:p-8">
        <div className="h-40 animate-pulse rounded-sm bg-secondary-500/5" />
      </div>
    );
  }

  if (error && !data) {
    return null;
  }

  if (!data) {
    return null;
  }

  const years = [...data.activeYears].sort((a, b) => b - a);

  return (
    <div className="border-x border-b border-secondary-500/20 p-7 md:p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <span className="text-sm text-text-300">05</span>

          <h3 className="mt-5 text-xl font-semibold text-text-200 md:text-2xl">
            Problem solving
          </h3>

          <p className="mt-3 leading-relaxed text-text-300">
            Consistent algorithmic problem solving across data structures,
            algorithms, and competitive programming.
          </p>
        </div>

        <a
          href={`https://leetcode.com/u/${data.username}/`}
          target="_blank"
          rel="noreferrer"
          className="w-fit text-sm text-text-300 transition-colors hover:text-primary"
        >
          LeetCode profile ↗
        </a>
      </div>

      <LeetCodeStats stats={data.stats} year={selectedYear} />

      <LeetCodeHeatmap
        submissions={submissions}
        selectedYear={selectedYear}
        years={years}
        loading={loading}
        onYearChange={setSelectedYear}
      />
    </div>
  );
};

export default LeetCodeActivity;
