import { fetchJournal4meData } from "@/functions/fetchPageData";
import Journal4me from "@/app/journal4me/journal4me";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "journal4me",
  description: "A mental health voice-to-mood analysis journaling app.",
};

export default function Page() {
  const project = fetchJournal4meData();

  return <Journal4me data={project} />;
}
