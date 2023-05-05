import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Seo
        title="Eugene Zhang"
        desc="Eugene Zhang, a Computer Science student at the University of Waterloo: crafting elegant solutions to complex problems with a curious and agile mind."
        keywords="Eugene Zhang, University of Waterloo, computer science, software development, programming, coding, web development, software engineering, technology, frontend development, fullstack development, Hack the North, Ignition Hacks, SentiView, journal4me, debugging"
        path="/"
      />
      <main className="bg-lightBg dark:bg-darkBg">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
