import { LeetCodeBadge } from "../../../../interfaces/leetcode.model";

interface LeetCodeBadgesProps {
  badges: LeetCodeBadge[];
}

const getBadgeIcon = (icon: string) => {
  if (!icon) {
    return "";
  }

  if (icon.startsWith("http")) {
    return icon;
  }

  return `https://leetcode.com${icon}`;
};

const Badges: React.FC<LeetCodeBadgesProps> = ({ badges }) => {
  const sortedBadges = [...badges].sort(
    (a, b) =>
      new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime(),
  );

  return (
    <div className="rounded-2xl border border-neutral-800/80 bg-neutral-950/40 p-5 transition-all duration-300 hover:border-neutral-700">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-neutral-200">Badges</h3>

          <p className="mt-1 text-xs text-neutral-500">Earned on LeetCode</p>
        </div>

        <span className="rounded-full bg-neutral-900 px-2.5 py-1 text-xs text-neutral-500">
          {badges.length}
        </span>
      </div>

      {sortedBadges.length ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          {sortedBadges.map((badge, index) => (
            <div
              key={badge.id}
              className="group flex min-w-0 flex-col items-center rounded-xl border border-transparent bg-neutral-900/30 px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-neutral-800 hover:bg-neutral-900/70"
              style={{
                animationDelay: `${index * 80}ms`,
              }}
            >
              <div className="flex h-16 w-16 items-center justify-center">
                <img
                  src={getBadgeIcon(badge.icon)}
                  alt={badge.displayName || badge.name}
                  loading="lazy"
                  className="max-h-16 max-w-16 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <p className="mt-3 line-clamp-2 text-xs font-medium leading-5 text-neutral-300">
                {badge.displayName || badge.name}
              </p>

              {index === 0 && (
                <span className="mt-2 rounded-full bg-neutral-800/70 px-2 py-0.5 text-[10px] uppercase tracking-wide text-neutral-500">
                  Latest
                </span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex min-h-40 items-center justify-center text-sm text-neutral-600">
          No badges yet
        </div>
      )}
    </div>
  );
};

export default Badges;
