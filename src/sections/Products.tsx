import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Can from "../components/Can";

gsap.registerPlugin(ScrollTrigger);

type Flavor = {
  name: string;
  slug: string;
  cardBg: string;
  cardAccent: string;
  splash: string;
  gradient: string;
  bodyText: string;
  garnish: string[]; // emoji garnish to float around the card
};

const flavors: Flavor[] = [
  {
    name: "Chocolate",
    slug: "chocolate",
    cardBg: "bg-[#a26833]",
    cardAccent: "text-milk",
    splash: "#523122",
    gradient: "from-dark-brown to-middle-brown",
    bodyText: "text-dark-brown",
    garnish: ["🍫", "🍫", "🍫"],
  },
  {
    name: "Strawberry",
    slug: "strawberry",
    cardBg: "bg-[#a02128]",
    cardAccent: "text-milk",
    splash: "#7a151b",
    gradient: "from-red to-light-brown",
    bodyText: "text-dark-brown",
    garnish: ["🍓", "🍓", "🍓", "🍓"],
  },
  {
    name: "Cookies & Cream",
    slug: "cookies-cream",
    cardBg: "bg-[#1f3d6b]",
    cardAccent: "text-milk",
    splash: "#0f2547",
    gradient: "from-[#1f3d6b] to-[#3a6bb0]",
    bodyText: "text-dark-brown",
    garnish: ["🍪", "🍪", "🍪"],
  },
  {
    name: "Peanut Butter",
    slug: "peanut-butter",
    cardBg: "bg-[#d2691e]",
    cardAccent: "text-milk",
    splash: "#8b3e0a",
    gradient: "from-[#d2691e] to-[#e3a458]",
    bodyText: "text-dark-brown",
    garnish: ["🥜", "🥜", "🥜"],
  },
  {
    name: "Vanilla",
    slug: "vanilla",
    cardBg: "bg-[#e3d3b8]",
    cardAccent: "text-dark-brown",
    splash: "#a26833",
    gradient: "from-[#e3d3b8] to-[#faeade]",
    bodyText: "text-dark-brown",
    garnish: ["🍦", "🍦", "🍦"],
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const totalScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="flavors"
      className="relative h-screen w-full bg-milk overflow-hidden"
    >
      <div
        ref={trackRef}
        className="flex items-center h-full pl-[8vw] gap-[6vw] will-change-transform"
      >
        {/* leading title card */}
        <div className="shrink-0 w-[40vw] flex flex-col justify-center">
          <h2 className="font-display uppercase text-dark-brown text-[8vw] md:text-[5vw] leading-[0.95]">
            Pick your
            <br />
            <span className="text-middle-brown">pour.</span>
          </h2>
          <p className="mt-6 max-w-sm text-dark-brown/70 text-sm md:text-base">
            Five flavors, one mission — clean fuel that actually tastes like
            something you'd reach for twice.
          </p>
        </div>

        {flavors.map((f, i) => (
          <FlavorCard key={f.slug} flavor={f} index={i} />
        ))}

        {/* trailing spacer so last card sits comfortably */}
        <div className="shrink-0 w-[20vw]" aria-hidden="true" />
      </div>
    </section>
  );
}

function FlavorCard({ flavor, index }: { flavor: Flavor; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className={`shrink-0 relative w-[60vw] md:w-[42vw] aspect-[4/3] rounded-[2rem] ${flavor.cardBg} ${flavor.cardAccent} overflow-hidden flex items-center justify-center shadow-2xl`}
    >
      {/* drip texture overlay */}
      <div className="absolute inset-0 opacity-25 mix-blend-overlay">
        <svg viewBox="0 0 800 600" className="w-full h-full">
          <path
            d="M0 120 Q 80 80 160 120 T 320 120 T 480 110 T 640 130 T 800 115 L 800 240 Q 720 200 640 230 T 480 220 T 320 240 T 160 220 T 0 240 Z"
            fill="white"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* floating garnish emoji */}
      {flavor.garnish.map((g, i) => (
        <motion.span
          key={i}
          className="absolute text-4xl md:text-6xl select-none pointer-events-none"
          style={{
            top: `${15 + i * 20}%`,
            left: i % 2 === 0 ? `${8 + i * 6}%` : undefined,
            right: i % 2 === 1 ? `${8 + i * 6}%` : undefined,
          }}
          animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          {g}
        </motion.span>
      ))}

      {/* the can */}
      <div
        className="relative w-[26%] -rotate-[8deg]"
        style={{ color: flavor.splash }}
      >
        <Can
          gradient={flavor.gradient}
          splash={flavor.splash}
          flavor={flavor.name.toUpperCase()}
          label="core"
        />
      </div>

      {/* flavor label */}
      <h3 className="absolute bottom-6 left-8 font-display uppercase text-[6vw] md:text-[3vw] leading-none">
        {flavor.name}
      </h3>
    </motion.div>
  );
}
