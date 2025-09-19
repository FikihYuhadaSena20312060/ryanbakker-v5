import { Nothing_You_Could_Do } from "next/font/google";

const nothingYouCouldDo = Nothing_You_Could_Do({
  variable: "--font-nothing-you-could-do",
  subsets: ["latin"],
  weight: "400",
});

function Logo() {
  return (
    <h2 className={`${nothingYouCouldDo.className} text-2xl font-bold`}>
      Ryan Bakker
    </h2>
  );
}

export default Logo;
