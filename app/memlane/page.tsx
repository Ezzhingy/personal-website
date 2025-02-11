import { fetchMemlaneData } from "@/functions/fetchPageData";
import Memlane from "@/app/memlane/memlane";

async function getMemlaneData() {
  const data = fetchMemlaneData();
  return data;
}

export default async function Page() {
  const project = await getMemlaneData();

  return <Memlane data={project} />;
}
