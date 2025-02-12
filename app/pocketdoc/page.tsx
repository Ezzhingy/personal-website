import { fetchPocketdocData } from "@/functions/fetchPageData";
import Pocketdoc from "@/app/pocketdoc/pocketdoc";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pocketdoc",
  description:
    "An automated AI agent solution to facilitate the appointment process.",
};

export default function Page() {
  const project = fetchPocketdocData();

  return <Pocketdoc data={project} />;
}
