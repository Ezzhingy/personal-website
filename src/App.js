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

  const animateBox = () => {
    const animate = document.querySelectorAll(".animate__animated");
    animate.forEach((i) => {
      const windowHeight = window.innerHeight; // viewport height
      const top = i.getBoundingClientRect().top; // height of page from top of viewport
      const offset = windowHeight - 150; // height of viewport, -150 to animate a bit before each page begins
      if (top < offset) {
        i.classList.add("animate__flipInY");
      }
    });
  };

  useEffect(() => {
    window.onscroll = function () {
      animateNav();
      fadeArrow();
      showNav();
      animateBox();
    };
  });

  return (
    <div className="App font-poppins">
      <div className="min-h-screen bg-intro bg-cover bg-no-repeat bg-center bg-fixed">
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

// bouncing animation for each section?
// remember to add section to projects
// fix on mobile
