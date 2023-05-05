import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import Seo from "@/components/Seo";

export default function journal4me() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="max-w-2xl mx-auto pt-10 text-darkBg dark:text-lightBg">
      <Seo
        title="journal4me | Eugene Zhang"
        desc="A mental health voice-to-mood analysis journaling app."
        keywords="journal4me, journal, journaling, mental health, voice-to-mood analysis, sentiment analysis, react, nextjs, fastapi, mongodb, assemblyai, cohere, mental illness, mental health issues"
        path="/journal4me"
      />
      <div className="flex flex-col gap-3 mx-10 items-start">
        <div className="divide-y-2 divide-darkBg dark:divide-lightBg">
          <div className="pb-5">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-2xl">journal4me</h1>
              <Link
                href="https://github.com/Ezzhingy/journal4me-htn22"
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
            <h2>A mental health voice-to-mood analysis journaling app.</h2>
          </div>
          <div className="flex flex-col gap-3 pt-5">
            <p>
              Mental health issues are becoming a more prevalent problem each
              year. Nearly one in five U.S. adults live with a mental illness,
              but less than 20% of people actually seek mental health treatment.
              Furthermore, 47% of Americans believe that seeking therapy is a
              sign of weakness. Our goal with journal4me is to provide an outlet
              for people to speak their thoughts; to let it all out.
            </p>
            <p>
              Journal4me is a journaling app that removes the tediousness of
              typing out your thoughts. It is well known that journaling can
              improve one's mental health, but many stray away from the act,
              intimidated by the monotonous writing involved with jotting down
              one's feelings. With journal4me, all you need to do is speak! The
              app automatically processes your words and jots them down for you,
              so that you can rant about your day effortlessly without having to
              pause and think about how to spell a word or structure a sentence.
              At the end of your recording, the app even ranks your mood based
              on what was depicted from your rant using sentiment analysis!
            </p>
            <p>
              We developed the application's front end using React. The backend
              used a FastAPI server that hosted the data generated from the
              Cohere and AssemblyAI API, which we used for sentiment analysis
              and speech-to-text. MongoDB was our database of choice, which we
              used to store our transcriptions.
            </p>
            <p>
              To level up journal4me, we could improve the UI to further better
              the user's journaling experience. Some examples include updating
              the text as the user speaks, adding a mood board, creating a
              larger 'emotion rating scale'; there are many improvements that we
              are considering of making in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
