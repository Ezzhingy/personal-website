import { expInfo } from "@/constants/constants";
import Image from "next/image";

export default function Exp() {
  return (
    <div
      id="experience"
      className="max-w-2xl mx-auto text-darkBg dark:text-lightBg"
    >
      <div className="flex flex-col gap-3 mx-10 items-start">
        <h1 className="font-bold text-2xl">Experience</h1>
        {expInfo.map((exp, i) => (
          <div
            key={i}
            className="w-full bg-lightFill dark:bg-darkFill p-5 rounded-lg"
          >
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-between">
              <div className="flex items-center gap-3 flex-col sm:flex-row">
                <Image
                  src={exp.logo}
                  width={40}
                  height={40}
                  alt={`${exp.company} logo`}
                />
                <div>
                  <h2 className="font-bold text-xl">{exp.position}</h2>
                  <h3 className="text-center sm:text-start">{exp.company}</h3>
                </div>
              </div>
              <div>
                <h4>{exp.duration}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
