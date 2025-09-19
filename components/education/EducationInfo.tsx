import { eduCards } from "@/constants";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { FadeInLeft, FadeInRight } from "../AnimateOnScroll";

function EducationInfo() {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-14 md:gap-14">
      <div className="md:space-y-22">
        <FadeInRight delay={0}>
          <aside className="flex flex-1 flex-col gap-5 p-8 text-white">
            <h3 className="font-bold uppercase text-xl">{eduCards[0].title}</h3>
            <span className="flex items-center gap-2 text-sm font-medium">
              <Calendar size={15} />
              {eduCards[0].date}
            </span>
            <span className="font-bold uppercase text-xs opacity-60">
              Key Points
            </span>
            <ul className="list-disc flex flex-col gap-1">
              {eduCards[0].highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </aside>
        </FadeInRight>

        <FadeInRight delay={200}>
          <aside className="bg-gradient-to-tr dark:from-neutral-800/80 dark:via-neutral-900/80 dark:to-neutral-700 shadow-lg p-8 rounded-xl border dark:border-neutral-700 from-neutral-200/80 via-neutral-100/80 to-neutral-300 border-neutral-300 flex flex-1 flex-col gap-5">
            <h3 className="font-bold uppercase text-xs opacity-60">
              Description
            </h3>
            <p>{eduCards[1].blurb}</p>
          </aside>
        </FadeInRight>

        <FadeInRight delay={400}>
          <aside className="flex flex-1 flex-col gap-5 p-8 text-white">
            <h3 className="font-bold uppercase text-xl">{eduCards[2].title}</h3>
            <span className="flex items-center gap-2 text-sm font-medium">
              <Calendar size={15} />
              {eduCards[2].date}
            </span>
            <span className="font-bold uppercase text-xs opacity-60">
              Key Points
            </span>
            <ul className="list-disc flex flex-col gap-1">
              {eduCards[2].highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </aside>
        </FadeInRight>
      </div>

      <div className="relative z-[150] hidden md:flex flex-col justify-between items-center">
        <Image
          src="/logos/aut-icon.png"
          alt="AUT"
          width={250}
          height={250}
          className="rounded-full z-[100]"
        />

        <div className="w-0.5 h-full bg-gray-500 rounded-full" />

        <Image
          src="/logos/yoobee-icon.png"
          alt="AUT"
          width={250}
          height={250}
          className="rounded-full z-[100]"
        />

        <div className="w-0.5 h-full bg-gray-500 rounded-full" />

        <Image
          src="/logos/yoobee-icon.png"
          alt="AUT"
          width={250}
          height={250}
          className="rounded-full z-[100] pb-[10.5rem]"
        />
      </div>

      <div className="md:space-y-22">
        <FadeInLeft delay={100}>
          <aside className="bg-gradient-to-tr dark:from-neutral-800/80 dark:via-neutral-900/80 dark:to-neutral-700 shadow-lg p-8 rounded-xl border dark:border-neutral-700 from-neutral-200/80 via-neutral-100/80 to-neutral-300 border-neutral-300 flex flex-1 flex-col gap-5 md:mt-12 md:mb-8">
            <h3 className="font-bold uppercase text-xs opacity-60">
              Description
            </h3>
            <p>{eduCards[0].blurb}</p>
          </aside>
        </FadeInLeft>
        <FadeInLeft delay={300}>
          <aside className="flex flex-1 flex-col gap-5 p-8 md:mb-22 pt-12 text-white">
            <h3 className="font-bold uppercase text-xl">{eduCards[1].title}</h3>
            <span className="flex items-center gap-2 text-sm font-medium">
              <Calendar size={15} />
              {eduCards[1].date}
            </span>
            <span className="font-bold uppercase text-xs opacity-60">
              Key Points
            </span>
            <ul className="list-disc flex flex-col gap-1">
              {eduCards[1].highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </aside>
        </FadeInLeft>
        <FadeInLeft delay={500}>
          <aside className="bg-gradient-to-tr dark:from-neutral-800/80 dark:via-neutral-900/80 dark:to-neutral-700 shadow-lg p-8 rounded-xl border dark:border-neutral-700 from-neutral-200/80 via-neutral-100/80 to-neutral-300 border-neutral-300 flex flex-1 flex-col gap-5 md:mt-12">
            <h3 className="font-bold uppercase text-xs opacity-60">
              Description
            </h3>
            <p>{eduCards[2].blurb}</p>
          </aside>
        </FadeInLeft>
      </div>
    </div>
  );
}

export default EducationInfo;
