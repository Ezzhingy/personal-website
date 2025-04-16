"use client";

import React, { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Nav />
      {children}
      <Footer />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}
