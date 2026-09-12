import { ExternalLink } from "lucide-react";
import { RecentSubmission } from "../../../../interfaces/leetcode.model";

interface RecentSubmissionsProps {
  submissions: RecentSubmission[];
}

const getRelativeTime = (timestamp: string) => {
  const submittedAt = Number(timestamp) * 1000;
  const difference = Date.now() - submittedAt;

  const minutes = Math.floor(difference / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

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
      <h3 className="mb-4 text-lg font-semibold">Recent Submissions</h3>

      <div className="overflow-hidden rounded-xl border border-neutral-800">
        {submissions.map((submission) => (
          <a
            key={submission.id}
            href={`https://leetcode.com/problems/${submission.titleSlug}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 border-b border-neutral-800 px-4 py-3 transition-colors last:border-b-0 hover:bg-neutral-900"
          >
            <span className="min-w-0 truncate text-sm font-medium">
              {submission.title}
            </span>

            <div className="flex shrink-0 items-center gap-3">
              <span className="text-xs text-neutral-500">
                {getRelativeTime(submission.timestamp)}
              </span>

              <ExternalLink
                size={14}
                className="text-neutral-500 transition-colors group-hover:text-white"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentSubmissions;
