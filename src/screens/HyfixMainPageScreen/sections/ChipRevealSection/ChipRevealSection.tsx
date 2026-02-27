import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export const ChipRevealSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 1) Title enters center. 2) Pause — title locks in middle. 3) Title moves up, chip rises into center. 4) Both lock. 5) Exit.
  const headingY = useTransform(
    scrollYProgress,
    [0.0, 0.16, 0.36, 0.56, 0.80, 0.96],
    ["16vh", "0vh", "0vh", "-24vh", "-24vh", "-50vh"]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0.36, 0.56, 0.80, 0.96],
    ["75vh", "0vh", "0vh", "-50vh"]
  );
  const chipOpacity = useTransform(
    scrollYProgress,
    [0.36, 0.48, 0.80, 0.96],
    [0, 1, 1, 0]
  );

  // Group fade: wider in/out bands for smoother appearance (match Impact video opacity feel)
  const groupOpacity = useTransform(
    scrollYProgress,
    [0.04, 0.14, 0.88, 0.97],
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

      {/* Taller scroll region so motion is spread out and feels as smooth as Consumer/Commercial/Defense */}
      <div ref={containerRef} className="relative h-[260vh] md:h-[300vh] lg:h-[320vh] bg-[#0a0a0a]" />
    </>
  );
};

