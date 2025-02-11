import { fetchHackthenorthData } from "@/functions/fetchPageData";
import HackTheNorth from "@/app/hackthenorth/hackthenorth";

async function getHackthenorthData() {
  const data = fetchHackthenorthData();
  return data;
}

export default async function Page() {
  const exp = await getHackthenorthData();

  return <HackTheNorth data={exp} />;
}
