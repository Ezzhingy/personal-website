import { fetchDontLeafMeData } from "@/functions/fetchPageData";
import DontLeafMe from "@/app/dontleafme/dontleafme";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Don't Leaf Me",
  description: "A computer vision tab manager to trim away distractions.",
};

export default function Page() {
  const project = fetchDontLeafMeData();

  return <DontLeafMe data={project} />;
}
