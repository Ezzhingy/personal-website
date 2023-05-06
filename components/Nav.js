import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { navLinks } from "../constants/constants";
import Link from "next/link";
import Router from "next/router";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(false);
  const [mounted, setMounted] = useState(false);

  Router.onRouteChangeComplete = () => {
    setTimeout(() => {
      if (location.hash) location = location;
    }, 100);
  };

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav
      id="show-nav-mobile"
      className="hidden sticky top-0 z-30 text-darkBg dark:text-lightBg bg-lightBg dark:bg-darkBg bg-opacity-60 backdrop-blur"
    >
      <div className="flex justify-between items-center max-w-4xl p-8 mx-auto">
        <Image
          src={currentTheme === "dark" ? "/sun.svg" : "/moon.svg"}
          width={40}
          height={40}
          alt="Theme toggle"
          className="cursor-pointer sm:block hidden"
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          priority
        />
        <ul className="list-none sm:flex justify-end hidden text-center">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <Link
                className="hover:text-[#43B2CA] transition-colors duration-150 font-bold text-sm tracking-wide py-2.5 px-5"
                href={`/#${nav.id}`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
          <li>
            <a
              className="hover:text-[#43B2CA] transition-colors duration-150 font-bold text-sm tracking-wide py-2.5 px-5"
              href="https://drive.google.com/file/d/11BkVvQi5BNv36cd5LXyh8N4p-ztAbSQh/view?usp=sharing"
              target="_blank"
              id="top-resume-btn"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="sm:hidden max-w-4xl">
        <div className="flex flex-col items-center">
          <div className="flex gap-10 w-[95%] justify-between">
            <Image
              src={currentTheme === "dark" ? "/sun.svg" : "/moon.svg"}
              alt="Theme toggle"
              width={40}
              height={40}
              className="py-2.5 px-5 box-content object-contain cursor-pointer"
              onClick={() =>
                setTheme(currentTheme === "dark" ? "light" : "dark")
              }
            />
            <Image
              src={
                toggle
                  ? currentTheme === "dark"
                    ? "/lightclose.svg"
                    : "/darkclose.svg"
                  : currentTheme === "dark"
                  ? "/lightmenu.svg"
                  : "/darkmenu.svg"
              }
              alt="Waffle toggle for mobile"
              width={40}
              height={40}
              className="py-2.5 px-5 box-content object-contain cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
          <div
            className={`${toggle ? "fixed" : "hidden"} w-[90%] top-[7.5rem]`}
          >
            <ul className="list-none z-10 bg-lightFill dark:bg-darkFill rounded divide-y dark:divide-black">
              {navLinks.map((nav, index) => (
                <li
                  className="hover:text-[#43B2CA] transition-colors duration-150 py-2.5 pl-2.5 font-bold test-sm tracking-wide"
                  key={index}
                >
                  <Link href={`/#${nav.id}`} className="flex flex-1">
                    {nav.title}
                  </Link>
                </li>
              ))}
              <li className="hover:text-[#43B2CA] transition-colors duration-150 py-2.5 pl-2.5 font-bold test-sm tracking-wide">
                <a
                  href="https://drive.google.com/file/d/11BkVvQi5BNv36cd5LXyh8N4p-ztAbSQh/view?usp=sharing"
                  target="_blank"
                  id="top-resume-btn"
                  rel="noreferrer"
                  className="flex flex-1"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
