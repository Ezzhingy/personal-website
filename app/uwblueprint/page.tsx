import { fetchUwblueprintData } from "@/functions/fetchPageData";
import UwBlueprint from "@/app/uwblueprint/uwblueprint";

export default async function Page() {
  const exp = fetchUwblueprintData();

  return <UwBlueprint data={exp} />;
}
