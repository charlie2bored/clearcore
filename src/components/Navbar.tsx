import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between pointer-events-none"
      >
        {/* wordmark */}
        <Link
          to="/"
          className={`font-script text-3xl md:text-4xl pointer-events-auto select-none transition-colors ${
            open ? "text-milk" : "text-dark-brown"
          }`}
        >
          Clear Core
        </Link>

        {/* hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="pointer-events-auto p-3 flex flex-col gap-1.5 items-center justify-center"
        >
          <span
            className={`block h-[2px] w-7 transition-all ${
              open
                ? "translate-y-[7px] rotate-45 bg-milk"
                : "bg-dark-brown"
            }`}
          />
          <span
            className={`block h-[2px] w-7 transition-opacity ${
              open ? "opacity-0 bg-milk" : "bg-dark-brown"
            }`}
          />
          <span
            className={`block h-[2px] w-7 transition-all ${
              open
                ? "-translate-y-[7px] -rotate-45 bg-milk"
                : "bg-dark-brown"
            }`}
          />
        </button>

        {/* CTA pill */}
        <Link
          to="/stores"
          className={`pointer-events-auto border text-xs md:text-sm font-display tracking-[0.15em] uppercase px-5 md:px-6 py-3 rounded-full transition-colors ${
            open
              ? "bg-transparent border-milk text-milk hover:bg-milk hover:text-dark-brown"
              : "bg-milk border-dark-brown/10 text-dark-brown hover:bg-dark-brown hover:text-milk"
          }`}
        >
          Find In Stores
        </Link>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
