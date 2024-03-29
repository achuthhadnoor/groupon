import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Groupon",
  description: "A simple wikipedia search and analysis tool",
};

interface IlayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<IlayoutProps>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
