import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export const NarrativeHeroSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [chinaVisible, setChinaVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Video fades out
  const videoOpacity = useTransform(scrollYProgress, [0, 0.3, 0.55], [1, 1, 0]);
  // Hero headline fades out early
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.15, 0.35], [1, 1, 0]);

  // "90%" text: scale grows from small to full, opacity fades in then out
  const chinaTextOpacity = useTransform(scrollYProgress, [0.25, 0.4, 0.7, 0.85], [0, 1, 1, 0]);
  const chinaTextScale = useTransform(scrollYProgress, [0.25, 0.6], [0.3, 1]);

  // Track whether we're in the china-text range to show/hide the fixed layer
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setChinaVisible(v > 0.2 && v < 0.9);
  });

  return (
    <>
      {/* Fixed overlay for "90%" text — always centered in viewport */}
      {chinaVisible && (
        <motion.div
          className="fixed inset-0 z-30 flex items-center justify-center px-6 pointer-events-none"
          style={{ opacity: chinaTextOpacity }}
        >
          <motion.p
            className="[font-family:'Anek Bangla',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl text-center leading-tight tracking-tight max-w-4xl"
            style={{ scale: chinaTextScale }}
          >
            Today, 90% of the world's drones depend on Chinese manufacturers.
          </motion.p>
        </motion.div>
      )}

      <div ref={containerRef} className="relative h-[250vh]">
        {/* Sticky video + hero headline */}
        <motion.div
          className="sticky top-0 w-screen h-screen overflow-hidden z-10"
          style={{ opacity: videoOpacity }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="video-fullscreen absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/40" />

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center px-6"
            style={{ opacity: heroTextOpacity }}
          >
            <motion.h1
              className="[font-family:'Anek Bangla',Helvetica] font-bold text-white text-4xl md:text-6xl lg:text-7xl text-center leading-tight tracking-tight max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              The Drone Revolution
              <br />
              Is at Risk
            </motion.h1>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ opacity: heroTextOpacity }}
          >
            <span className="[font-family:'Anek Bangla',Helvetica] text-white/60 text-sm tracking-widest uppercase">
              Scroll
            </span>
            <motion.div
              className="w-px h-8 bg-white/40"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
