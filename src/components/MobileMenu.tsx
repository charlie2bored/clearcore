import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/flavors", label: "Flavors" },
  { to: "/about", label: "About" },
  { to: "/stores", label: "Find In Stores" },
  { to: "/contact", label: "Contact" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-40 bg-ink text-cream flex flex-col items-center justify-center"
        >
          <nav className="flex flex-col items-center gap-6 md:gap-8">
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
              >
                <Link
                  to={l.to}
                  onClick={onClose}
                  className="font-display uppercase tracking-tight text-5xl md:text-7xl hover:text-cherry transition-colors"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-10 font-display italic font-semibold text-2xl text-cream/70"
          >
            Clear Core
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
