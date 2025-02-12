import { fetchCiviliaData } from "@/functions/fetchPageData";
import Civilia from "@/app/civilia/civilia";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Civilia",
  description: "Crafting tools to transform urban mobility.",
};

export default function Page() {
  const exp = fetchCiviliaData();

  return <Civilia data={exp} />;
}
