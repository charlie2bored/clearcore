import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between pointer-events-none"
    >
      {/* wordmark */}
      <a
        href="/"
        className="font-script text-3xl md:text-4xl text-dark-brown pointer-events-auto select-none"
      >
        Clear Core
      </a>

      {/* hamburger */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open menu"
        className="pointer-events-auto p-3 flex flex-col gap-1.5 items-center justify-center"
      >
        <span
          className={`block h-[2px] w-7 bg-dark-brown transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
        />
        <span
          className={`block h-[2px] w-7 bg-dark-brown transition-opacity ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-[2px] w-7 bg-dark-brown transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
        />
      </button>

      {/* CTA pill */}
      <a
        href="#stores"
        className="pointer-events-auto bg-milk border border-dark-brown/10 text-dark-brown text-xs md:text-sm font-display tracking-[0.15em] uppercase px-5 md:px-6 py-3 rounded-full hover:bg-dark-brown hover:text-milk transition-colors"
      >
        Find In Stores
      </a>
    </motion.header>
  );
}
