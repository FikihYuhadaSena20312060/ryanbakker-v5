"use client";

import { Mail, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);

    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("/#")) {
      const targetId = href.substring(2);
      setTimeout(() => {
        if (targetId === "home") {
          // Home link - scroll to top
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          // Other sections - scroll to specific element
          const element = document.getElementById(targetId);
          if (element) {
            const yOffset = -50; // Account for fixed header
            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }
      }, 300); // Increased delay to ensure sheet closes completely
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="glassSecondary"
          size="icon"
          className="lg:hidden group relative overflow-hidden hover:scale-[1.03] active:scale-95 transition-transform duration-300"
        >
          <div className="relative z-10">
            <Menu className="h-[1.2rem] w-[1.2rem] group-hover:rotate-180 transition-transform duration-500" />
          </div>
          <span className="sr-only">Toggle mobile menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[260px] bg-gradient-to-br from-sky-100 dark:from-black via-white dark:via-gray-950 to-sky-100 dark:to-black/90"
      >
        <SheetHeader>
          <SheetTitle>Ryan Bakker</SheetTitle>
        </SheetHeader>
        <ul className="px-5 flex flex-col gap-8 mt-12">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                onClick={link.external ? undefined : handleHashLinkClick}
                prefetch={!link.external}
              >
                <Button
                  className="group relative overflow-hidden px-8 py-4 rounded-md font-semibold hover:scale-[1.03] active:scale-95 transition-all duration-300 w-full md:w-auto cursor-pointer text-sm bg-white/60 hover:bg-white/70 text-neutral-900 dark:text-foreground/90 border border-neutral-300 hover:border-neutral-400 dark:border-white/20"
                  variant="glassSecondary"
                >
                  <span className="flex flex-row items-center gap-2">
                    <link.icon className="size-5" />
                    {link.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                </Button>
              </Link>
            </li>
          ))}
        </ul>
        <SheetFooter>
          <ul className="flex flex-row gap-8 md:gap-5 items-center justify-center md:justify-start pb-4">
            <li>
              <a href="mailto:ryanbakker@outlook.co.nz?subject=Website%20Enquiry">
                <Mail className="opacity-70 hover:opacity-100 transition-all h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ryan-bakker/"
                target="_blank"
              >
                <LinkedInLogoIcon className="opacity-70 hover:opacity-100 transition-all h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="https://github.com/ryanbakker" target="_blank">
                <GitHubLogoIcon className="opacity-70 hover:opacity-100 transition-all h-6 w-6" />
              </a>
            </li>
          </ul>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
