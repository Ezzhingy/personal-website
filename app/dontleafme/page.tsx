import { fetchDontLeafMeData } from "@/functions/fetchPageData";
import DontLeafMe from "@/app/dontleafme/dontleafme";

async function getDontleafmeData() {
  const data = fetchDontLeafMeData();
  return data;
}

export default async function Page() {
  const project = await getDontleafmeData();

  return <DontLeafMe data={project} />;
}
