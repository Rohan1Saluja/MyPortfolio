export interface Submission {
  timestamp: number;
  date: string;
  count: number;
}

export interface RecentSubmission {
  id: string;
  title: string;
  titleSlug: string;
  timestamp: string;
}

export interface LeetCodeBadge {
  id: string;
  name: string;
  displayName: string;
  icon: string;
  creationDate: string;
}

export interface LeetCodeStats {
  totalSolved: number;
  totalProblems: number;

  easySolved: number;
  totalEasy: number;

  mediumSolved: number;
  totalMedium: number;

  hardSolved: number;
  totalHard: number;

  totalSubmissions: number;
  streak: number;
  totalActiveDays: number;
}

export interface LeetCodeProfile {
  username: string;
  ranking: number | null;
  badges: LeetCodeBadge[];
  recentSubmissions: RecentSubmission[];
  stats: LeetCodeStats;
  activeYears: number[];
  submissions: Submission[];
}
