import { useState } from "react";
import useLeetCodeActivity from "../../../../hooks/useLeetCodeActivity";
import Badges from "./Badges";
import LeetCodeHeatmap from "./Heatmap";
import RecentSubmissions from "./RecentSubmissions";
import SolvedBreakdown from "./SolvedBreakdown";
import Stats from "./Stats";

const LeetCodeActivity: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const { data, submissions, loading, error } =
    useLeetCodeActivity(selectedYear);

  if (loading && !data) {
    return (
      <div className="border border-border bg-surface p-5 sm:p-7">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
          <div>
            <p className="eyebrow text-primary">Live profile</p>
            <p className="mt-2 text-sm text-ink-muted">
              Loading LeetCode activity…
            </p>
          </div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-24 animate-pulse bg-page" />
          ))}
        </div>

        <div className="mt-6 h-52 animate-pulse bg-page" />
      </div>
    );
  }

  if ((error && !data) || !data) {
    return (
      <div className="border border-border bg-surface p-6 sm:p-8">
        <p className="eyebrow text-primary">Live profile</p>
        <h4 className="mt-4 text-xl font-medium tracking-tight text-ink sm:text-2xl">
          LeetCode activity is temporarily unavailable.
        </h4>
        <p className="mt-3 max-w-2xl leading-7 text-ink-secondary">
          This section normally shows my live problem-solving stats, yearly
          activity heatmap, solved-difficulty breakdown, badges, and recent
          accepted submissions. It stays visible even if the upstream data
          request fails.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-border bg-surface p-5 sm:p-7 lg:p-8">
      <div className="flex flex-col gap-5 border-b border-border pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow text-primary">Live LeetCode profile</span>
            <span className="h-1 w-1 rounded-full bg-ink-muted" />
            <span className="text-xs text-ink-muted">@{data.username}</span>
          </div>

          <h4 className="mt-4 text-2xl font-medium tracking-[-0.03em] text-ink sm:text-3xl">
            Consistency, not a one-off score.
          </h4>

          <p className="mt-3 max-w-2xl leading-7 text-ink-secondary">
            A live view of algorithmic practice across problem solving,
            submissions, active days, streaks, badges, and accepted solutions.
          </p>
        </div>

        <a
          href={`https://leetcode.com/u/${data.username}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-fit shrink-0 items-center gap-3 border border-border-strong px-4 py-2.5 text-sm text-ink-secondary transition-colors hover:border-primary hover:text-primary"
        >
          <span>View profile</span>
          {data.ranking && (
            <span className="border-l border-border pl-3 font-medium tabular-nums text-ink">
              #{data.ranking.toLocaleString()}
            </span>
          )}
          <span
            aria-hidden="true"
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            ↗
          </span>
        </a>
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

      <div className="mt-8 border-t border-border pt-7">
        <div className="mb-4">
          <h5 className="text-sm font-medium text-ink">Submission activity</h5>
          <p className="mt-1 text-xs text-ink-muted">
            Year-by-year contribution history
          </p>
        </div>

        <LeetCodeHeatmap
          submissions={submissions}
          selectedYear={selectedYear}
          years={data.activeYears}
          loading={loading}
          onYearChange={setSelectedYear}
        />
      </div>

      <RecentSubmissions submissions={data.recentSubmissions ?? []} />
    </div>
  );
};

export default LeetCodeActivity;
