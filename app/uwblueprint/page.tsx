import { fetchUwblueprintData } from "@/functions/fetchPageData";
import UwBlueprint from "@/app/uwblueprint/uwblueprint";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UW Blueprint",
  description: "Helping out the Children's Aid Society.",
};

export default function Page() {
  const exp = fetchUwblueprintData();

  return <UwBlueprint data={exp} />;
}
