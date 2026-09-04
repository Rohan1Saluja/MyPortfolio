interface YearToggleProps {
  years: number[];
  selectedYear: number;
  loading: boolean;
  onChange: (year: number) => void;
}

const YearToggle: React.FC<YearToggleProps> = ({
  years,
  selectedYear,
  loading,
  onChange,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-1">
      {years.map((year) => (
        <button
          key={year}
          type="button"
          disabled={loading}
          onClick={() => onChange(year)}
          className={`
            rounded-sm
            px-2.5
            py-1
            text-xs
            transition-colors
            ${
              selectedYear === year
                ? "bg-primary text-background"
                : `
                  text-text-300
                  hover:bg-secondary-500/10
                  hover:text-text-200
                `
            }
            disabled:cursor-wait
          `}
        >
          {year}
        </button>
      ))}
    </div>
  );
};

export default YearToggle;
