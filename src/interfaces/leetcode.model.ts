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

export interface LeetCodeData {
  username: string;
  stats: LeetCodeStats;
  activeYears: number[];
  submissions: Submission[];
}
