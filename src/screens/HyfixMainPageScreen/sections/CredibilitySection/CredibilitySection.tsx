export const CredibilitySection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#0a0a0a] px-6 pt-6 md:pt-8 pb-16 md:pb-20">
      <div className="max-w-5xl mx-auto w-full text-center">
        {/* CEO Quote — positioned higher, more space before attribution */}
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-4 md:gap-5">
            <img
              src="/mike.png"
              alt="Mike Horton"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg border-2 border-white/10"
            />
            <blockquote className="[font-family:'Hind',Helvetica] text-white/80 text-lg md:text-xl leading-relaxed italic">
              "Whether you're building a palm-sized consumer drone or a heavy-lift autonomous system, the underlying problems are the same—power, precision, reliability, and security. We're giving builders a single silicon foundation that scales across use cases."
            </blockquote>
            <p className="[font-family:'Hind',Helvetica] text-white/50 text-base mt-6 md:mt-8">
              Mike Horton, CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
