import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const features = [
  {
    title: "Consumer and FPV Drones",
    description:
      "Consumer and FPV drones benefit from ultra‑integrated electronics, precise localization and control, and low‑power operation that extends battery life. Their lightweight design further enhances performance and agility.",
  },
  {
    title: "Commercial and Industrial Drones",
    description:
      "Commercial and industrial drones rely on centimeter‑level positioning, long‑range digital video transmission, and support for redundant safety sensors. They also enable advanced capabilities through camera‑based AI.",
  },
  {
    title: "Public Sector and Security Drones",
    description:
      "Public sector and security drones depend on centimeter-level positioning, long-range digital video transmission, and redundant safety sensors, all supported by camera-based AI for critical missions and high-consequence operations.",
  },
];

const videoSources = [
  "/applications_1.webm",
  "/applications_2.webm",
  "/applications_3.webm",
  "/applications_4.webm",
];

const videoToFeatureIndex = [0, 1, 2, 2];

export const SolutionChipSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [visible, setVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Fade in, hold, then fade out well before section end so no overlap with $15M section
  const opacity = useTransform(scrollYProgress, [0.05, 0.2, 0.78, 0.85], [0, 1, 1, 0]);

  // Feature title + description only (no separate headline — agriculture section has "One chip. Built in America.")
  const featuresOpacity = useTransform(scrollYProgress, [0.08, 0.22, 0.78, 0.85], [0, 1, 1, 0]);
  const featuresY = useTransform(scrollYProgress, [0.08, 0.22], [24, 0]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Unmount overlay before $15M section starts — no overlap
    setVisible(v > 0.02 && v < 0.85);

    // Scroll ranges per video (v from 0–1):
    // 0.00–0.45 → Consumer & FPV
    // 0.45–0.72 → Commercial & Industrial
    // 0.72–0.96 → Public Sector & Security (extended further)
    // 0.96–1.00 → Final clip
    let index = 0;
    if (v < 0.45) {
      index = 0;
    } else if (v < 0.72) {
      index = 1;
    } else if (v < 0.96) {
      index = 2; // Public Sector & Security gets a longer window
    } else {
      index = 3;
    }

    setActiveVideo((prev) => (prev === index ? prev : index));
  });

  const activeFeatureIndex = videoToFeatureIndex[activeVideo];

  return (
    <>
      {visible && (
        <div className="fixed inset-0 z-30 pointer-events-none">
          {/* Full-screen video */}
          <motion.div className="absolute inset-0" style={{ opacity }}>
            <video
              key={videoSources[activeVideo]}
              autoPlay
              muted
              loop
              playsInline
              className="video-fullscreen absolute inset-0 w-full h-full object-cover brightness-110 contrast-105"
            >
              <source src={videoSources[activeVideo]} type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-black/25" />
          </motion.div>

          {/* Content overlay — segment title + description; larger text and positioned for big screens */}
          <div className="absolute inset-0 flex flex-col items-end md:items-start justify-end px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-24 pb-16 md:pb-20 lg:pb-24 xl:pb-28 pointer-events-none">
            <motion.div
              key={activeFeatureIndex}
              className="flex flex-col items-end md:items-start justify-end pointer-events-auto max-w-2xl lg:max-w-3xl xl:max-w-[42rem] 2xl:max-w-[48rem]"
              style={{ opacity: featuresOpacity, y: featuresY }}
              initial={{ x: 320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="[font-family:'Hind',Helvetica] text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-semibold tracking-wide underline decoration-blue-400 decoration-2 underline-offset-4 mb-4 lg:mb-5">
                {features[activeFeatureIndex].title}
              </span>
              <p className="[font-family:'Hind',Helvetica] text-white/90 text-lg md:text-xl lg:text-2xl xl:text-[1.4rem] 2xl:text-[1.5rem] leading-relaxed">
                {features[activeFeatureIndex].description}
              </p>
            </motion.div>
          </div>
        </div>
      )}

      {/* Scroll height — extended so each video has a longer scroll range */}
      <div ref={containerRef} className="relative h-[450vh] bg-[#0a0a0a]" />
    </>
  );
};
