import React from "react";

interface Props {
  onSearch: any;
}

const DebouncedSearch: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim()) {
        onSearch();
      }
    }, 500);
    return () => clearTimeout(handler);
  }, [query, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default DebouncedSearch;
