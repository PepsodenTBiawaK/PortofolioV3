import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistSerifRegular } from "geist/font/serif/regular";
import "./globals.css";
import { pageContent } from "@/data/portfolio";

export const metadata: Metadata = {
  title: pageContent.seo.title,
  description: pageContent.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${GeistSerifRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
