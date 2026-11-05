import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistSerifRegular } from "geist/font/serif/regular";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fadilah Aprianto — UI/UX Designer & Developer",
  description:
    "Pilihan karya UI/UX dan pengembangan web oleh Fadilah Aprianto. Merancang pengalaman digital yang jelas, berguna, dan dekat dengan penggunanya.",
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
