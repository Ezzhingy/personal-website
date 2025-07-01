import { fetchMemlaneData } from "@/functions/fetchPageData";
import Memlane from "@/app/memory/memory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memory",
  description:
    "A mobile app to help you discover and relive memories where they were made.",
};

export default function Page() {
  const project = fetchMemlaneData();

  return <Memlane data={project} />;
}
