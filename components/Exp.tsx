"use client";

import { expInfo } from "@/constants/constants";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Exp() {
  const [toggle, setToggle] = useState<boolean[]>(
    Array(expInfo.length).fill(false)
  );
  const [within, setWithin] = useState(false);

  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [civiliaViews, setCiviliaViews] = useState(0);
  const [uwblueprintViews, setUwblueprintViews] = useState(0);
  const [hackthenorthViews, setHackthenorthViews] = useState(0);
  const [faireViews, setFaireViews] = useState(0);
  const [ethglobalViews, setEthglobalViews] = useState(0);

  const fetchCiviliaViews = async () => {
    const res = await fetch("/api/civilia");
    const data = await res.json();
    setCiviliaViews(data.count);
  };
  const fetchUwblueprintViews = async () => {
    const res = await fetch("/api/uwblueprint");
    const data = await res.json();
    setUwblueprintViews(data.count);
  };
  const fetchHackthenorthViews = async () => {
    const res = await fetch("/api/hackthenorth");
    const data = await res.json();
    setHackthenorthViews(data.count);
  };
  const fetchFaireViews = async () => {
    const res = await fetch("/api/faire");
    const data = await res.json();
    setFaireViews(data.count);
  };
  const fetchEthglobalViews = async () => {
    const res = await fetch("/api/ethglobal");
    const data = await res.json();
    setEthglobalViews(data.count);
  };

  useEffect(() => {
    fetchCiviliaViews();
    fetchUwblueprintViews();
    fetchHackthenorthViews();
    fetchFaireViews();
    fetchEthglobalViews();
  }, []);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      id="blogs"
      className="max-w-2xl mx-auto text-darkBg dark:text-lightBg pt-6 sm:pt-2"
    >
      <div
        className="flex flex-col gap-3 mt-[100px] mx-10 items-start"
        onMouseLeave={() => setWithin(false)}
        onMouseEnter={() => setWithin(true)}
      >
        <h1 className="font-bold text-2xl">Blogs</h1>
        {expInfo.map((exp, i) => (
          <Link
            key={i}
            href={`/${exp.company.replace(/ /g, "").toLowerCase()}`}
            className={`w-full p-5 rounded-lg hover:cursor-pointer transition-colors duration-300 relative`}
            style={{
              backgroundColor:
                within && toggle[i]
                  ? exp.bg
                  : currentTheme === "dark" && within && !toggle[i]
                  ? "rgb(17 24 39)"
                  : currentTheme !== "dark" && within && !toggle[i]
                  ? "rgb(209 213 219)"
                  : currentTheme === "dark"
                  ? "rgb(31 41 55)"
                  : "rgb(186 195 210)",
            }}
            onMouseOver={() => {
              setToggle((prev) => {
                for (let j = 0; j < prev.length; j++) {
                  if (j !== i) {
                    prev[j] = false;
                  } else {
                    prev[j] = true;
                  }
                }
                return [...prev];
              });
            }}
          >
            {exp.new && (
              <div className="absolute top-2 -right-2 w-10 bg-amber-300 dark:bg-blue-600 rotate-45 flex items-center justify-center">
                <p className="text-xs font-bold">NEW</p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-row gap-2 items-center justify-between">
                <div className="flex items-center gap-3 flex-row">
                  <Image
                    src={exp.logo}
                    width={40}
                    height={40}
                    alt={`${exp.company} logo`}
                  />
                  <div>
                    <h2 className="font-bold text-lg sm:text-xl text-start">
                      {exp.description}
                    </h2>
                  </div>
                </div>
              </div>
              {exp.company === "Civilia" && (
                <div className="hidden sm:block italic">
                  {civiliaViews} views
                </div>
              )}
              {exp.company === "UW Blueprint" && (
                <div className="hidden sm:block italic">
                  {uwblueprintViews} views
                </div>
              )}
              {exp.company === "Hack the North" && (
                <div className="hidden sm:block italic">
                  {hackthenorthViews} views
                </div>
              )}
              {exp.company === "Faire" && (
                <div className="hidden sm:block italic">{faireViews} views</div>
              )}
              {exp.company === "ETHGlobal" && (
                <div className="hidden sm:block italic">
                  {ethglobalViews} views
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
