import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tinyuh",
  description:
    "tinyUH also plays economic activities as part of the show. tinyUH reconstructs the whole atmosphere of taste, visual, aroma, sound, up to the trading process, based on the long history of colonialism in Indonesia that intersects through spices, coffee, tea and clay.",
  keywords: "tinyuh.com tinyuh tiny ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
