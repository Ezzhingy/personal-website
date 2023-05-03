import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="max-w-2xl mx-auto text-darkBg dark:text-lightBg">
      <div className="flex gap-8 p-10 items-center justify-between">
        <div className="flex flex-col">
          <div className="h-6 bg-darkBg dark:bg-lightBg flex items-center justify-center rounded-tl-lg rounded-tr-lg relative">
            <img
              src="/mactabs.svg"
              alt="Mac tabs"
              className="w-[70px] h-auto ml-3 absolute left-0"
            />
            <p className="hidden sm:block text-lightBg dark:text-darkBg">
              eugene — -zsh —
            </p>
          </div>
          <div className="bg-lightFill dark:bg-darkFill p-10 rounded-bl-lg rounded-br-lg font-terminal flex flex-col gap-5">
            <div>
              <p className="text-sm sm:text-lg">
                <span className="font-bold hidden sm:inline-block">
                  eugene@Eugenes-MacBook-Pro ~ %
                </span>
                <span className="font-bold sm:hidden">{">"}</span> cat intro.txt
              </p>
              <p className="text-sm tracking-tighter sm:text-lg sm:-tracking-normal">
                Heyo, Eugene here! I’m currently enrolled as a sophomore in the
                Computer Science Program at the University of Waterloo.
              </p>
            </div>
            <div>
              <p className="text-sm sm:text-lg">
                <span className="font-bold hidden sm:inline-block">
                  eugene@Eugenes-MacBook-Pro ~ %
                </span>
                <span className="font-bold sm:hidden">{">"}</span> cat fun.txt
              </p>
              <p className="text-sm tracking-tighter sm:text-lg sm:-tracking-normal">
                My main interest lies in software development, but I also have a
                budding interest in AI as well! Aside from programming, I’m a
                big anime enjoyer, gym rookie, and small-time gamer :)
              </p>
            </div>
            <div>
              <p className="text-sm sm:text-lg">
                <span className="border-r-[0.5em] border-solid border-darkBg dark:border-lightBg pr-1 animate-blink">
                  <span className="font-bold hidden sm:inline-block">
                    eugene@Eugenes-MacBook-Pro ~ %
                  </span>
                  <span className="font-bold sm:hidden">{">"}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
