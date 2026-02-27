import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const CTASection = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="min-h-[80vh] md:min-h-[85vh] flex items-center justify-center bg-[#0a0a0a] px-6 py-20">
      <div className="max-w-4xl w-full text-center">
        <motion.h2
          className="[font-family:'Hind',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          The future of American drones
          <br />
          starts here.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
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
