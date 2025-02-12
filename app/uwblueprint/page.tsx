import { fetchUwblueprintData } from "@/functions/fetchPageData";
import UwBlueprint from "@/app/uwblueprint/uwblueprint";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UW Blueprint",
  description: "Building tech for social good.",
};

export default function Page() {
  const exp = fetchUwblueprintData();

  return <UwBlueprint data={exp} />;
}
