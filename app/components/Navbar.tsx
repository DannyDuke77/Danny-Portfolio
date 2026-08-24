"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PreviewCvButton from "./buttons/PreviewCvButton";

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
    { name: "Overview", href: "#overview" },
    { name: "Stack", href: "#stack" },
    { name: "Features", href: "#features" },

  ]

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-slate-200/70 bg-white/80 px-4 shadow-sm backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/80 sm:px-5">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-105 dark:bg-white dark:text-slate-900">
            DG
          </span>

          <span className="hidden text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:block">
            Daniel G<span className="text-blue-600 dark:text-blue-400">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-slate-50/80 p-1 dark:border-slate-800 dark:bg-slate-900/70 md:flex">
          {isProjectPage ? (
            <div className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-slate-50/80 p-1 dark:border-slate-800 dark:bg-slate-900/70 md:flex">

              <Link
                href="/#projects"
                className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Projects
              </Link>

              <div className="mx-1 h-5 w-px bg-slate-200 dark:bg-slate-700" />

              {projectLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-slate-900 hover:shadow-sm dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ) : (
            <div>
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-white hover:text-slate-900 hover:shadow-sm dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <PreviewCvButton />
        <Link
          href={isProjectPage ? "/#contact" : "#contact"}
          className="hidden items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/30 dark:bg-blue-500 dark:hover:bg-blue-400 md:inline-flex"
        >
          Let's Talk
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
        </div>
        

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <div className="flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`mx-auto max-w-6xl overflow-hidden transition-all duration-300 md:hidden ${
          isOpen
            ? "mt-2 max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-2xl border border-slate-200/70 bg-white/95 p-2 shadow-lg backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/95">
          {isProjectPage ? (
            <div className="flex flex-col gap-1">
              <Link
                href="/#projects"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Projects
              </Link>

              {projectLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
  
          <div className="my-4 h-px bg-slate-200/70 dark:bg-gray-600" />

          <div className="flex flex-col items-center gap-2">
            <PreviewCvButton className="w-full justify-center" />

            <Link
              href={isProjectPage ? "/#contact" : "#contact"}
              onClick={() => setIsOpen(false)}
              className="mt-1 w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white dark:bg-blue-500"
            >
              Let's Talk
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;