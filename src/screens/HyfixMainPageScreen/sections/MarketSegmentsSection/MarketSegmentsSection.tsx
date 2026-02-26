import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";

const applicationSlides = [
  {
    src: "/applications_1.webm",
    title: "Consumer and FPV Drones",
    subtitle: "Sub-250g camera drones, racing, hobbyist",
  },
  {
    src: "/applications_2.webm",
    title: "Commercial and Industrial Drones",
    subtitle: "Inspection, mapping, agriculture, delivery",
  },
  {
    src: "/applications_3.webm",
    title: "Public Sector and Security Drones",
    subtitle: "ISR, autonomous systems, contested environments",
  },
];

export const MarketSegmentsSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setVisible(v > 0.02 && v < 0.98);

    const segments = applicationSlides.length;
    const clamped = Math.max(0, Math.min(0.9999, v));
    const index = Math.min(segments - 1, Math.floor(clamped * segments));

    setCurrentSlide((prev) => (prev === index ? prev : index));
  });

  const goToPrevious = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? applicationSlides.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) =>
      prev === applicationSlides.length - 1 ? 0 : prev + 1
    );
  };

  const activeSlide = applicationSlides[currentSlide];

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.02, 0.12, 0.9, 0.98],
    [0, 1, 1, 0]
  );

  return (
    <>
      {visible && (
        <motion.div className="fixed inset-0 z-30" style={{ opacity: overlayOpacity }}>
          <motion.div className="absolute inset-0">
            <video
              key={activeSlide.src}
              className="video-fullscreen absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={activeSlide.src} type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-black/45" />
          </motion.div>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-6 md:px-10 pb-6 md:pb-10">
            <div className="max-w-xl pointer-events-none">
              <h3 className="[font-family:'Hind',Helvetica] font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-2 md:mb-3">
                {activeSlide.title}
              </h3>
              <p className="[font-family:'Hind',Helvetica] text-white/80 text-sm md:text-lg lg:text-xl leading-relaxed">
                {activeSlide.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-4 md:gap-6 pointer-events-auto">
              <button
                type="button"
                onClick={goToPrevious}
                className="text-white text-3xl md:text-4xl leading-none hover:text-blue-300 transition-colors"
                aria-label="Previous application"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="text-white text-3xl md:text-4xl leading-none hover:text-blue-300 transition-colors"
                aria-label="Next application"
              >
                ›
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <div ref={containerRef} className="relative h-[400vh] bg-[#0a0a0a]" />
    </>
  );
};

