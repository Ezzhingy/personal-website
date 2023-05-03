import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Intro() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="h-screen max-w-2xl flex justify-center pt-10 text-darkBg dark:text-lightBg">
      hello world salkdnaslkd askdsa dsak sjkd akjas ksadasskjdnkasndkasjn
    </div>
  );
}
