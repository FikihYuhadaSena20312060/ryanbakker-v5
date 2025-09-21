"use client";

import { FadeInUp } from "../AnimateOnScroll";
import { SkeletonHero } from "../ui/skeleton";
import { useProgressiveImageLoading } from "@/lib/hooks/useImageLoading";
import AnimatedBg from "./AnimatedBg";
import HeroBtns from "./HeroBtns";
import HeroImageGrid from "./HeroImageGrid";

// Critical hero images that should load first (above the fold)
const CRITICAL_HERO_IMAGES = [
  "/hero-optimized/dark-desktop-dashboard.webp",
  "/hero-optimized/light-desktop-dashboard.webp",
];

// Secondary hero images that can load after critical content
const SECONDARY_HERO_IMAGES = [
  "/hero-optimized/dark-desktop-transactions.webp",
  "/hero-optimized/dark-mobile-nav.webp",
  "/hero-optimized/dark-mobile-transactions.webp",
  "/hero-optimized/light-desktop-transactions.webp",
  "/hero-optimized/light-mobile-nav.webp",
  "/hero-optimized/light-mobile-transactions.webp",
];

function Hero() {
  const { criticalLoaded, allLoaded } = useProgressiveImageLoading({
    criticalImages: CRITICAL_HERO_IMAGES,
    secondaryImages: SECONDARY_HERO_IMAGES,
    minLoadingTime: 200,
  });

  return (
    <section id="home" className="min-h-[90vh] overflow-hidden md:-mt-17">
      <AnimatedBg />

      <div className="page-container md:pt-32!">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col justify-start flex-1">
            <FadeInUp delay={0}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-12 sm:leading-16 md:leading-20 tracking-tight page-content bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-600 dark:from-neutral-100/90 dark:via-white/90 dark:to-white/80 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
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

          {/* Only show skeleton for images if critical images aren't loaded yet */}
          {!criticalLoaded ? (
            <div className="flex items-center justify-center text-center z-10 max-w-[600px]">
              <div className="w-[600px] h-[300px] bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
            </div>
          ) : (
            <HeroImageGrid />
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
