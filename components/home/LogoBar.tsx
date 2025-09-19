import { LOGOS } from "@/constants";
import Image from "next/image";

function LogoBar() {
  return (
    <div className="page-container pb-12">
      <ul className="grid grid-cols-3 md:grid-cols-9 justify-center items-center md:justify-between pb-14 gap-4 md:gap-0">
        {LOGOS.map((logo) => (
          <li key={logo.path} title={logo.alt}>
            <Image
              src={logo.path}
              alt={logo.alt}
              width={50}
              height={50}
              className="dark:invert opacity-60 m-auto hover:opacity-100 transition-all"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LogoBar;
