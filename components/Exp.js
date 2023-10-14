import { expInfo } from "@/constants/constants";
import Image from "next/image";
import { useState } from "react";

export default function Exp() {
  const [toggle, setToggle] = useState(Array(expInfo.length).fill(false));
  const [within, setWithin] = useState(false);

  return (
    <div
      id="experience"
      className="max-w-2xl mx-auto text-darkBg dark:text-lightBg"
    >
      <div
        className="flex flex-col gap-3 mt-[100px] mx-10 items-start"
        onMouseLeave={() => setWithin(false)}
        onMouseEnter={() => setWithin(true)}
      >
        <h1 className="font-bold text-2xl">Experience</h1>
        {expInfo.map((exp, i) => (
          <div
            key={i}
            className={`w-full ${
              within && !toggle[i]
                ? "bg-lightBg dark:bg-darkBg"
                : "bg-lightFill dark:bg-darkFill"
            } p-5 rounded-lg hover:cursor-pointer transition-colors duration-300`}
            style={{ backgroundColor: within && toggle[i] && exp.bg }}
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
            <div className="flex flex-row gap-2 items-center justify-between">
              <div className="flex items-center gap-3 flex-row">
                <Image
                  src={exp.logo}
                  width={40}
                  height={40}
                  alt={`${exp.company} logo`}
                />
                <div>
                  <h2 className="font-bold text-xl text-start">
                    {exp.company}
                  </h2>
                  {/* <h3 className="text-center sm:text-start hidden sm:block">
                    {exp.position}
                  </h3> */}
                </div>
              </div>
              <div className="hidden sm:block">
                <h4>{exp.duration}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
