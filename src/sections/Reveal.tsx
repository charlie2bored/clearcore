import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Pinned section: a long uppercase headline reveals from
 * faded to fully bright as the user scrolls. Ends with a
 * highlighted phrase tucked into a tilted color block.
 *
 * Copy is original to clearcore — written for the
 * "clean fuel / daily craft" brand voice.
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
        { color: "#3a2014", opacity: 0.25 },
        {
          color: "#faeade",
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

  // Lines kept short on purpose so each word can stagger-reveal cleanly.
  const lines: string[][] = [
    ["Pour", "something", "honest"],
    ["into", "the", "everyday", "and"],
    ["a", "quieter", "kind", "of"],
    ["carries", "you", "the", "rest", "of", "the", "way"],
  ];

  const renderWord = (word: string, key: string) => (
    <span key={key} ref={pushRef} className="inline-block mr-[0.25em]">
      {word}
    </span>
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-dark-brown flex items-center justify-center px-6 overflow-hidden"
    >
      <h2 className="font-display uppercase text-center leading-[1.05] tracking-[-0.02em] text-[10vw] md:text-[6.4vw] max-w-[1400px]">
        <span className="block">
          {lines[0].map((w, i) => renderWord(w, `a-${i}-${w}`))}
        </span>
        <span className="block">
          {lines[1].map((w, i) => renderWord(w, `b-${i}-${w}`))}
        </span>
        <span className="block">
          <span className="inline-block bg-light-brown text-dark-brown px-4 md:px-6 -rotate-[3deg] mx-2">
            momentum
          </span>
        </span>
        <span className="block">
          {lines[2].map((w, i) => renderWord(w, `c-${i}-${w}`))}
        </span>
        <span className="block">
          {lines[3].map((w, i) => renderWord(w, `d-${i}-${w}`))}
        </span>
      </h2>
    </section>
  );
}
