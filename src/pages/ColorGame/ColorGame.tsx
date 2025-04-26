import React from "react";
import { generateRandomColor } from "./utils";

enum Result {
  CORRECT,
  WRONG,
  UNDEF,
}

const ColorGame = () => {
  const [color, setColor] = React.useState("");
  const [guessOptions, setGuessOptions] = React.useState<string[]>([]);
  const [result, setResult] = React.useState<Result>();

  const pickColor = () => {
    const actualColor = generateRandomColor();
    setColor(actualColor);
    setGuessOptions(
      [actualColor, generateRandomColor(), generateRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  const handleGuess = (option: string) => {
    if (option === color) {
      setResult(Result.CORRECT);
      setTimeout(() => {
        setResult(Result.UNDEF);
      }, 700);
      setTimeout(() => {
        pickColor();
      }, 800);
    } else {
      setResult(Result.WRONG);
      setTimeout(() => {
        setResult(Result.UNDEF);
      }, 500);
    }
  };

  React.useEffect(() => {
    pickColor();
  }, []);

  return (
    <section className="p-3">
      <div className="flex flex-col items-center gap-5 bg-gray-200 rounded-xl p-3 mt-4 min-h-[48dvh] text-gray-700">
        <h3 className="text-xl font-semibold">Guess The Color</h3>
        <div
          className="h-28 w-28 rounded-xl shadow-md"
          style={{ background: color }}
        />
        <div className="flex items-center gap-2">
          {guessOptions?.map((option: string, index: number) => (
            <button
              key={`${option}-${index}`}
              className="bg-gray-400 px-3 py-1 rounded-lg shadow-md hover:cursor-pointer hover:bg-gray-300"
              onClick={() => handleGuess(option)}
            >
              {option}
            </button>
          ))}
        </div>
        {result === Result.CORRECT && (
          <p className="text-green-500">Correct! </p>
        )}
        {result === Result.WRONG && (
          <p className="text-red-500">Wrong Answer </p>
        )}
      </div>
    </section>
  );
};

export default ColorGame;
