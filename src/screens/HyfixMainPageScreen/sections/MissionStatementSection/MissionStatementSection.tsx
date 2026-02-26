import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export const MissionStatementSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const videoRef = useRef<HTMLVideoElement>(null!);
  const [visible, setVisible] = useState(false);

  const startAtSecondHalf = useCallback(() => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    video.currentTime = video.duration * 0.5;
  }, []);

  const loopSecondHalfOnly = useCallback(() => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    video.currentTime = video.duration * 0.5;
    video.play().catch(() => {});
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Moves from below → center → holds (shorter than ban) → continues up
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

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setVisible(v > 0.02 && v < 0.78);
  });

  return (
    <>
      {visible && (
        <motion.div
          className="fixed inset-0 z-30 flex items-center justify-center px-6 pointer-events-none"
          style={{ y, opacity }}
        >
          {/* Background video — second half only */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedMetadata={startAtSecondHalf}
            onCanPlay={startAtSecondHalf}
            onEnded={loopSecondHalfOnly}
          >
            <source src="/rocket_ems.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 max-w-5xl text-center">
            {/* Mission headline */}
            <h2 className="[font-family:'Hind',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-7xl leading-tight tracking-tight">
              HYFIX is enabling a
              <br />
              Domestic Supply Chain for
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                High-Quality, Low-Cost Drones
              </span>
            </h2>
          </div>
        </motion.div>
      )}

      <div ref={containerRef} className="relative h-[200vh] bg-[#0a0a0a]" />
    </>
  );
};
