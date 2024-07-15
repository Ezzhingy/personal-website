import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { projectInfo } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleOnMouseMove = (e) => {
      const { currentTarget: target } = e;

      const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    for (const card of document.querySelectorAll(".card")) {
      card.onmousemove = (e) => handleOnMouseMove(e);
    }
  });

  const changeGlow = () => {
    projectInfo.map((project, i) => {
      let style = document.getElementById(`card${i}`).style;
      style.setProperty(
        "--background",
        `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), ${project.hue}, transparent 40%)`
      );
    });
  };

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      id="projects"
      className="max-w-2xl mx-auto pt-[100px] text-darkBg dark:text-lightBg"
      onMouseOver={changeGlow}
    >
      <div className="flex flex-col gap-3 mx-10 items-start">
        <h1 className="font-bold text-2xl">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-3">
          {projectInfo.map((project, i) => (
            <Link
              key={i}
              id={`card${i}`}
              className="card border-[#9CA3AF] dark:border-[#374151] border-[0.8px] rounded p-5 flex flex-col gap-3 relative hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              href={`/${project.name.replace(/[ '!]/g, "").toLowerCase()}`}
            >
              <Image
                src={project.image}
                alt={`${project.name} logo`}
                width={80}
                height={80}
                className="rounded"
              />
              <div>
                <h2 className="font-bold text-xl">{project.name}</h2>
                <h3>{project.description}</h3>
              </div>
              {/* <div className="grid grid-cols-3 gap-3">
                {project.skills.map((skill, j) =>
                  skill.length > 8 ? (
                    <div
                      key={j}
                      className="rounded-lg border-[#9CA3AF] dark:border-[#374151] border-[0.8px] col-span-2 "
                    >
                      <h4 className="text-xs sm:text-sm text-center py-1">
                        {skill}
                      </h4>
                    </div>
                  ) : (
                    <div
                      key={j}
                      className="rounded-lg border-[#9CA3AF] dark:border-[#374151] border-[0.8px]"
                    >
                      <h4 className="text-xs sm:text-sm text-center py-1">
                        {skill}
                      </h4>
                    </div>
                  )
                )}
              </div> */}
              <Image
                src={
                  currentTheme === "dark"
                    ? "/blackarrow.svg"
                    : "/whitearrow.svg"
                }
                alt="Arrow"
                width={50}
                height={50}
                className="inline-block absolute right-5 z-20 transform hover:scale-110 transition duration-150"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
