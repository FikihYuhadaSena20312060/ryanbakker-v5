"use client";

import { useState } from "react";
import { FadeInUp } from "../AnimateOnScroll";
import { SkeletonHero } from "../ui/skeleton";
import { useImageLoading } from "@/lib/hooks/useImageLoading";
import AnimatedBg from "./AnimatedBg";
import HeroBtns from "./HeroBtns";
import HeroImageGrid from "./HeroImageGrid";

// Hero images that need to be loaded
const HERO_IMAGES = [
  "/hero/dark-desktop-dashboard.png",
  "/hero/dark-desktop-transactions.png",
  "/hero/dark-mobile-nav.png",
  "/hero/dark-mobile-transactions.png",
  "/hero/light-desktop-dashboard.png",
  "/hero/light-desktop-transactions.png",
  "/hero/light-mobile-nav.png",
  "/hero/light-mobile-transactions.png",
];

function Hero() {
  const { isLoading } = useImageLoading({
    images: HERO_IMAGES,
    minLoadingTime: 300,
  });

  if (isLoading) {
    return <SkeletonHero />;
  }

  return (
    <section className="min-h-[90vh] overflow-hidden md:-mt-17">
      <AnimatedBg />

      <div className="page-container md:pt-32!">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col justify-start flex-1">
            <FadeInUp delay={0}>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-16 md:leading-20 tracking-tight page-content bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-600 dark:from-neutral-200/90 dark:via-white/70 dark:to-white/50 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
                Hi I&apos;m Ryan, <br />a Web Developer
              </h1>
            </FadeInUp>

            <FadeInUp delay={150}>
              <p className="pt-4 max-w-96 text-neutral-700 dark:text-neutral-300">
                Tech enthusiast and developer, studying computer science in
                Auckland, New Zealand.
              </p>
            </FadeInUp>

            <FadeInUp delay={300}>
              <HeroBtns />
            </FadeInUp>
          </div>

          <HeroImageGrid />
        </div>
      </div>
    </section>
  );
}

export default Hero;
