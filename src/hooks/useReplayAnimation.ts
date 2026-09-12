import { useEffect, useState } from "react";

interface UseReplayAnimationProps {
  animationKey: number;
  shouldAnimate: boolean;
}

const useReplayAnimation = ({
  animationKey,
  shouldAnimate,
}: UseReplayAnimationProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) {
      return;
    }

    setAnimated(false);

    let firstFrame = 0;
    let secondFrame = 0;

    firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        setAnimated(true);
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
    };
  }, [animationKey, shouldAnimate]);

  return animated;
};

export default useReplayAnimation;
