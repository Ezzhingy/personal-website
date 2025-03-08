import { fetchCiviliaData } from "@/functions/fetchPageData";
import Civilia from "@/app/civilia/civilia";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Civilia",
  description: "First co-op jitters.",
};

export default function Page() {
  const exp = fetchCiviliaData();

  return <Civilia data={exp} />;
}
