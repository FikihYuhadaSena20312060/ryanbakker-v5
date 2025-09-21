import { Nothing_You_Could_Do } from "next/font/google";
import Link from "next/link";
import { memo } from "react";

const nothingYouCouldDo = Nothing_You_Could_Do({
  variable: "--font-nothing-you-could-do",
  subsets: ["latin"],
  weight: "400",
});

function Logo() {
  return (
    <Link href="/">
      <h2 className={`${nothingYouCouldDo.className} text-2xl font-bold`}>
        Ryan Bakker
      </h2>
    </Link>
  );
}

export default memo(Logo);
