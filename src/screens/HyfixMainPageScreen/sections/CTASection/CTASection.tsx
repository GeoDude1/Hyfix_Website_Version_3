import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const CTASection = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="min-h-[50vh] flex items-start justify-center bg-[#0a0a0a] px-6 pt-24 md:pt-28 pb-20">
      <div className="max-w-5xl w-full text-center">
        <motion.h2
          className="[font-family:'Hind',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          The future of American drones
          <br />
          starts here.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Button
            className="h-auto px-10 py-4 rounded-lg bg-white text-gray-900 [font-family:'Hind',Helvetica] font-semibold text-lg tracking-wide hover:bg-gray-100 transition-colors"
            onClick={() => navigate("/contact")}
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
