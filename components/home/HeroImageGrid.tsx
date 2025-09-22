import Image from "next/image";
import { memo } from "react";
import { FadeInUp } from "../AnimateOnScroll";

function HeroImageGrid() {
  return (
    <div className="flex items-center justify-center text-center z-10 max-w-[540px]">
      <div className="hidden dark:grid grid-cols-5 gap-2">
        {/* Top Left - Desktop Dashboard */}
        <div className="flex items-end justify-end col-span-4">
          <FadeInUp delay={0} duration={600}>
            <Image
              src="/hero/dark-desktop-top-left.png"
              alt="Dark Mode Desktop Dashboard"
              width={430}
              height={268}
              className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out"
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </FadeInUp>
        </div>

        {/* Top Right - Mobile Nav */}
        <div className="flex items-end justify-start col-span-1">
          <FadeInUp delay={100} duration={600}>
            <Image
              src="/hero/dark-mobile-top-right.png"
              alt="Dark Mode Mobile Nav"
              width={280}
              height={388}
              className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out"
              loading="lazy"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </FadeInUp>
        </div>

        {/* Bottom Left - Mobile Transactions */}
        <div className="flex items-start justify-end col-span-1">
          <FadeInUp delay={200} duration={600}>
            <Image
              src="/hero/dark-mobile-bottom-left.png"
              alt="Dark Mode Mobile Transactions"
              width={290}
              height={388}
              className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out"
              loading="lazy"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </FadeInUp>
        </div>

        {/* Bottom Right - Desktop Transactions */}
        <div className="flex items-start justify-start col-span-4">
          <FadeInUp delay={300} duration={600}>
            <Image
              src="/hero/dark-desktop-bottom-right.png"
              alt="Dark Mode Desktop Transactions"
              width={430}
              height={278}
              className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out"
              loading="lazy"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </FadeInUp>
        </div>
      </div>

      <div className="grid dark:hidden grid-cols-5 gap-2">
        {/* Top Left - Desktop Dashboard */}
        <div className="flex items-end justify-end col-span-4">
          <FadeInUp delay={0} duration={600}>
            <Image
              src="/hero/light-desktop-top-left.png"
              alt="Light Mode Desktop Dashboard"
              width={430}
              height={268}
              className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out"
              priority
              quality={85}
            />
          </FadeInUp>
        </div>

        {/* Top Right - Mobile Nav */}
        <div className="flex items-end justify-start col-span-1">
          <FadeInUp delay={100} duration={600}>
            <Image
              src="/hero/light-mobile-top-right.png"
              alt="Light Mode Mobile Nav"
              width={280}
              height={388}
              className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out"
              loading="lazy"
              quality={85}
            />
          </FadeInUp>
        </div>

        {/* Bottom Left - Mobile Transactions */}
        <div className="flex items-start justify-end col-span-1">
          <FadeInUp delay={200} duration={600}>
            <Image
              src="/hero/light-mobile-bottom-left.png"
              alt="Light Mode Mobile Transactions"
              width={290}
              height={388}
              className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out"
              loading="lazy"
              quality={85}
            />
          </FadeInUp>
        </div>

        {/* Bottom Right - Desktop Transactions */}
        <div className="flex items-start justify-start col-span-4">
          <FadeInUp delay={300} duration={600}>
            <Image
              src="/hero/light-desktop-bottom-right.png"
              alt="Light Mode Desktop Transactions"
              width={430}
              height={278}
              className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out"
              loading="lazy"
              quality={85}
            />
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}

export default memo(HeroImageGrid);

// Dark Mode
// Finova Budgeting DesktopX             BoostCreator Home MobileXX
// Shifter Home MobileX                  TimeIt Dashboard DesktopX

// Light Mode
// Finova Transactions DesktopX          ClassForge Home MobileX
// ePass Home MobileX                    TimeIt Tasks DesktopX
