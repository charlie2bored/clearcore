import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { flavors, getFlavor } from "../data/flavors";
import NotFoundPage from "./NotFoundPage";

export default function FlavorDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const flavor = slug ? getFlavor(slug) : undefined;

  if (!flavor) return <NotFoundPage />;

  const others = flavors.filter((f) => f.slug !== flavor.slug);

  return (
    <>
      {/* hero band */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6"
        style={{ backgroundColor: flavor.accent }}
      >
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ color: flavor.contrast }}
          >
            <Link
              to="/flavors"
              className="inline-block text-xs uppercase tracking-[0.25em] opacity-70 hover:opacity-100 mb-6"
            >
              ← All flavors
            </Link>
            <span className="block uppercase tracking-[0.3em] text-xs md:text-sm font-display opacity-80">
              Clear Core
            </span>
            <h1 className="mt-2 font-display uppercase text-[14vw] md:text-[8vw] leading-[0.9]">
              {flavor.name}
            </h1>
            <p className="mt-6 max-w-md text-base md:text-lg opacity-90">
              {flavor.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-cream/20 backdrop-blur px-4 py-2 rounded-full text-sm">
                20g Protein
              </span>
              <span className="bg-cream/20 backdrop-blur px-4 py-2 rounded-full text-sm">
                5g Fiber
              </span>
              <span className="bg-cream/20 backdrop-blur px-4 py-2 rounded-full text-sm">
                Gluten Free
              </span>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/stores"
                className="inline-block bg-cream text-ink font-display tracking-[0.18em] uppercase text-sm px-10 py-4 rounded-full hover:bg-ink hover:text-cream transition-colors"
              >
                Find In Stores
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <img
              src={flavor.image}
              alt={`Clear Core ${flavor.name} protein bar`}
              className="w-full max-w-lg drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ingredients */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <span className="inline-block uppercase tracking-[0.25em] text-xs md:text-sm text-cherry font-display">
              What's inside
            </span>
            <h2 className="mt-3 font-display uppercase text-ink text-[10vw] md:text-[4vw] leading-[0.95]">
              No filler.
              <br />
              <span className="inline-block bg-cherry text-cream px-3 -rotate-[2deg]">
                just food.
              </span>
            </h2>
            <p className="mt-6 text-ink/80 max-w-md">
              Every Clear Core bar starts with a short list of recognizable
              ingredients. No mystery sweeteners, no chalky aftertaste — just
              clean protein and the things that go with it.
            </p>
          </div>

          <ul className="space-y-3">
            {flavor.ingredients.map((ing) => (
              <li
                key={ing}
                className="flex items-center gap-4 bg-[#f4ebd0] rounded-2xl px-5 py-4 border border-ink/10"
              >
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: flavor.accent }}
                />
                <span className="text-ink font-medium">{ing}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* other flavors */}
      <section className="py-20 md:py-28 px-6 bg-[#f4ebd0]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display uppercase text-ink text-[10vw] md:text-[4vw] leading-[0.95] text-center mb-12">
            Try the others
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/flavors/${o.slug}`}
                className={`group relative rounded-[2rem] overflow-hidden bg-gradient-to-br ${o.tint} aspect-[3/2] flex items-center justify-center transition-transform hover:-translate-y-2`}
              >
                <img
                  src={o.image}
                  alt={`Clear Core ${o.name}`}
                  className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                />
                <span className="absolute bottom-5 left-6 font-display uppercase text-2xl text-ink">
                  {o.name}
                </span>
                <span className="absolute bottom-5 right-6 w-10 h-10 rounded-full border border-ink/40 flex items-center justify-center text-ink transition-transform group-hover:rotate-45">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
