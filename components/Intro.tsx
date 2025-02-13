"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

import headshoteugene from "../public/headshoteugene.jpeg";

export default function Intro() {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      id="home"
      className="box-border max-w-2xl mx-auto pt-24 sm:pt-20 text-darkBg dark:text-lightBg"
    >
      <div className="flex flex-col-reverse gap-8 m-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-8">
          <div className="leading-[5rem]">
            <h1 className="font-bold text-3xl text-start leading-[5rem]">
              Eugene Zhang
            </h1>
            <p className="leading-tight text-sm">
              "Don't worry, I'm a programmer. I know what I'm doing."
            </p>
          </div>
          <div className="flex gap-5">
            <Link
              href="https://www.linkedin.com/in/eugene-ezzhang"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={
                  currentTheme === "dark"
                    ? "/lightlinkedin.svg"
                    : "/darklinkedin.svg"
                }
                width={40}
                height={40}
                alt="LinkedIn link"
                className="cursor-pointer transition-transform hover:scale-110"
              />
            </Link>
            <Link
              href="https://github.com/Ezzhingy"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={
                  currentTheme === "dark"
                    ? "/lightgithub.svg"
                    : "/darkgithub.svg"
                }
                width={40}
                height={40}
                alt="GitHub link"
                className="cursor-pointer transition-transform hover:scale-110"
              />
            </Link>
            <Link
              href="mailto:e4zhang@uwaterloo.ca"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={
                  currentTheme === "dark" ? "/lightemail.svg" : "/darkemail.svg"
                }
                width={40}
                height={40}
                alt="Email link"
                className="cursor-pointer transition-transform hover:scale-110"
              />
            </Link>
          </div>
        </div>
        <Image
          src={headshoteugene}
          quality={40}
          alt="Picture of the author"
          className="w-[200px] h-auto rounded-2xl"
          fetchPriority="high"
          priority={true}
        />
      </div>
    </div>
  );
}
