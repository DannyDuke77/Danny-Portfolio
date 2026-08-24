"use client";

import { useState } from "react";
import { Eye } from "lucide-react";
import useCvModal from "../hooks/useCvModal";
import PreviewCvButton from "./buttons/PreviewCvButton";
import CvModal from "./modals/CVModal";

const HeroSection = () => {
    const modal = useCvModal();

  return (
    <>
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a
          href="#projects"
          className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-500 hover:shadow-md"
        >
          View Work
        </a>

        <a
          href="#contact"
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md"
        >
          Contact Me
        </a>

        <PreviewCvButton className="block md:hidden" />
      </div>
    </>
  );
}

export default HeroSection