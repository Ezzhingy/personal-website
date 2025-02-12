"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      id="about"
      className="max-w-2xl mx-auto text-darkBg dark:text-lightBg pt-24 sm:pt-20"
    >
      <div className="flex gap-8 pt-10 px-10 items-center justify-between">
        <div className="flex flex-col">
          <div className="h-6 bg-darkBg dark:bg-lightBg flex items-center justify-center rounded-tl-lg rounded-tr-lg relative">
            <Image
              src="/mactabs.svg"
              alt="Mac tabs"
              width={70}
              height={20}
              className="ml-3 absolute left-0"
            />
            <p className="hidden sm:block text-lightBg dark:text-darkBg">
              eugene — -zsh —
            </p>
          </div>
          <div className="bg-lightFill dark:bg-darkFill p-10 rounded-bl-lg rounded-br-lg font-mono flex flex-col gap-5">
            <div>
              <p className="text-sm sm:text-lg">
                <span className="font-bold hidden sm:inline-block">
                  eugene@Eugenes-MacBook-Pro ~ %
                </span>
                <span className="font-bold sm:hidden">{">"}</span> cat intro.txt
              </p>
              <p className="text-sm tracking-tighter sm:text-lg sm:-tracking-normal">
                Heyo, Eugene here! I’m currently enrolled as a junior in the
                Computer Science Program at the University of Waterloo.
              </p>
            </div>
            <div>
              <p className="text-sm sm:text-lg">
                <span className="font-bold hidden sm:inline-block">
                  eugene@Eugenes-MacBook-Pro ~ %
                </span>
                <span className="font-bold sm:hidden">{">"}</span> cat more.txt
              </p>
              <p className="text-sm tracking-tighter sm:text-lg sm:-tracking-normal">
                Trying to convince myself that writing code will typecast itself
                into creative writing. The pen may lend itself to artistic
                expression, but I can type at 120 wpm.
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
