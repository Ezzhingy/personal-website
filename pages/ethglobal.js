import Image from "next/image";
import Seo from "@/components/Seo";
import { fetchEthglobalData } from "@/functions/fetchPageData";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";

export async function getStaticProps() {
  // get all the data needed for rendering the page
  const data = fetchEthglobalData();
  return {
    props: { data },
  };
}

export default function ethglobal({ data }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="max-w-2xl mx-auto pt-10 text-darkBg dark:text-lightBg">
      <Seo
        title="ETHGlobal | Eugene Zhang"
        desc="Building our decentralized future."
        keywords="ethglobal, hackathon, ethereum, blockchain, web3"
        path="/ethglobal"
      />
      <div className="flex flex-col gap-3 mx-10 items-start">
        <div className="divide-y-2 divide-darkBg dark:divide-lightBg">
          <div className="pb-5">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-2xl">
                Travelling the world with ETH
              </h1>
            </div>
            <h2>Sep. 2024 - Dec. 2024</h2>
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
