import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export const ProblemBanSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Text moves: below viewport → center → holds → continues up and out
  const y = useTransform(
    scrollYProgress,
    [0.0, 0.25, 0.5, 0.75],
    ["80vh", "0vh", "0vh", "-80vh"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0.05, 0.2, 0.55, 0.7],
    [0, 1, 1, 0]
  );

  // Scroll indicator visible only while text is pinned in center
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.42, 0.48],
    [0, 0.6, 0.6, 0]
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setVisible(v > 0.02 && v < 0.78);
  });

  return (
    <>
      {visible && (
        <>
          <motion.div
            className="fixed inset-0 z-30 flex items-center justify-center px-6 pointer-events-none"
            style={{ y, opacity }}
          >
            <p className="[font-family:'Hind',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl text-center leading-tight tracking-tight max-w-5xl">
              In 2025, the U.S. government restricted Chinese-made drones — cutting off supply to an entire industry.
            </p>
          </motion.div>

          {/* Scroll indicator — fixed at bottom, visible while text is pinned */}
          <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
            style={{ opacity: scrollIndicatorOpacity }}
          >
            <span className="[font-family:'Hind',Helvetica] text-white/60 text-sm tracking-widest uppercase">
              Scroll
            </span>
            <motion.div
              className="w-px h-8 bg-white/40"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </>
      )}

      <div ref={containerRef} className="relative h-[200vh] bg-[#0a0a0a]" />
    </>
  );
};
