import { motion } from "framer-motion";

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

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 bg-milk text-dark-brown font-display tracking-[0.18em] uppercase text-sm px-10 py-4 rounded-full"
        >
          Find In Stores
        </motion.button>
      </div>

      {/* base bar */}
      <div className="border-t border-milk/15 px-6 md:px-12 py-8 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between text-xs md:text-sm">
        <span className="font-script text-2xl">Clear Core</span>
        <nav className="flex gap-6 uppercase tracking-widest text-milk/70">
          <a href="#" className="hover:text-milk">
            About
          </a>
          <a href="#" className="hover:text-milk">
            Flavors
          </a>
          <a href="#" className="hover:text-milk">
            Stores
          </a>
          <a href="#" className="hover:text-milk">
            Contact
          </a>
        </nav>
        <span className="text-milk/50">
          © {new Date().getFullYear()} Clear Core
        </span>
      </div>
    </footer>
  );
}
