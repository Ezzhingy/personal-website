import { expInfo } from "@/constants/constants";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Exp() {
  const [toggle, setToggle] = useState(Array(expInfo.length).fill(false));
  const [within, setWithin] = useState(false);

  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
            <div>
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
