"use client";

import { expInfo } from "@/constants/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blog() {
  const [mounted, setMounted] = useState(false);

  const [civiliaViews, setCiviliaViews] = useState(0);
  const [uwblueprintViews, setUwblueprintViews] = useState(0);
  const [hackthenorthViews, setHackthenorthViews] = useState(0);
  const [faireViews, setFaireViews] = useState(0);
  const [ethglobalViews, setEthglobalViews] = useState(0);
  const [palantirViews, setPalantirViews] = useState(0);

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
  const fetchPalantirViews = async () => {
    const res = await fetch("/api/palantir");
    const data = await res.json();
    setPalantirViews(data.count);
  };

  useEffect(() => {
    fetchCiviliaViews();
    fetchUwblueprintViews();
    fetchHackthenorthViews();
    fetchFaireViews();
    fetchEthglobalViews();
    fetchPalantirViews();
  }, []);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      id="blogs"
      className="max-w-2xl mx-auto text-darkBg dark:text-lightBg pt-6 sm:pt-2"
    >
      <div className="flex flex-col gap-3 mt-[100px] mx-10 items-start">
        <h1 className="font-bold text-4xl">Blogs</h1>
        <div className="flex flex-col gap-6">
          {expInfo.map((exp, i) => (
            <Link
              key={i}
              href={`/${exp.company.replace(/ /g, "").toLowerCase()}`}
              className="w-full hover:underline"
            >
              <div>
                <h2 className="text-3xl">{exp.description}</h2>
                <div className="flex gap-1 text-darkFill dark:text-lightFill">
                  <h3>{exp.type}</h3>•
                  {exp.company === "Civilia" && <div>{civiliaViews} views</div>}
                  {exp.company === "UW Blueprint" && (
                    <div>{uwblueprintViews} views</div>
                  )}
                  {exp.company === "Hack the North" && (
                    <div>{hackthenorthViews} views</div>
                  )}
                  {exp.company === "Faire" && <div>{faireViews} views</div>}
                  {exp.company === "ETHGlobal" && (
                    <div>{ethglobalViews} views</div>
                  )}
                  {exp.company === "Palantir" && (
                    <div>{palantirViews} views</div>
                  )}
                </div>
              </div>
              <hr className="h-px" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
