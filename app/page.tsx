"use client";

import FadeIn, { StaggerContainer, StaggerItem } from "./components/Animations";
import CodeShowcase from "./components/CodeShowCase";
import HeroSection from "./components/HeroSection";
import Typewriter from "./components/Typewriter";
import { Phone, ArrowUpRight, Monitor, Server, Container } from "lucide-react";
import { GithubIcon, GmailIcon, LinkedinIcon, WhatsappIcon } from "./components/icons/Icons";
import Link from "next/link";
import projects from "./projects/data/projects";

const Home = () => {
  const aboutMe = [
    {
      title: "Backend Systems",
      icon: Server,
      description:
        "Building REST APIs, real-time services, authentication systems, and database-driven applications with Django, PostgreSQL, Redis, JWT Auth, and WebSockets.",
    },
    {
      title: "Frontend Engineering",
      icon: Monitor,
      description:
        "Creating responsive, component-driven interfaces with Next.js, React, TypeScript, and Tailwind CSS, with a focus on usability and clean interactions.",
    },
    {
      title: "DevOps & Infrastructure",
      icon: Container,
      description:
        "Containerizing applications with Docker, configuring Nginx reverse proxies, managing Linux environments, and connecting multi-service systems.",
    },
  ];

  const message = encodeURIComponent(
    "Hi Daniel, I came across your portfolio and would like to get in touch regarding an opportunity. Could we discuss further?"
  );
  const contactMethods = [
    {
      name: "Email",
      description: "dangitau9824@gmail.com",
      href: "mailto:dangitau9824@gmail.com",
      icon: GmailIcon,
      iconClass: "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400",
    },
    {
      name: "Phone",
      description: "+254 703 509 598",
      href: "tel:+254703509598",
      icon: Phone,
      iconClass: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
    },
    {
      name: "WhatsApp",
      description: "Chat with me",
      href: `https://wa.me/254703509598?text=${message}`,
      icon: WhatsappIcon,
      iconClass: "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400",
      external: true,
    },
    {
      name: "LinkedIn",
      description: "Let's connect",
      href: "http://www.linkedin.com/in/daniel-g-76ab1b246",
      icon: LinkedinIcon,
      iconClass: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
      external: true,
    },
    {
      name: "GitHub",
      description: "Check out my projects",
      href: "https://github.com/dannyduke77",
      icon: GithubIcon,
      iconClass: "bg-slate-100 text-slate-600 dark:bg-slate-950 dark:text-slate-400",
      external: true,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">

      {/* Hero Section */}
      <section
        id="home"
        className="mx-auto flex min-h-screen max-w-[1920px] items-center px-6 pt-20"
      >
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Left — Introduction */}
          <FadeIn className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/50 px-3 py-1 text-sm font-semibold text-blue-700 dark:border-blue-900/50 dark:bg-blue-950/50 dark:text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              Available for new projects
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl sm:leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                <Typewriter />
              </span>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl">
              Hi, I'm{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Daniel Gitau
              </span>
              . I build modern web applications, from intuitive frontend
              experiences to reliable backend systems and real-time services.
            </p>

            <HeroSection />
          </FadeIn>

          {/* Right — Code */}
          <FadeIn delay={0.2} className="hidden lg:block">
            <CodeShowcase />
          </FadeIn>

        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="border-t border-slate-200/60 bg-white py-24 dark:border-slate-800/60 dark:bg-slate-900/50"
      >
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h2>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              I'm a Business Information Technology graduate who enjoys building software that solves real problems. I work across the stack, with a particular interest in backend architecture, APIs, databases, and real-time systems.
            </p>
          </FadeIn>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {aboutMe.map((item, idx) => {
              const Icon = item.icon;

              return (
                <StaggerItem key={idx}>
                  <div
                    key={idx}
                    className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-lg hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-blue-900/60 dark:hover:bg-blue-950/10"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-950 dark:text-blue-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Selected Work
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Featured Projects
                </h2>

                <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
                  A few projects I've built to solve real-world problems. More on <a href="https://github.com/dannyduke77" className="text-blue-400 hover:text-blue-500" target="_blank"><GithubIcon className="h-4 w-4 inline" /> GitHub</a>.
                </p>
              </div>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, idx) => (
                <StaggerItem key={project.title}>
                  <div
                    key={project.title}
                    className="group h-full flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-900/60"
                  >
                    <div>
                      {/* Project Number */}
                      <div className="mb-8 flex items-center justify-between">
                        <span className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400">
                          {String(idx + 1).padStart(2, "0")}
                        </span>

                        <span className="h-px flex-1 bg-slate-200 ml-4 dark:bg-slate-800" />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="mt-8">
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="mt-6 flex items-center gap-8 border-t border-slate-100 pt-4 dark:border-slate-800">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                        >
                          Source Code <ArrowUpRight className="ml-1 inline-block h-3 w-3" />
                        </a>

                        <Link
                          href={`/projects/${project.slug}`}
                          scroll={true}
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}
                        >
                          <span className="text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                            View Project <ArrowUpRight className="ml-1 inline-block h-3 w-3" />
                          </span>
                        </Link>

                        {project.demo !== "#" && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            Live Demo <ArrowUpRight className="ml-1 inline-block h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="border-t border-slate-200/60 bg-white py-24 dark:border-slate-800/60 dark:bg-slate-900/50"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <FadeIn className="mx-auto max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Get In Touch
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let's Work Together
            </h2>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              Have a project in mind or looking for a developer? I'd love to hear about it.
            </p>
          </FadeIn>

          <StaggerContainer className="mt-12">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-3">
              {contactMethods.map((contact) => {
                const Icon = contact.icon;

                return (
                  <StaggerItem key={contact.name}>
                    <a
                      key={contact.name}
                      href={contact.href}
                      target={contact.external ? "_blank" : undefined}
                      rel={contact.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-lg hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-blue-900 dark:hover:bg-blue-950/20"
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-125 ${contact.iconClass}`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                          {contact.name}
                        </p>

                        <p className="mt-0.5 truncate text-[13px] text-slate-500 dark:text-slate-400">
                          {contact.description}
                        </p>
                      </div>

                      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500" />
                    </a>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 py-8 text-center text-xs text-slate-500 dark:border-slate-800/60 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} Daniel Gitau. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;