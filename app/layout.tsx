import type { ReactNode } from "react";
import React from "react";
import Providers from "@/components/Providers";
import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";

const hubotSans = localFont({ src: "./Hubot-Sans.woff2" });

export const metadata: Metadata = {
  title: {
    template: "%s | Eugene Zhang",
    default: "Eugene Zhang",
  },
  description:
    "Eugene Zhang, a Computer Science student at the University of Waterloo: 'build for the sake of building.'",
  keywords: [
    "Eugene Zhang",
    "University of Waterloo",
    "computer science",
    "software engineering",
  ],
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
