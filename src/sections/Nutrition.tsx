import { motion } from "framer-motion";
import Can from "../components/Can";

const stats = [
  { label: "Potassium", value: "245", unit: "mg" },
  { label: "Calcium", value: "500", unit: "mg" },
  { label: "Vitamin A", value: "176", unit: "mcg" },
  { label: "Vitamin D", value: "5", unit: "mcg" },
  { label: "Iron", value: "1", unit: "mg" },
];

export default function Nutrition() {
  return (
    <section className="relative w-full bg-[#f3e7d4] overflow-hidden py-24 md:py-32">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* heading + sidenote */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display uppercase text-dark-brown text-[12vw] md:text-[6vw] leading-[0.92]">
            Built for
            <br />
            <span className="inline-block bg-middle-brown text-milk px-4 -rotate-[2deg]">
              your body
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-dark-brown/80 text-sm md:text-base max-w-xs md:justify-self-end text-right"
        >
          A complete pour — protein, slow-release caffeine, plus the
          micronutrients your body looks for. Lactose-free, every can.
        </motion.p>
      </div>

      {/* product + glass composition */}
      <div className="relative max-w-[1200px] mx-auto px-6 mt-16 flex items-end justify-center gap-2 md:gap-8 min-h-[420px]">
        {/* waffle cone garnish */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-9xl"
          aria-hidden="true"
        >
          🍦
        </motion.div>

        {/* the hero can */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="w-[14rem] md:w-[20rem] text-[#e3d3b8]"
        >
          <Can
            gradient="from-[#e3d3b8] to-milk"
            splash="#a26833"
            flavor="VANILLA"
            label="core"
          />
        </motion.div>

        {/* glass of milk */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-[7rem] md:w-[10rem] h-[14rem] md:h-[20rem] bg-gradient-to-b from-[#fdf6ea] to-[#f0e3cd] rounded-b-[3rem] rounded-t-md border-2 border-white/60 shadow-lg"
        >
          {/* fluted vertical lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="absolute top-2 bottom-2 w-px bg-white/60"
              style={{ left: `${10 + i * 11}%` }}
            />
          ))}
        </motion.div>
      </div>

      {/* stat pill */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-[1200px] mx-auto px-6 md:px-10 mt-8 md:mt-12"
      >
        <div className="bg-milk rounded-full shadow-xl px-6 md:px-12 py-5 md:py-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-2">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center border-r last:border-r-0 border-dark-brown/15 px-2"
            >
              <span className="text-dark-brown/70 text-xs md:text-sm font-medium">
                {s.label}
              </span>
              <span className="text-dark-brown/50 text-[10px] md:text-xs mt-1">
                up to
              </span>
              <span className="font-display text-dark-brown text-2xl md:text-3xl mt-1">
                {s.value}
                <span className="text-base md:text-lg ml-0.5">{s.unit}</span>
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
