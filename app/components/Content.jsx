"use clinent";
import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function Content({ children }) {
  return (
    <ThemeProvider>
      <Header />
      <section className="mx-auto container z-10">{children}</section>
      <Footer />
    </ThemeProvider>
  );
}
