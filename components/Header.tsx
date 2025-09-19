import { NAV_LINKS } from "@/constants";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import MobileNav from "./MobileNav";

function Header() {
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
