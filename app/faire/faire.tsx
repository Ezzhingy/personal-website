"use client";

import Image from "next/image";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";

export default function Faire({ data }: { data: string[] }) {
  const [mounted, setMounted] = useState(false);

  const [faireViews, setFaireViews] = useState(0);

  useEffect(() => {
    const fetchFaireViews = async () => {
      const res = await fetch("/api/faire");
      const data = await res.json();
      setFaireViews(data.count);
    };
    const updateFaireViews = async () => {
      await fetch("/api/faire", {
        method: "POST",
      });
    };
    fetchFaireViews();
    updateFaireViews();
  }, []);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="max-w-2xl mx-auto pt-10 text-darkBg dark:text-lightBg">
      <div className="flex flex-col gap-3 mx-10 items-start">
        <div className="divide-y-2 divide-darkBg dark:divide-lightBg">
          <div className="pb-1">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-2xl">Faire & Square</h1>
            </div>
            <div>
              <h2>Internship: Jan. 2024 - Apr. 2024</h2>
              <h2 className="italic text-sm">
                Dec. 30, 2024 • {faireViews} views
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
