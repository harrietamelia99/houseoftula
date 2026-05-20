import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Almond Bloom · Raw Linen · Olive Husk · Forest Seed · Toasted Sienna */
        almond: "#F9F8EB",
        surface: "#DCD6BA",
        olive: "#9F9C6C",
        /** Same as Forest Seed  -  typography / links on Almond, small UI fills */
        "olive-dark": "#555439",
        forest: "#555439",
        /**
         * Deep band for hero + inverse header slabs  -  clearly separates from `almond` wash on screen
         * (the legacy `forest` hex doubles as body type; alone it can read as “more cream/mud”).
         */
        "forest-slab": "#364132",
        /** Hero ticker / bridging tone */
        "forest-soft": "#6D7056",
        sienna: "#9A7844",
        text: "#494A41",
        muted: "#737264",
        border: "#CFCCBD",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        tag: ["0.75rem", { lineHeight: "1.25", letterSpacing: "0.28em" }],
        /** Home hero only  -  capped lower so “Not to perform.” stays one line beside the figure */
        hero: ["clamp(2.5rem, 5.25vw, 4.35rem)", { lineHeight: "1.12" }],
        h2: ["clamp(2rem,4vw,3.5rem)", { lineHeight: "1.15" }],
        h3: ["clamp(1.25rem,2vw,1.75rem)", { lineHeight: "1.3" }],
      },
      maxWidth: {
        measure: "38rem",
        content: "72rem",
      },
      spacing: {
        section: "clamp(4rem, 10vw, 8rem)",
        gutter: "clamp(1.25rem, 4vw, 2.5rem)",
      },
      transitionDuration: {
        layout: "400ms",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.33, 1, 0.64, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 52s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
