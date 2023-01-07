import linkedin from "../about/linkedin.svg";
import github from "../about/github.svg";
import email from "../about/email.svg";

export function Footer() {
  return (
    <div className="text-[1rem] flex flex-col mt-auto justify-center items-center p-[25px] bg-bgBlue2">
      <div>
        <p className="text-center text-white">
          Copyright ©
          <a
            className="text-white hover:font-bold"
            href="https://github.com/Ezzhingy"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp; Ezzhingy &nbsp;
          </a>
          2022
        </p>
      </div>
      <div className="flex center gap-[10px]">
        <a
          className="rounded-full p-[5px] shadow-fancyBtn hover:shadow-fancyBtnHover transition-shadow duration-500 hover:cursor-pointer"
          href="https://www.linkedin.com/in/eugene-zhang-1199b820a/"
          target="_blank"
          rel="noreferrer"
          id="link"
        >
          <img className="h-[30px] w-auto" src={linkedin} alt="linkedin" />
        </a>
        <a
          className="rounded-full p-[5px] shadow-fancyBtn hover:shadow-fancyBtnHover transition-shadow duration-500 hover:cursor-pointer"
          href="https://github.com/Ezzhingy"
          target="_blank"
          rel="noreferrer"
          id="git"
        >
          <img className="h-[30px] w-auto" src={github} alt="github" />
        </a>
        <a
          className="rounded-full p-[5px] shadow-fancyBtn hover:shadow-fancyBtnHover transition-shadow duration-500 hover:cursor-pointer"
          href="mailto:e4zhang@uwaterloo.ca"
          rel="noreferrer"
          id="mail"
        >
          <img className="h-[30px] w-auto" src={email} alt="email" />
        </a>
      </div>
    </div>
  );
}
