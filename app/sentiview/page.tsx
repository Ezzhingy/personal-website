import { fetchSentiviewData } from "@/functions/fetchPageData";
import Sentiview from "@/app/sentiview/sentiview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sentiview",
  description: "A customer insight filtering system for businesses.",
};

export default function Page() {
  const project = fetchSentiviewData();

  return <Sentiview data={project} />;
}
