import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FlavorCard from "../components/FlavorCard";
import { flavors } from "../data/flavors";

export default function Products() {
  return (
    <section id="flavors" className="relative w-full bg-cream py-24 md:py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, rotate: -8, y: -10 }}
            whileInView={{ opacity: 1, rotate: -3, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 220, damping: 14 }}
            className="font-script text-cherry text-2xl md:text-3xl inline-block"
          >
            pick a snack <span aria-hidden="true">✦</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 font-display font-bold text-ink text-[12vw] md:text-[6vw] lg:text-[5.5vw] leading-[0.95] tracking-[-0.025em]"
          >
            Three flavors, zero{" "}
            <span className="font-script font-bold text-cherry not-italic inline-block -rotate-2 mx-1">
              gluten.
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
            className="inline-block bg-ink text-cream font-display tracking-[0.18em] uppercase text-sm px-10 py-4 rounded-full hover:bg-cherry transition-colors"
          >
            Explore all flavors
          </Link>
        </div>
      </div>
    </section>
  );
}
