import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delayMs?: number;
  speedMs?: number;
}

const TypewriterText = ({
  text,
  className = "",
  delayMs = 120,
  speedMs = 42,
}: TypewriterTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [inView, setInView] = useState(false);
  const [displayedText, setDisplayedText] = useState(
    shouldReduceMotion ? text : "",
  );

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayedText(text);
      setInView(true);
      return;
    }

    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setInView(true);
        observer.disconnect();
      },
      { threshold: 0.6 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [shouldReduceMotion, text]);

  useEffect(() => {
    if (!inView || shouldReduceMotion) {
      return;
    }

    let characterIndex = 0;
    let intervalId: number | undefined;

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        characterIndex += 1;
        setDisplayedText(text.slice(0, characterIndex));

        if (characterIndex >= text.length && intervalId !== undefined) {
          window.clearInterval(intervalId);
        }
      }, speedMs);
    }, delayMs);

    return () => {
      window.clearTimeout(timeoutId);

      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [delayMs, inView, shouldReduceMotion, speedMs, text]);

  const typing = inView && displayedText.length < text.length;

  return (
    <span ref={ref} className={`inline-flex items-center ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {displayedText}
        {!shouldReduceMotion && (
          <span
            className={`ml-0.5 inline-block h-[0.85em] w-px translate-y-[0.08em] bg-current ${
              typing ? "opacity-100" : "animate-caret-blink"
            }`}
          />
        )}
      </span>
    </span>
  );
};

export default TypewriterText;
