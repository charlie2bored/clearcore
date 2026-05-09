import { motion } from "framer-motion";

const callouts = [
  { value: "20g", label: "Protein" },
  { value: "5g", label: "Fiber" },
  { value: "220", label: "Calories" },
  { value: "0g", label: "Trans Fat" },
  { value: "GF", label: "Gluten Free" },
];

export default function Nutrition() {
  return (
    <section
      id="nutrition"
      className="relative w-full bg-[#f4ebd0] overflow-hidden py-24 md:py-32 px-6"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* heading */}
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block uppercase tracking-[0.25em] text-xs md:text-sm text-cherry font-display">
              The fine print
            </span>
            <h2 className="mt-3 font-display uppercase text-ink text-[12vw] md:text-[5.5vw] leading-[0.92]">
              Built clean.
              <br />
              <span className="inline-block bg-cherry text-cream px-4 -rotate-[2deg]">
                Built honest.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-ink/80 text-sm md:text-base max-w-md md:justify-self-end"
          >
            No mystery additives. No filler. Just whole-food protein and the
            micronutrients your body actually uses — all gluten-free, every bar.
          </motion.p>
        </div>

        {/* callout pill */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-cream rounded-full shadow-xl px-6 md:px-12 py-5 md:py-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-2 mb-16"
        >
          {callouts.map((c) => (
            <div
              key={c.label}
              className="flex flex-col items-center text-center border-r last:border-r-0 border-ink/15 px-2"
            >
              <span className="font-display text-ink text-2xl md:text-4xl leading-none">
                {c.value}
              </span>
              <span className="text-ink/70 text-[10px] md:text-xs mt-2 uppercase tracking-wider">
                {c.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* product + facts panel */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <img
              src="/products/chocolate.png"
              alt="Clear Core chocolate protein bar"
              className="w-full max-w-md drop-shadow-2xl rotate-[-4deg]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <NutritionFactsPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * FDA-style Nutrition Facts panel.
 * Values reflect the Clear Core protein bar label (1 bar / 60g serving).
 */
function NutritionFactsPanel() {
  return (
    <div className="bg-cream text-ink rounded-2xl p-6 md:p-8 max-w-md mx-auto md:mx-0 shadow-xl border-2 border-ink font-body">
      <h3 className="font-display text-3xl md:text-4xl tracking-tight uppercase border-b-[6px] border-ink pb-1 mb-2">
        Nutrition Facts
      </h3>
      <div className="text-xs flex justify-between border-b border-ink/40 pb-2 mb-1">
        <span>Serving size</span>
        <span className="font-semibold">1 Bar (60g)</span>
      </div>

      <div className="border-b-[6px] border-ink py-2 flex items-end justify-between">
        <div>
          <div className="text-xs">Amount per serving</div>
          <div className="font-display text-2xl md:text-3xl uppercase">
            Calories
          </div>
        </div>
        <div className="font-display text-4xl md:text-5xl">220</div>
      </div>

      <div className="text-[10px] text-right pt-1 pb-1 border-b border-ink/40">
        % Daily Value*
      </div>

      <Row label="Total Fat" amount="8g" dv="10%" bold />
      <Row label="Saturated Fat" amount="3g" dv="15%" indent />
      <Row label="Trans Fat" amount="0g" indent italic />
      <Row label="Cholesterol" amount="5mg" dv="2%" bold />
      <Row label="Sodium" amount="160mg" dv="7%" bold />
      <Row label="Total Carbohydrate" amount="21g" dv="8%" bold />
      <Row label="Dietary Fiber" amount="5g" dv="18%" indent />
      <Row label="Total Sugars" amount="9g" indent />
      <Row label="Includes 8g Added Sugars" amount="" dv="16%" indent2 />
      <Row label="Protein" amount="20g" dv="40%" bold heavy />

      <div className="border-t-[6px] border-ink mt-1 pt-2 grid grid-cols-2 gap-x-4 text-xs">
        <MicroRow label="Vitamin D" amount="0mcg" dv="0%" />
        <MicroRow label="Calcium" amount="110mg" dv="8%" />
        <MicroRow label="Iron" amount="1mg" dv="6%" />
        <MicroRow label="Potassium" amount="180mg" dv="4%" />
      </div>

      <p className="text-[9px] leading-snug mt-3 text-ink/70">
        *The % Daily Value tells you how much a nutrient in a serving of food
        contributes to a daily diet. 2,000 calories a day is used for general
        nutrition advice.
      </p>
    </div>
  );
}

type RowProps = {
  label: string;
  amount: string;
  dv?: string;
  bold?: boolean;
  heavy?: boolean;
  indent?: boolean;
  indent2?: boolean;
  italic?: boolean;
};

function Row({
  label,
  amount,
  dv,
  bold,
  heavy,
  indent,
  indent2,
  italic,
}: RowProps) {
  return (
    <div
      className={`flex justify-between text-sm py-1 border-b ${heavy ? "border-b-[6px] border-ink" : "border-ink/30"}`}
    >
      <span
        className={`${bold ? "font-bold" : ""} ${italic ? "italic" : ""} ${indent ? "pl-4" : ""} ${indent2 ? "pl-8" : ""}`}
      >
        <span className={bold ? "" : ""}>
          {bold ? <strong>{label}</strong> : label}
        </span>
        {amount && <span className="ml-1">{amount}</span>}
      </span>
      {dv && <span className="font-bold">{dv}</span>}
    </div>
  );
}

function MicroRow({
  label,
  amount,
  dv,
}: {
  label: string;
  amount: string;
  dv: string;
}) {
  return (
    <div className="flex justify-between border-b border-ink/30 py-1">
      <span>
        {label} {amount}
      </span>
      <span>{dv}</span>
    </div>
  );
}
