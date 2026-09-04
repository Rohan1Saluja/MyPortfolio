import { Submission } from "../interfaces/leetcode.model";

export interface CalendarDay {
  date: Date;
  dateString: string;
  count: number;
  visible: boolean;
}

const getDateKey = (date: Date) => {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
};

export const createCalendarDays = (
  submissions: Submission[],
  selectedYear: number,
): CalendarDay[] => {
  const currentYear = new Date().getFullYear();

  const submissionMap = new Map(
    submissions.map((submission) => [submission.date, submission.count]),
  );

  let rangeStart: Date;
  let rangeEnd: Date;

  if (selectedYear === currentYear) {
    /*
     * Rolling 365 days:
     *
     * today - 364 days → today
     */
    rangeEnd = new Date();

    rangeEnd.setHours(0, 0, 0, 0);

    rangeStart = new Date(rangeEnd);

    rangeStart.setDate(rangeStart.getDate() - 364);
  } else {
    rangeStart = new Date(selectedYear, 0, 1);
    rangeEnd = new Date(selectedYear, 11, 31);
  }

  /*
   * Move to the Sunday before the actual range starts
   * so the grid aligns correctly.
   */
  const calendarStart = new Date(rangeStart);

  calendarStart.setDate(calendarStart.getDate() - calendarStart.getDay());

  /*
   * Move to the Saturday after the range ends
   * so the final week is complete.
   */
  const calendarEnd = new Date(rangeEnd);

  calendarEnd.setDate(calendarEnd.getDate() + (6 - calendarEnd.getDay()));

  const days: CalendarDay[] = [];

  const currentDate = new Date(calendarStart);

  while (currentDate <= calendarEnd) {
    const date = new Date(currentDate);
    const dateString = getDateKey(date);

    const visible = date >= rangeStart && date <= rangeEnd;

    days.push({
      date,
      dateString,
      visible,
      count: visible ? (submissionMap.get(dateString) ?? 0) : 0,
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return days;
};

export const getIntensityClass = (count: number) => {
  if (count === 0) {
    return "bg-secondary-500/10";
  }

  if (count === 1) {
    return "bg-primary/25";
  }

  if (count <= 3) {
    return "bg-primary/45";
  }

  if (count <= 6) {
    return "bg-primary/70";
  }

  return "bg-primary";
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
