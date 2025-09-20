import Link from "next/link";
import { FOOTER_LINKS } from "@/constants";
import { FadeInDown } from "./AnimateOnScroll";
import Logo from "./Logo";

function Footer() {
  return (
    <FadeInDown delay={400}>
      <footer className="flex flex-col-reverse md:flex-row justify-between items-center page-container gap-8">
        <div className="flex flex-col items-center">
          <Logo />
          <span className="text-xs pt-1 text-neutral-500">
            All Rights Reserved 2025
          </span>
        </div>

        <ul className="flex flex-col md:flex-row items-center gap-3 md:gap-7">
          {FOOTER_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : ""}
                  className="hover:opacity-60 transition-all"
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
