import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import Seo from "@/components/Seo";

export default function sentiview() {
  const { systemTheme, theme, setTheme } = useTheme();
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
            <p>
              Small businesses and local entrepreneurs are an essential facet of
              our communities, with the COVID-19 Pandemic demonstrating how much
              we depend on them and vice versa. However, it can often be
              difficult for these businesses to know the best trajectory for
              their growth, with no streamlined method currently existing for
              gathering and analyzing their customers' feedback. SentiView aims
              to change that.
            </p>
            <p>
              Small businesses rely greatly on reviews; they tell them what
              they're doing right and what to improve. SentiView takes in a set
              of customer reviews and sorts positive reviews from
              neutral/negative reviews. Then, it finds the top five keywords
              that occur the most frequently in the review sets, helping
              business owners swiftly find the root of their problems.
            </p>
            <p>
              SentiView takes in a set of customer reviews and uses the power of
              sentiment analysis in order to determine whether or not they are
              positive or negative. Then, each review is tokenized and cleaned
              based on a stoplist. The 5 most common positive and negative words
              are then displayed to the user; they can then select and scroll
              through the reviews containing the word, gathering a first-hand
              view of their business's needs and strengths.
            </p>
            <p>
              We developed the application's front end using React, Bootstrap,
              and Tailwind. The backend used a Flask server that hosted the data
              generated from the Cohere API, which we used for sentiment
              analysis and tokenization purposes.
            </p>
            <p>
              Over time, SentiView would like to be able to produce graphs that
              display trends in customer satisfaction to give small businesses a
              way to assess their improvement. Essentially, to provide bespoke
              recommendations to businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
