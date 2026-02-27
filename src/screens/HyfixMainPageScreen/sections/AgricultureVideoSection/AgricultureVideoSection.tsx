import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export const AgricultureVideoSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Video: fade in early, hold, fade out before carousel
  const videoOpacity = useTransform(scrollYProgress, [0.03, 0.12, 0.72, 0.82], [0, 1, 1, 0]);

  // Headline: slides up from below
  const headlineY = useTransform(scrollYProgress, [0.1, 0.28], ["60vh", "0vh"]);
  const headlineOpacity = useTransform(scrollYProgress, [0.1, 0.22], [0, 1]);

  // Subtitle: slides up after headline
  const subtitleY = useTransform(scrollYProgress, [0.2, 0.38], ["50vh", "0vh"]);
  const subtitleOpacity = useTransform(scrollYProgress, [0.2, 0.34], [0, 1]);

  // Group exit: move up and fade out well before carousel so no overlap
  const groupY = useTransform(scrollYProgress, [0.62, 0.78], ["0vh", "-60vh"]);
  const groupOpacity = useTransform(scrollYProgress, [0.62, 0.78], [1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setVisible(v > 0.02 && v < 0.82);
  });

  return (
    <>
      {visible && (
        <div className="fixed inset-0 z-30 pointer-events-none">
          <motion.div className="absolute inset-0" style={{ opacity: videoOpacity }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="video-fullscreen absolute inset-0 w-full h-full object-cover"
            >
              <source src="/agriculture.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/45" />
          </motion.div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center px-6"
            style={{ y: groupY, opacity: groupOpacity }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <motion.h2
                className="[font-family:'Hind',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight"
                style={{ y: headlineY, opacity: headlineOpacity }}
              >
                One chip. Built in America.
                <br />
                Designed for every drone.
              </motion.h2>
              <motion.p
                className="[font-family:'Hind',Helvetica] text-white text-lg md:text-xl lg:text-2xl tracking-tight mt-5 md:mt-6"
                style={{ y: subtitleY, opacity: subtitleOpacity }}
              >
                Flight Control · Precise Positioning · Secure Comms · Onboard Intelligence
              </motion.p>
            </div>
          </motion.div>
        </div>
      )}

      <div ref={containerRef} className="relative h-[220vh] md:h-[260vh] lg:h-[280vh] bg-[#0a0a0a]" />
    </>
  );
};
