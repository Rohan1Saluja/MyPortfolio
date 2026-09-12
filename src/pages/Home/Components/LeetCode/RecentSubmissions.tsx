import { RecentSubmission } from "../../../../interfaces/leetcode.model";

interface RecentSubmissionsProps {
  submissions: RecentSubmission[];
}

const formatRelativeTime = (timestamp: string) => {
  const submittedAt = Number(timestamp) * 1000;
  const difference = Date.now() - submittedAt;

  const minutes = Math.floor(difference / 60_000);
  const hours = Math.floor(difference / 3_600_000);
  const days = Math.floor(difference / 86_400_000);

  if (minutes < 1) {
    return "just now";
  }

  if (minutes < 60) {
    return `${minutes}m ago`;
  }

  if (hours < 24) {
    return `${hours}h ago`;
  }

  return `${days}d ago`;
};

const RecentSubmissions: React.FC<RecentSubmissionsProps> = ({
  submissions,
}) => {
  if (!submissions.length) {
    return null;
  }

  return (
    <div className="mt-8">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-neutral-200">
          Recent Submissions
        </h3>

        <p className="mt-1 text-xs text-neutral-500">
          Recently accepted problems
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-950/40">
        {submissions.map((submission) => (
          <a
            key={submission.id}
            href={`https://leetcode.com/problems/${submission.titleSlug}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 border-b border-neutral-800/70 px-4 py-3.5 transition-all duration-200 last:border-b-0 hover:bg-neutral-900/60 sm:px-5"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-neutral-300 transition-colors duration-200 group-hover:text-neutral-100">
                {submission.title}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <span className="text-xs tabular-nums text-neutral-600">
                {formatRelativeTime(submission.timestamp)}
              </span>

              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="text-neutral-600 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-300"
              >
                <path
                  d="M7 17L17 7M9 7H17V15"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentSubmissions;
