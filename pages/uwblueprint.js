import Image from "next/image";
import Seo from "@/components/Seo";
import { fetchUwblueprintData } from "@/functions/fetchPageData";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";

export async function getStaticProps() {
  // get all the data needed for rendering the page
  const data = fetchUwblueprintData();
  return {
    props: { data },
  };
}

export default function uwBlueprint({ data }) {
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
          <div className="pb-5">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-2xl">
                Blueprinting a Better World
              </h1>
            </div>
            <h2>Jan. 2023 - Dec. 2023</h2>
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
