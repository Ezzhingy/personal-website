export function Intro() {
  return (
    <div
      className="section flex flex-col h-screen items-center justify-center"
      id="home"
    >
      <div>
        <h1 className="flex font-bold text-white sm:text-[2.5vw] text-[1.3rem] overflow-hidden border-r-[0.15em] border-solid whitespace-nowrap my-0 mx-auto tracking-wide sm:animate-typewriterBig animate-typewriterSmall">
          Heyo, Eugene here.
          <span className="sm:flex hidden">
            &nbsp;I'm a rising web developer.
          </span>
        </h1>
      </div>
      <svg
        className="arrow animate-bounce w-10 h-10 absolute bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M10,4H14V13L17.5,9.5L19.92,11.92L12,19.84L4.08,11.92L6.5,9.5L10,13V4Z" />
      </svg>
    </div>
  );
}
