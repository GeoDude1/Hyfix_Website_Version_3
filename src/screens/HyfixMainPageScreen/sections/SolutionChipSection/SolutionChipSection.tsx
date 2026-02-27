import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Consumer and FPV",
    description:
      "The H1 Autonomous Systems Chip enables autonomous consumer and FPV drones by integrating critical electronics into a single system, delivering precise localization, real-time control, and low-power efficiency. Its lightweight design extends battery life while improving agility, stability, and overall flight performance.",
  },
  {
    title: "Commercial and Industrial",
    description:
      "The H1 Autonomous Systems Chip enables commercial and industrial drones with centimeter-level positioning, long-range digital video transmission, and support for redundant safety sensors. It also powers advanced, camera-based AI capabilities for reliable autonomous operations in demanding environments.",
  },
  {
    title: "Public Sector and Defense",
    description:
      "The H1 Autonomous Systems Chip enables public sector and security drones with centimeter-level positioning, long-range digital video transmission, and redundant safety sensing. It integrates camera-based AI to support critical missions, high-consequence operations, and secure autonomous performance in complex environments.",
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

  // Hold the video a bit longer and fade out closer to the end
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.86, 0.96], [0, 1, 1, 0]);

  // Feature title + description — fade in with section (no slide-in on first view to avoid duplicate look)
  const featuresOpacity = useTransform(scrollYProgress, [0, 0.12, 0.86, 0.96], [0, 1, 1, 0]);
  const featuresY = useTransform(scrollYProgress, [0, 0.12], [16, 0]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setVisible(v > 0 && v < 0.96);

    // Scroll ranges per video — Public Sector & Security gets much more scroll
    // 0.00–0.48 → Consumer & FPV
    // 0.48–0.68 → Commercial & Industrial
    // 0.68–0.97 → Public Sector & Security (extended)
    // 0.97–1.00 → Final clip
    let index = 0;
    if (v < 0.48) {
      index = 0;
    } else if (v < 0.68) {
      index = 1;
    } else if (v < 0.97) {
      index = 2;
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
          {/* Full-screen video — crossfade between videos on all devices, with a slightly shorter transition for mobile */}
          <motion.div className="absolute inset-0" style={{ opacity }}>
            <AnimatePresence initial={false}>
              <motion.div
                key={activeVideo}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
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
            </AnimatePresence>
          </motion.div>

          {/* Content overlay — segment title + description; centered on mobile, aligned left on larger screens */}
          <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-24 pb-16 md:pb-20 lg:pb-24 xl:pb-28 pointer-events-none">
            <motion.div
              key={activeFeatureIndex}
              className="flex flex-col items-center md:items-start justify-end pointer-events-auto max-w-2xl lg:max-w-3xl xl:max-w-[42rem] 2xl:max-w-[48rem]"
              style={{ opacity: featuresOpacity, y: featuresY }}
              initial={false}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="[font-family:'Hind',Helvetica] text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-semibold tracking-wide mb-4 lg:mb-5 text-center md:text-left">
                {features[activeFeatureIndex].title}
              </span>
              <p className="[font-family:'Hind',Helvetica] text-white/90 text-lg md:text-xl lg:text-2xl xl:text-[1.4rem] 2xl:text-[1.5rem] leading-relaxed text-center md:text-left">
                {(() => {
                  const desc = features[activeFeatureIndex].description;
                  const split = " enables ";
                  const i = desc.indexOf(split);
                  if (i === -1) return desc;
                  return (
                    <>
                      <span className="font-bold text-blue-400">The H1 Autonomous Systems Chip</span>
                      {split}
                      {desc.slice(i + split.length)}
                    </>
                  );
                })()}
              </p>
            </motion.div>
          </div>
        </div>
      )}

      {/* Scroll height — slightly shorter than original so the carousel feels snappier on mobile */}
      <div ref={containerRef} className="relative h-[360vh] md:h-[450vh] bg-[#0a0a0a]" />
    </>
  );
};
