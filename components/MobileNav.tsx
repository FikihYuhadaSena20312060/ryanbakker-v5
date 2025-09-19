"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);

    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("/#")) {
      const targetId = href.substring(2);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          // Use scrollIntoView with a custom offset
          const yOffset = -50;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
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
      <SheetContent side="right" className="w-[260px]">
        <SheetHeader>
          <SheetTitle>Ryan Bakker</SheetTitle>
        </SheetHeader>
        <ul className="px-5 flex flex-col gap-8 mt-12">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                className="flex items-center gap-4 hover:text-blue-600 transition-colors"
              >
                <link.icon className="size-5" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
