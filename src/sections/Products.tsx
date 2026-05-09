import { motion } from "framer-motion";

type Flavor = {
  name: string;
  slug: string;
  image: string;
  /** Tailwind classes for the card backdrop tint visible behind the product shot */
  tint: string;
  blurb: string;
};

const flavors: Flavor[] = [
  {
    name: "Chocolate",
    slug: "chocolate",
    image: "/products/chocolate.png",
    tint: "from-[#a26833]/30 to-[#523122]/15",
    blurb: "Deep cocoa, real chocolate chunks — the everyday classic.",
  },
  {
    name: "Vanilla",
    slug: "vanilla",
    image: "/products/vanilla.png",
    tint: "from-[#e3d3b8]/45 to-[#a26833]/15",
    blurb: "Soft vanilla bean, golden wafer crunch — light and clean.",
  },
  {
    name: "Cookies & Cream",
    slug: "cookies-cream",
    image: "/products/cookies-cream.png",
    tint: "from-[#1f3d6b]/30 to-[#3a6bb0]/15",
    blurb: "Cookie pieces folded into vanilla cream — childhood, leveled up.",
  },
];

export default function Products() {
  return (
    <section id="flavors" className="relative w-full bg-milk py-24 md:py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* heading */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block uppercase tracking-[0.25em] text-xs md:text-sm text-middle-brown font-display"
          >
            Pick your bar
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="mt-3 font-display uppercase text-dark-brown text-[12vw] md:text-[5.5vw] leading-[0.95]"
          >
            Three flavors,
            <br />
            <span className="inline-block bg-middle-brown text-milk px-4 -rotate-[2deg]">
              zero gluten.
            </span>
          </motion.h2>
        </div>

        {/* 3-up grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {flavors.map((f, i) => (
            <FlavorCard key={f.slug} flavor={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlavorCard({ flavor, index }: { flavor: Flavor; index: number }) {
  return (
    <motion.a
      href={`#${flavor.slug}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -10 }}
      className="group relative block rounded-[2rem] overflow-hidden cursor-pointer"
    >
      {/* tint backdrop — animates color saturation on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${flavor.tint} transition-all duration-500 group-hover:saturate-150`}
      />

      {/* subtle drip texture overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <path
            d="M0 120 Q 80 80 160 120 T 320 120 T 480 110 T 640 130 T 800 115 L 800 220 Q 720 200 640 220 T 480 215 T 320 235 T 160 220 T 0 240 Z"
            fill="white"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* product image with hover zoom + tilt */}
      <div className="relative aspect-[4/3] flex items-center justify-center p-6">
        <motion.img
          src={flavor.image}
          alt={`Clear Core ${flavor.name} protein bar`}
          loading="lazy"
          className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 drop-shadow-2xl"
        />
      </div>

      {/* label band — slides up on hover */}
      <div className="relative bg-dark-brown/95 text-milk px-6 py-5 flex items-center justify-between transition-colors duration-500 group-hover:bg-light-brown group-hover:text-dark-brown">
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
    </motion.a>
  );
}
