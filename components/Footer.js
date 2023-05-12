import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="max-w-2xl mx-auto pt-[120px] pb-[120px] text-darkBg dark:text-lightBg">
      <div className="flex flex-col gap-3 mx-10 items-start">
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
              className="cursor-pointer transition-transform hover:scale-110"
            />
          </Link>
          <Link
            href="https://github.com/Ezzhingy"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={
                currentTheme === "dark" ? "/lightgithub.svg" : "/darkgithub.svg"
              }
              width={40}
              height={40}
              alt="GitHub link"
              className="cursor-pointer transition-transform hover:scale-110"
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
              className="cursor-pointer transition-transform hover:scale-110"
            />
          </Link>
        </div>
        <div>
          <p>Copyright © Ezzhingy 2023</p>
        </div>
      </div>
    </div>
  );
}
