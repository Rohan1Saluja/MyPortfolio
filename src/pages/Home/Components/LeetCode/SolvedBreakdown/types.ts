export interface SolvedBreakdownProps {
  totalSolved: number;
  totalProblems: number;

  easySolved: number;
  totalEasy: number;

  mediumSolved: number;
  totalMedium: number;

  hardSolved: number;
  totalHard: number;
}

export interface Difficulty {
  label: string;
  solved: number;
  total: number;
  percentage: number;
  offset: number;
  color: string;
}
