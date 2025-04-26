import React from "react";

const useApiCallhook = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  const fetch = React.useCallback(
    async (apiCallback: any, _arguments: any[]) => {
      setLoading(true);
      try {
        const response = await apiCallback(..._arguments);
        setData(response);
      } catch (err: any) {
        setError(err.response);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    },
    []
  );

  return { data, loading, error, fetch };
};

export default useApiCallhook;
