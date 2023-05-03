import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function About() {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      id="about"
      className="max-w-2xl mx-auto pt-10 text-darkBg dark:text-lightBg"
    >
      <div className="flex gap-8 p-10 items-center justify-between">
        <div className="flex flex-col">
          <div className="max-w-[672px] h-6 bg-darkBg dark:bg-lightBg flex items-center justify-center rounded-tl-lg rounded-tr-lg relative">
            <Image
              src="/mactabs.svg"
              width={70}
              height={70}
              alt="Mac tabs"
              className="ml-3 absolute left-0"
            />
            <p className="hidden sm:block text-lightBg dark:text-darkBg">
              eugene — -zsh —
            </p>
          </div>
          <div className="bg-lightFill dark:bg-darkFill p-10 rounded-bl-lg rounded-br-lg font-terminal flex flex-col gap-5">
            <div>
              <p className="text-sm sm:text-lg">
                <span className="font-bold hidden sm:inline-block">
                  eugene@Eugenes-MacBook-Pro ~ %
                </span>
                <span className="font-bold sm:hidden">{">"}</span> cat intro.txt
              </p>
              <p className="text-sm tracking-tighter sm:text-lg sm:-tracking-normal">
                Heyo, Eugene here! I’m currently enrolled as a sophomore in the
                Computer Science Program at the University of Waterloo.
              </p>
            </div>
            <div>
              <p className="text-sm sm:text-lg">
                <span className="font-bold hidden sm:inline-block">
                  eugene@Eugenes-MacBook-Pro ~ %
                </span>
                <span className="font-bold sm:hidden">{">"}</span> cat fun.txt
              </p>
              <p className="text-sm tracking-tighter sm:text-lg sm:-tracking-normal">
                My main interest lies in software development, but I also have a
                budding interest in AI as well! Aside from programming, I’m a
                big anime enjoyer, gym rookie, and small-time gamer :)
              </p>
            </div>
            <div>
              <p className="text-sm sm:text-lg">
                <span className="border-r-[0.5em] border-solid border-darkBg dark:border-lightBg pr-1 animate-blink">
                  <span className="font-bold hidden sm:inline-block">
                    eugene@Eugenes-MacBook-Pro ~ %
                  </span>
                  <span className="font-bold sm:hidden">{">"}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
