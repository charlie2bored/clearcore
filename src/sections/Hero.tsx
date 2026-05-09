import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FloatingBar = {
  src: string;
  className: string;
  rotate: number;
  opacity?: number;
  blur?: string;
};

const floatingBars: FloatingBar[] = [
  {
    src: "/products/chocolate.png",
    className: "top-[6%] left-[6%] w-[10rem] md:w-[14rem]",
    rotate: -22,
    opacity: 0.55,
    blur: "blur-[1.5px]",
  },
  {
    src: "/products/vanilla.png",
    className: "top-[14%] right-[3%] w-[12rem] md:w-[16rem]",
    rotate: 18,
    opacity: 0.6,
    blur: "blur-[1.5px]",
  },
  {
    src: "/products/cookies-cream.png",
    className: "bottom-[4%] left-[14%] w-[11rem] md:w-[15rem]",
    rotate: -28,
    opacity: 0.7,
    blur: "blur-[1px]",
  },
  {
    src: "/products/chocolate.png",
    className: "bottom-[8%] right-[8%] w-[11rem] md:w-[15rem]",
    rotate: 24,
    opacity: 0.7,
    blur: "blur-[1px]",
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroLeftBar = useRef<HTMLDivElement>(null);
  const heroRightBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating bars drift gently with scroll
      gsap.utils.toArray<HTMLElement>(".float-bar").forEach((el, i) => {
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

      // Foreground bars rotate inward slightly on scroll
      [heroLeftBar, heroRightBar].forEach((ref, i) => {
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
      className="relative min-h-screen w-full overflow-hidden bg-bone pt-24"
    >
      {/* background floating bars */}
      {floatingBars.map((b, i) => (
        <img
          key={i}
          src={b.src}
          alt=""
          aria-hidden="true"
          loading="eager"
          className={`float-bar absolute ${b.className} ${b.blur ?? ""} pointer-events-none`}
          style={{
            transform: `rotate(${b.rotate}deg)`,
            opacity: b.opacity ?? 0.6,
          }}
        />
      ))}

      {/* foreground composition */}
      <div className="relative z-10 min-h-[calc(100vh-6rem)] flex items-center justify-center px-6">
        {/* left foreground bar */}
        <motion.img
          ref={heroLeftBar as unknown as React.RefObject<HTMLImageElement>}
          src="/products/chocolate.png"
          alt="Clear Core chocolate protein bar"
          initial={{ x: -200, opacity: 0, rotate: -30 }}
          animate={{ x: 0, opacity: 1, rotate: -16 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block absolute left-[2%] top-1/2 -translate-y-1/2 w-[22rem] lg:w-[28rem] drop-shadow-2xl"
        />

        {/* right foreground bar */}
        <motion.img
          ref={heroRightBar as unknown as React.RefObject<HTMLImageElement>}
          src="/products/vanilla.png"
          alt="Clear Core vanilla protein bar"
          initial={{ x: 200, opacity: 0, rotate: 30 }}
          animate={{ x: 0, opacity: 1, rotate: 16 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="hidden md:block absolute right-[2%] top-1/2 -translate-y-1/2 w-[22rem] lg:w-[28rem] drop-shadow-2xl"
        />

        {/* headline */}
        <div className="relative z-20 text-center max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block uppercase tracking-[0.3em] text-xs md:text-sm text-sage font-display"
          >
            Gluten Free · 20g Protein
          </motion.span>

          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="mt-3 font-display text-ink text-[14vw] md:text-[8vw] leading-[0.95] tracking-tight"
          >
            Real Food.
          </motion.h1>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="inline-block bg-sage px-6 py-2 -mt-3 md:-mt-6 rotate-[-2deg]"
          >
            <h1 className="font-display text-bone text-[14vw] md:text-[8vw] leading-[0.95] tracking-tight">
              Honest Fuel.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 text-ink/85 text-sm md:text-base max-w-md mx-auto leading-relaxed"
          >
            Clear Core is a gluten-free protein bar built from real ingredients —
            20g of protein, no shortcuts, made for the days that demand more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-block"
          >
            <Link
              to="/flavors"
              className="inline-block bg-mist text-ink font-display tracking-[0.18em] uppercase text-sm px-10 py-4 rounded-full shadow-lg hover:bg-ink hover:text-bone transition-colors"
            >
              Try a Bar
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
