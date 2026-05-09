import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Editorial-split hero.
 *
 * Replaces the previous floating-products composition with a fundamentally
 * different geometry: asymmetric two-column grid, single product photo,
 * mixed-case serif headline, and spec-sheet annotation callouts pointing
 * to the bar — a "lab notebook" signature unique to Clear Core.
 */
export default function Hero() {
  return (
    <section className="relative w-full bg-bone overflow-hidden pt-28 md:pt-32 pb-20 md:pb-28 px-6 md:px-12">
      {/* Thin clay rule running across the section like a notebook divider */}
      <div className="absolute top-24 left-0 right-0 h-px bg-ink/10" aria-hidden="true" />

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* LEFT — text column (5 of 12) */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-ink/60"
          >
            <span className="text-clay">●</span>{" "}
            <span>No. 01 — Gluten-Free Protein Bar</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-6 font-display font-normal text-ink text-[10vw] md:text-[5.5vw] lg:text-[4.5vw] leading-[1.0] tracking-[-0.02em]"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            A protein bar that finally <em className="italic font-normal text-sage">tastes</em> like food.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-7 max-w-md text-ink/75 text-base md:text-lg leading-relaxed"
          >
            Slow-roasted cocoa, real chocolate, twenty grams of complete protein.
            No mystery sweeteners, no chalky aftertaste — just a short list of
            ingredients you'd put in your own pantry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6"
          >
            <Link
              to="/flavors"
              className="inline-flex items-center gap-2 bg-ink text-bone font-mono text-xs tracking-[0.2em] uppercase px-7 py-4 rounded-full hover:bg-sage transition-colors"
            >
              Try a Bar
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              to="/flavors/chocolate"
              className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-ink/70 underline underline-offset-4 decoration-ink/30 hover:text-ink hover:decoration-ink"
            >
              Read the ingredients
            </Link>
          </motion.div>

          {/* Tiny footnote-style metadata, very lab-notebook */}
          <div className="hidden md:block absolute -bottom-12 left-0 font-mono text-[10px] tracking-[0.18em] uppercase text-ink/40">
            Made in small batches · Brooklyn, NY
          </div>
        </div>

        {/* RIGHT — product + annotations column (7 of 12) */}
        <div className="lg:col-span-7 relative aspect-[4/5] md:aspect-[3/2] lg:aspect-square w-full">
          {/* product image */}
          <motion.img
            src="/products/chocolate.png"
            alt="Clear Core chocolate protein bar"
            initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute inset-0 m-auto w-[78%] h-auto object-contain drop-shadow-[0_30px_60px_rgba(26,26,26,0.18)]"
          />

          {/* Spec-sheet annotation callouts */}
          <Annotation
            label="20g protein"
            note="Whey + milk blend"
            position="top-left"
            delay={0.7}
          />
          <Annotation
            label="real chocolate"
            note="Dutch-processed cocoa"
            position="top-right"
            delay={0.85}
          />
          <Annotation
            label="5g fiber"
            note="From tapioca + nuts"
            position="bottom-left"
            delay={1.0}
          />
          <Annotation
            label="gluten free"
            note="Every batch tested"
            position="bottom-right"
            delay={1.15}
          />

          {/* Index marker, top-right of frame */}
          <div className="absolute top-0 right-0 font-mono text-[10px] tracking-[0.2em] uppercase text-ink/40 hidden md:block">
            Fig. 01 / Chocolate
          </div>
        </div>
      </div>
    </section>
  );
}

type AnnotationPos = "top-left" | "top-right" | "bottom-left" | "bottom-right";

/**
 * Spec-sheet annotation: small dot near the product, thin connector line,
 * and a two-line mono caps label. Position prop controls which corner of
 * the parent the annotation sits in (and which way the line points).
 */
function Annotation({
  label,
  note,
  position,
  delay = 0,
}: {
  label: string;
  note: string;
  position: AnnotationPos;
  delay?: number;
}) {
  // map of corner placement + flex direction so dot sits toward the bar
  const layout = {
    "top-left": {
      wrap: "top-[8%] left-[2%] flex-row items-center",
      line: "w-10 md:w-16 border-t",
      order: ["dot", "line", "text"] as const,
      textAlign: "text-left",
    },
    "top-right": {
      wrap: "top-[12%] right-[2%] flex-row-reverse items-center",
      line: "w-10 md:w-16 border-t",
      order: ["dot", "line", "text"] as const,
      textAlign: "text-right",
    },
    "bottom-left": {
      wrap: "bottom-[12%] left-[2%] flex-row items-center",
      line: "w-10 md:w-16 border-t",
      order: ["dot", "line", "text"] as const,
      textAlign: "text-left",
    },
    "bottom-right": {
      wrap: "bottom-[8%] right-[2%] flex-row-reverse items-center",
      line: "w-10 md:w-16 border-t",
      order: ["dot", "line", "text"] as const,
      textAlign: "text-right",
    },
  }[position];

  return (
    <motion.div
      initial={{ opacity: 0, x: position.includes("right") ? 12 : -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`absolute hidden md:flex gap-3 ${layout.wrap}`}
    >
      {/* dot */}
      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-clay" />
      {/* line */}
      <span className={`${layout.line} border-ink/30 shrink-0`} />
      {/* label */}
      <div className={`${layout.textAlign}`}>
        <div className="font-mono text-[10px] md:text-xs tracking-[0.18em] uppercase text-ink whitespace-nowrap">
          {label}
        </div>
        <div className="font-mono text-[9px] md:text-[10px] tracking-[0.1em] text-ink/50 mt-0.5 whitespace-nowrap">
          {note}
        </div>
      </div>
    </motion.div>
  );
}
