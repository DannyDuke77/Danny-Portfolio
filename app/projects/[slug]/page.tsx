import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/app/components/icons/Icons";
import { projects } from "@/app/projects/data/projects";
import ProjectGallery from "./ProjectGallery";
import FadeIn, { StaggerContainer, StaggerItem } from "@/app/components/Animations";
import FluxVisual from "@/app/components/visuals/FluxVisual";
import RentWiseVisual from "@/app/components/visuals/RentWiseVisual";
import EOccurrenceVisual from "@/app/components/visuals/EOccurrenceVisual";

const ProjectPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return notFound();
  }

    return (
        <main className="min-h-screen bg-stone-50 font-mono text-stone-900 antialiased dark:bg-stone-950 dark:text-stone-100">
            {/* HERO */}
            <section
                id="description"
                className="border-b border-stone-200 dark:border-stone-800"
            >
                <div className="mx-auto max-w-[1440px] px-6 pt-24 pb-20 md:px-10 md:pt-28 md:pb-24">
                    <FadeIn>
                        <Link
                            href="/#projects"
                            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-stone-500 transition-colors hover:text-lime-700 dark:text-stone-400 dark:hover:text-lime-300"
                            >
                            <ArrowLeft className="h-3 w-3" />
                            Back to projects
                        </Link>
                    </FadeIn>

                    <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                        {/* Left */}
                        <div>
                            <FadeIn>
                                <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
                                    Featured Project
                                </p>

                                <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-stone-900 dark:text-white sm:text-5xl md:text-6xl">
                                    {project.title}
                                </h1>

                                <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-500 dark:text-stone-400 sm:text-lg">
                                    {project.description}
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.1}>
                                <div className="mt-8">
                                    <p className="text-[11px] uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
                                        Built with
                                    </p>
                                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                                        {project.stack.map((technology, i) => (
                                            <span key={technology} className="flex items-center gap-3">
                                                <span className="text-sm text-stone-900 dark:text-stone-100">
                                                    {technology}
                                                </span>
                                                {i < project.stack.length - 1 && (
                                                    <span className="text-stone-400 dark:text-stone-600">·</span>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="mt-10 flex flex-wrap gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-2 border border-lime-700 bg-lime-700 px-5 py-2.5 text-sm font-semibold text-stone-50 transition-colors hover:bg-transparent hover:text-lime-700 dark:border-lime-300 dark:bg-lime-300 dark:text-black dark:hover:bg-transparent dark:hover:text-lime-300"
                                    >
                                        <GithubIcon className="h-4 w-4" />
                                        View on GitHub
                                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>

                                    {project.demo && project.demo !== "#" && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-2 border border-stone-200 px-5 py-2.5 text-sm font-semibold text-stone-900 transition-colors hover:border-lime-700 hover:text-lime-700 dark:border-stone-800 dark:text-stone-100 dark:hover:border-lime-300 dark:hover:text-lime-300"
                                        >
                                            Live Demo
                                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </a>
                                    )}
                                </div>
                            </FadeIn>
                        </div>

                        {/* Right — visual (now on mobile too) */}
                        <FadeIn delay={0.15} className="lg:block">
                            {project.slug === "flux" && <FluxVisual />}
                            {project.slug === "rentwise" && <RentWiseVisual />}
                            {project.slug === "e-occurrence" && <EOccurrenceVisual />}
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* SCREENSHOTS */}
            <section id="screenshots" className="border-b border-stone-200 py-20 dark:border-stone-800 md:py-24">
                <div className="mx-auto max-w-[1440px] px-6 md:px-10">
                    <FadeIn>
                        <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
                            Project Preview
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                            See it in action
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                            A look at the interfaces and workflows built for this application.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.1} className="mt-10">
                        <ProjectGallery screenshots={project.screenshots} title={project.title} />
                    </FadeIn>
                </div>
            </section>

            {/* OVERVIEW + STACK */}
            <section id="overview" className="border-b border-stone-200 py-20 dark:border-stone-800 md:py-24">
                <div className="mx-auto grid max-w-[1440px] gap-16 px-6 md:px-10 lg:grid-cols-[1.4fr_0.8fr]">
                    <FadeIn>
                        <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
                            Overview
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                            About the project
                        </h2>
                        <p className="mt-6 text-base leading-relaxed text-stone-500 dark:text-stone-400 sm:text-lg">
                            {project.overview ?? "This project was designed to solve a practical domain problem through a reliable, maintainable web application architecture. The system was built with a focus on user experience, performance, and scalability, leveraging modern web technologies and best practices."}
                        </p>
                    </FadeIn>

                    {/* Stack */}
                    <div id="stack">
                        <FadeIn delay={0.1}>
                        <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
                            Technology Stack
                        </p>
                        <h3 className="mt-3 text-xl font-semibold tracking-tight text-stone-900 dark:text-white">
                            Built with
                        </h3>
                        </FadeIn>

                        <StaggerContainer>
                        <div className="mt-6 divide-y divide-stone-200 border-y border-stone-200 dark:divide-stone-800 dark:border-stone-800">
                            {project.stack.map((technology) => (
                            <StaggerItem key={technology}>
                                <div className="flex items-center gap-3 py-3.5">
                                <span className="text-lime-700 dark:text-lime-300">▸</span>
                                <span className="text-sm text-stone-900 dark:text-stone-100">
                                    {technology}
                                </span>
                                </div>
                            </StaggerItem>
                            ))}
                        </div>
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section id="features" className="border-b border-stone-200 py-20 dark:border-stone-800 md:py-24">
                <div className="mx-auto max-w-[1440px] px-6 md:px-10">
                <FadeIn>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
                    Capabilities
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                    Key Features
                    </h2>
                </FadeIn>

                <StaggerContainer>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {project.features.map((feature) => (
                        <StaggerItem key={feature}>
                        <div className="flex h-full items-start gap-3 border border-stone-200 bg-white p-5 transition-colors hover:border-lime-700/60 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-lime-300/60">
                            <span className="mt-0.5 text-lime-700 dark:text-lime-300">▸</span>
                            <span className="text-sm font-medium text-stone-900 dark:text-stone-100">
                            {feature}
                            </span>
                        </div>
                        </StaggerItem>
                    ))}
                    </div>
                </StaggerContainer>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-24">
                <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
                <FadeIn>
                    <h2 className="text-3xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                    Interested in the implementation?
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-stone-500 dark:text-stone-400 sm:text-base">
                    Explore the source code or get in touch to discuss the project.
                    </p>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 border border-lime-700 bg-lime-700 px-5 py-2.5 text-sm font-semibold text-stone-50 transition-colors hover:bg-transparent hover:text-lime-700 dark:border-lime-300 dark:bg-lime-300 dark:text-black dark:hover:bg-transparent dark:hover:text-lime-300"
                    >
                        <GithubIcon className="h-4 w-4" />
                        View on GitHub
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>

                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 border border-stone-200 px-5 py-2.5 text-sm font-semibold text-stone-900 transition-colors hover:border-lime-700 hover:text-lime-700 dark:border-stone-800 dark:text-stone-100 dark:hover:border-lime-300 dark:hover:text-lime-300"
                    >
                        Get in Touch
                    </Link>
                    </div>
                </FadeIn>
                </div>
            </section>
        </main>
    );
};

export default ProjectPage;