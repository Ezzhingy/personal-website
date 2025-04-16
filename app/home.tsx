"use client";

import dynamic from "next/dynamic";
import Intro from "@/components/Intro";

const About = dynamic(() => import("@/components/About"));
const Blog = dynamic(() => import("@/components/Blog"));
const Projects = dynamic(() => import("@/components/Projects"));
const LatestCode = dynamic(() => import("@/components/LatestCode"));

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Blog />
      <Projects />
      <LatestCode />
    </>
  );
}
