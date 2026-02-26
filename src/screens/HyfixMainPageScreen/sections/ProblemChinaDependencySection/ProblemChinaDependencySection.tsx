import { motion } from "framer-motion";

export const ProblemChinaDependencySection = (): JSX.Element => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-6">
      <motion.p
        className="[font-family:'Hind',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl text-center leading-tight tracking-tight max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Today, 90% of the world's drones depend on Chinese manufacturers.
      </motion.p>
    </section>
  );
};
