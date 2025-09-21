"use client";

import Link from "next/link";
import { FOOTER_LINKS } from "@/constants";
import { FadeInDown } from "./AnimateOnScroll";
import Logo from "./Logo";

function Footer() {
  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    <FadeInDown delay={400}>
      <footer className="flex flex-col-reverse md:flex-row justify-between items-center page-container gap-8">
        <div className="flex flex-col items-center">
          <Logo />
          <span className="text-xs pt-1 text-neutral-500">
            All Rights Reserved 2025
          </span>
        </div>

        <ul className="flex flex-col md:flex-row items-center gap-7">
          {FOOTER_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : ""}
                  className="hover:opacity-60 transition-all"
                  onClick={link.external ? undefined : handleHashLinkClick}
                >
                  {Icon ? <Icon className="size-5" /> : link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </footer>
    </FadeInDown>
  );
}

export default Footer;
