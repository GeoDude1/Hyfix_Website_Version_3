const investorLogos = [
  {
    src: "https://c.animaapp.com/mlqxi4snA5QXFn/img/craft-logo-2.png",
    alt: "Craft Ventures",
  },
  {
    src: "https://c.animaapp.com/mlqxi4snA5QXFn/img/catapult-logo-black-1.png",
    alt: "Catapult",
  },
  {
    src: "https://c.animaapp.com/mlqxi4snA5QXFn/img/multicoin-capital-logo-black-1.png",
    alt: "Multicoin Capital",
  },
  {
    src: "https://c.animaapp.com/mlqxi4snA5QXFn/img/finality-logo-black-1.png",
    alt: "Finality Capital",
  },
];

export const CredibilitySection = (): JSX.Element => {
  return (
    <div className="relative h-[120vh] bg-[#0a0a0a]">
      {/* Sticks in view while you scroll through this section, then scrolls away when you hit the next */}
      <div className="sticky top-0 min-h-screen flex items-start justify-center px-6 pt-24 md:pt-28 lg:pt-32 pb-16 z-10">
        <div className="max-w-5xl w-full text-center">
          {/* Funding headline */}
          <h2 className="[font-family:'Hind',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-4">
            $15M to enable
            <br />
            an American drone industry
          </h2>

          {/* Investor names */}
          <p className="[font-family:'Hind',Helvetica] text-white/50 text-lg md:text-xl mb-14 md:mb-20">
            Led by Craft Ventures · Catapult · Multicoin Capital · Finality Capital
          </p>

          {/* CEO Quote */}
          <div className="max-w-3xl mx-auto mb-14 md:mb-20">
            <div className="flex flex-col items-center gap-6">
              <img
                src="/mike.png"
                alt="Mike Horton"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg border-2 border-white/10"
              />
              <blockquote className="[font-family:'Hind',Helvetica] text-white/80 text-lg md:text-xl leading-relaxed italic">
                "Whether you're building a palm-sized consumer drone or a heavy-lift autonomous system, the underlying problems are the same—power, precision, reliability, and security. We're giving builders a single silicon foundation that scales across use cases."
              </blockquote>
              <p className="[font-family:'Hind',Helvetica] text-white/50 text-base">
                Mike Horton, CEO
              </p>
            </div>
          </div>

          {/* Investor logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center max-w-4xl mx-auto">
            {investorLogos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="w-full max-w-[160px] md:max-w-[200px] h-auto object-contain brightness-0 invert opacity-60 hover:opacity-90 transition-opacity duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
