import type { ReactNode } from "react";
import React from "react";
import Providers from "@/components/Providers";
import "./globals.css";
import { Metadata } from "next";
import { hubotSans } from "@/functions/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Eugene Zhang",
    default: "Eugene Zhang",
  },
  description:
    "Eugene Zhang, a Computer Science student at the University of Waterloo.",
  keywords: [
    "Eugene Zhang",
    "University of Waterloo",
    "computer science",
    "software engineering",
  ],
  metadataBase: new URL("https://eugenezhang.me"),
  openGraph: {
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1000,
        height: 259,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`bg-lightBg dark:bg-darkBg ${hubotSans.className} relative z-10`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
