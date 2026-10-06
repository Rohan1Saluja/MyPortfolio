import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
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
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const sortedBadges = [...badges].sort(
    (a, b) =>
      new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime(),
  );

  const syncScrollState = () => {
    const element = scrollerRef.current;

    if (!element) {
      return;
    }

    const maxScrollLeft = element.scrollWidth - element.clientWidth;

    setCanScrollLeft(element.scrollLeft > 4);
    setCanScrollRight(element.scrollLeft < maxScrollLeft - 4);
  };

  useEffect(() => {
    const element = scrollerRef.current;

    if (!element) {
      return;
    }

    syncScrollState();

    element.addEventListener("scroll", syncScrollState, { passive: true });
    window.addEventListener("resize", syncScrollState);

    return () => {
      element.removeEventListener("scroll", syncScrollState);
      window.removeEventListener("resize", syncScrollState);
    };
  }, [badges.length]);

  const scrollByCard = (direction: "left" | "right") => {
    const element = scrollerRef.current;

    if (!element) {
      return;
    }

    const distance = Math.max(element.clientWidth * 0.72, 220);

    element.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  };

  return (
    <div className="ambient-panel rounded-2xl border border-neutral-800/80 p-5 transition-all duration-300 hover:border-neutral-700">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-medium text-neutral-200">Badges</h3>

          <p className="mt-1 text-xs text-neutral-500">Earned on LeetCode</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-neutral-900/80 px-2.5 py-1 text-xs text-neutral-500">
            {badges.length}
          </span>

          {sortedBadges.length > 0 && (
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => scrollByCard("left")}
                disabled={!canScrollLeft}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950/70 text-neutral-400 transition-all hover:border-neutral-700 hover:text-neutral-100 disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Scroll badges left"
              >
                <FiChevronLeft />
              </button>

              <button
                type="button"
                onClick={() => scrollByCard("right")}
                disabled={!canScrollRight}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950/70 text-neutral-400 transition-all hover:border-neutral-700 hover:text-neutral-100 disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Scroll badges right"
              >
                <FiChevronRight />
              </button>
            </div>
          )}
        </div>
      </div>

      {sortedBadges.length ? (
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {sortedBadges.map((badge, index) => (
            <div
              key={badge.id}
              className="group flex min-h-[164px] w-[132px] shrink-0 snap-start flex-col items-center justify-center rounded-xl border border-neutral-800/60 bg-neutral-900/35 px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-neutral-900/70 sm:w-[144px]"
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
                <span className="mt-2 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-primary/80">
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
