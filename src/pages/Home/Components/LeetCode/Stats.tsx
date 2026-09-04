import type { LeetCodeStats as Stats } from "../../../../interfaces/leetcode.model";

interface LeetCodeStatsProps {
  stats: Stats;
  year: number;
}

const Stats: React.FC<LeetCodeStatsProps> = ({ stats, year }) => {
  return (
    <>
      <div className="mt-8 grid grid-cols-2 border-y border-secondary-500/20 lg:grid-cols-4">
        <Stat value={stats.totalSolved} label="Problems solved" />

        <Stat
          value={stats.totalSubmissions}
          label={`Submissions in ${year}`}
          bordered
        />

        <Stat
          value={stats.totalActiveDays}
          label={`Active days in ${year}`}
          bordered
        />

        <Stat value={stats.streak} label="Day streak" bordered />
      </div>

      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
        <DifficultyStat label="Easy" count={stats.easySolved} />

        <DifficultyStat label="Medium" count={stats.mediumSolved} />

        <DifficultyStat label="Hard" count={stats.hardSolved} />
      </div>
    </>
  );
};

interface StatProps {
  value: number;
  label: string;
  bordered?: boolean;
}

const Stat: React.FC<StatProps> = ({ value, label, bordered }) => {
  return (
    <div
      className={`
        py-5
        md:py-6
        ${bordered ? "pl-5 lg:border-l lg:border-secondary-500/20 lg:pl-8" : ""}
      `}
    >
      <p className="text-2xl font-semibold tracking-tight text-text-200 md:text-3xl">
        {value}
      </p>

      <p className="mt-1 text-sm text-text-300">{label}</p>
    </div>
  );
};

interface DifficultyStatProps {
  label: string;
  count: number;
}

const DifficultyStat: React.FC<DifficultyStatProps> = ({ label, count }) => {
  return (
    <p className="text-sm">
      <span className="text-text-300">{label}</span>

      <span className="ml-2 font-medium text-text-200">{count}</span>
    </p>
  );
};

export default Stats;
