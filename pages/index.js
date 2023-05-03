import Nav from "@/components/Nav";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div className="bg-lightBg dark:bg-darkBg h-screen">
      <Nav />
      <Intro />
    </div>
  );
}
