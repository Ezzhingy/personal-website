import Intro from "@/components/Intro";
import About from "@/components/About";
import Exp from "@/components/Exp";
import Projects from "@/components/Projects";
import LatestCode from "@/components/LatestCode";
import fetchRepos from "@/functions/fetchRepos";
import { userData } from "@/constants/constants";
import Seo from "@/components/Seo";

export default function Home({ repos }) {
  return (
    <>
      <Seo
        title="Eugene Zhang"
        desc="Eugene Zhang, a Computer Science student at the University of Waterloo: crafting elegant solutions to complex problems with a curious and agile mind."
        keywords="Eugene Zhang, University of Waterloo, computer science, software development, programming, coding, web development, software engineering, technology, frontend development, fullstack development, Hack the North, Ignition Hacks, SentiView, journal4me, debugging"
        path="/"
      />
      <Intro />
      <About />
      <Exp />
      <Projects />
      <LatestCode repos={repos} />
    </>
  );
}

export async function getServerSideProps() {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repos = await fetchRepos(userData, token);

  return {
    props: {
      repos,
    },
  };
}
