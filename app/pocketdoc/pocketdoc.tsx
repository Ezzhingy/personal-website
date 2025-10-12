"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import { monoSans } from "@/functions/fonts";

export default function Pocketdoc({ data }: { data: string[] }) {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      className={`${monoSans.className} max-w-2xl mx-auto pt-10 text-darkBg dark:text-lightBg`}
    >
      <div className="flex flex-col gap-3 mx-10 items-start">
        <div className="divide-y-2 divide-darkBg dark:divide-lightBg">
          <div className="pb-5">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-2xl">PocketDoc</h1>
              <Link
                href="https://github.com/Ezzhingy/pocketdoc"
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
                  className="cursor-pointer"
                />
              </Link>
            </div>
            <h2>
              An automated AI agent solution to facilitate the appointment
              process.
            </h2>
          </div>
          <div className="flex flex-col gap-3 pt-5">
            {data.map((paragraph, i) => {
              if (paragraph[0] === "/") {
                return (
                  <Image
                    key={i}
                    width={500}
                    height={500}
                    src={paragraph}
                    alt={paragraph}
                    className="py-10"
                  />
                );
              }
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
