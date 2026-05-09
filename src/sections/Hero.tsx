import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Can from "../components/Can";

gsap.registerPlugin(ScrollTrigger);

type FloatingCan = {
  className: string;
  rotate: number;
  text: { color: string; fill: string };
  gradient: string;
  splash: string;
  flavor: string;
  opacity?: number;
};

const cans: FloatingCan[] = [
  {
    className: "top-[6%] left-[8%] w-[7rem] md:w-[10rem] text-light-brown/70",
    rotate: -18,
    text: { color: "text-light-brown", fill: "#a26833" },
    gradient: "from-light-brown to-middle-brown",
    splash: "#7a4520",
    flavor: "VANILLA",
    opacity: 0.55,
  },
  {
    className: "top-[14%] right-[4%] w-[8rem] md:w-[12rem] text-middle-brown",
    rotate: 22,
    text: { color: "text-middle-brown", fill: "#a26833" },
    gradient: "from-middle-brown to-dark-brown",
    splash: "#523122",
    flavor: "MOCHA",
    opacity: 0.6,
  },
  {
    className: "bottom-[2%] left-[18%] w-[8rem] md:w-[11rem] text-red/80",
    rotate: -28,
    text: { color: "text-red", fill: "#a02128" },
    gradient: "from-red to-light-brown",
    splash: "#7a151b",
    flavor: "STRAWBERRY",
    opacity: 0.7,
  },
  {
    className: "bottom-[8%] right-[12%] w-[9rem] md:w-[12rem] text-dark-brown",
    rotate: 14,
    text: { color: "text-dark-brown", fill: "#523122" },
    gradient: "from-dark-brown to-middle-brown",
    splash: "#3a2014",
    flavor: "CHOCOLATE",
    opacity: 0.75,
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroLeftCan = useRef<HTMLDivElement>(null);
  const heroRightCan = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating cans gently drift with scroll (parallax)
      gsap.utils.toArray<HTMLElement>(".float-can").forEach((el, i) => {
        const speed = 0.3 + (i % 3) * 0.2;
        gsap.to(el, {
          y: () => -window.innerHeight * speed * 0.3,
          rotate: `+=${(i % 2 === 0 ? 1 : -1) * 12}`,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Hero foreground cans rotate inward slightly on scroll
      [heroLeftCan, heroRightCan].forEach((ref, i) => {
        if (!ref.current) return;
        gsap.to(ref.current, {
          rotate: i === 0 ? 8 : -10,
          y: 60,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-milk"
    >
      {/* background floating cans */}
      {cans.map((c, i) => (
        <div
          key={i}
          className={`float-can absolute ${c.className} blur-[2px]`}
          style={{
            transform: `rotate(${c.rotate}deg)`,
            opacity: c.opacity ?? 0.6,
          }}
        >
          <Can
            gradient={c.gradient}
            splash={c.splash}
            flavor={c.flavor}
            label="core"
          />
        </div>
      ))}

      {/* foreground composition */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        {/* left foreground can */}
        <motion.div
          ref={heroLeftCan}
          initial={{ x: -200, opacity: 0, rotate: -30 }}
          animate={{ x: 0, opacity: 1, rotate: -18 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block absolute left-[4%] top-1/2 -translate-y-1/2 w-[18rem] lg:w-[22rem] text-red"
        >
          <Can
            gradient="from-red to-light-brown"
            splash="#7a151b"
            flavor="STRAWBERRY"
            label="core"
          />
        </motion.div>

        {/* right foreground can */}
        <motion.div
          ref={heroRightCan}
          initial={{ x: 200, opacity: 0, rotate: 30 }}
          animate={{ x: 0, opacity: 1, rotate: 18 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="hidden md:block absolute right-[4%] top-1/2 -translate-y-1/2 w-[18rem] lg:w-[22rem] text-middle-brown"
        >
          <Can
            gradient="from-middle-brown to-dark-brown"
            splash="#523122"
            flavor="CHOCOLATE"
            label="core"
          />
        </motion.div>

        {/* headline */}
        <div className="relative z-20 text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="font-display text-dark-brown text-[12vw] md:text-[7.9vw] leading-[0.95] tracking-tight"
          >
            EXTRAORDINARILY GOOD
          </motion.h1>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
            className="inline-block bg-middle-brown px-6 py-2 -mt-3 md:-mt-6 rotate-[-2deg]"
          >
            <h1 className="font-display text-milk text-[12vw] md:text-[7.9vw] leading-[0.95] tracking-tight">
              PROTEIN + CAFFEINE
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 text-dark-brown/85 text-sm md:text-base max-w-md mx-auto leading-relaxed"
          >
            Clean fuel for the days that demand more — smooth protein, bright caffeine, zero compromise.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 bg-light-brown text-dark-brown font-display tracking-[0.18em] uppercase text-sm px-10 py-4 rounded-full shadow-lg"
          >
            Grab a Core
          </motion.button>
        </div>
      </div>
    </section>
  );
}
