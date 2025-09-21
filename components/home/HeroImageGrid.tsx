import Image from "next/image";
import { memo } from "react";
import { FadeInUp } from "../AnimateOnScroll";

function HeroImageGrid() {
  return (
    <div className="flex items-center justify-center text-center z-10 max-w-[600px]">
      <div className="hidden dark:grid grid-cols-5 gap-2 scale-[1] sm:scale-[0.7] lg:scale-[0.85] xl:scale-[0.9]">
        {/* Top Left - Desktop Dashboard */}
        <div className="flex items-end justify-end col-span-4">
          <FadeInUp delay={600} duration={800}>
            <Image
              src="/hero/dark-desktop-dashboard.png"
              alt="Dark Mode Desktop Dashboard"
              width={600}
              height={300}
              className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </FadeInUp>
        </div>

        {/* Top Right - Mobile Nav */}
        <div className="flex items-end justify-start col-span-1">
          <FadeInUp delay={800} duration={800}>
            <Image
              src="/hero/dark-mobile-nav.png"
              alt="Dark Mode Mobile Nav"
              width={200}
              height={300}
              className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </FadeInUp>
        </div>

        {/* Bottom Left - Mobile Transactions */}
        <div className="flex items-start justify-end col-span-1">
          <FadeInUp delay={1000} duration={800}>
            <Image
              src="/hero/dark-mobile-transactions.png"
              alt="Dark Mode Mobile Transactions"
              width={200}
              height={300}
              className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </FadeInUp>
        </div>

        {/* Bottom Right - Desktop Transactions */}
        <div className="flex items-start justify-start col-span-4">
          <FadeInUp delay={1200} duration={800}>
            <Image
              src="/hero/dark-desktop-transactions.png"
              alt="Dark Mode Desktop Transactions"
              width={600}
              height={300}
              className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </FadeInUp>
        </div>
      </div>

      <div className="grid dark:hidden grid-cols-5 gap-2">
        {/* Top Left - Desktop Dashboard */}
        <div className="flex items-end justify-end col-span-4">
          <FadeInUp delay={600} duration={800}>
            <Image
              src="/hero/light-desktop-dashboard.png"
              alt="Light Mode Desktop Dashboard"
              width={600}
              height={300}
              className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </FadeInUp>
        </div>

        {/* Top Right - Mobile Nav */}
        <div className="flex items-end justify-start col-span-1">
          <FadeInUp delay={800} duration={800}>
            <Image
              src="/hero/light-mobile-nav.png"
              alt="Light Mode Mobile Nav"
              width={200}
              height={300}
              className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </FadeInUp>
        </div>

        {/* Bottom Left - Mobile Transactions */}
        <div className="flex items-start justify-end col-span-1">
          <FadeInUp delay={1000} duration={800}>
            <Image
              src="/hero/light-mobile-transactions.png"
              alt="Light Mode Mobile Transactions"
              width={200}
              height={300}
              className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </FadeInUp>
        </div>

        {/* Bottom Right - Desktop Transactions */}
        <div className="flex items-start justify-start col-span-4">
          <FadeInUp delay={1200} duration={800}>
            <Image
              src="/hero/light-desktop-transactions.png"
              alt="Light Mode Desktop Transactions"
              width={600}
              height={300}
              className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}

export default memo(HeroImageGrid);
