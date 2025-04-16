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
          <div className="bg-lightFill dark:bg-darkFill border border-darkBg dark:border-lightBg p-10 rounded-bl-lg rounded-br-lg font-mono flex flex-col gap-5">
            <div>
              <p className="text-sm sm:text-lg">
                <span className="font-bold hidden sm:inline-block">
                  eugene@Eugenes-MacBook-Pro ~ %
                </span>
                <span className="font-bold sm:hidden">{">"}</span> cat intro.txt
              </p>
              <p className="text-sm tracking-tighter sm:text-lg sm:-tracking-normal mt-10">
                A computer science student at the{" "}
                <span className="underline">University of Waterloo</span>,
                I&apos;ve had the chance to write code across the world. Next
                stop is London, England, where I&apos;ll be interning as a
                forward deployed software engineer at{" "}
                <span className="underline">Palantir Technologies</span>.
              </p>
              <p className="text-sm tracking-tighter sm:text-lg sm:-tracking-normal mt-10">
                Below is a collection of stories and perspectives that bring you
                closer to my memory palace.
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
