import { fetchDatabricksData } from "@/functions/fetchPageData";
import Databricks from "@/app/databricks/databricks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Databricks",
  description: "Cache hits (and misses) at Databricks.",
};

export default function Page() {
  const exp = fetchDatabricksData();

  return <Databricks data={exp} />;
}
