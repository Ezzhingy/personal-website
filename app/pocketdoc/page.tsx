import { fetchPocketdocData } from "@/functions/fetchPageData";
import Pocketdoc from "@/app/pocketdoc/pocketdoc";

async function getPocketdocData() {
  const data = fetchPocketdocData();
  return data;
}

export default async function Page() {
  const project = await getPocketdocData();

  return <Pocketdoc data={project} />;
}
