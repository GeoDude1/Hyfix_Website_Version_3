import { useRef, useEffect } from "react";

const isSafari = (): boolean => {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  return /Safari\//i.test(ua) && !/Chrome/i.test(ua) || /iPhone|iPad|iPod|Macintosh/i.test(ua);
};

export const HeroImageSection = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isSafari()) {
      video.src = "/drone_ios_11.mov";
    } else {
      const webm = document.createElement("source");
      webm.src = "/geoswarm.webm";
      webm.type = "video/webm";
      const mov = document.createElement("source");
      mov.src = "/drone_seethrough_11.mov";
      mov.type = "video/quicktime";
      video.appendChild(webm);
      video.appendChild(mov);
    }
    video.load();
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-[70vh] md:h-screen flex items-center bg-gray-700">
      {/* Full-screen video background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-70 hero-video-mobile md:hero-video-desktop"
          autoPlay
          muted
          playsInline
          onEnded={() => videoRef.current?.pause()}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/10 to-gray-900/80 pointer-events-none" />
      </div>

      {/* Headline and CTA over video, bottom-left aligned */}
      <div className="relative z-10 w-full h-full flex items-end justify-start">
        <div className="w-full max-w-5xl pl-4 pr-4 md:pl-16 md:pr-8 pb-16 md:pb-24 flex flex-col items-start gap-2 md:gap-4 text-left">
          <h1 className="[font-family:'Hind',Helvetica] font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Introducing the<br />Autonomous Systems Chip
          </h1>

          <p className="[font-family:'Hind',Helvetica] font-medium text-white/90 text-sm sm:text-lg md:text-xl tracking-tight leading-relaxed max-w-2xl animate-fade-in opacity-0 [--animation-delay:400ms]">
            Built in the USA. Engineered for Autonomous Flight.
          </p>

          <button
            className="mt-2 md:mt-4 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-white text-black [font-family:'Hind',Helvetica] font-semibold text-sm md:text-base hover:bg-white/90 transition-all duration-300 hover:scale-105 animate-fade-in opacity-0 [--animation-delay:600ms]"
            onClick={() => window.location.href = "mailto:info@hyfix.ai?subject=Request%20Info"}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator anchored to very bottom of video */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in [--animation-delay:800ms] animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
