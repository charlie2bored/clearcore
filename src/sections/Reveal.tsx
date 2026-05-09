import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Pinned section: a long uppercase headline reveals from
 * faded to fully bright as the user scrolls. One phrase
 * sits inside a tilted accent block.
 *
 * Copy is original to Clear Core.
 */
export default function Reveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  const pushRef = (el: HTMLSpanElement | null) => {
    if (el && !wordsRef.current.includes(el)) wordsRef.current.push(el);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordsRef.current,
        { color: "#1a1a1a", opacity: 0.25 },
        {
          color: "#fdf6e3",
          opacity: 1,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=120%",
            scrub: true,
            pin: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Short lines so each word stagger-reveals cleanly.
  const lines: string[][] = [
    ["Real", "food."],
    ["Real", "protein."],
    ["Just", "one", "honest", "bar"],
    ["for", "the", "days", "that"],
    ["demand", "more."],
  ];

  const renderWord = (word: string, key: string) => (
    <span key={key} ref={pushRef} className="inline-block mr-[0.25em]">
      {word}
    </span>
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-ink flex items-center justify-center px-6 overflow-hidden"
    >
      <h2 className="font-display uppercase text-center leading-[1.05] tracking-[-0.02em] text-[10vw] md:text-[6.4vw] max-w-[1400px]">
        <span className="block">
          {lines[0].map((w, i) => renderWord(w, `a-${i}-${w}`))}
        </span>
        <span className="block">
          {lines[1].map((w, i) => renderWord(w, `b-${i}-${w}`))}
        </span>
        <span className="block">
          {lines[2].map((w, i) => renderWord(w, `c-${i}-${w}`))}
        </span>
        <span className="block">
          {lines[3].map((w, i) => renderWord(w, `d-${i}-${w}`))}
          <span className="inline-block bg-cherry text-cream px-3 md:px-5 -rotate-[3deg] mx-1">
            no shortcuts
          </span>
        </span>
        <span className="block">
          {lines[4].map((w, i) => renderWord(w, `e-${i}-${w}`))}
        </span>
      </h2>
    </section>
  );
}
