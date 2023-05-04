import Nav from "@/components/Nav";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Exp from "@/components/Exp";
import Projects from "@/components/Projects";
import LatestCode from "@/components/LatestCode";
import fetchRepos from "@/functions/fetchRepos";
import { userData } from "@/constants/constants";
import Footer from "@/components/Footer";

export default function Home({ repos }) {
  return (
    <div className="bg-lightBg dark:bg-darkBg">
      <Nav />
      <Intro />
      <About />
      <Exp />
      <Projects />
      <LatestCode repos={repos} />
      <Footer />
    </div>
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
