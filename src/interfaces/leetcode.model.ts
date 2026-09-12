export interface RecentSubmission {
  id: string;
  title: string;
  titleSlug: string;
  timestamp: string;
}

export interface Submission {
  timestamp: number;
  date: string;
  count: number;
}

export interface LeetCodeStats {
  totalSolved: number;
  totalSubmissions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  streak: number;
  totalActiveDays: number;
}

export interface LeetCodeProfile {
  username: string;
  ranking: number | null;
  recentSubmissions: RecentSubmission[];
  stats: LeetCodeStats;
  activeYears: number[];
  submissions: Submission[];
}
