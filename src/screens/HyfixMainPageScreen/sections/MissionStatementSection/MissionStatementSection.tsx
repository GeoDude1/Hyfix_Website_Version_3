import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export const MissionStatementSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const videoRef = useRef<HTMLVideoElement>(null!);
  const [visible, setVisible] = useState(false);

  const startFromBeginning = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
  }, []);

  const loopFromBeginning = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0.0, 0.25, 0.5, 0.82],
    ["80vh", "0vh", "0vh", "-80vh"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0.05, 0.2, 0.5, 0.82],
    [0, 1, 1, 0]
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setVisible(v > 0.02 && v < 0.85);
  });

  return (
    <>
      {visible && (
        <div className="fixed inset-0 z-30 pointer-events-none">
          {/* Background video — structured like other full-screen sections */}
          <motion.div className="absolute inset-0" style={{ y, opacity }}>
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="video-fullscreen absolute inset-0 w-full h-full object-cover"
              onLoadedMetadata={startFromBeginning}
              onCanPlay={startFromBeginning}
              onEnded={loopFromBeginning}
            >
              <source src="/rocket_ems.webm" type="video/webm" />
            </video>
          </motion.div>

          {/* Text overlay — centered like other video sections */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center px-6"
            style={{ y, opacity }}
          >
            <div className="relative z-10 max-w-5xl text-center">
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
        </div>
      )}

      <div ref={containerRef} className="relative h-[180vh] bg-[#0a0a0a]" />
    </>
  );
};
