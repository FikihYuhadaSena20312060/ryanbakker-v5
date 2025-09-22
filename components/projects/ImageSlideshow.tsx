"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { Project } from "@/sanity/lib/projects/getSingleProject";
import { Button } from "../ui/button";

function ImageSlideshow({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const slides = useMemo(() => {
    const desktop = project.desktopImages ?? [];
    const mobile = project.mobileImages ?? [];
    return [...desktop, ...mobile];
  }, [project.desktopImages, project.mobileImages]);
  const slideCount = slides.length;

  const prevSlide = (): void => {
    if (slideCount === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  };

  const nextSlide = (): void => {
    if (slideCount === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered, slideCount]);

  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full mx-auto bg-gradient-to-tr dark:from-neutral-800/80 dark:via-neutral-900/80 dark:to-neutral-700 shadow-lg p-0 md:p-6 rounded-xl border dark:border-neutral-700 from-neutral-200/80 via-neutral-100/80 to-neutral-300 border-neutral-300 h-full flex-1">
      <div
        className="relative mx-2 group flex items-center justify-center pt-2"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full rounded-xl flex items-center justify-center">
          {slides[currentIndex] && (
            <Image
              src={slides[currentIndex].asset.url}
              alt={slides[currentIndex].alt || project.title}
              height={200}
              width={500}
              className="shadow-xl rounded-lg max-h-[40vh] w-auto"
              loading="eager"
            />
          )}
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Button
          className="rounded-xl mx-1 p-7 bg-transparent text-neutral-500 group hover:bg-transparent"
          onClick={prevSlide}
        >
          <ChevronLeft className="group-hover:text-sky-600 transition-colors size-6" />
        </Button>
        <Button
          className="rounded-xl mx-1 p-7 bg-transparent text-neutral-500 group hover:bg-transparent"
          onClick={nextSlide}
        >
          <ChevronRight className="group-hover:text-sky-600 transition-colors size-6" />
        </Button>
      </div>
      <div className="flex justify-center mb-5">
        {Array.from({ length: slideCount }).map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 bg-gradient-to-tr ${
              index === currentIndex
                ? "from-sky-500 to-purple-800 rounded-xl"
                : "bg-gray-500/40 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlideshow;
