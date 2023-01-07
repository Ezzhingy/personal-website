import eugenePic from "./eugene-pic.jpeg";
import linkedin from "./linkedin.svg";
import github from "./github.svg";
import email from "./email.svg";

export function About() {
  return (
    <div
      className="section bg-bgBlue1 flex flex-col justify-center items-center z-10"
      id="about"
    >
      <div className="md:flex-row flex-col flex justify-center items-center gap-[50px] mx-0 my-[50px]">
        <div className="box-content flex flex-col items-center sm:w-[500px] w-[250px] bg-bgBlue2 p-[40px] pb-[60px] rounded flex-shrink relative">
          <div className="border-none bg-navBtnBlue text-white py-[5px] px-[40px] font-bold text-[2rem] rounded tracking-wide mb-[20px]">
            About Me
          </div>
          <p className="text-center text-white sm:text-[1.3rem] text-[1rem] mb-[20px]">
            Hey there, I’m Eugene. I am currently enrolled as a freshman in the
            Honours Computer Science Co-op Program at the University of
            Waterloo.
          </p>
          <p className="text-center text-white sm:text-[1.3rem] text-[1rem] mb-[20px]">
            My main interest lies in fullstack development; I'm currently honing
            my frontend skills!
          </p>
          <p className="text-center text-white sm:text-[1.3rem] text-[1rem] mb-[20px]">
            Aside from programming, I’m a big anime enjoyer, gym rookie, and
            small-time gamer :)
          </p>
          <div className="flex justify-around w-full">
            <a
              className="rounded-full p-[5px] shadow-fancyBtn hover:shadow-fancyBtnHover transition-shadow duration-500 hover:cursor-pointer"
              href="https://www.linkedin.com/in/eugene-zhang-1199b820a/"
              target="_blank"
              rel="noreferrer"
              id="link"
            >
              <img className="h-[60px] w-auto" src={linkedin} alt="linkedin" />
            </a>
            <a
              className="rounded-full p-[5px] shadow-fancyBtn hover:shadow-fancyBtnHover transition-shadow duration-500 hover:cursor-pointer"
              href="https://github.com/Ezzhingy"
              target="_blank"
              rel="noreferrer"
              id="git"
            >
              <img className="h-[60px] w-auto" src={github} alt="github" />
            </a>
            <a
              className="rounded-full p-[5px] shadow-fancyBtn hover:shadow-fancyBtnHover transition-shadow duration-500 hover:cursor-pointer"
              href="mailto:e4zhang@uwaterloo.ca"
              rel="noreferrer"
              id="mail"
            >
              <img className="h-[60px] w-auto" src={email} alt="email" />
            </a>
          </div>
        </div>
        <img
          className="object-contain sm:w-[300px] w-[250px] rounded"
          src={eugenePic}
          alt="eugene zhang"
        ></img>
      </div>
    </div>
  );
}
