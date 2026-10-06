import { useState } from "react";
import useLeetCodeActivity from "../../../../hooks/useLeetCodeActivity";
import { capabilities } from "../../utils";
import Badges from "./Badges";
import LeetCodeHeatmap from "./Heatmap";
import RecentSubmissions from "./RecentSubmissions";
import SolvedBreakdown from "./SolvedBreakdown";
import Stats from "./Stats";

const LeetCodeActivity: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const { data, loading, error } = useLeetCodeActivity(selectedYear);

  if (loading && !data) {
    return (
      <div className="border-y border-border py-8">
        <div className="h-40 animate-pulse bg-surface" />
      </div>
    );
  }

  if ((error && !data) || !data) {
    return null;
  }

  return (
    <div className="border-y border-border py-8 sm:py-10">
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xl">
          <span className="text-xs tabular-nums text-ink-muted">
            {String(capabilities.length + 1).padStart(2, "0")}
          </span>

          <h3 className="mt-3 text-2xl font-medium tracking-tight text-ink">
            Problem solving
          </h3>

          <p className="mt-3 max-w-lg leading-7 text-ink-secondary">
            Consistent algorithmic problem solving across data structures,
            algorithms, and competitive programming.
          </p>
        </div>

        {data.ranking && (
          <a
            href={`https://leetcode.com/u/${data.username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit shrink-0 items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-primary"
          >
            <span className="text-xs text-ink-muted">LeetCode rank</span>
            <span className="font-medium tabular-nums text-ink">
              #{data.ranking.toLocaleString()}
            </span>
            <span aria-hidden="true">↗</span>
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
