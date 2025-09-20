"use client";

import {
  FolderGit2,
  Globe,
  Layers,
  MoveRight,
  PanelTop,
  Rocket,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/sanity/lib/projects/getAllProjects";
import { FadeInUp } from "../AnimateOnScroll";
import { Button } from "../ui/button";
import { Skeleton, SkeletonProjectCard, SkeletonText } from "../ui/skeleton";

// Click-triggered fade-in animation used to transition preview images
function FadeInOnClick({
  children,
  isVisible,
  delay = 0,
  duration = 1000,
}: {
  children: React.ReactNode;
  isVisible: boolean;
  delay?: number;
  duration?: number;
}) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      setShouldRender(false);
    }
  }, [isVisible, delay, duration]);

  if (!shouldRender) return null;

  return (
    <div
      className="transition-all ease-out"
      style={{
        opacity: isAnimating ? 1 : 0,
        transform: isAnimating ? "translateX(0)" : "translateX(20px)",
        transitionDuration: `${duration}ms`,
        transitionProperty: "opacity, transform",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
}

function ProjectsPreview({ projects }: { projects: any }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imagesVisible, setImagesVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();
  const [isDesktop, setIsDesktop] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  console.log(projects);

  const handleProjectClick = (index: number) => {
    if (index !== selectedIndex) {
      setImagesVisible(false);
      setSelectedIndex(index);
      setTimeout(() => {
        setImagesVisible(true);
      }, 50);
    }
  };

  // Simulate loading time for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Detect desktop via Tailwind's lg breakpoint (min-width: 1024px)
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    } else {
      // Safari <14 fallback
      mql.addListener(update);
      return () => {
        mql.removeListener(update);
      };
    }
  }, []);

  // Auto-cycle projects on desktop when not paused
  useEffect(() => {
    if (!isDesktop || isPaused) return;
    const interval = setInterval(() => {
      const nextIndex = (selectedIndex + 1) % 4;
      handleProjectClick(nextIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [isDesktop, isPaused, selectedIndex]);

  if (isLoading) {
    return (
      <section
        id="projects-preview"
        className="pt-20 bg-gradient-to-tl from-sky-900 dark:from-gray-900 via-sky-800 dark:via-gray-800 to-blue-900 dark:to-blue-950/20 relative overflow-hidden"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-sky-400/30 to-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-full blur-3xl" />

        <div className="w-full px-4 mx-auto max-w-7xl relative">
          <div className="mb-8 lg:mb-16">
            <Skeleton variant="text" className="h-12 w-80 mb-3" />
            <SkeletonText lines={2} className="max-w-2xl" />
          </div>

          {/* Mobile skeleton */}
          <div className="lg:hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonProjectCard key={i} />
              ))}
            </div>
          </div>

          {/* Desktop skeleton */}
          <div className="hidden lg:flex flex-row justify-between">
            <aside>
              <div className="flex flex-col gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="p-6 flex flex-col items-start min-w-full rounded-lg bg-white/5 dark:bg-white/5 w-[400px]"
                  >
                    <div className="flex flex-row items-center gap-2 mb-3">
                      <Skeleton variant="circle" className="h-6 w-6" />
                      <Skeleton variant="text" className="h-6 w-32" />
                    </div>
                    <SkeletonText lines={2} />
                  </div>
                ))}
              </div>
            </aside>
            <div className="relative flex-1 w-full min-h-[700px]">
              <div className="absolute bottom-[150px] right-0 w-full">
                <div className="relative">
                  <Skeleton
                    variant="image"
                    className="absolute rounded-xl bottom-[100px] -right-[100px] w-[700px] h-[500px]"
                  />
                  <Skeleton className="absolute w-[100px] h-[25px] bottom-[50px] right-[500px] rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects-preview"
      className="pt-20 bg-gradient-to-tl from-sky-900 dark:from-gray-900 via-sky-800 dark:via-gray-800 to-blue-900 dark:to-blue-950/20 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-sky-400/30 to-blue-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-full blur-3xl" />

      <div className="w-full px-4 mx-auto max-w-7xl relative">
        <FadeInUp delay={0} duration={800}>
          <div className="mb-8 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl uppercase font-extrabold lg:font-bold text-white dark:text-white mb-3 tracking-tight">
              Personal Projects
            </h2>
            <p className="text-gray-200/80 dark:text-gray-400 max-w-2xl text-sm md:text-base">
              Check out some of the projects I have been working on. View a
              project summary and go to the GitHub repository, where you can see
              the tools and methods used.
            </p>
          </div>
        </FadeInUp>

        {/* Mobile/Tablet Layout - 2 columns with images and buttons */}
        <div className="lg:hidden pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((project: any, index: any) => (
              <FadeInUp key={project.title} delay={index * 100} duration={600}>
                <div className="group p-6 rounded-xl bg-white/10 dark:bg-white/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg shadow-sky-900/10 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:shadow-sky-900/20">
                  <div className="flex flex-row items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/10 transition-colors duration-300">
                      <PanelTop className="w-5 h-5 text-white/90 dark:text-white/80" />
                    </div>
                    <h5 className="font-bold text-white/95">{project.title}</h5>
                  </div>
                  <p className="text-sm text-white/80 dark:text-white/75 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Mobile Images - Overlapping Layout */}
                  <div className="relative mb-4 h-32">
                    {/* Mobile Image - Smaller, overlapping on top */}
                    <div className="absolute -bottom-10 md:top-2 md:right-2 z-10">
                      <Image
                        src={urlFor(project.images[1]).url()}
                        alt={`${project.title} Mobile View`}
                        width={250}
                        height={120}
                        className="rounded-lg shadow-xl border border-white/30"
                      />
                    </div>
                    {/* Desktop Image - Larger, positioned behind */}
                    <div className="absolute top-0 right-0 md:right-full md:left-0 z-0">
                      <Image
                        src={urlFor(project.images[0]).url()}
                        alt={`${project.title} Desktop View`}
                        width={325}
                        height={128}
                        className="rounded-lg shadow-lg border border-white/20 object-cover"
                      />
                    </div>
                  </div>

                  {/* Project Button */}
                  <Link href={`/projects/${project.slug}`}>
                    <Button
                      variant="glassSecondary"
                      className="w-full backdrop-blur-md bg-white/8 dark:bg-white/6 border-white/20 hover:bg-white/12 hover:border-white/25 text-white/90 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden hover:translate-x-1 hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-[100%] mt-10"
                    >
                      <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                        View Project
                        <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </FadeInUp>
            ))}
          </div>
          <Link href="/projects">
            <Button
              variant="glassPrimary"
              className="w-full backdrop-blur-md bg-white/8 dark:bg-white/6 border-white/20 hover:bg-white/12 hover:border-white/25 text-white/90 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden hover:translate-x-1 hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-[100%] mt-10"
              size="lg"
            >
              <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                All Projects
                <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
              </span>
            </Button>
          </Link>
        </div>

        {/* Desktop Layout - Sidebar with images */}
        <div
          className="hidden lg:flex flex-row justify-between"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <aside>
            <ul className="flex flex-col gap-3">
              {projects.map((project: any, index: any) => {
                const isSelected = index === selectedIndex;
                return (
                  <FadeInUp
                    key={project.title}
                    delay={index * 150}
                    duration={600}
                  >
                    <li>
                      <button
                        type="button"
                        onClick={() => handleProjectClick(index)}
                        aria-pressed={isSelected}
                        className={`p-6 flex flex-col items-start cursor-pointer min-w-full transition-all duration-300 rounded-lg backdrop-blur-xl ${
                          isSelected
                            ? "bg-white/15 dark:bg-white/10 border border-white/30 dark:border-white/20 shadow-xl shadow-sky-900/30 ring-1 ring-white/20"
                            : "bg-white/5 dark:bg-white/5 border border-transparent hover:bg-white/10 hover:border-white/20"
                        }`}
                      >
                        <div className="flex flex-row items-center gap-2">
                          <PanelTop className="w-6 h-6 text-white/90" />
                          <h5 className="font-bold text-white/95">
                            {project.title}
                          </h5>
                        </div>
                        <p className="text-sm max-w-[420px] text-left pt-3 text-white/80">
                          {project.description}
                        </p>
                      </button>
                    </li>
                  </FadeInUp>
                );
              })}
            </ul>
          </aside>

          <div className="relative flex-1 w-full min-h-[700px]">
            <div className="absolute bottom-[170px] right-0 w-full">
              <div className="relative">
                <FadeInOnClick
                  isVisible={imagesVisible}
                  delay={100}
                  duration={900}
                >
                  <Image
                    src={urlFor(projects[selectedIndex].images[0]).url()}
                    alt={`${projects[selectedIndex].title} Desktop View`}
                    width={900}
                    height={700}
                    className="absolute rounded-xl shadow-2xl shadow-sky-950/40 bottom-[80px] -right-[280px] z-0 border border-white/20"
                  />
                </FadeInOnClick>
                <FadeInOnClick
                  isVisible={imagesVisible}
                  delay={300}
                  duration={900}
                >
                  <Image
                    src={urlFor(projects[selectedIndex].images[1]).url()}
                    alt={`${projects[selectedIndex].title} Mobile View`}
                    width={550}
                    height={500}
                    className="absolute rounded-xl shadow-xl bottom-[79.5px] left-[130px] z-20 border border-white/20"
                  />
                </FadeInOnClick>

                <div className="flex flex-row items-center gap-4">
                  <Link href="/projects">
                    <Button
                      className="group overflow-hidden px-8 py-4 rounded-md font-semibold hover:scale-[1.03] active:scale-95 cursor-pointer transition-all duration-300 text-sm w-full md:w-auto absolute left-[135px] bottom-5"
                      variant="glassPrimary"
                    >
                      <div>
                        <div className="flex items-center gap-3">
                          <Layers className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          <span>All Projects</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                      </div>
                    </Button>
                  </Link>

                  <Button
                    variant="glassSecondary"
                    className="absolute left-[325px] bottom-5 w-[200px] z-30 backdrop-blur-md bg-white/8 dark:bg-white/6 border-white/20 hover:bg-white/12 hover:border-white/25 text-white/90 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden hover:translate-x-1 hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-[100%]"
                  >
                    <Link href={`/projects/${projects[selectedIndex].slug}`}>
                      <span className="relative z-10 flex items-center justify-center gap-2 transition-all duration-300 group-hover:gap-3">
                        View Project
                        <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPreview;
