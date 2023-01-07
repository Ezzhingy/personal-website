import ignition from "../exp/ignition.jpeg";
import kumon from "../exp/kumon.png";
import shad from "../exp/shad.png";

import j4me from "../projects/j4me.png";
import ttt from "../projects/tic-tac-toe.jpeg";
import todo from "../projects/todo-list.png";
import calc from "../projects/calculator.jpeg";
import etch from "../projects/sketch.png";

export const navLinks = [
  {
    id: "home",
    title: "HOME",
  },
  {
    id: "about",
    title: "ABOUT",
  },
  {
    id: "experience",
    title: "EXPERIENCE",
  },
  {
    id: "projects",
    title: "PROJECTS",
  },
];

export const expInfo = [
  {
    img: ignition,
    position: "Ignition Hacks | Co-President",
    desc: "In the summer of 2021, I organized a hackathon on artificial intelligence. I wished to create a community for new coders and aspiring developers. After months of grueling effort, my hard work finally came to fruition.",
  },
  {
    img: kumon,
    position: "Kumon | Teaching Assistant",
    desc: "I worked at Kumon as a Teaching Assistant from 2019 to 2022. This opportunity opened my eyes to the beauty of learning and improved how I convey my thinking to others.",
  },
  {
    img: shad,
    position: "SHAD 2021 | Shad Fellow",
    desc: "I am a SHAD alumni, a university-level STEAM and entrepreneurship enrichment program aiming to take youth to the next level.",
  },
];

export const projInfo = [
  {
    link: "https://github.com/Ezzhingy/journal4me-htn22",
    img: j4me,
    desc: "A Mental Health Voice-to-Mood Analysis Journalling App",
    tools:
      "React, JavaScript, HTML, CSS, FastAPI, Co:here, AssemblyAI, MongoDB",
  },
  {
    link: "https://todo-list-app-9ad7c.web.app/",
    img: todo,
    desc: "Todo list app with user authentication and data persistence",
    tools: "React, JavaScript, Firebase, HTML, CSS",
  },
  {
    link: "https://ezzhingy.github.io/tic-tac-toe/",
    img: ttt,
    desc: "Tic-Tac-Toe in Browser using Minimax",
    tools: "Javascript, HTML, CSS",
  },
  {
    link: "https://ezzhingy.github.io/calculator/",
    img: calc,
    desc: "On-Screen Calculator",
    tools: "Javascript, HTML, CSS",
  },
  {
    link: "https://ezzhingy.github.io/etch-a-sketch/",
    img: etch,
    desc: "Variation of a Sketchpad/Etch-A-Sketch",
    tools: "Javascript, HTML, CSS",
  },
];
