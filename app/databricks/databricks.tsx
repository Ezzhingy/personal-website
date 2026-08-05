"use client";

import Image from "next/image";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";
import { monoSans } from "@/functions/fonts";

export default function Databricks({ data }: { data: string[] }) {
  const [mounted, setMounted] = useState(false);

  const [databricksViews, setDatabricksViews] = useState(0);

  useEffect(() => {
    const fetchdatabricksViews = async () => {
      const res = await fetch("/api/databricks");
      const data = await res.json();
      setDatabricksViews(data.count);
    };
    const updatedatabricksViews = async () => {
      await fetch("/api/databricks", {
        method: "POST",
      });
    };
    fetchdatabricksViews();
    updatedatabricksViews();
  }, []);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className={`${monoSans.className} max-w-2xl mx-auto pt-10 text-darkBg dark:text-lightBg`}
    >
      <div className="flex flex-col gap-3 mx-10 items-start">
        <div className="divide-y-2 divide-darkBg dark:divide-lightBg">
          <div className="pb-1">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-2xl">
                Cache hits (and misses) at Databricks
              </h1>
            </div>
            <div>
              <h2>Internship: Jan. 2026 - Apr. 2026</h2>
              <h2 className="italic text-sm">
                Aug. 3, 2026 • {databricksViews} views
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
