import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface UseScrollFadeOptions {
  /** Scroll offset where fade-in starts (0 = top of container entering viewport) */
  fadeInStart?: number;
  /** Scroll offset where fade-in completes */
  fadeInEnd?: number;
  /** Scroll offset where fade-out starts */
  fadeOutStart?: number;
  /** Scroll offset where fade-out completes (1 = bottom of container leaving viewport) */
  fadeOutEnd?: number;
}

/**
 * Custom hook that produces a scroll-linked opacity value.
 * Attach `ref` to a tall scroll container (e.g. 200vh).
 * Use `opacity` as a framer-motion MotionValue on the sticky inner element.
 */
export const useScrollFade = (options: UseScrollFadeOptions = {}): {
  ref: React.RefObject<HTMLDivElement>;
  scrollYProgress: MotionValue<number>;
  opacity: MotionValue<number>;
} => {
  const {
    fadeInStart = 0,
    fadeInEnd = 0.15,
    fadeOutStart = 0.6,
    fadeOutEnd = 0.85,
  } = options;

  const ref = useRef<HTMLDivElement>(null!);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    [1, 1, 1, 0]
  );

  return { ref, scrollYProgress, opacity };
};
