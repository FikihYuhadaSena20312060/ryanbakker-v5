"use client";

import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import type { Project } from "@/sanity/lib/projects/getSingleProject";
import { FadeInLeft, FadeInRight } from "../AnimateOnScroll";
import { Button } from "../ui/button";

function ProjectHeader({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <div className="page-container flex md:items-end flex-col md:flex-row justify-between h-full gap-3 md:gap-0 z-[100]">
      <div>
        <FadeInRight delay={100}>
          <h1 className="text-4xl font-extrabold tracking-tight page-content bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-600 dark:from-neutral-100/90 dark:via-white/90 dark:to-white/80 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)] pb-1">
            {project.title}
          </h1>
        </FadeInRight>
        <FadeInRight delay={200}>
          <h2 className="pt-3 max-w-96 lg:max-w-[450px] text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            {project.description}
          </h2>
        </FadeInRight>
      </div>
      <FadeInLeft delay={100} className="flex flex-col items-end gap-4">
        <Button
          className="group relative overflow-hidden px-8 py-4 rounded-md font-semibold hover:scale-[1.03] active:scale-95 cursor-pointer transition-all duration-300 text-sm w-full md:w-auto"
          variant="glassSecondary"
          onClick={() => router.back()}
        >
          <div>
            <div className="flex items-center gap-3">
              <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Go Back
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          </div>
        </Button>
      </FadeInLeft>
    </div>
  );
}

export default ProjectHeader;
