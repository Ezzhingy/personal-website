import { useState } from "react";
import { expInfo } from "../constants/constants";

export function Exp() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextClick = () => {
    const groups = document.getElementsByClassName("card-group");

    // error handle active index
    const nextIndex =
      activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(
      `[data-index="${activeIndex}"]`
    );
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    // active group becomes after
    currentGroup.dataset.status = "after";

    // next group becomes active
    nextGroup.dataset.status = "almost-active";

    setTimeout(() => {
      nextGroup.dataset.status = "active";
      setActiveIndex(nextIndex);
    });
  };

  return (
    <div
      className="section relative bg-exp bg-cover bg-no-repeat bg-center flex flex-col items-center gap-[50px]"
      id="experience"
    >
      <div className="grid grid-cols-2 grid-rows-2 items-center justify-items-center">
        <div
          id="exp-trans"
          className="col-span-2 row-start-2 border-none bg-navBtnBlue text-white py-[5px] px-[40px] font-bold text-[2rem] rounded tracking-wide	w-fit mx-[20px]"
        >
          Experience
        </div>
      </div>
      <div className="relative w-[300px]">
        {expInfo.map((exp, index) => {
          if (index === 0) {
            return (
              <div
                className="card-group absolute"
                key={exp.position}
                data-index={index}
                data-status="active"
              >
                <div className=" bg-navBoxBlue flex flex-col items-center w-[300px] rounded p-[25px] hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-cardHover">
                  <img
                    className="h-[150px] w-auto rounded ml-auto mr-auto"
                    src={exp.img}
                    alt={exp.position}
                  ></img>
                  <ul className="text-white text-1 w-60 flex flex-col">
                    <li className="font-bold text-center">{exp.position}</li>
                    <li className="text-sm text-center leading-snug">
                      {exp.desc}
                    </li>
                  </ul>
                </div>
              </div>
            );
          } else {
            return (
              <div
                className="card-group absolute"
                key={exp.position}
                data-index={index}
                data-status="unknown"
              >
                <div className="bg-navBoxBlue flex flex-col items-center w-[300px] rounded p-[25px] hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-cardHover">
                  <img
                    className="h-[150px] w-auto rounded ml-auto mr-auto"
                    src={exp.img}
                    alt={exp.position}
                  ></img>
                  <ul className="text-white text-1 w-60 flex flex-col">
                    <li className="font-bold text-center">{exp.position}</li>
                    <li className="text-sm text-center leading-snug">
                      {exp.desc}
                    </li>
                  </ul>
                </div>
              </div>
            );
          }
        })}
      </div>
      <button
        className="mt-[340px] mb-[50px] p-2 h-[50px] cursor-pointer border-2 border-solid border-navBtnBlue rounded transition-transform hover:scale-110 text-white font-bold text-center text-2xl"
        onClick={nextClick}
      >
        CLICK ME
      </button>
    </div>
  );
}
