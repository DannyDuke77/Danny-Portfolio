import Link from "next/link";

import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Layers3,
} from "lucide-react";
import { GithubIcon } from "@/app/components/icons/Icons";
import projects from "@/app/projects/data/projects";
import ProjectGallery from "./ProjectGallery";
import FadeIn, { StaggerContainer, StaggerItem }  from "@/app/components/Animations";
import FluxVisual from "@/app/components/visuals/FluxVisual";
import RentWiseVisual from "@/app/components/visuals/RentWiseVisual";
import EOccurrenceVisual from "@/app/components/visuals/EOccurrenceVisual";

const ProjectPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">

        {/* Hero */}
        <section id="description" className="border-b border-slate-200/60 dark:border-slate-800/60">
            <div className="mx-auto max-w-8xl px-4 xl:px-36 pb-24 pt-32">
                <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

                {/* Left — Project Information */}
                <div>
                    {/* Label */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
                    <Layers3 className="h-3.5 w-3.5" />
                    Featured Project
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl sm:leading-[1.05] dark:text-white">
                    {project.title}
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                    {project.description}
                    </p>

                    {/* Stack */}
                    <div className="mt-8">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Built With
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                        >
                            {technology}
                        </span>
                        ))}
                    </div>
                    </div>

                    {/* Links */}
                    <div className="mt-9 flex flex-wrap gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl dark:bg-white dark:text-slate-900 dark:shadow-white/5 dark:hover:bg-slate-200"
                    >
                        <GithubIcon className="h-4 w-4" />
                        View Source
                        <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>

                    {project.demo && project.demo !== "#" && (
                        <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-900 dark:hover:bg-blue-950/30 dark:hover:text-blue-300"
                        >
                        Live Demo
                        <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                    )}
                    </div>
                </div>

                {/* Right — Project Visual */}
                <div className="hidden lg:block">
                    {project.slug === "flux" && <FluxVisual />}
                    {project.slug === "rentwise" && <RentWiseVisual />}
                    {project.slug === "e-occurrence" && <EOccurrenceVisual />}
                </div>

                </div>
            </div>
            </section>

        {/* Screenshots */}
        <FadeIn delay={0.5}>
            <section id="screenshots" className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-10 flex items-end justify-between gap-6">
                        <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                            Project Preview
                        </p>

                        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                            See it in action
                        </h2>

                        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
                            A look at the interfaces and workflows built for this
                            application.
                        </p>
                        </div>
                    </div>

                    <ProjectGallery screenshots={project.screenshots} title={project.title} />

                </div>
            </section>
        </FadeIn>

        {/* Overview */}
        <div  id="stack" />
        <section id="overview" className="border-t border-slate-200/60 bg-white py-24 dark:border-slate-800/60 dark:bg-slate-900/40">
            <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.4fr_0.8fr]">
                <FadeIn delay={0.5}>
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                            Overview
                        </p>

                        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                            About the project
                        </h2>

                        <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
                            {project.overview ??
                                "This project was designed to solve a practical domain problem through a reliable, maintainable web application architecture. The system was built with a focus on user experience, performance, and scalability, leveraging modern web technologies and best practices. The project demonstrates a comprehensive understanding of full-stack development, including frontend and backend integration, database management, and real-time communication."
                            }
                        </p>
                    </div>
                </FadeIn>
                
                {/* Technology Stack */}
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Technology Stack
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                    Built with
                    </h3>
                    
                    <StaggerContainer>
                        <div className="mt-6 space-y-3">
                            {project.stack.map((technology) => (
                                <StaggerItem key={technology}>
                                    <div
                                        key={technology}
                                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950/60"
                                    >
                                        <CheckCircle2 className="h-4 w-4 text-blue-500" />
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
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
      

      {/* Features */}
        <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
            <FadeIn>
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        Capabilities
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                        Key Features
                    </h2>
                </div>
            </FadeIn>
            
            <StaggerContainer>
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {(project.features.map((feature) => (
                        <StaggerItem key={feature}>
                        <div
                            key={feature}
                            className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
                        >
                            <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />

                            <h3 className="mt-4 font-semibold">
                                {feature}
                            </h3>
                        </div>
                        </StaggerItem>
                    )))}
                </div>
            </StaggerContainer>

        </div>
        </section>

      {/* Bottom CTA */}
      <FadeIn delay={0.5}>
      <section className="border-t border-slate-200/60 bg-white py-24 dark:border-slate-800/60 dark:bg-slate-900/40">
        <div className="mx-auto max-w-3xl px-6 text-center">

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Interested in the implementation?
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Explore the source code or get in touch to discuss the project.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              <GithubIcon className="h-4 w-4" />
              View on GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-800 dark:hover:text-blue-400"
            >
              Get in Touch
            </Link>
          </div>

        </div>
      </section>
      </FadeIn>

    </main>
  );
}

export default ProjectPage;