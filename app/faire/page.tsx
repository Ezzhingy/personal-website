import { fetchFaireData } from "@/functions/fetchPageData";
import Faire from "@/app/faire/faire";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faire",
  description: "The future is local.",
};

export default function Page() {
  const exp = fetchFaireData();

  return <Faire data={exp} />;
}
