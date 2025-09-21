import Image from "next/image";
import { memo } from "react";
import { LOGOS } from "@/constants";
import { FadeInUp } from "../AnimateOnScroll";

function LogoBar() {
  return (
    <div className="page-container pb-12">
      <ul className="grid grid-cols-3 md:grid-cols-9 justify-center items-center md:justify-between pb-14 gap-4 md:gap-0">
        {LOGOS.map((logo, index) => (
          <li key={index} title={logo.alt}>
            <FadeInUp delay={500 + index * 150}>
              <Image
                src={logo.path}
                alt={logo.alt}
                width={50}
                height={50}
                className="dark:invert opacity-60 m-auto hover:opacity-100 transition-all"
              />
            </FadeInUp>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(LogoBar);
