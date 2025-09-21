"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Layers } from "lucide-react";
import Link from "next/link";
import { handleSmoothScrollClick } from "@/lib/utils";
import { Button } from "../ui/button";

function HeroBtns() {
  return (
    <div className="flex flex-col gap-4 pt-8 pb-12 md:py-16">
      <span className="font-bold uppercase text-xs opacity-50">
        Check out my projects
      </span>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <Link
          href="/#projects-preview"
          onClick={(e) => handleSmoothScrollClick(e, "projects-preview")}
        >
          <Button
            className="group relative overflow-hidden px-8 py-4 rounded-md font-semibold hover:scale-[1.03] active:scale-95 cursor-pointer transition-all duration-300 text-sm w-full md:w-auto"
            variant="glassPrimary"
          >
            <div>
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>View Projects</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            </div>
          </Button>
        </Link>
        <Link href="https://www.github.com/ryanbakker" target="_blank">
          <Button
            className="group relative overflow-hidden px-8 py-4 rounded-md font-semibold hover:scale-[1.03] active:scale-95 transition-all duration-300 w-full md:w-auto cursor-pointer text-sm bg-white/60 hover:bg-white/70 text-neutral-900 dark:text-foreground/90 border border-neutral-300 hover:border-neutral-400 dark:border-white/20"
            variant="glassSecondary"
          >
            <div className="flex items-center gap-3">
              <GitHubLogoIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <span>GitHub Profile</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroBtns;
