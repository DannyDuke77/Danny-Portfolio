"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PreviewCvButton from "./buttons/PreviewCvButton";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith("/projects/");

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const projectLinks = [
    { name: "Description", href: "#description" },
    { name: "Screenshots", href: "#screenshots" },
    { name: "Features", href: "#features" },
  ];

  const navLink =
    "text-[11px] py-1 uppercase tracking-[0.2em] text-stone-500 transition-colors hover:text-lime-700 dark:text-stone-400 dark:hover:text-lime-300";

  const desktopBreakpoint = isProjectPage ? "lg" : "md";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-stone-200 bg-stone-50/95 backdrop-blur-sm dark:border-stone-800 dark:bg-stone-950/95">
      <nav className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-6 md:px-10">
        {/* Brand */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="font-mono text-sm font-medium tracking-tight text-stone-900 dark:text-stone-100">
            daniel_gitau
          </span>
          <span className="text-lime-700 dark:text-lime-300">●</span>
        </Link>

        {/* Desktop links */}
        <div
          className={`hidden items-center gap-5 ${
            isProjectPage ? "lg:flex" : "md:flex"
          }`}
        >
          {isProjectPage ? (
            <>
              <Link href="/#projects" className={`flex items-center gap-1.5 ${navLink}`}>
                <ArrowLeft className="h-3 w-3" />
                Projects
              </Link>
              <span className="h-4 w-px bg-stone-200 dark:bg-stone-800" />
              {projectLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)} 
                  className={navLink}
                >
                  {link.name}
                </Link>
              ))}
            </>
          ) : (
            links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)} 
                className={navLink}
              >
                {link.name}
              </Link>
            ))
          )}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <div
            className={`hidden items-center gap-3 ${
              isProjectPage ? "lg:flex" : "md:flex"
            }`}
          >
            <PreviewCvButton className="inline-flex items-center gap-2 border border-stone-200 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-900 transition-colors hover:border-lime-700 hover:text-lime-700 dark:border-stone-800 dark:text-stone-100 dark:hover:border-lime-300 dark:hover:text-lime-300" />

            <Link
              href={isProjectPage ? "/#contact" : "#contact"}
              className="group inline-flex shrink-0 items-center gap-1.5 border border-lime-700 bg-lime-700 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-50 transition-colors hover:bg-transparent hover:text-lime-700 dark:border-lime-300 dark:bg-lime-300 dark:text-black dark:hover:bg-transparent dark:hover:text-lime-300"
            >
              Let's Talk
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <ThemeToggle />

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`relative flex h-9 w-9 items-center justify-center text-stone-700 transition-colors hover:text-lime-700 dark:text-stone-300 dark:hover:text-lime-300 ${
              isProjectPage ? "lg:hidden" : "md:hidden"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <div className="flex h-3.5 w-5 flex-col justify-between">
              <span
                className={`h-px w-full bg-current transition-all duration-300 ${
                  isOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-current transition-all duration-300 ${
                  isOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-stone-200 bg-stone-50 transition-all duration-300 dark:border-stone-800 dark:bg-stone-950 ${
          isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 border-t-0 opacity-0"
        } ${isProjectPage ? "lg:hidden" : "md:hidden"}`}
      >
        <div className="px-6 py-6">
          {isProjectPage ? (
            <div className="flex flex-col gap-4">
              <Link
                href="/#projects"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-1.5 ${navLink}`}
              >
                <ArrowLeft className="h-3 w-3" />
                Projects
              </Link>
              <span className="h-px w-full bg-stone-200 dark:bg-stone-800" />
              {projectLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    handleNavClick(e, link.href);
                  }}
                  className={navLink}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    handleNavClick(e, link.href);
                  }}
                  className={navLink}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          <div className="my-6 h-px w-full bg-stone-200 dark:bg-stone-800" />

          <div className="flex flex-col gap-3">
            <PreviewCvButton className="inline-flex w-full items-center justify-center gap-2 border border-stone-200 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-900 transition-colors hover:border-lime-700 hover:text-lime-700 dark:border-stone-800 dark:text-stone-100 dark:hover:border-lime-300 dark:hover:text-lime-300" />

            <Link
              href={isProjectPage ? "/#contact" : "#contact"}
              onClick={(e) => {
                setIsOpen(false);
                if (!isProjectPage) {
                  handleNavClick(e, "#contact");
                }
              }}
              className="inline-flex w-full items-center justify-center gap-1.5 border border-lime-700 bg-lime-700 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-50 dark:border-lime-300 dark:bg-lime-300 dark:text-black"
            >
              Let's Talk
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;