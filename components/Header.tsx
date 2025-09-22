"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { FadeInUp } from "./AnimateOnScroll";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

function Header() {
  const _handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("/#")) {
      const targetId = href.substring(2);
      if (targetId === "home") {
        // Home link - scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Other sections - scroll to specific element
        const element = document.getElementById(targetId);
        if (element) {
          const yOffset = -50; // Account for fixed header
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header>
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center relative z-10">
        <Logo />

        <nav className="flex items-center gap-4 md:gap-8">
          <ul className="items-center gap-2 hidden md:flex">
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <FadeInUp delay={500 + index * 150}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    className="flex flex-row items-center gap-2 py-2 px-4 overflow-hidden border border-transparent rounded-md transition-all duration-300 hover:cursor-pointer text-neutral-900 dark:text-neutral-100 hover:dark:border-white/20 hover:backdrop-blur-md hover:bg-white/8 hover:dark:bg-white/6 hover:border hover:border-white/20 hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:focus-visible:ring-[3px] hover:focus-visible:ring-ring/30 z-50"
                    prefetch={!link.external}
                  >
                    <link.icon className="size-4" />
                    {link.label}
                  </Link>
                </FadeInUp>
              </li>
            ))}
          </ul>

          <div className="group scale-[1.1]">
            <ThemeToggle />
          </div>

          <div className="group block md:hidden scale-[1.1]">
            <MobileNav />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
