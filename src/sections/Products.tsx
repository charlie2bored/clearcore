import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FlavorCard from "../components/FlavorCard";
import { flavors } from "../data/flavors";

export default function Products() {
  return (
    <section id="flavors" className="relative w-full bg-bone py-24 md:py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block uppercase tracking-[0.25em] text-xs md:text-sm text-sage font-display"
          >
            Pick your bar
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="mt-3 font-display uppercase text-ink text-[12vw] md:text-[5.5vw] leading-[0.95]"
          >
            Three flavors,
            <br />
            <span className="inline-block bg-sage text-bone px-4 -rotate-[2deg]">
              zero gluten.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {flavors.map((f, i) => (
            <FlavorCard key={f.slug} flavor={f} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/flavors"
            className="inline-block bg-ink text-bone font-display tracking-[0.18em] uppercase text-sm px-10 py-4 rounded-full hover:bg-sage transition-colors"
          >
            Explore all flavors
          </Link>
        </div>
      </div>
    </section>
  );
}
