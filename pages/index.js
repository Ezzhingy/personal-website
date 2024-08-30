import dynamic from "next/dynamic";

// may or may not increase performance
const Intro = dynamic(() => import("@/components/Intro"));
const About = dynamic(() => import("@/components/About"));
const Exp = dynamic(() => import("@/components/Exp"));
const Projects = dynamic(() => import("@/components/Projects"));
const LatestCode = dynamic(() => import("@/components/LatestCode"));
const Seo = dynamic(() => import("@/components/Seo"));

export default function Home() {
  return (
    <>
      <Seo
        title="Eugene Zhang"
        desc="Eugene Zhang, a Computer Science student at the University of Waterloo: 'build for the sake of building.'"
        keywords="Eugene Zhang, University of Waterloo, computer science, software development, programming, coding, web development, software engineering, technology, frontend development, fullstack development, Hack the North, Ignition Hacks, SentiView, journal4me, debugging, Faire"
        path="/"
      />
      <Intro />
      <About />
      <Exp />
      <Projects />
      <LatestCode />
    </>
  );
}
