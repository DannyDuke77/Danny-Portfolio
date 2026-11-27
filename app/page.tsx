"use client";

import FadeIn, { StaggerContainer, StaggerItem } from "./components/Animations";
import CodeShowcase from "./components/visuals/CodeShowCase";
import Typewriter from "./components/Typewriter";
import { Phone, ArrowUpRight, ArrowDown, Dot, ArrowRight } from "lucide-react";
import { GithubIcon, GmailIcon, LinkedinIcon, WhatsappIcon } from "./components/icons/Icons";
import Link from "next/link";
import { projects, smallProjects } from "./projects/data/projects";

const Home = () => {
  const stack = [
    { label: "Backend", items: ["Django", "PostgreSQL", "Redis", "JWT Auth", "WebSockets"] },
    { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind"] },
    { label: "Infra", items: ["Docker", "Nginx", "Linux", "Multi-service systems"] },
  ];

  const message = encodeURIComponent(
    "Hi Daniel, I came across your portfolio and would like to get in touch regarding an opportunity. Could we discuss further?"
  );

  const contactMethods = [
    { name: "Email", description: "dangitau9824@gmail.com", href: "mailto:dangitau9824@gmail.com", icon: GmailIcon },
    { name: "Phone", description: "+254 703 509 598", href: "tel:+254703509598", icon: Phone },
    { name: "WhatsApp", description: "Chat with me", href: `https://wa.me/254703509598?text=${message}`, icon: WhatsappIcon, external: true },
    { name: "LinkedIn", description: "Let's connect", href: "http://www.linkedin.com/in/daniel-g-76ab1b246", icon: LinkedinIcon, external: true },
    { name: "GitHub", description: "Check out my projects", href: "https://github.com/dannyduke77", icon: GithubIcon, external: true },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-mono text-stone-900 antialiased dark:bg-stone-950 dark:text-stone-100">
      {/* HERO */}
      <section id="home" className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-6 md:px-10">
  
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <div>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-stone-900 dark:text-white sm:text-6xl md:text-7xl">
              Daniel Gitau.
              <br />
              <span className="text-stone-500 dark:text-stone-400">I build systems</span>
              <br />
              <span className="text-stone-500 dark:text-stone-400">that stay up.</span>
            </h1>
            <div className="mt-8 max-w-xl border-l border-stone-200 pl-5 text-base leading-relaxed text-stone-500 dark:border-stone-800 dark:text-stone-400">
              <Typewriter />
            </div>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone-500 dark:text-stone-400">
              Business Information Technology graduate. I work across the stack with a focus on backend architecture, APIs, databases, and real-time services — then wire the frontend, containerize the lot, and keep it running.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="#projects" className="group inline-flex items-center gap-2 border border-lime-700 bg-lime-700 px-5 py-2.5 text-sm font-semibold text-stone-50 transition-colors hover:bg-transparent hover:text-lime-700 dark:border-lime-300 dark:bg-lime-300 dark:text-black dark:hover:bg-transparent dark:hover:text-lime-300">
                View Projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link href="#contact" className="inline-flex items-center gap-2 border border-stone-200 px-5 py-2.5 text-sm font-semibold text-stone-900 transition-colors hover:border-stone-500 hover:text-lime-700 dark:border-stone-800 dark:text-stone-100 dark:hover:border-stone-500 dark:hover:text-lime-300">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <CodeShowcase />
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 md:left-10 md:right-10">
          <span className="flex items-center gap-2">
            <ArrowDown className="h-4 w-4" />
            scroll
          </span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-stone-200 py-24 dark:border-stone-800 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <FadeIn>
            <h2 className="text-4xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-5xl">
              About Me
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <FadeIn>
              <p className="text-base leading-relaxed text-stone-500 dark:text-stone-400">
                I'm a Business Information Technology graduate who enjoys building software that solves real problems. I work across the stack, with a particular interest in backend architecture, APIs, databases, and real-time systems.
              </p>
              <p className="mt-4 text-base leading-relaxed text-stone-500 dark:text-stone-400">
                I'm a self-directed developer interested in building practical software and tackling technical challenges across the stack.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="divide-y divide-stone-200 border-y border-stone-200 dark:divide-stone-800 dark:border-stone-800">
                {stack.map((group) => (
                  <div key={group.label} className="grid grid-cols-[110px_1fr] gap-4 py-5">
                    <span className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">{group.label}</span>
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="text-sm text-stone-900 dark:text-stone-100">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

            {/* PROJECTS */}
      <section id="projects" className="border-t border-stone-200 py-24 dark:border-stone-800 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <FadeIn>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="text-4xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-5xl">
                Projects
              </h2>
              <a
                href="https://github.com/dannyduke77"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 transition-colors hover:text-lime-700 dark:text-stone-400 dark:hover:text-lime-300"
              >
                <GithubIcon className="h-4 w-4" />
                View Github Profile <ArrowUpRight className="h-3 w-3hover:translate-x-0.5" />
              </a>
            </div>
          </FadeIn>

          {/* Featured projects */}
          <StaggerContainer>
            <div className={`mt-12 grid gap-5 sm:grid-cols-2`}>
              {projects.map((project, idx) => (
                <StaggerItem key={project.title}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group flex h-full flex-col justify-between border border-stone-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lime-700/60 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] dark:border-stone-800 dark:bg-stone-900 dark:hover:border-lime-300/60 dark:hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] uppercase tracking-[0.2em] text-stone-500 transition-colors group-hover:text-lime-700 dark:text-stone-400 dark:group-hover:text-lime-300">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="flex h-8 w-8 items-center justify-center border border-stone-200 text-stone-500 transition-all duration-300 group-hover:border-lime-700 group-hover:bg-lime-700 group-hover:text-stone-50 dark:border-stone-800 dark:text-stone-400 dark:group-hover:border-lime-300 dark:group-hover:bg-lime-300 dark:group-hover:text-black">
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </div>

                      <h3 className="mt-8 text-xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="mt-8">
                      <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                        {project.stack.map((tag) => (
                          <span key={tag} className="text-[11px] uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-stone-200 pt-4 transition-colors group-hover:border-lime-700/30 dark:border-stone-800 dark:group-hover:border-lime-300/30">
                        <span className="text-[11px] uppercase tracking-[0.2em] text-stone-500 transition-colors group-hover:text-lime-700 dark:text-stone-400 dark:group-hover:text-lime-300">
                          View Project
                        </span>
                        <span className="text-[11px] uppercase tracking-[0.2em] text-stone-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-lime-700 dark:text-stone-500 dark:group-hover:text-lime-300">
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* Small projects */}
          <FadeIn delay={0.1}>
            <div className="mt-16">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[11px] uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
                  More projects
                </h3>
                <span className="text-[11px] uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
                  View Archive
                </span>
              </div>

              <StaggerContainer>
                <div className="mt-4 border-t border-stone-200 dark:border-stone-800">
                  {smallProjects.map((project) => (
                    <StaggerItem key={project.title}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group grid grid-cols-1 gap-2 border-b border-stone-200 py-5 px-4 transition-colors hover:bg-white dark:border-stone-800 dark:hover:bg-stone-900 md:grid-cols-[1fr_1.4fr_auto] md:items-center md:gap-6"
                      >
                        <div>
                          <h4 className="text-base font-semibold text-stone-900 dark:text-white">
                            {project.title}
                          </h4>
                          <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                            {project.stack.map((tag) => (
                              <span key={tag} className="text-[11px] uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <p className="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                          {project.description}
                        </p>

                        <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-stone-500 transition-colors group-hover:text-lime-700 dark:text-stone-400 dark:group-hover:text-lime-300">
                          GitHub
                          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </a>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-8 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
              <span>{projects.length + smallProjects.length} featured projects</span>
              <Link href="https://github.com/DannyDuke77" target="_blank" className="flex items-center gap-1.5 transition-colors hover:text-lime-700 dark:hover:text-lime-300">
                <ArrowUpRight className="h-3 w-3" /> See my Github profile <GithubIcon className="h-6 w-6" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-stone-200 py-24 dark:border-stone-800 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <FadeIn>
            <h2 className="text-4xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-5xl">
              Get In Touch
            </h2>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <div>
                <a href="mailto:dangitau9824@gmail.com" className="block text-3xl font-semibold tracking-tight text-stone-900 underline-offset-8 hover:text-lime-700 hover:underline dark:text-white dark:hover:text-lime-300 sm:text-5xl">
                  dangitau9824<wbr />@gmail.com
                </a>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                  Have a project in mind or looking for a developer? I'd love to hear about it.
                </p>
              </div>

              <StaggerContainer>
                <div className="border-t border-stone-200 dark:border-stone-800">
                  {contactMethods.map((contact) => {
                    const Icon = contact.icon;
                    return (
                      <StaggerItem key={contact.name}>
                        <a
                          href={contact.href}
                          target={contact.external ? "_blank" : undefined}
                          rel={contact.external ? "noopener noreferrer" : undefined}
                          className="group flex items-center gap-4 border-b border-stone-200 py-4 transition-colors hover:bg-white dark:border-stone-800 dark:hover:bg-stone-950"
                        >
                          <Icon className="h-4 w-4 text-stone-500 transition-colors group-hover:text-lime-700 dark:text-stone-400 dark:group-hover:text-lime-300" />
                          <span className="w-24 text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">{contact.name}</span>
                          <span className="truncate text-sm text-stone-900 group-hover:text-black dark:text-stone-100 dark:group-hover:text-white">{contact.description}</span>
                          <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-stone-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime-700 dark:text-stone-500 dark:group-hover:text-lime-300" />
                        </a>
                      </StaggerItem>
                    );
                  })}
                </div>
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-200 dark:border-stone-800">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-2 px-6 py-6 text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 sm:flex-row sm:items-center md:px-10">
          <span>© {new Date().getFullYear()} Daniel Gitau</span>
          <span className="flex items-center gap-1">
            Built with Next.js <Dot /> TypeScript <Dot /> Tailwind 
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;