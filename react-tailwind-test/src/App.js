import "./App.css";

import { Navbar } from "./components/navbar/Navbar";
import { Intro } from "./components/intro/Intro";
import { About } from "./components/about/About";
import { Exp } from "./components/exp/Exp";
import { Projects } from "./components/projects/Projects";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App font-mono box-border">
      <div className="min-h-screen bg-intro bg-cover bg-no-repeat bg-center bg-fixed bg-sky-500/50">
        <Navbar />
        <Intro />
      </div>
      <About />
      <Exp />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
