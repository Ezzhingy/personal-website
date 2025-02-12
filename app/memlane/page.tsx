import { fetchMemlaneData } from "@/functions/fetchPageData";
import Memlane from "@/app/memlane/memlane";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memlane",
  description:
    "A mobile app to help you discover and relive memories where they were made.",
};

export default function Page() {
  const project = fetchMemlaneData();

  return <Memlane data={project} />;
}
