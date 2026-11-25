"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative inline-flex h-9 w-9 items-center justify-center overflow-hidden border border-stone-400 bg-transparent text-stone-800 transition-colors hover:border-lime-700 hover:text-lime-700 dark:border-stone-600 dark:text-stone-100 dark:hover:border-lime-300 dark:hover:text-lime-300"
    >
      <Sun
        size={15}
        className={`absolute transition-all duration-300 ${
          dark
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <Moon
        size={15}
        className={`absolute transition-all duration-300 ${
          dark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  );
}