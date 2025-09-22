"use client";

import AnimatedBg from "../AnimatedBg";
import { FadeInUp } from "../AnimateOnScroll";
import HeroBtns from "./HeroBtns";
import HeroImageGrid from "./HeroImageGrid";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen overflow-hidden -mt-[71px] pt-18 md:-mt-[74px] relative"
    >
      <AnimatedBg />
      <div className="page-container md:pt-12! relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col justify-start flex-1">
            <FadeInUp delay={0}>
              <h1 className="top-heading-sizes font-extrabold leading-12 sm:leading-16 md:leading-20 tracking-tight page-content bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-600 dark:from-neutral-50 dark:via-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                Hi I&apos;m Ryan, <br />a Web Developer
              </h1>
            </FadeInUp>

            <FadeInUp delay={150}>
              <p className="pt-4 max-w-[565px] text-neutral-700 dark:text-neutral-300">
                Experienced in front-end with a focus on Next.js development, a
                tech enthusiast, and currently studying to complete a Bachelor
                of Computer and Information Sciences in Auckland, New Zealand.
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
