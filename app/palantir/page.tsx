import { fetchPalantirData } from "@/functions/fetchPageData";
import Palantir from "@/app/palantir/palantir";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palantir",
  description: "Forward deployed in London.",
};

export default function Page() {
  const exp = fetchPalantirData();

  return <Palantir data={exp} />;
}
