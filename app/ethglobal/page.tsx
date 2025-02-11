import { fetchEthglobalData } from "@/functions/fetchPageData";
import Ethglobal from "@/app/ethglobal/ethglobal";

async function getEthglobalData() {
  const data = fetchEthglobalData();
  return data;
}

export default async function Page() {
  const exp = await getEthglobalData();

  return <Ethglobal data={exp} />;
}
