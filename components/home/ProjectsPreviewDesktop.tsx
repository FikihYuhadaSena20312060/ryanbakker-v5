import { getFeaturedProjects } from "@/sanity/lib/projects/getFeaturedProjects";
import { FadeInUp } from "../AnimateOnScroll";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";

async function ProjectsPreviewDesktop() {
  const projects = await getFeaturedProjects();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imagesVisible, setImagesVisible] = useState(true);

  const handleProjectClick = (index: number) => {
    if (index !== selectedIndex) {
      setImagesVisible(false);
      setSelectedIndex(index);
      setTimeout(() => {
        setImagesVisible(true);
      }, 50);
    }
  };

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

  return (
    <>
      <aside>
        <ul className="flex flex-col gap-3">
          {projects.map((project: any, index: any) => {
            const isSelected = index === selectedIndex;
            return (
              <FadeInUp key={project.title} delay={index * 150} duration={600}>
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
                      <project.icon className="w-6 h-6 text-white/90" />
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
        <div className="absolute bottom-[150px] right-0 w-full">
          <div className="relative">
            <FadeInOnClick isVisible={imagesVisible} delay={100} duration={900}>
              <Image
                src={projects[selectedIndex].images.dark.desktop}
                alt={`${projects[selectedIndex].title} Desktop View`}
                width={900}
                height={700}
                className="absolute rounded-xl shadow-2xl shadow-sky-950/40 bottom-[80px] -right-[280px] z-0 border border-white/20"
              />
            </FadeInOnClick>
            <FadeInOnClick isVisible={imagesVisible} delay={300} duration={900}>
              <Image
                src={projects[selectedIndex].images.dark.desktop}
                alt={`${projects[selectedIndex].title} Mobile View`}
                width={550}
                height={500}
                className="absolute rounded-xl shadow-xl bottom-[79.5px] left-[130px] z-20 border border-white/20"
              />
            </FadeInOnClick>
            {/* Desktop-only glass button below the mobile image */}
            <Button
              variant="glassSecondary"
              className="absolute left-[130px] bottom-5 w-[200px] z-30 backdrop-blur-md bg-white/8 dark:bg-white/6 border-white/20 hover:bg-white/12 hover:border-white/25 text-white/90 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden hover:translate-x-1 hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-[100%]"
              onClick={() => {
                // TODO: Replace with actual project link/navigation
                console.log(`Navigate to ${projects[selectedIndex].title}`);
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 transition-all duration-300 group-hover:gap-3">
                View Project
                <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPreviewDesktop;
