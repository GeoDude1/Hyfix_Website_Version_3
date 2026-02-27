import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const CredibilitySection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#0a0a0a] px-6 pt-2 pb-12 flex justify-center">
      {/* On ultra-wide screens, nudge the block slightly upward to trim extra top space */}
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center gap-5 md:gap-7 2xl:-mt-4">
        {/* Mike headshot + quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <img
              src="/mike.png"
              alt="Mike Horton"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-lg border-2 border-white/10 mt-2"
            />
            <blockquote className="[font-family:'Hind',Helvetica] text-white/80 text-xl md:text-2xl leading-relaxed italic">
              "Whether you're building a palm-sized consumer drone or a heavy-lift autonomous system, the underlying problems are the same—power, precision, reliability, and security. We're giving builders a single silicon foundation that scales across use cases."
            </blockquote>
            <p className="[font-family:'Hind',Helvetica] text-white/50 text-base mt-3 md:mt-4">
              Mike Horton, CEO
            </p>
          </div>
        </motion.div>

        {/* CTA: The future of American drones */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h2 className="[font-family:'Hind',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6">
            The future of American drones
            <br />
            starts here.
          </h2>
          <Button
            className="h-auto px-10 py-4 rounded-lg bg-white text-gray-900 [font-family:'Hind',Helvetica] font-semibold text-lg tracking-wide hover:bg-gray-100 transition-colors transform hover:scale-[1.02]"
            onClick={() => navigate("/contact")}
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
