import "./globals.scss";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Lexend_Deca, Inconsolata } from "next/font/google";
import Header from "./components/Header/Header";

const inconsolata = Inconsolata({
  weight: ["300", "400", "600", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Times News",
  description:
    "Bay Area news that highlights local software engineer, projects as well as current technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inconsolata.className}>
      <body data-theme="light">
        <Header />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
