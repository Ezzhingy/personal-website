import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import Seo from "@/components/Seo";
import { fetchSentiviewData } from "@/functions/fetchPageData";

export async function getStaticProps() {
  // get all the data needed for rendering the page
  const data = fetchSentiviewData();
  return {
    props: { data },
  };
}

export default function sentiview({ data }) {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="max-w-2xl mx-auto pt-10 text-darkBg dark:text-lightBg">
      <Seo
        title="SentiView | Eugene Zhang"
        desc="A customer insight filtering system for businesses."
        keywords="sentiview, sentiment analysis, tokenization, react, nextjs, flask, cohere, businesses, reviews, customer feedback"
        path="/sentiview"
      />
      <div className="flex flex-col gap-3 mx-10 items-start">
        <div className="divide-y-2 divide-darkBg dark:divide-lightBg">
          <div className="pb-5">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-2xl">SentiView</h1>
              <Link
                href="https://github.com/Ezzhingy/SentiView"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={
                    currentTheme === "dark"
                      ? "/lightgithub.svg"
                      : "/darkgithub.svg"
                  }
                  width={40}
                  height={40}
                  alt="GitHub link"
                  className="cursor-pointer"
                />
              </Link>
            </div>
            <h2>A customer insight filtering system for businesses</h2>
          </div>
          <div className="flex flex-col gap-3 pt-5">
            {data.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
