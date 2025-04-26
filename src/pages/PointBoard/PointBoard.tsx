import { Button } from "@mui/material";
import React from "react";

interface PointModel {
  x: number;
  y: number;
}

const PointBoard = () => {
  const [points, setPoints] = React.useState([] as PointModel[]);
  const [popped, setPopped] = React.useState([] as PointModel[]);

  const handlePointClick = (event: React.MouseEvent) => {
    const { nativeEvent } = event;
    setPoints((prevState) => [
      ...prevState,
      { x: nativeEvent.offsetX - 5, y: nativeEvent.offsetY - 1 },
    ]);
  };

  const handleUndo = () => {
    const newPoints = [...points];
    const poppedPoint = newPoints.pop();
    if (!poppedPoint) return;
    setPopped((prevState) => [...prevState, poppedPoint]);
    setPoints(newPoints);
  };

  const handleRedo = () => {
    const newPopped = [...popped];
    const prevPoint = newPopped.pop();
    if (!prevPoint) return;
    setPoints((prevState) => [...prevState, prevPoint]);
    setPopped(newPopped);
  };

  return (
    <section className="p-3">
      <div
        className="flex flex-col items-center gap-5 bg-gray-200 rounded-xl p-3 mt-4 min-h-[48dvh]
    text-gray-700 h-[75dvh]"
      >
        <h3 className="text-xl font-semibold">Point Board</h3>
        <div className="relative w-2/3 h-2/3 bg-gray-900/70 shadow-md rounded-lg">
          <div className="flex items-center justify-end gap-2 m-2">
            <Button
              variant="contained"
              className="!bg-gray-700 min-w-28 px-4"
              onClick={handleUndo}
              disabled={points.length === 0}
            >
              Undo
            </Button>
            <Button
              variant="contained"
              className="!bg-gray-700 min-w-28 px-4"
              onClick={handleRedo}
              disabled={popped.length === 0}
            >
              Redo
            </Button>
          </div>
          <div
            className="relative w-full h-full mt-2 hover:cursor-pointer"
            onClick={handlePointClick}
          >
            {points?.map((point: PointModel, index: number) => (
              <div
                key={`${point.x}-${index}`}
                className="absolute w-2 h-2 border border-amber-300 rounded-full"
                style={{ top: point.y, left: point.x }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PointBoard;
