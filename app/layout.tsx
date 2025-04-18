import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Config } from "tailwindcss";
//import "../frontend/src/styles/global.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTask",
  description: "A share your task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
