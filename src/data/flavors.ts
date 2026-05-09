export type Flavor = {
  name: string;
  slug: string;
  image: string;
  /** Tailwind classes for the card backdrop tint */
  tint: string;
  /** Solid hex used as primary accent on detail page */
  accent: string;
  /** Hex for secondary text/contrast */
  contrast: string;
  blurb: string;
  description: string;
  ingredients: string[];
};

export const flavors: Flavor[] = [
  {
    name: "Chocolate",
    slug: "chocolate",
    image: "/products/chocolate.png",
    tint: "from-[#a26833]/30 to-[#1a1a1a]/15",
    accent: "#a26833",
    contrast: "#fdf6e3",
    blurb: "Deep cocoa, real chocolate chunks — the everyday classic.",
    description:
      "Slow-roasted cocoa folded with milk-protein crisps and crunchy chocolate pieces. Rich enough to feel like dessert, clean enough to power a workout.",
    ingredients: [
      "Whey & milk protein blend",
      "Tapioca fiber",
      "Cocoa (Dutch-processed)",
      "Real chocolate chunks",
      "Almond butter",
      "Sea salt",
    ],
  },
  {
    name: "Vanilla",
    slug: "vanilla",
    image: "/products/vanilla.png",
    tint: "from-[#e3d3b8]/45 to-[#a26833]/15",
    accent: "#c89a5c",
    contrast: "#1a1a1a",
    blurb: "Soft vanilla bean, golden wafer crunch — light and clean.",
    description:
      "Madagascar vanilla bean meets crisp wafer pieces. Light, smooth, and just sweet enough — the kind of bar you reach for again tomorrow.",
    ingredients: [
      "Whey & milk protein blend",
      "Tapioca fiber",
      "Vanilla bean extract",
      "Wafer crisps",
      "Cashew butter",
      "Sea salt",
    ],
  },
  {
    name: "Cookies & Cream",
    slug: "cookies-cream",
    image: "/products/cookies-cream.png",
    tint: "from-[#1f3d6b]/30 to-[#3a6bb0]/15",
    accent: "#3a6bb0",
    contrast: "#fdf6e3",
    blurb: "Cookie pieces folded into vanilla cream — childhood, leveled up.",
    description:
      "Chocolate cookie crumbs folded into a smooth vanilla-cream base. The flavor you grew up with, rebuilt with grown-up macros.",
    ingredients: [
      "Whey & milk protein blend",
      "Tapioca fiber",
      "Cocoa cookie pieces",
      "Vanilla cream",
      "Cashew butter",
      "Sea salt",
    ],
  },
];

export const getFlavor = (slug: string) =>
  flavors.find((f) => f.slug === slug);
