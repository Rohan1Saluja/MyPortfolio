export const generateRandomColor = () => {
  const digits = ["1", "2", "3", "4", "5", "6", "A", "B", "C", "D", "E", "F"];

  const hexColor = new Array(6)
    .fill("")
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join("");

  return `#${hexColor}`;
};
