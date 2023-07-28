import close from "./close.svg";
import menu from "./menu.svg";
import { navLinks } from "../constants/constants";
import { useState } from "react";

export function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <nav
        id="show-nav-mobile"
        className="hidden fixed z-10 w-full bg-navBoxBlue sm:p-[30px]"
      >
        <ul className="list-none sm:flex justify-center hidden text-center">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <a
                className="text-white font-bold text-2xl rounded tracking-wide hover:bg-navBtnBlue hover:transition-colors ease-in-out py-2.5 px-5"
                href={`#${nav.id}`}
              >
                {nav.title}
              </a>
            </li>
          ))}
          {/* <li>
            <a
              className="text-white font-bold text-2xl rounded tracking-wide hover:bg-navBtnBlue hover:transition-colors ease-in-out py-2.5 px-5"
              href="https://drive.google.com/file/d/11BkVvQi5BNv36cd5LXyh8N4p-ztAbSQh/view?usp=sharing"
              target="_blank"
              id="top-resume-btn"
              rel="noreferrer"
            >
              RESUME
            </a>
          </li> */}
        </ul>
        <div className="sm:hidden block min-h-[60px]">
          <div className={`${toggle ? "block" : "hidden"}`}>
            <ul className="list-none z-10">
              {navLinks.map((nav, index) => (
                <li
                  className="text-white py-2.5 px-5 font-bold text-2xl rounded tracking-wide hover:bg-navBtnBlue hover:transition-colors ease-in-out"
                  key={index}
                >
                  <a className="flex flex-1" href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
              {/* <li className="text-white py-2.5 px-5 font-bold text-2xl rounded tracking-wide hover:bg-navBtnBlue hover:transition-colors ease-in-out">
                <a
                  href="https://drive.google.com/file/d/11BkVvQi5BNv36cd5LXyh8N4p-ztAbSQh/view?usp=sharing"
                  target="_blank"
                  id="top-resume-btn"
                  rel="noreferrer"
                  className="flex flex-1"
                >
                  RESUME
                </a>
              </li> */}
            </ul>
          </div>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[35px] h-[35px] py-2.5 px-5 box-content object-contain hover:cursor-pointer rounded-md fixed top-0 right-0 hover:bg-navBtnBlue hover:transition-colors ease-in-out duration-150"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
      </nav>
    </div>
  );
}
