import { GitHubLogoIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectsClient } from "@/app/(root)/projects/ProjectsClient";
import { FadeInUp } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getPaginatedProjects } from "@/sanity/lib/projects/getAllProjects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects. View project details, technologies used, and GitHub repositories. Featuring React, Next.js, TypeScript, and modern web technologies.",
  openGraph: {
    title: "Ryan Bakker | Projects Portfolio",
    description:
      "Explore my portfolio of web development projects. View project details, technologies used, and GitHub repositories.",
    images: [
      {
        url: "/about-cover.jpeg",
        width: 1200,
        height: 630,
        alt: "Ryan Bakker - Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Bakker | Projects Portfolio",
    description:
      "Explore my portfolio of web development projects. View project details, technologies used, and GitHub repositories.",
    images: ["/about-cover.jpeg"],
  },
};

async function Projects() {
  const initialData = await getPaginatedProjects(1, 6);

  return (
    <section className="bg-gradient-to-br from-sky-100 dark:from-black via-white dark:via-gray-950 to-sky-100 dark:to-black/90 -mt-16 pt-14 min-h-screen">
      <div className="page-container pt-14">
        <FadeInUp delay={0}>
          <Separator className="mb-8" />
        </FadeInUp>

        <div className="flex flex-col md:flex-row sm:items-end justify-between gap-6">
          <div>
            <FadeInUp delay={200}>
              <h1 className="text-4xl lg:text-5xl uppercase font-extrabold lg:font-bold  dark:text-white mb-3 tracking-tight bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-600 dark:from-neutral-200/90 dark:via-white/70 dark:to-white/50 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)] pb-1.5">
                Projects
              </h1>
            </FadeInUp>
            <FadeInUp delay={300}>
              <p className="text-gray-900/80 dark:text-gray-400 max-w-2xl text-xs md:text-sm lg:text-base md:max-w-[550px] lg:max-w-[650px] flex-1 w-full">
                Check out some of the projects I have been working on. View a
                project summary and go to the GitHub repository, where you can
                see the tools and methods used.
              </p>
            </FadeInUp>
          </div>
          <FadeInUp delay={400}>
            <Button
              className="group relative overflow-hidden px-8 py-4 rounded-md font-semibold hover:scale-[1.03] active:scale-95 cursor-pointer transition-all duration-300 text-sm w-full md:w-auto"
              variant="glassPrimary"
            >
              <div>
                <div className="flex items-center gap-3">
                  <GitHubLogoIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  GitHub Profile
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </div>
            </Button>
          </FadeInUp>
        </div>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={`skeleton-${index}`}
                  className="bg-gradient-to-tr dark:from-neutral-800/80 dark:via-neutral-900/80 dark:to-neutral-700/80 shadow-lg p-3 rounded-xl border dark:border-neutral-700 from-neutral-200/80 via-neutral-100/80 to-neutral-300/80 border-neutral-300 animate-pulse"
                >
                  <div className="bg-gray-300 dark:bg-gray-600 rounded-lg h-48 mb-3"></div>
                  <div className="bg-gray-300 dark:bg-gray-600 rounded h-6 w-3/4"></div>
                </div>
              ))}
            </div>
          }
        >
          <ProjectsClient initialData={initialData} />
        </Suspense>
      </div>
    </section>
  );
}

export default Projects;
