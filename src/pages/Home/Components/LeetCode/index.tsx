import { useState } from "react";
import LeetCodeHeatmap from "./Heatmap";
import LeetCodeStats from "./Stats";
import useLeetCodeActivity from "../../../../hooks/useLeetCodeActivity";
import RecentSubmissions from "./RecentSubmissions";
import SolvedBreakdown from "./SolvedBreakdown";

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
      <div className="mb-6 flex items-center justify-between">
        <div className="max-w-xl">
          <span className="text-sm text-text-300">06</span>

          <h3 className="mt-5 text-xl font-semibold text-text-200 md:text-2xl">
            Problem solving
          </h3>

          <p className="mt-3 leading-relaxed text-text-300">
            Consistent algorithmic problem solving across data structures,
            algorithms, and competitive programming.
          </p>
        </div>

        {data.ranking && (
          <a
            href={`https://leetcode.com/u/${data.username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-700 hover:bg-neutral-900"
          >
            <span className="text-xs text-neutral-500">Rank</span>

            <span className="text-sm font-semibold text-neutral-200">
              #{data.ranking.toLocaleString()}
            </span>

            <span className="text-neutral-600 transition-transform duration-300 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        )}
      </div>

      <SolvedBreakdown
        easy={data.stats.easySolved}
        medium={data.stats.mediumSolved}
        hard={data.stats.hardSolved}
      />

      <LeetCodeHeatmap
        submissions={submissions}
        selectedYear={selectedYear}
        years={years}
        loading={loading}
        onYearChange={setSelectedYear}
      />
      <RecentSubmissions submissions={data.recentSubmissions ?? []} />
    </div>
  );
};

export default LeetCodeActivity;
