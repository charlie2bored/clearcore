import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Type-poster hero.
 *
 * Drops the 2024-era D2C-snack template (split layout, sticker
 * badges around a centered product, scattered sparkle doodles).
 * The composition now reads like a magazine cover or a screen-print
 * poster: the headline fills the viewport, and the product bleeds
 * off the right edge as a single dramatic prop instead of a
 * pedestaled hero shot.
 */
export default function Hero() {
  return (
    <section className="relative w-full bg-cream min-h-[92vh] md:min-h-[100vh] overflow-hidden flex flex-col">
      {/* atmospheric cherry blob — kept low and large so the type sits over warmth */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-40 w-[44rem] h-[44rem] rounded-full bg-cherry/12 blur-3xl"
      />

      {/* the bar — large, dramatic, bleeds off the right edge */}
      <motion.img
        src="/products/chocolate.png"
        alt="Clear Core chocolate protein bar"
        initial={{ opacity: 0, x: 200, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: -16 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 16,
          delay: 0.2,
        }}
        className="absolute pointer-events-none select-none drop-shadow-[0_30px_80px_rgba(26,26,26,0.18)]
          right-[-22%] sm:right-[-18%] md:right-[-12%] lg:right-[-8%]
          top-1/2 -translate-y-1/2
          w-[110%] sm:w-[90%] md:w-[75%] lg:w-[62%] xl:w-[58%]
          max-w-none
          opacity-95"
      />

      {/* foreground type composition */}
      <div className="relative flex-1 max-w-[1500px] mx-auto w-full px-6 md:px-12 pt-28 md:pt-32 pb-12 flex flex-col justify-between">
        {/* handwritten eyebrow, anchored top-left, NOT centered with the headline.
            Asymmetry on purpose — it reads like a margin note. */}
        <motion.div
          initial={{ opacity: 0, rotate: -10, y: -10 }}
          animate={{ opacity: 1, rotate: -4, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
          className="font-script text-cherry text-2xl md:text-3xl inline-block self-start"
        >
          psst — we made this <span aria-hidden="true">✦</span>
        </motion.div>

        {/* HEADLINE — fills the viewport like a poster, not a column.
            Stack of short lines with one Caveat accent. The bar bleeds in
            from the right behind the type, so right-side lines feel
            intentionally interrupted. */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative z-10 mt-6 md:mt-0 font-display font-bold text-ink leading-[0.88] tracking-[-0.03em]
            text-[18vw] md:text-[14vw] lg:text-[11vw] xl:text-[10vw]
            mix-blend-multiply"
        >
          <span className="block">A protein</span>
          <span className="block">bar that</span>
          <span className="block">finally tastes</span>
          <span className="block">
            like{" "}
            <span className="font-script font-bold text-cherry not-italic inline-block -rotate-3 ml-1">
              food.
            </span>
          </span>
        </motion.h1>

        {/* small bottom row: single CTA pill + metadata strip.
            Replaces the previous primary+secondary CTA pair so the hero
            doesn't have two competing buttons. */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="relative z-10 mt-10 md:mt-12 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8"
        >
          <Link
            to="/flavors"
            className="group inline-flex items-center gap-2 bg-cherry text-cream font-display font-bold uppercase text-sm tracking-tight px-7 py-4 rounded-full border-[3px] border-ink shadow-[4px_4px_0_0_var(--color-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_var(--color-ink)] transition-all"
          >
            Try a Bar
            <span
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>

          {/* spec strip — replaces the sticker badges as the
              "what's important about this product" callout */}
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 font-display font-semibold uppercase tracking-tight text-xs md:text-sm text-ink/80">
            <li>Gluten free</li>
            <li aria-hidden="true" className="text-cherry">
              ●
            </li>
            <li>20g protein</li>
            <li aria-hidden="true" className="text-cherry">
              ●
            </li>
            <li>Made in small batches</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
