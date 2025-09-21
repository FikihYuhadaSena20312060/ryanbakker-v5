"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

function Header() {
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
    <header>
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center relative z-10">
        <Logo />

        <nav className="flex items-center gap-4 md:gap-8">
          <ul className="items-center gap-8 hidden md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  className="desktop-nav-link"
                  onClick={link.external ? undefined : handleHashLinkClick}
                  prefetch={!link.external}
                >
                  <link.icon className="size-4" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="group">
            <ThemeToggle />
          </div>

          <div className="group block md:hidden">
            <MobileNav />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
