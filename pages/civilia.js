import Image from "next/image";
import Seo from "@/components/Seo";
import { fetchCiviliaData } from "@/functions/fetchPageData";

export async function getStaticProps() {
  // get all the data needed for rendering the page
  const data = fetchCiviliaData();
  return {
    props: { data },
  };
}

export default function sentiview({ data }) {
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
          <div className="pb-5">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-2xl">Civilia</h1>
            </div>
            <h2>Work in Progress!</h2>
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
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}