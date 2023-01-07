import { projInfo } from "../constants/constants";

export function Exp() {
  return (
    <div className=" relative bg-exp bg-cover bg-no-repeat bg-center bg-fixed min-h-screen flex flex-col items-center gap-[50px]">
      <div className="grid grid-cols-2 grid-rows-2 items-center justify-items-center">
        <div className="col-span-2 row-start-2 border-none bg-navBtnBlue text-white py-[5px] px-[40px] font-bold text-[2rem] rounded tracking-wide	w-fit mx-[20px]">
          Experience
        </div>
      </div>
      <div className="absolute top-[30%] bg-navBoxBlue flex flex-col items-center w-[300px] rounded p-[25px] hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-projHover">
        {projInfo.map((proj) => (
          <div key={proj.position}>
            <img
              className="h-[150px] w-auto rounded ml-auto mr-auto"
              src={proj.img}
              alt={proj.position}
            ></img>
            <ul className="text-white text-1 w-60 flex flex-col">
              <li className="font-bold text-center">{proj.position}</li>
              <li className="text-sm text-center leading-snug">{proj.desc}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
