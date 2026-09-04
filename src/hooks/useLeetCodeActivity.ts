import axios from "axios";
import { useEffect, useState } from "react";
import { LeetCodeData, Submission } from "../interfaces/leetcode.model";
import { getLeetCodeActivity } from "../api/leetcode";

interface UseLeetCodeActivityResult {
  data: LeetCodeData | null;
  submissions: Submission[];
  loading: boolean;
  error: boolean;
}

const useLeetCodeActivity = (
  selectedYear: number,
): UseLeetCodeActivityResult => {
  const currentYear = new Date().getFullYear();

  const [data, setData] = useState<LeetCodeData | null>(null);

  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchActivity = async () => {
      try {
        setLoading(true);
        setError(false);

        const currentRequest = getLeetCodeActivity(
          selectedYear,
          controller.signal,
        );

        /*
         * Current year uses a rolling 365-day heatmap,
         * so fetch the previous year as well.
         */
        const previousRequest =
          selectedYear === currentYear
            ? getLeetCodeActivity(selectedYear - 1, controller.signal)
            : Promise.resolve(null);

        const [selectedData, previousData] = await Promise.all([
          currentRequest,
          previousRequest,
        ]);

        setData(selectedData);

        setSubmissions(
          previousData
            ? [...previousData.submissions, ...selectedData.submissions]
            : selectedData.submissions,
        );
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }

        console.error("Failed to load LeetCode activity", error);

        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();

    return () => controller.abort();
  }, [selectedYear, currentYear]);

  return {
    data,
    submissions,
    loading,
    error,
  };
};

export default useLeetCodeActivity;
