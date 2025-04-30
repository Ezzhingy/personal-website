"use client";

import dynamic from "next/dynamic";
import Intro from "@/components/Intro";

import { ClientAnchorScroll } from "@/components/ClientAnchorScroll";

const About = dynamic(() => import("@/components/About"));
const Blog = dynamic(() => import("@/components/Blog"));
const Projects = dynamic(() => import("@/components/Projects"));
const LatestCode = dynamic(() => import("@/components/LatestCode"));

export default function Home() {
  return (
    <>
      <ClientAnchorScroll />
      <Intro />
      <About />
      <Blog />
      <Projects />
      <LatestCode />
    </>
  );
}
