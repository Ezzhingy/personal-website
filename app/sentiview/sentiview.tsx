"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import Seo from "@/components/Seo";

export default function Sentiview({ data }: { data: string[] }) {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="max-w-2xl mx-auto pt-10 text-darkBg dark:text-lightBg">
      <Seo
        title="SentiView | Eugene Zhang"
        desc="A customer insight filtering system for businesses."
        keywords="sentiview, sentiment analysis, tokenization, react, nextjs, flask, cohere, businesses, reviews, customer feedback"
        path="/sentiview"
      />
      <div className="flex flex-col gap-3 mx-10 items-start">
        <div className="divide-y-2 divide-darkBg dark:divide-lightBg">
          <div className="pb-5">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-2xl">SentiView</h1>
              <Link
                href="https://github.com/Ezzhingy/SentiView"
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
            <h2>A customer insight filtering system for businesses</h2>
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
