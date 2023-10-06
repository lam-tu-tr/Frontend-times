import "./globals.scss";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Lexend_Deca, Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({
  weight: ["300", "400", "600", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lam Tran | Personal Portfolio",
  description:
    "Lam Tran is a Frontend Web Dev with project experience in React, Nextjs, SASS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inconsolata.className} data-theme="light">
        {children}
      </body>
      <Analytics />
    </html>
  );
}
