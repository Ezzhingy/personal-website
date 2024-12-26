import Image from "next/image";
import Seo from "@/components/Seo";
import { fetchCiviliaData } from "@/functions/fetchPageData";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";

export async function getStaticProps() {
  // get all the data needed for rendering the page
  const data = fetchCiviliaData();
  return {
    props: { data },
  };
}

export default function civilia({ data }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="max-w-2xl mx-auto pt-10 text-darkBg dark:text-lightBg">
      <Seo
        title="Civilia | Eugene Zhang"
        desc="Crafting tools to transform urban mobility."
        keywords="civilia, civilia project, civilia team, civilia experience"
        path="/civilia"
      />
      <div className="flex flex-col gap-3 mx-10 items-start">
        <div className="divide-y-2 divide-darkBg dark:divide-lightBg">
          <div className="pb-1">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-2xl">
                Transforming Urban Mobility
              </h1>
            </div>
            <div>
              <h2>Internship: May 2023 - Aug. 2023</h2>
              <h2 className="italic text-sm">Written: Jan. 10, 2024</h2>
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
