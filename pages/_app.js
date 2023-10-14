import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const hubotSans = localFont({ src: "./Hubot-Sans.woff2" });

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main
        className={`bg-lightBg dark:bg-darkBg ${hubotSans.className} relative z-10`}
      >
        <Nav />
        <Component {...pageProps} />
        <Footer />
        <Analytics />
      </main>
    </ThemeProvider>
  );
}
