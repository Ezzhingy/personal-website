import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const hubotSans = localFont({ src: "./Hubot-Sans.woff2" });

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className={`bg-lightBg dark:bg-darkBg ${hubotSans.className}`}>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
