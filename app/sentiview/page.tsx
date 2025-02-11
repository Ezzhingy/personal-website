import { fetchSentiviewData } from "@/functions/fetchPageData";
import Sentiview from "@/app/sentiview/sentiview";

async function getSentiviewData() {
  const data = fetchSentiviewData();
  return data;
}

export default async function Page() {
  const project = await getSentiviewData();

  return <Sentiview data={project} />;
}
