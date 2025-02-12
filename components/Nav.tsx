import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { navLinks } from "../constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(false);
  const [mounted, setMounted] = useState(false);

  const circleClipRef = useRef<HTMLUListElement>(null);

  // temp solution to next/link hash bug (doesn't work in production)
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      if (location.hash) {
        location = location;
      }
    }, 10);
  }, [pathname]);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav
      id="show-nav-mobile"
      className={`hidden sticky top-0 z-30 text-darkBg dark:text-lightBg bg-lightBg dark:bg-darkBg backdrop-blur ${
        !toggle ? "bg-opacity-60" : "bg-opacity-100"
      }`}
    >
      <div className="flex justify-between items-center max-w-4xl p-8 mx-auto">
        <Image
          src={currentTheme === "dark" ? "/sun.svg" : "/moon.svg"}
          alt="Theme toggle"
          className="cursor-pointer sm:block hidden transition-transform hover:scale-110"
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          priority
          width={50}
          height={50}
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
          {/* <li>
            <a
              className="hover:text-[#43B2CA] transition-colors duration-150 font-bold text-sm tracking-wide py-2.5 px-5"
              href="https://drive.google.com/file/d/11BkVvQi5BNv36cd5LXyh8N4p-ztAbSQh/view?usp=sharing"
              target="_blank"
              id="top-resume-btn"
              rel="noreferrer"
            >
              Resume
            </a>
          </li> */}
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
              className="py-2.5 px-5 box-content object-contain cursor-pointer z-10"
              onClick={() => {
                setToggle((prev) => !prev);
                circleClipRef.current?.classList.toggle("mobile-links-open");
                document.body.classList.toggle("overflow-hidden");
              }}
            />
          </div>
          <div
            className={`${toggle && "bg-lightBg dark:bg-darkBg"} ${
              !toggle && "pointer-events-none"
            } transition-colors duration-700 h-screen w-screen absolute flex flex-col justify-center`}
          >
            <ul
              ref={circleClipRef}
              className="list-none dark:divide-black flex flex-col items-center gap-10 mb-20 mobile-links"
            >
              {navLinks.map((nav, index) => (
                <li
                  className="hover:text-[#43B2CA] py-2.5 pl-2.5 font-bold text-4xl tracking-wide"
                  key={index}
                >
                  <Link
                    href={`/#${nav.id}`}
                    className="flex flex-1"
                    onClick={() => {
                      setToggle((prev) => !prev);
                      circleClipRef.current?.classList.toggle(
                        "mobile-links-open"
                      );
                      document.body.classList.toggle("overflow-hidden");
                    }}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
