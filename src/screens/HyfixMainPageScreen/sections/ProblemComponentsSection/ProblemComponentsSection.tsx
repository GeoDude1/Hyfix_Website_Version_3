import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const slideWords = ["Batteries.", "Motors.", "Gimbals."];
const textWords = ["Flight controllers.", "GPS.", "Radios."];

export const ProblemComponentsSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Each word slides in from right one at a time, then holds
  // Batteries: 0.10 → 0.25
  const bat_x = useTransform(scrollYProgress, [0.10, 0.25], ["100vw", "0vw"]);
  const bat_op = useTransform(scrollYProgress, [0.10, 0.18, 0.78, 0.88], [0, 1, 1, 0]);

  // Motors: 0.25 → 0.40
  const mot_x = useTransform(scrollYProgress, [0.25, 0.40], ["100vw", "0vw"]);
  const mot_op = useTransform(scrollYProgress, [0.25, 0.33, 0.78, 0.88], [0, 1, 1, 0]);

  // Gimbals: 0.40 → 0.55
  const gim_x = useTransform(scrollYProgress, [0.40, 0.55], ["100vw", "0vw"]);
  const gim_op = useTransform(scrollYProgress, [0.40, 0.48, 0.78, 0.88], [0, 1, 1, 0]);

  const itemAnimations = [
    { x: bat_x, opacity: bat_op },
    { x: mot_x, opacity: mot_op },
    { x: gim_x, opacity: gim_op },
  ];

  // Text items fade in after all slide words are placed
  const textOpacity = useTransform(scrollYProgress, [0.57, 0.65, 0.78, 0.88], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.57, 0.65], [30, 0]);

  // Closing line
  const closingOpacity = useTransform(scrollYProgress, [0.67, 0.75, 0.78, 0.88], [0, 1, 1, 0]);
  const closingY = useTransform(scrollYProgress, [0.67, 0.75], [20, 0]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setVisible(v > 0.05 && v < 0.92);
  });

  return (
    <>
      {visible && (
        <div className="fixed inset-0 z-30 pointer-events-none flex flex-col items-center justify-center gap-6 md:gap-8">
          {/* Slide-in words — each slides in independently */}
          <div className="flex items-center gap-3 md:gap-5">
            {slideWords.map((word, i) => (
              <motion.span
                key={word}
                className="[font-family:'Hind',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl tracking-tight"
                style={{ x: itemAnimations[i].x, opacity: itemAnimations[i].opacity }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Text-only items — fade in below */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-5"
            style={{ opacity: textOpacity, y: textY }}
          >
            {textWords.map((label) => (
              <span
                key={label}
                className="[font-family:'Hind',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl tracking-tight"
              >
                {label}
              </span>
            ))}
          </motion.div>

          {/* Closing line */}
          <motion.p
            className="[font-family:'Hind',Helvetica] font-normal text-white/70 text-lg md:text-2xl lg:text-3xl tracking-tight text-center px-6"
            style={{ opacity: closingOpacity, y: closingY }}
          >
            Nearly every critical component comes from China.
          </motion.p>
        </div>
      )}

      {/* Scroll height placeholder */}
      <div ref={containerRef} className="relative h-[400vh] bg-[#0a0a0a]" />
    </>
  );
};
