import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export const ImpactVideoSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Video: fade in early, hold, fade out at end
  const videoOpacity = useTransform(scrollYProgress, [0.03, 0.10, 0.75, 0.88], [0, 1, 1, 0]);

  // --- Sequential word entries (each slides up from bottom) ---
  // Consumer: 0.08 → 0.18
  const consumerY = useTransform(scrollYProgress, [0.08, 0.18], ["80vh", "0vh"]);
  const consumerOpacity = useTransform(scrollYProgress, [0.08, 0.15], [0, 1]);

  // Commercial: 0.18 → 0.28
  const commercialY = useTransform(scrollYProgress, [0.18, 0.28], ["80vh", "0vh"]);
  const commercialOpacity = useTransform(scrollYProgress, [0.18, 0.25], [0, 1]);

  // Defense: 0.28 → 0.38
  const defenseY = useTransform(scrollYProgress, [0.28, 0.38], ["80vh", "0vh"]);
  const defenseOpacity = useTransform(scrollYProgress, [0.28, 0.35], [0, 1]);

  // Subtitle: slides up after all three words are in place (0.40 → 0.50)
  const subtitleY = useTransform(scrollYProgress, [0.40, 0.50], ["40vh", "0vh"]);
  const subtitleOpacity = useTransform(scrollYProgress, [0.40, 0.48], [0, 1]);

  // --- Group exit: everything moves up and fades out together ---
  const groupY = useTransform(scrollYProgress, [0.62, 0.78], ["0vh", "-80vh"]);
  const groupOpacity = useTransform(scrollYProgress, [0.62, 0.78], [1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setVisible(v > 0.02 && v < 0.85);
  });

  return (
    <>
      {visible && (
        <div className="fixed inset-0 z-30 pointer-events-none">
          {/* Full-screen video */}
          <motion.div className="absolute inset-0" style={{ opacity: videoOpacity }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="video-fullscreen absolute inset-0 w-full h-full object-cover"
            >
              <source src="/consumer.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>

          {/* Text overlay — group wrapper for exit animation */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center px-6"
            style={{ y: groupY, opacity: groupOpacity }}
          >
            <div className="text-center">
              {/* Three words in a row, each animating up independently */}
              <div className="flex flex-wrap items-baseline justify-center gap-x-3 md:gap-x-5">
                <motion.span
                  className="[font-family:'Hind',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl tracking-tight"
                  style={{ y: consumerY, opacity: consumerOpacity }}
                >
                  Consumer.
                </motion.span>
                <motion.span
                  className="[font-family:'Hind',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl tracking-tight"
                  style={{ y: commercialY, opacity: commercialOpacity }}
                >
                  Commercial.
                </motion.span>
                <motion.span
                  className="[font-family:'Hind',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl tracking-tight"
                  style={{ y: defenseY, opacity: defenseOpacity }}
                >
                  Defense.
                </motion.span>
              </div>

              {/* Subtitle — slides up after the three words are in place */}
              <motion.p
                className="[font-family:'Hind',Helvetica] font-bold text-white/70 text-2xl md:text-4xl lg:text-5xl tracking-tight mt-4"
                style={{ y: subtitleY, opacity: subtitleOpacity }}
              >
                Multiple end markets at risk.
              </motion.p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Scroll height — tall enough for sequential entries + hold + exit */}
      <div ref={containerRef} className="relative h-[400vh] bg-[#0a0a0a]" />
    </>
  );
};
