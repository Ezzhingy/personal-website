import type { ReactNode } from "react";
import React from "react";
import Providers from "@/components/Providers";
import "./globals.css";
import localFont from "next/font/local";

const hubotSans = localFont({ src: "./Hubot-Sans.woff2" });

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
