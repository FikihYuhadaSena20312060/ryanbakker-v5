"use client";

import { Project } from "@/sanity/lib/projects/getSingleProject";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
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
      }, 8000);

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
    <div className="relative w-full mx-auto bg-gradient-to-tr dark:from-neutral-800/80 dark:via-neutral-900/80 dark:to-neutral-700 shadow-lg p-8 rounded-xl border dark:border-neutral-700 from-neutral-200/80 via-neutral-100/80 to-neutral-300 border-neutral-300 h-full flex-1">
      <div
        className="relative h-[250px] md:h-[460px] mx-4 group flex items-center justify-center"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={project.images[currentIndex].asset.url}
          alt={project.images[currentIndex].alt}
          width={800}
          height={600}
          className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <Button
        className="absolute left-0 top-1/2 transform h-[459px] rounded-xl mx-1 -mt-[10px] -translate-y-1/2 bg-transparent text-white p-2 group hover:bg-transparent"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-gray-300 group-hover:text-indigo-600 transition-colors size-6" />
      </Button>
      <Button
        className="absolute right-0 top-1/2 transform h-[459px] rounded-xl mx-1 -mt-[10px] -translate-y-1/2 bg-transparent text-white p-2 group hover:bg-transparent"
        onClick={nextSlide}
      >
        <ChevronRight className="text-gray-300 group-hover:text-indigo-600 transition-colors size-6" />
      </Button>
      <div className="flex justify-center mt-4">
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
