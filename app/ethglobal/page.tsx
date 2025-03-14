import { fetchEthglobalData } from "@/functions/fetchPageData";
import Ethglobal from "@/app/ethglobal/ethglobal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ETHGlobal",
  description: "Travelling the world with ETH.",
};

export default function Page() {
  const exp = fetchEthglobalData();

  return <Ethglobal data={exp} />;
}
