import "./App.css";

import { Navbar } from "./components/navbar/Navbar";
import { Intro } from "./components/intro/Intro";
import { About } from "./components/about/About";
import { Exp } from "./components/exp/Exp";
import { Projects } from "./components/projects/Projects";
import { Footer } from "./components/footer/Footer";
import { useEffect } from "react";

function App() {
  const animateNav = () => {
    const section = document.querySelectorAll(".section");
    const nav = document.querySelectorAll("nav ul li a");
    section.forEach((i) => {
      // get data for each page
      const top = window.scrollY; // num pixels scrolled vertically
      const offset = i.offsetTop - 150; // height of page from top of viewport, -150 to animate a bit before each page begins
      const height = i.offsetHeight; // height of each page
      const id = i.getAttribute("id");

      if (top >= offset && top < offset + height) {
        nav.forEach((link) => {
          link.classList.remove("bg-navBtnBlue");
          document
            .querySelector("nav ul li a[href*=" + id + "]")
            .classList.add("bg-navBtnBlue");
        });
      }
    });
  };

  const fadeArrow = () => {
    const arrow = document.querySelector(".arrow");
    const top = window.scrollY; // num pixels scrolled vertically
    arrow.style.setProperty("opacity", "calc(1 - " + top + " / 400)"); // fades as screen scrolls down
  };

  const showNav = () => {
    const nav = document.querySelector("nav");
    nav.classList.add("block");
    nav.classList.add("animate-show");
    nav.classList.remove("hidden");
  };

  useEffect(() => {
    window.onscroll = function () {
      animateNav();
      fadeArrow();
      showNav();
    };
  });

  return (
    <div className="App font-mono">
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
