"use client";

import Image from "next/image";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";

export default function UwBlueprint({ data }: { data: string[] }) {
  const [mounted, setMounted] = useState(false);

  const [uwblueprintViews, setUwblueprintViews] = useState(0);

  useEffect(() => {
    const fetchUwBlueprintViews = async () => {
      const res = await fetch("/api/uwblueprint");
      const data = await res.json();
      setUwblueprintViews(data.count);
    };
    const updateUwblueprintViews = async () => {
      await fetch("/api/uwblueprint", {
        method: "POST",
      });
    };
    fetchUwBlueprintViews();
    updateUwblueprintViews();
  }, []);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="max-w-2xl mx-auto pt-10 text-darkBg dark:text-lightBg">
      <div className="flex flex-col gap-3 mx-10 items-start">
        <div className="divide-y-2 divide-darkBg dark:divide-lightBg">
          <div className="pb-1">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-2xl">
                Helping out the Children's Aid Society
              </h1>
            </div>
            <div>
              <h2>Volunteering: Jan. 2023 - Dec. 2023</h2>
              <h2 className="italic text-sm">
                Jan. 4, 2024 • {uwblueprintViews} views
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {data.map((paragraph, i) => {
              if (paragraph[0] === "/") {
                return (
                  <Image
                    key={i}
                    width={600}
                    height={600}
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
