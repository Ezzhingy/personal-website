import { fetchCiviliaData } from "@/functions/fetchPageData";
import Civilia from "@/app/civilia/civilia";

async function getCiviliaData() {
  const data = fetchCiviliaData();
  return data;
}

export default async function Page() {
  const exp = await getCiviliaData();

  return <Civilia data={exp} />;
}
