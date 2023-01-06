import "./App.css";

import { Navbar } from "./components/navbar/Navbar";
import { Intro } from "./components/intro/Intro";
import { About } from "./components/about/About";
import { Exp } from "./components/exp/Exp";
import { Projects } from "./components/projects/Projects";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Exp />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
