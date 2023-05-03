import Nav from "@/components/Nav";
import Intro from "@/components/Intro";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bg-lightBg dark:bg-darkBg">
      <Nav />
      <Intro />
      <About />
    </div>
  );
}
