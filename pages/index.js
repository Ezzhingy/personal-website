import Nav from "@/components/Nav";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Exp from "@/components/Exp";

export default function Home() {
  return (
    <div className="bg-lightBg dark:bg-darkBg">
      <Nav />
      <Intro />
      <About />
      <Exp />
    </div>
  );
}
