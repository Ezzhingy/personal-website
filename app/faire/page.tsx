import { fetchFaireData } from "@/functions/fetchPageData";
import Faire from "@/app/faire/faire";

async function getFaireData() {
  const data = fetchFaireData();
  return data;
}

export default async function Page() {
  const exp = await getFaireData();

  return <Faire data={exp} />;
}
