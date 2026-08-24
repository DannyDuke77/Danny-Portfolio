"use client";

import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
  return (
    <TypeAnimation
        sequence={[
            "Full-Stack Developer.",
            2000,
            "Django & Next.js Developer.",
            2000,
            "Backend & API Developer.",
            2000,
            "Building Modern Web Applications.",
            2000,
            "Turning Ideas Into Software.",
            2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        deletionSpeed={70}
    />
  );
}

export default Typewriter;