import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const CredibilitySection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#0a0a0a] px-4 sm:px-8 md:px-12 lg:px-16 py-6 md:pt-4 md:pb-20 lg:pb-24 flex flex-col justify-center md:justify-center min-h-[100dvh] md:min-h-0">
      <div className="max-w-5xl lg:max-w-6xl mx-auto w-full flex flex-col items-center text-center gap-5 md:gap-20 lg:gap-24 md:mt-20 2xl:mt-16">
        {/* Mike headshot + quote — centered on mobile; pushed lower on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl md:mt-20"
        >
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <img
              src="/mike.png"
              alt="Mike Horton"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg border-2 border-white/10 mt-0 md:mt-2"
            />
            <blockquote className="[font-family:'Hind',Helvetica] text-white/80 text-sm md:text-xl leading-snug md:leading-relaxed italic">
              "Whether you're building a palm-sized consumer drone or a heavy-lift autonomous system, the underlying problems are the same—power, precision, reliability, and security. We're giving builders a single silicon foundation that scales across use cases."
            </blockquote>
            <p className="[font-family:'Hind',Helvetica] text-white/50 text-xs md:text-sm mt-1 md:mt-4">
              Mike Horton, CEO
            </p>
          </div>
        </motion.div>

        {/* CTA: The Future of American drones */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl lg:max-w-5xl mb-0 md:mb-6 mt-8 md:mt-0"
        >
          <h2 className="[font-family:'Hind',Helvetica] font-bold text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight mb-3 md:mb-6">
            The Future of American drones
            <br />
            starts here.
          </h2>
          <Button
            className="h-auto px-6 py-3 md:px-8 md:py-3 rounded-lg bg-white text-gray-900 [font-family:'Hind',Helvetica] font-semibold text-sm md:text-base tracking-wide hover:bg-gray-100 transition-colors transform hover:scale-[1.02]"
            onClick={() => navigate("/contact")}
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
