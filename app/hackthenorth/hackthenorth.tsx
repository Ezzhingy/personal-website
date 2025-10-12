"use client";

import Image from "next/image";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";
import { monoSans } from "@/functions/fonts";

export default function HackTheNorth({ data }: { data: string[] }) {
  const [mounted, setMounted] = useState(false);

  const [hackthenorthViews, setHackthenorthViews] = useState(0);

  useEffect(() => {
    const fetchHackthenorthViews = async () => {
      const res = await fetch("/api/hackthenorth");
      const data = await res.json();
      setHackthenorthViews(data.count);
    };
    const updateHackthenorthViews = async () => {
      await fetch("/api/hackthenorth", {
        method: "POST",
      });
    };
    fetchHackthenorthViews();
    updateHackthenorthViews();
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
                Frontend at Canada's biggest hackathon
              </h1>
            </div>
            <div>
              <h2>Volunteering: Mar. 2023 - Oct. 2023</h2>
              <h2 className="italic text-sm">
                Jan. 4, 2024 • {hackthenorthViews} views
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
