import { fetchHackthenorthData } from "@/functions/fetchPageData";
import HackTheNorth from "@/app/hackthenorth/hackthenorth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hack the North",
  description: "Canada's biggest hackathon.",
};

export default function Page() {
  const exp = fetchHackthenorthData();

  return <HackTheNorth data={exp} />;
}
