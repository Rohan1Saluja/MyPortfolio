import { useState } from "react";
import LeetCodeHeatmap from "./Heatmap";
import useLeetCodeActivity from "../../../../hooks/useLeetCodeActivity";
import RecentSubmissions from "./RecentSubmissions";
import SolvedBreakdown from "./SolvedBreakdown";
import Badges from "./Badges";
import Stats from "./Stats";
import { capabilities } from "../../utils";

const LeetCodeActivity: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const [selectedYear, setSelectedYear] = useState(currentYear);

  const { data, loading, error } = useLeetCodeActivity(selectedYear);

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

  return (
    <div className="border-x border-b border-secondary-500/20 p-7 md:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xl">
          <span className="text-sm text-text-300">
            {String(capabilities.length + 1).padStart(2, "0")}
          </span>

          <h3 className="mt-4 text-xl font-semibold text-text-200 md:mt-5 md:text-2xl">
            Problem solving
          </h3>

          <p className="mt-3 max-w-lg text-sm leading-relaxed text-text-300 sm:text-base">
            Consistent algorithmic problem solving across data structures,
            algorithms, and competitive programming.
          </p>
        </div>

        {data.ranking && (
          <a
            href={`https://leetcode.com/u/${data.username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-fit shrink-0 items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/50 px-3.5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-700 hover:bg-neutral-900/70"
          >
            <span className="text-xs text-neutral-600">Rank</span>

            <span className="text-sm font-medium tabular-nums text-neutral-300">
              #{data.ranking.toLocaleString()}
            </span>

            <span className="text-xs text-neutral-600 transition-transform duration-200 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        )}
      </div>

      <Stats stats={data.stats} year={selectedYear} />

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <SolvedBreakdown
          totalSolved={data.stats.totalSolved}
          totalProblems={data.stats.totalProblems}
          easySolved={data.stats.easySolved}
          totalEasy={data.stats.totalEasy}
          mediumSolved={data.stats.mediumSolved}
          totalMedium={data.stats.totalMedium}
          hardSolved={data.stats.hardSolved}
          totalHard={data.stats.totalHard}
        />

        <Badges badges={data.badges ?? []} />
      </div>

      <LeetCodeHeatmap
        submissions={data.submissions}
        selectedYear={selectedYear}
        years={data.activeYears}
        loading={loading}
        onYearChange={setSelectedYear}
      />

      <RecentSubmissions submissions={data.recentSubmissions ?? []} />
    </div>
  );
};

export default LeetCodeActivity;
