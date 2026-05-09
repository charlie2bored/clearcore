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
    <footer className="bg-dark-brown text-milk">
      {/* big call-to-action band */}
      <div className="px-6 md:px-12 py-20 md:py-28 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="font-display uppercase text-[10vw] md:text-[5.5vw] leading-[0.95]"
        >
          Find a bar
          <br />
          <span className="inline-block bg-light-brown text-dark-brown px-4 -rotate-[2deg]">
            near you
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10"
        >
          <Link
            to="/stores"
            className="inline-block bg-milk text-dark-brown font-display tracking-[0.18em] uppercase text-sm px-10 py-4 rounded-full hover:bg-light-brown transition-colors"
          >
            Find In Stores
          </Link>
        </motion.div>
      </div>

      {/* base bar */}
      <div className="border-t border-milk/15 px-6 md:px-12 py-8 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between text-xs md:text-sm">
        <Link to="/" className="font-script text-2xl">
          Clear Core
        </Link>
        <nav className="flex gap-6 uppercase tracking-widest text-milk/70">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-milk transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <span className="text-milk/50">
          © {new Date().getFullYear()} Clear Core
        </span>
      </div>
    </footer>
  );
}
