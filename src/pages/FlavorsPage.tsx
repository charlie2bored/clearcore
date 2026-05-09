import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FlavorCard from "../components/FlavorCard";
import { flavors } from "../data/flavors";

export default function FlavorsPage() {
  return (
    <>
      {/* hero band */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-bone">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block uppercase tracking-[0.3em] text-xs md:text-sm text-sage font-display"
          >
            Our lineup
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-3 font-display uppercase text-ink text-[14vw] md:text-[7.5vw] leading-[0.95]"
          >
            Three flavors.
            <br />
            <span className="inline-block bg-sage text-bone px-4 -rotate-[2deg]">
              one promise.
            </span>
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
      <section className="py-16 md:py-20 px-6 bg-bone">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {flavors.map((f, i) => (
            <FlavorCard key={f.slug} flavor={f} index={i} />
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="bg-ink text-bone text-center py-20 md:py-28 px-6">
        <h2 className="font-display uppercase text-[10vw] md:text-[5vw] leading-[0.95]">
          Hungry yet?
        </h2>
        <p className="mt-4 text-bone/80 max-w-md mx-auto">
          Find Clear Core at a store near you, or shop the full lineup online.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/stores"
            className="inline-block bg-mist text-ink font-display tracking-[0.18em] uppercase text-sm px-10 py-4 rounded-full hover:bg-bone transition-colors"
          >
            Find In Stores
          </Link>
          <Link
            to="/contact"
            className="inline-block border border-bone text-bone font-display tracking-[0.18em] uppercase text-sm px-10 py-4 rounded-full hover:bg-bone hover:text-ink transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
