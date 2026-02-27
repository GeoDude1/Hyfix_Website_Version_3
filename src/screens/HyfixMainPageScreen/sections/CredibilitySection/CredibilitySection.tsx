import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export const CredibilitySection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Mike section slides in, "locks" mid-screen, then slides/fades out
  const y = useTransform(scrollYProgress, [0.0, 0.25, 0.7, 0.85], ["40vh", "0vh", "0vh", "-40vh"]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.2, 0.7, 0.85], [0, 1, 1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setVisible(v > 0.02 && v < 0.9);
  });

  return (
    <>
      {visible && (
        <motion.div
          className="fixed inset-0 z-30 flex items-center justify-center px-6 pointer-events-none"
          style={{ y, opacity }}
        >
          <div className="max-w-4xl mx-auto text-center pointer-events-auto">
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <img
                src="/mike.png"
                alt="Mike Horton"
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-lg border-2 border-white/10"
              />
              <blockquote className="[font-family:'Hind',Helvetica] text-white/80 text-xl md:text-2xl leading-relaxed italic">
                "Whether you're building a palm-sized consumer drone or a heavy-lift autonomous system, the underlying problems are the same—power, precision, reliability, and security. We're giving builders a single silicon foundation that scales across use cases."
              </blockquote>
              <p className="[font-family:'Hind',Helvetica] text-white/50 text-base mt-3 md:mt-4">
                Mike Horton, CEO
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Scroll region that controls how long the Mike quote stays "locked" */}
      <div ref={containerRef} className="relative h-[160vh] bg-[#0a0a0a]" />
    </>
  );
};
