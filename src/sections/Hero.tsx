import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Snack Mix hero.
 *
 * Editorial split kept (asymmetric 5/7 grid + single product), but the
 * voice flips from clinical lab-notebook to playful sticker pack:
 * handwritten Caveat eyebrow, chunky Bricolage headline, sticker badges
 * with bouncy spring motion replacing the thin annotation lines.
 */
export default function Hero() {
  return (
    <section className="relative w-full bg-cream overflow-hidden pt-28 md:pt-32 pb-20 md:pb-28 px-6 md:px-12">
      {/* Soft tangerine wash blob in the background — adds warmth without
          re-introducing the reference's drip-splash motif. */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-tangerine/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-32 w-[36rem] h-[36rem] rounded-full bg-mint/30 blur-3xl"
      />

      <div className="relative max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* LEFT — text column */}
        <div className="lg:col-span-5 relative">
          {/* handwritten eyebrow */}
          <motion.div
            initial={{ opacity: 0, rotate: -8, y: -10 }}
            animate={{ opacity: 1, rotate: -3, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 14,
              delay: 0.1,
            }}
            className="font-script text-cherry text-2xl md:text-3xl inline-block"
          >
            psst — we made this <span aria-hidden="true">✦</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="mt-4 font-display font-bold text-ink text-[12vw] md:text-[6vw] lg:text-[5vw] leading-[0.92] tracking-[-0.025em]"
          >
            A protein bar that finally{" "}
            <span className="font-script font-bold text-cherry not-italic inline-block -rotate-2 mx-1">
              tastes
            </span>{" "}
            like food.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-md text-ink/80 text-base md:text-lg leading-relaxed"
          >
            Real chocolate. Real protein. Zero gluten and zero things you
            can't pronounce. Made for snack o'clock — whatever time that is
            for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link
              to="/flavors"
              className="group inline-flex items-center gap-2 bg-cherry text-cream font-display font-bold uppercase text-sm tracking-tight px-7 py-4 rounded-full border-[3px] border-ink shadow-[4px_4px_0_0_var(--color-ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_var(--color-ink)] transition-all"
            >
              Try a Bar
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
            <Link
              to="/flavors/chocolate"
              className="font-script text-ink/80 text-xl hover:text-cherry transition-colors underline decoration-wavy decoration-tangerine underline-offset-4"
            >
              or peek the ingredients
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — product + stickers */}
        <div className="lg:col-span-7 relative aspect-[4/5] md:aspect-[3/2] lg:aspect-square w-full">
          {/* product image */}
          <motion.img
            src="/products/chocolate.png"
            alt="Clear Core chocolate protein bar"
            initial={{ opacity: 0, scale: 0.85, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 14,
              delay: 0.25,
            }}
            className="absolute inset-0 m-auto w-[78%] h-auto object-contain drop-shadow-[0_30px_60px_rgba(26,26,26,0.18)]"
          />

          {/* doodle scribbles in Caveat */}
          <DoodleAccent
            className="top-[6%] left-[20%] text-tangerine"
            char="✦"
            delay={1.2}
          />
          <DoodleAccent
            className="top-[18%] right-[24%] text-cherry"
            char="✸"
            delay={1.4}
          />
          <DoodleAccent
            className="bottom-[14%] left-[26%] text-sky"
            char="✶"
            delay={1.5}
          />

          {/* sticker badges — replaces the annotation lines */}
          <Sticker
            className="top-[8%] left-[2%]"
            bg="bg-cherry"
            text="text-cream"
            rotate="-8deg"
            delay={0.6}
          >
            20g protein
          </Sticker>
          <Sticker
            className="top-[10%] right-[2%]"
            bg="bg-tangerine"
            text="text-ink"
            rotate="6deg"
            delay={0.75}
          >
            gluten free
          </Sticker>
          <Sticker
            className="bottom-[18%] left-[3%]"
            bg="bg-sky"
            text="text-cream"
            rotate="-4deg"
            delay={0.9}
          >
            real chocolate
          </Sticker>
          <Sticker
            className="bottom-[8%] right-[5%]"
            bg="bg-butter"
            text="text-ink"
            rotate="10deg"
            delay={1.05}
          >
            5g fiber
          </Sticker>
        </div>
      </div>
    </section>
  );
}

/**
 * Sticker badge — chunky border, bright fill, offset shadow, rotation.
 * Springs in with a small wobble; hover gives a subtle lift.
 */
function Sticker({
  children,
  className,
  bg,
  text,
  rotate,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  bg: string;
  text: string;
  rotate: string;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.4, rotate: 0 }}
      animate={{ opacity: 1, scale: 1, rotate: parseFloat(rotate) }}
      whileHover={{ rotate: parseFloat(rotate) + 4, scale: 1.06 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 12,
        delay,
      }}
      className={`absolute hidden md:inline-flex items-center font-display font-bold uppercase tracking-tight text-sm md:text-base px-4 py-2 rounded-full border-[3px] border-ink shadow-[3px_3px_0_0_var(--color-ink)] cursor-default select-none ${bg} ${text} ${className ?? ""}`}
    >
      {children}
    </motion.span>
  );
}

/** Sparkle/asterisk doodle in handwritten Caveat */
function DoodleAccent({
  char,
  className,
  delay = 0,
}: {
  char: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0, rotate: -90 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay,
      }}
      className={`absolute hidden md:inline-block font-script text-3xl md:text-5xl pointer-events-none select-none ${className ?? ""}`}
      aria-hidden="true"
    >
      {char}
    </motion.span>
  );
}
