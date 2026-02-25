import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const ConsumerFpvDronesSection = (): JSX.Element => {
  const imageRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const benefits = [
    "Ultra-integrated electronics",
    "Precision localization and control",
    "Low-power extends battery life",
    "Light-weight",
  ];

  return (
    <section className="relative w-full py-8 md:py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-28 xl:gap-40 items-center">
          <div ref={imageRef} className="flex justify-center items-center group">
            <div className="relative w-full max-w-[420px] md:max-w-none mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/20 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-110 transition-all duration-700"></div>
              <video
                className="w-full max-w-[420px] md:max-w-[900px] md:h-[420px] h-auto rounded-3xl shadow-xl object-cover relative z-10 transform group-hover:scale-105 transition-transform duration-700"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/applications_1.webm" type="video/webm" />
              </video>
            </div>
          </div>

          <div ref={contentRef} className="flex flex-col gap-4 md:gap-6 lg:pl-10 xl:pl-16">
            <h2 className="[font-family:'Hind',Helvetica] font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              Consumer and FPV Drones
            </h2>

            <div className="[font-family:'Hind',Helvetica] text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed space-y-3 md:space-y-5">
              <p className="font-semibold text-black text-lg md:text-xl">Benefits:</p>
              <ul className="space-y-3 md:space-y-5 font-normal">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4 group/item">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2.5 group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-blue-400/50 transition-all duration-300"></span>
                    <span className="group-hover/item:text-black group-hover/item:translate-x-1 transition-all duration-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
