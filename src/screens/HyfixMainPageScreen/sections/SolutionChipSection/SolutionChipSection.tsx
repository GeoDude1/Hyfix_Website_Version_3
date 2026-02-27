import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Consumer and FPV",
    description:
      "The H1 chip enables high-performance consumer and FPV drones by consolidating flight control, positioning, and power management into a single system, delivering longer flight times, faster response, and sharper control in a lightweight design.",
  },
  {
    title: "Commercial and Industrial",
    description:
      "The H1 chip delivers centimeter-level accuracy, resilient communications, and onboard AI processing for commercial and industrial drones, supporting inspection, mapping, and automated workflows at scale.",
  },
  {
    title: "Public Sector and Defense",
    description:
      "The H1 chip supports secure, mission-critical autonomy for public sector and security drones with precision navigation, redundant safety architecture, and integrated vision systems.",
  },
];

const videoSources = ["/applications_1.webm", "/applications_2.webm", "/applications_3.webm"];

const videoToFeatureIndex = [0, 1, 2];

export const SolutionChipSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [visible, setVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Fade the video out earlier so there is NO carousel visible once the final section is reached.
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.8, 0.86], [0, 1, 1, 0]);

  // Feature title + description — fade out in sync with the video
  const featuresOpacity = useTransform(scrollYProgress, [0, 0.12, 0.8, 0.86], [0, 1, 1, 0]);
  // Slight positive Y offset so the text panel sits a bit lower on the screen
  const featuresY = useTransform(scrollYProgress, [0, 0.12], [32, 8]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Unmount the carousel WELL before the credibility/CTA section shows,
    // so no video frame is visible behind the last part.
    setVisible(v > 0 && v < 0.86);

    // Scroll ranges per video — give the last state the longest scroll (lock) time
    // 0.00–0.40 → Consumer & FPV
    // 0.40–0.58 → Commercial & Industrial
    // 0.58–1.00 → Public Sector & Defense (extended lock)
    let index = 0;
    if (v < 0.4) {
      index = 0;
    } else if (v < 0.58) {
      index = 1;
    } else {
      index = 2;
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

          {/* Content overlay — on mobile: smaller text, left-aligned to show more video; on desktop: larger, left-aligned */}
          <div className="absolute inset-0 flex flex-col items-start justify-end px-4 md:px-10 lg:px-14 xl:px-20 2xl:px-24 pb-14 md:pb-14 lg:pb-16 xl:pb-20 pointer-events-none">
            <motion.div
              key={activeFeatureIndex}
              className="flex flex-col items-start justify-end pointer-events-auto w-full max-w-[85%] md:max-w-2xl lg:max-w-3xl xl:max-w-[42rem] 2xl:max-w-[48rem]"
              style={{ opacity: featuresOpacity, y: featuresY }}
              initial={false}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Subtle, lower-opacity panel with border to keep text readable without feeling too heavy */}
              <div className="w-full rounded-xl md:rounded-2xl bg-black/35 md:bg-black/25 border border-white/15 backdrop-blur-sm px-3 py-2.5 md:px-6 md:py-5">
                <span className="[font-family:'Hind',Helvetica] text-white text-sm md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-semibold tracking-wide mb-1 md:mb-3 lg:mb-4 block text-left">
                  {features[activeFeatureIndex].title}
                </span>
                <p className="[font-family:'Hind',Helvetica] text-white/90 text-xs md:text-lg lg:text-xl xl:text-[1.15rem] 2xl:text-[1.25rem] leading-snug md:leading-relaxed text-left">
                  {features[activeFeatureIndex].description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Scroll height — long enough that each video (especially the last) gets a clear dwell/lock */}
      <div ref={containerRef} className="relative h-[480vh] md:h-[540vh] bg-[#0a0a0a]" />
    </>
  );
};
