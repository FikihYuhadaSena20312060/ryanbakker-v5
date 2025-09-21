"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/sanity/lib/projects/getSingleProject";
import { Button } from "../ui/button";

function ImageSlideshow({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
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
  }, [isHovered]);

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
        <Image
          src={project.images[currentIndex].asset.url}
          alt={project.images[currentIndex].alt}
          width={800}
          height={600}
          className="rounded-lg transition-all duration-500 ease-in-out"
        />
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
        {project.images.map((_, index) => (
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
