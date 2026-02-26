import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export const ChipRevealSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Heading moves from center → just under nav → then exits with content
  const headingY = useTransform(
    scrollYProgress,
    [0.0, 0.2, 0.7, 0.95],
    ["30vh", "0vh", "0vh", "-60vh"]
  );

  // Chip + paragraph move from below → middle → then exit with heading
  const contentY = useTransform(
    scrollYProgress,
    [0.25, 0.45, 0.7, 0.95],
    ["80vh", "10vh", "10vh", "-60vh"]
  );

  const groupOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.2, 0.7, 0.9],
    [0, 1, 1, 0]
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setVisible(v > 0.02 && v < 0.95);
  });

  return (
    <>
      {visible && (
        <motion.div
          className="fixed inset-0 z-30 px-6 pointer-events-none"
          style={{ opacity: groupOpacity }}
        >
          <div className="relative w-full h-full max-w-7xl mx-auto">
            {/* Heading — moves up and then locks just under the nav */}
            <motion.div
              className="absolute left-0 right-0 top-24 md:top-28 lg:top-32 flex justify-center"
              style={{ y: headingY }}
            >
              <h2 className="[font-family:'Hind',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-tight text-center">
                With a Single Chip.
              </h2>
            </motion.div>

            {/* Chip only — centered */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ y: contentY }}
            >
              <div className="flex justify-center items-center pointer-events-auto">
                <img
                  src="/chip_image.png"
                  alt="HYFIX Chip"
                  className="w-[320px] md:w-[420px] lg:w-[520px] h-auto object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      <div ref={containerRef} className="relative h-[250vh] bg-[#0a0a0a]" />
    </>
  );
};

