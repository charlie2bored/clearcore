import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Flavor } from "../data/flavors";

export default function FlavorCard({
  flavor,
  index = 0,
}: {
  flavor: Flavor;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -10 }}
    >
      <Link
        to={`/flavors/${flavor.slug}`}
        className="group relative block rounded-[2rem] overflow-hidden cursor-pointer focus:outline-none focus:ring-4 focus:ring-mist/60"
      >
        {/* tint backdrop */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${flavor.tint} transition-all duration-500 group-hover:saturate-150`}
        />

        {/* drip texture */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none">
          <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <path
              d="M0 120 Q 80 80 160 120 T 320 120 T 480 110 T 640 130 T 800 115 L 800 220 Q 720 200 640 220 T 480 215 T 320 235 T 160 220 T 0 240 Z"
              fill="white"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* product image */}
        <div className="relative aspect-[4/3] flex items-center justify-center p-6">
          <img
            src={flavor.image}
            alt={`Clear Core ${flavor.name} protein bar`}
            loading="lazy"
            className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 drop-shadow-2xl"
          />
        </div>

        {/* label band */}
        <div className="relative bg-ink/95 text-bone px-6 py-5 flex items-center justify-between transition-colors duration-500 group-hover:bg-mist group-hover:text-ink">
          <div className="min-w-0">
            <h3 className="font-display uppercase text-xl md:text-2xl tracking-tight leading-tight">
              {flavor.name}
            </h3>
            <p className="text-xs md:text-sm opacity-80 mt-1 truncate">
              {flavor.blurb}
            </p>
          </div>
          <span
            className="ml-4 shrink-0 w-10 h-10 rounded-full border border-current flex items-center justify-center transition-transform duration-500 group-hover:rotate-45"
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
