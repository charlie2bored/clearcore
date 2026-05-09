import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Real ingredients",
    body: "Short ingredient lists, recognizable names. If it doesn't belong on a kitchen shelf, it doesn't belong in a Clear Core bar.",
  },
  {
    title: "Honest macros",
    body: "20g of complete protein, 5g of fiber, and only the sweetness the recipe needs — never engineered to hit a marketing number.",
  },
  {
    title: "Made for daily life",
    body: "Engineered to travel well, stay soft in the cold, and not melt in your bag. Built for the gym, the trailhead, and the 3pm slump.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-bone">
        <div className="max-w-[1200px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="block uppercase tracking-[0.3em] text-xs md:text-sm text-sage font-display"
          >
            Our story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-3 font-display uppercase text-ink text-[14vw] md:text-[7vw] leading-[0.95]"
          >
            Built by people
            <br />
            <span className="inline-block bg-sage text-bone px-4 -rotate-[2deg]">
              who eat them.
            </span>
          </motion.h1>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-28 bg-bone">
        <div className="max-w-[900px] mx-auto space-y-6 text-ink/85 text-base md:text-lg leading-relaxed">
          <p>
            Clear Core started in a kitchen, not a lab. We were tired of
            protein bars that read like chemistry homework and tasted like
            cardboard. So we built our own — short ingredient lists, real
            chocolate, real protein, and a texture that doesn't snap your
            teeth.
          </p>
          <p>
            Every bar is gluten-free by default, made in small runs, and tested
            against one rule: would you actually eat this on a Tuesday at 4pm?
            If the answer is no, the recipe goes back.
          </p>
          <p>
            Three flavors today. More on the way. Same standards.
          </p>
        </div>
      </section>

      {/* values */}
      <section className="bg-[#e8e3d2] py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-display uppercase text-ink text-[10vw] md:text-[4vw] leading-[0.95] text-center mb-14">
            What we won't compromise on.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-bone rounded-3xl p-8 border border-ink/10"
              >
                <span className="font-display text-5xl text-mist">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display uppercase text-2xl text-ink">
                  {v.title}
                </h3>
                <p className="mt-3 text-ink/75">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="bg-ink text-bone text-center py-20 md:py-28 px-6">
        <h2 className="font-display uppercase text-[10vw] md:text-[5vw] leading-[0.95]">
          Try one yourself.
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/flavors"
            className="inline-block bg-mist text-ink font-display tracking-[0.18em] uppercase text-sm px-10 py-4 rounded-full hover:bg-bone transition-colors"
          >
            See the flavors
          </Link>
          <Link
            to="/stores"
            className="inline-block border border-bone text-bone font-display tracking-[0.18em] uppercase text-sm px-10 py-4 rounded-full hover:bg-bone hover:text-ink transition-colors"
          >
            Find In Stores
          </Link>
        </div>
      </section>
    </>
  );
}
