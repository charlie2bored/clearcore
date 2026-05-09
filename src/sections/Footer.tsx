import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/flavors", label: "Flavors" },
  { to: "/stores", label: "Stores" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      {/* big call-to-action band */}
      <div className="relative px-6 md:px-12 py-20 md:py-28 text-center overflow-hidden">
        {/* atmospheric blobs to match the hero treatment */}
        <div
          aria-hidden="true"
          className="absolute -top-40 -left-32 w-[34rem] h-[34rem] rounded-full bg-cherry/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -right-24 w-[30rem] h-[30rem] rounded-full bg-tangerine/15 blur-3xl"
        />

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, rotate: -8, y: -10 }}
            whileInView={{ opacity: 1, rotate: -3, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 220, damping: 14 }}
            className="font-script text-cherry text-2xl md:text-3xl inline-block"
          >
            okay one last thing <span aria-hidden="true">✦</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 font-display font-bold text-[12vw] md:text-[6vw] lg:text-[5.5vw] leading-[0.95] tracking-[-0.025em]"
          >
            Find a bar{" "}
            <span className="font-script font-bold text-cherry not-italic inline-block -rotate-2 mx-1">
              near
            </span>{" "}
            you.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.2 }}
            className="mt-10 inline-block"
          >
            <Link
              to="/stores"
              className="group inline-flex items-center gap-2 bg-cream text-ink font-display font-bold uppercase text-sm tracking-tight px-7 py-4 rounded-full border-[3px] border-cream shadow-[4px_4px_0_0_var(--color-cherry)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_var(--color-cherry)] transition-all"
            >
              Find In Stores
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* base bar */}
      <div className="border-t border-cream/15 px-6 md:px-12 py-8 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between text-xs md:text-sm">
        <Link to="/" className="font-display italic font-semibold text-xl">
          Clear Core
        </Link>
        <nav className="flex gap-6 uppercase tracking-widest text-cream/70">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-cream transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <span className="text-cream/50">
          © {new Date().getFullYear()} Clear Core
        </span>
      </div>
    </footer>
  );
}
