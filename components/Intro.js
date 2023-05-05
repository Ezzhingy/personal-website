import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Intro() {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      id="home"
      className="box-border max-w-2xl mx-auto pt-10 text-darkBg dark:text-lightBg"
    >
      <div className="flex flex-col-reverse gap-8 m-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-8">
          <div className="leading-[5rem]">
            <h1 className="font-bold text-3xl text-start leading-[5rem]">
              Eugene Zhang
            </h1>
            <p className="leading-tight text-sm">
              "Don't worry, I'm a programmer. I know what I'm doing."
            </p>
          </div>
          <div className="flex gap-5">
            <Link
              href="https://www.linkedin.com/in/eugene-zhang-1199b820a/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={
                  currentTheme === "dark"
                    ? "/lightlinkedin.svg"
                    : "/darklinkedin.svg"
                }
                width={40}
                height={40}
                alt="LinkedIn link"
                className="cursor-pointer"
              />
            </Link>
            <Link
              href="https://github.com/Ezzhingy"
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
            <Link
              href="mailto:zhang.eug@gmail.com "
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={
                  currentTheme === "dark" ? "/lightemail.svg" : "/darkemail.svg"
                }
                width={40}
                height={40}
                alt="Email link"
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <Image
          src="/headshoteugene.jpeg"
          alt="Picture of the author"
          width={200}
          height={200 * (160 / 153)}
          className="rounded-2xl"
          priority="true"
        />
      </div>
    </div>
  );
}
