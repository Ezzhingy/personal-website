import { fetchJournal4meData } from "@/functions/fetchPageData";
import Journal4me from "@/app/journal4me/journal4me";

async function getJournal4meData() {
  const data = fetchJournal4meData();
  return data;
}

export default async function Page() {
  const project = await getJournal4meData();

  return <Journal4me data={project} />;
}
