"use client";

import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
  return (
    <span className="inline-flex items-baseline gap-1">
      <TypeAnimation
        sequence={[
          "Full-stack developer.",
          2000,
          "Django & Next.js developer.",
          2000,
          "Backend & API developer.",
          2000,
          "I build systems that stay up.",
          2000,
        ]}
        wrapper="span"
        speed={55}
        deletionSpeed={75}
        repeat={Infinity}
        cursor={false}
      />
      <span
        aria-hidden="true"
        className="inline-block h-[1em] w-[0.5ch] animate-pulse bg-stone-500 dark:bg-stone-400"
      />
    </span>
  );
};

export default Typewriter;