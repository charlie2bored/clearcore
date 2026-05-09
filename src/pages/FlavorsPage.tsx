import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FlavorCard from "../components/FlavorCard";
import { flavors } from "../data/flavors";

export default function FlavorsPage() {
  return (
    <>
      {/* hero band */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, rotate: -8, y: -10 }}
            animate={{ opacity: 1, rotate: -3, y: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 14 }}
            className="font-script text-cherry text-2xl md:text-3xl inline-block"
          >
            the whole lineup <span aria-hidden="true">✦</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 font-display font-bold text-ink text-[14vw] md:text-[7.5vw] leading-[0.95] tracking-[-0.025em]"
          >
            Three flavors,{" "}
            <span className="font-script font-bold text-cherry not-italic inline-block -rotate-2 mx-1">
              one
            </span>{" "}
            promise.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-ink/80 max-w-xl mx-auto"
          >
            Whole-food protein, gluten-free, and built around real ingredients
            you can pronounce. Pick the one that sounds like your morning.
          </motion.p>
        </div>
      </section>

      {/* grid */}
      <section className="py-16 md:py-20 px-6 bg-cream">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {flavors.map((f, i) => (
            <FlavorCard key={f.slug} flavor={f} index={i} />
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="bg-ink text-cream text-center py-20 md:py-28 px-6">
        <h2 className="font-display uppercase text-[10vw] md:text-[5vw] leading-[0.95]">
          Hungry yet?
        </h2>
        <p className="mt-4 text-cream/80 max-w-md mx-auto">
          Find Clear Core at a store near you, or shop the full lineup online.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/stores"
            className="inline-block bg-cherry text-cream font-display tracking-[0.18em] uppercase text-sm px-10 py-4 rounded-full hover:bg-cream hover:text-ink transition-colors"
          >
            Find In Stores
          </Link>
          <Link
            to="/contact"
            className="inline-block border border-cream text-cream font-display tracking-[0.18em] uppercase text-sm px-10 py-4 rounded-full hover:bg-cream hover:text-ink transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
