import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Nunito_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-headerBold",
  subsets: ["latin"],
  weight:['400']
});

const dmSans = DM_Sans({
  variable: "--font-first",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-second",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZIPSAR",
  description: "A modern web application using Next.js and custom fonts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} ${nunitoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
