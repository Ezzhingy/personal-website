import { projInfo } from "../constants/constants";

export function Projects() {
  return (
    <div
      className="section bg-bgBlue1 grid grid-rows-projContainer relative gap-[50px]"
      id="projects"
    >
      <div className="grid grid-cols-2 grid-rows-2 items-center justify-items-center">
        <div className="col-span-2 row-start-2 border-none bg-navBtnBlue text-white py-[5px] px-[40px] font-bold text-[2rem] rounded tracking-wide	w-fit mx-[20px]">
          Projects
        </div>
      </div>
      <div className="grid grid-cols-card gap-6 mt-[10px] ml-[40px] mb-[20px] mr-[40px]">
        {projInfo.map((proj, index) => (
          <div
            className="bg-navBoxBlue justify-self-center flex flex-col items-center justify-items-center w-[300px] rounded p-[25px] hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-cardHover"
            key={index}
          >
            <a href={proj.link} target="_blank" rel="noreferrer">
              <div className="flex justify-center">
                <img
                  className="w-[150px] rounded"
                  src={proj.img}
                  alt={proj.desc}
                ></img>
              </div>
              <div></div>
              <h3 className="font-bold text-white text-center m-[1em] text-lg">
                <strong>{proj.desc}</strong>
              </h3>
              <h3 className="italic text-white text-center">
                <em>{proj.tools}</em>
              </h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
