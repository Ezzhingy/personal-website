"use client";

import Image from "next/image";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";

export default function Palantir({ data }: { data: string[] }) {
  const [mounted, setMounted] = useState(false);

  const [palantirViews, setPalantirViews] = useState(0);

  useEffect(() => {
    const fetchpalantirViews = async () => {
      const res = await fetch("/api/palantir");
      const data = await res.json();
      setPalantirViews(data.count);
    };
    const updatepalantirViews = async () => {
      await fetch("/api/palantir", {
        method: "POST",
      });
    };
    fetchpalantirViews();
    updatepalantirViews();
  }, []);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="max-w-2xl mx-auto pt-10 text-darkBg dark:text-lightBg">
      <div className="flex flex-col gap-3 mx-10 items-start">
        <div className="divide-y-2 divide-darkBg dark:divide-lightBg">
          <div className="pb-1">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-2xl">Forward deployed in London</h1>
            </div>
            <div>
              <h2>Internship: ??? - ???</h2>
              <h2 className="italic text-sm">??? • {palantirViews} views</h2>
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
