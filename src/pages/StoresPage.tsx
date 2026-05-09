import { motion } from "framer-motion";
import { useState } from "react";

type Store = {
  name: string;
  city: string;
  state: string;
  zip: string;
  address: string;
};

// Placeholder retailer data — replace with the live retailer feed
// when available. Used by the zip lookup demo below.
const stores: Store[] = [
  { name: "Bowery Greens", city: "Brooklyn", state: "NY", zip: "11211", address: "240 Bedford Ave" },
  { name: "North Park Market", city: "Brooklyn", state: "NY", zip: "11215", address: "488 7th Ave" },
  { name: "Coastline Co-op", city: "Manhattan", state: "NY", zip: "10003", address: "1 Union Sq W" },
  { name: "Foothill Foods", city: "Los Angeles", state: "CA", zip: "90026", address: "1525 Echo Park Ave" },
  { name: "Sunset Pantry", city: "Los Angeles", state: "CA", zip: "90028", address: "6531 Sunset Blvd" },
  { name: "Lakeside Grocer", city: "Chicago", state: "IL", zip: "60614", address: "2510 N Halsted St" },
  { name: "Heights Provisions", city: "Austin", state: "TX", zip: "78704", address: "1900 S Lamar Blvd" },
];

export default function StoresPage() {
  const [zip, setZip] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);

  const matches = submitted
    ? stores.filter(
        (s) =>
          s.zip.startsWith(submitted.slice(0, 3)) ||
          s.zip === submitted,
      )
    : [];

  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 px-6 bg-milk">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block uppercase tracking-[0.3em] text-xs md:text-sm text-middle-brown font-display"
          >
            Locations
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-3 font-display uppercase text-dark-brown text-[14vw] md:text-[7vw] leading-[0.95]"
          >
            Find a bar
            <br />
            <span className="inline-block bg-light-brown text-dark-brown px-4 -rotate-[2deg]">
              near you.
            </span>
          </motion.h1>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-28 bg-milk">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(zip.trim());
          }}
          className="max-w-xl mx-auto flex gap-3"
        >
          <label htmlFor="zip" className="sr-only">
            Zip code
          </label>
          <input
            id="zip"
            inputMode="numeric"
            pattern="[0-9]{5}"
            maxLength={5}
            placeholder="Enter ZIP code"
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, ""))}
            className="flex-1 bg-white border border-dark-brown/20 rounded-full px-6 py-4 text-dark-brown placeholder-dark-brown/40 focus:outline-none focus:border-dark-brown"
          />
          <button
            type="submit"
            className="bg-dark-brown text-milk font-display tracking-[0.18em] uppercase text-sm px-6 md:px-8 py-4 rounded-full hover:bg-middle-brown transition-colors"
          >
            Search
          </button>
        </form>

        <div className="max-w-3xl mx-auto mt-12">
          {submitted === null && (
            <p className="text-center text-dark-brown/60 text-sm">
              Enter your ZIP to see nearby stockists.
            </p>
          )}

          {submitted !== null && matches.length === 0 && (
            <div className="text-center bg-[#f3e7d4] rounded-2xl p-10">
              <p className="font-display uppercase text-2xl text-dark-brown">
                No nearby stockists yet.
              </p>
              <p className="mt-3 text-dark-brown/70">
                We're expanding fast — leave us a note and we'll get Clear Core
                into a store near you.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-block bg-dark-brown text-milk font-display tracking-[0.18em] uppercase text-xs px-6 py-3 rounded-full hover:bg-middle-brown transition-colors"
              >
                Request a stockist
              </a>
            </div>
          )}

          {matches.length > 0 && (
            <ul className="space-y-3">
              {matches.map((s) => (
                <li
                  key={`${s.name}-${s.zip}`}
                  className="bg-[#f3e7d4] rounded-2xl px-6 py-5 border border-dark-brown/10 flex items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="font-display uppercase text-lg text-dark-brown">
                      {s.name}
                    </h3>
                    <p className="text-sm text-dark-brown/70">
                      {s.address}, {s.city}, {s.state} {s.zip}
                    </p>
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${s.name} ${s.address} ${s.city} ${s.state}`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-xs uppercase tracking-widest underline text-dark-brown/80 hover:text-dark-brown"
                  >
                    Directions
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
