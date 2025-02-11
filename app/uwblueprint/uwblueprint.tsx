"use client";

import Image from "next/image";
import Seo from "@/components/Seo";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";

export default function UwBlueprint({ data }: { data: string[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="max-w-2xl mx-auto pt-10 text-darkBg dark:text-lightBg">
      <Seo
        title="UW Blueprint | Eugene Zhang"
        desc="Building tech for social good."
        keywords="uw blueprint, uw blueprint project, uw blueprint team, uw blueprint experience"
        path="/uwblueprint"
      />
      <div className="flex flex-col gap-3 mx-10 items-start">
        <div className="divide-y-2 divide-darkBg dark:divide-lightBg">
          <div className="pb-1">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-2xl">
                Blueprinting a Better World
              </h1>
            </div>
            <div>
              <h2>Volunteering: Jan. 2023 - Dec. 2023</h2>
              <h2 className="italic text-sm">Written: Jan. 4, 2024</h2>
            </div>
          </div>
          <div className="flex flex-col gap-3">
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
              return (
                <Markdown key={i} className="markdown">
                  {paragraph}
                </Markdown>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
