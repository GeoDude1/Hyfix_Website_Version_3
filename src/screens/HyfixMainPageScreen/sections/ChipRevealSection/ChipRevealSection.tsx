import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export const ChipRevealSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Heading moves in, then rises together with the chip so they feel linked
  const headingY = useTransform(
    scrollYProgress,
    // 0.00–0.25: slide text into center
    // 0.25–0.40: text begins to rise as chip starts moving
    // 0.40–0.80: text holds clearly above chip — shared lock state
    // 0.80–0.95+: both exit upward
    [0.0, 0.25, 0.4, 0.8, 0.95],
    ["8vh", "0vh", "-26vh", "-26vh", "-40vh"]
  );

  // Chip appears later: moves from below → reaches center under heading → both lock, then exit together
  const contentY = useTransform(
    scrollYProgress,
    // 0.40–0.60: chip rises into exact center
    // 0.60–0.80: chip holds centered — lock state with heading above
    // 0.80–0.95+: both exit
    [0.4, 0.6, 0.8, 0.95],
    ["72vh", "0vh", "0vh", "-40vh"]
  );
  const chipOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.8, 0.95],
    [0, 1, 1, 0]
  );

  // Fade in only after a clear gap — no overlap with Mission (rocket_ems) video — then hold before fading out
  const groupOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.2, 0.9, 0.98],
    [0, 1, 1, 0]
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setVisible(v > 0.06 && v < 0.97);
  });

  return (
    <>
      {visible && (
        <motion.div
          className="fixed inset-0 z-30 px-6 pointer-events-none"
          style={{ opacity: groupOpacity }}
        >
          <div className="relative w-full h-full max-w-7xl mx-auto">
            {/* Heading — centered; on mobile sits slightly lower so final position isn't too high */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pt-8 md:pt-0"
              style={{ y: headingY }}
            >
              <h2 className="[font-family:'Hind',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-tight text-center">
                Starting with a Tiny Chip.
              </h2>
            </motion.div>

            {/* Chip only — centered; nudged up slightly on mobile to feel perfectly centered */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ y: contentY, opacity: chipOpacity }}
            >
              <div className="flex justify-center items-center pointer-events-auto mt-[-32px] md:mt-0">
                <img
                  src="/chip_image.png"
                  alt="HYFIX Chip"
                  className="w-[260px] md:w-[340px] lg:w-[420px] h-auto object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      <div ref={containerRef} className="relative h-[210vh] md:h-[240vh] lg:h-[250vh] bg-[#0a0a0a]" />
    </>
  );
};

